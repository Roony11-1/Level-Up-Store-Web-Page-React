import{render,screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import{describe,expect,test,vi} from "vitest";
import Registro from "../src/pages/Registro"

describe("Testing del formulario de Registro", () => {
    test("Renderiza correctamente la página", () => {
      render(<Registro />);
      const titulo = screen.getByRole("heading", { name: /Página de Registro/i });
      expect(titulo).toBeInTheDocument();
    });
  
    test("Muestra errores si el usuario envía el formulario vacío", async () => {
      render(<Registro />);
      const usuario = userEvent.setup();
  
      const boton = screen.getByRole("button", { name: /Registrarse/i });
      await usuario.click(boton);
  
      // Como usamos alert(), debemos mockearla
      const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
      await usuario.click(boton);
  
      expect(alertMock).toHaveBeenCalled();
      expect(alertMock.mock.calls[0][0]).toMatch(/El nombre de usuario es obligatorio/);
      alertMock.mockRestore();
    });
  
    test("Envía correctamente si todos los campos son válidos", async () => {
      render(<Registro />);
      const usuario = userEvent.setup();
  
      // Seleccionamos inputs
      const nombre = screen.getByLabelText(/Nombre de Usuario/i);
      const email = screen.getByLabelText(/Correo/i);
      const confirmarEmail = screen.getByLabelText(/Confirmar Correo/i);
      const contraseña = screen.getByLabelText(/Contraseña/i);
      const confirmarContraseña = screen.getByLabelText(/Confirmar Contraseña/i);
      const region = screen.getByLabelText(/Región/i);
      const comuna = screen.getByLabelText(/Comuna/i);
      const boton = screen.getByRole("button", { name: /Registrarse/i });
  
      // Ingresamos datos válidos
      await usuario.type(nombre, "juanperez");
      await usuario.type(email, "juan@test.com");
      await usuario.type(confirmarEmail, "juan@test.com");
      await usuario.type(contraseña, "123456");
      await usuario.type(confirmarContraseña, "123456");
      await usuario.selectOptions(region, "Metropolitana");
      await usuario.selectOptions(comuna, "Santiago");
  
      // Mockeamos alert()
      const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
  
      await usuario.click(boton);
  
      expect(alertMock).toHaveBeenCalledWith("Usuario registrado con éxito!");
      alertMock.mockRestore();
    });
  });