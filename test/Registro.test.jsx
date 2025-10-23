import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi, beforeEach } from "vitest";
import { Registro } from "../src/pages/Registro";
import { useUsuarioService } from "../src/context/UsuarioServiceContext/UseUsuarioService";
import { UbicacionService } from "../src/utilities/comunas-regiones.json";

//  Mocks necesarios
vi.mock("../src/context/UsuarioServiceContext/UseUsuarioService", () => ({
  useUsuarioService: vi.fn(),
}));

vi.mock("../src/utilities/comunas-regiones.json", () => ({
  UbicacionService: {
    getRegiones: vi.fn(() => ["Región 1", "Región 2"]),
    getComunas: vi.fn((region) =>
      region === "Región 1" ? ["Comuna A", "Comuna B"] : ["Comuna C"]
    ),
  },
}));

//  Setup antes de cada test
beforeEach(() => {
  useUsuarioService.mockReturnValue({
    usuarioService: {
      save: vi.fn().mockResolvedValue({
        success: true,
        message: "Usuario registrado correctamente",
      }),
    },
  });
  vi.spyOn(window, "alert").mockImplementation(() => {}); // evitar alert real
});

describe("Tests del formulario de Registro", () => {
  test("Renderiza el título correctamente", () => {
    render(<Registro />);
    const titulo = screen.getByRole("heading", { name: /página de registro/i });
    expect(titulo).toBeInTheDocument();
  });

  test("Carga regiones al renderizar", () => {
    render(<Registro />);
    const selectRegion = screen.getByLabelText(/región/i);
    expect(selectRegion).toBeInTheDocument();
    expect(UbicacionService.getRegiones).toHaveBeenCalled();
  });

  test("Simula ingreso de datos y envío exitoso", async () => {
    render(<Registro />);
    const usuario = userEvent.setup();

    const inputNombre = screen.getByLabelText(/nombre de usuario/i);
    const inputEmail = screen.getByLabelText(/correo/i);
    const inputConfirmarEmail = screen.getByLabelText(/confirmar correo/i);
    const inputPass = screen.getByLabelText(/contraseña/i);
    const inputConfirmarPass = screen.getByLabelText(/confirmar contraseña/i);
    const selectRegion = screen.getByLabelText(/región/i);
    const selectComuna = screen.getByLabelText(/comuna/i);
    const boton = screen.getByRole("button", { name: /registrarse/i });

    await usuario.type(inputNombre, "Juanito");
    await usuario.type(inputEmail, "juan@test.com");
    await usuario.type(inputConfirmarEmail, "juan@test.com");
    await usuario.type(inputPass, "abcdef");
    await usuario.type(inputConfirmarPass, "abcdef");
    await usuario.selectOptions(selectRegion, "Región 1");

    // Después de seleccionar región, debe cargar comunas
    await waitFor(() => {
      expect(UbicacionService.getComunas).toHaveBeenCalledWith("Región 1");
    });
    await usuario.selectOptions(selectComuna, "Comuna A");

    await usuario.click(boton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Usuario registrado correctamente");
    });
  });

  test("Muestra errores si faltan campos obligatorios", async () => {
    render(<Registro />);
    const usuario = userEvent.setup();

    const boton = screen.getByRole("button", { name: /registrarse/i });
    await usuario.click(boton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalled();
      const msg = window.alert.mock.calls[0][0];
      expect(msg).toContain("El nombre de usuario es obligatorio");
      expect(msg).toContain("Debes seleccionar una región");
    });
  });
});
