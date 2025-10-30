import { expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { Login } from "../src/pages/Login";
import { useUsuarioService } from "../src/context/UsuarioServiceContext/UseUsuarioService";
import { useSesion } from "../src/context/SesionContext/UseSesion";
import { MemoryRouter } from "react-router-dom";
import { describe } from "node:test";
import { LoginRequest } from "../src/model/LoginRequest";
import userEvent from "@testing-library/user-event";

vi.mock("../src/context/UsuarioServiceContext/UseUsuarioService", () => ({
    useUsuarioService: vi.fn(),
  }));

beforeEach(() => 
{
    useUsuarioService.mockReturnValue({
        usuarioService: 
        {
            login: vi.fn().mockResolvedValue({
                success: true,
                message: "Inicio de sesión exitoso",
                usuario: 
                {
                    id: 1,
                    nombreUsuario: "juan123",
                    email: "juan@ejemplo.com",
                    contraseña: "123456",
                    telefono: "123456789",
                    region: "Santiago",
                    comuna: "Providencia",
                    tipo: "Admin",
                    profilePhoto: "profile.jpg",
                }
            }),
            login: vi.fn().mockResolvedValue({
                success: false,
                message: "Email o contraseña vacíos"
            }),
            login: vi.fn().mockResolvedValue({
                success: false,
                message: "Correo no encontrado"
            }),
            login: vi.fn().mockResolvedValue({
                success: false,
                message: "Contraseña incorrecta"
            })
        }});

        vi.spyOn(window, "alert").mockImplementation(() => {});
});

  vi.mock("../src/context/SesionContext/UseSesion.tsx", () => ({
    useSesion: vi.fn(() => ({
      sesion: { getIdUsuarioActivo: () => null },
      setSesion: vi.fn(),
      cerrarSesion: vi.fn(),
    })),
  }));

const renderConRouter = (ui) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe("Probaremos el formulario de login", () => {
  test("Renderiza correctamente el componente", () => {
    renderConRouter(<Login />);

    // Verificar que los elementos clave se rendericen correctamente
    expect(screen.getByPlaceholderText(/Correo Electrónico/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Contraseña/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Iniciar Sesión/i })).toBeInTheDocument();
  });
});

describe("Probar el envio de el login", () => {
    test("Login exitoso", async () => {
        const mockLoginRequest = new LoginRequest('juan@ejemplo.com', '123456');

        renderConRouter(<Login />);
        const user = userEvent.setup();

        const email = screen.getByPlaceholderText(/Correo Electrónico/i);
        const password = screen.getByPlaceholderText(/Contraseña/i);
        const button = screen.getByRole("button", { name: /Iniciar Sesión/i });

        await user.type(email, 'juan@ejemplo.com');
        await user.type(password, '123456');

        expect(email).toHaveValue('juan@ejemplo.com');
        expect(password).toHaveValue('123456');

        await user.click(button);

        await waitFor(() => {expect(window.alert).toHaveBeenCalledWith("Inicio de sesión exitoso")});
    });
});
