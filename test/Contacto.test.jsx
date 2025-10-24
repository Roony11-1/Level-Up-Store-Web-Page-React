import{render,screen, fireEvent} from "@testing-library/react";
import Contacto from "../src/pages/Contacto";
import userEvent from "@testing-library/user-event";
import{describe,expect,test} from "vitest";
import React from "react";

describe('Contacto', () => {
    test('renderiza y funciona el formulario correctamente', () => {
      render(<Contacto />)
  
      
      const inputNombre = screen.getByPlaceholderText(/nombre/i)
      const inputCorreo = screen.getByPlaceholderText(/correo/i)
      const inputMensaje = screen.getByPlaceholderText(/mensaje/i)
      const botonEnviar = screen.getByRole('button', { name: /enviar/i })
  
      
      fireEvent.change(inputNombre, { target: { value: 'Juan' } })
      fireEvent.change(inputCorreo, { target: { value: 'juan@mail.com' } })
      fireEvent.change(inputMensaje, { target: { value: 'Hola, este es un mensaje' } })
  
      
      fireEvent.click(botonEnviar)
  
      
      const alerta = screen.getByRole('alert')
      expect(alerta).toHaveTextContent('¡Gracias por tu mensaje Juan, de igual forma no haremos caso!')
    })

    function findInput(container, name) {
      return (
        screen.queryByLabelText(new RegExp(name, "i")) ||
        container.querySelector(`input[name="${name}"], textarea[name="${name}"]`)
      );
    }

    test("permite ingresar texto en nombre, correo y mensaje", async () => {
      const { container } = render(<Contacto />);
      const user = userEvent.setup();

      const nombreInput = findInput(container, "nombre");
      const correoInput = findInput(container, "correo");
      const mensajeInput = findInput(container, "mensaje");

      await user.type(nombreInput, "Victor");
      await user.type(correoInput, "victor@example.com");
      await user.type(mensajeInput, "Hola desde los tests");

      expect(nombreInput.value).toBe("Victor");
      expect(correoInput.value).toBe("victor@example.com");
      expect(mensajeInput.value).toBe("Hola desde los tests");
    });

    test("no muestra la respuesta antes de enviar", () => {
      render(<Contacto />);
      const alert = screen.queryByRole("alert");
      expect(alert).toBeNull();
    });
  })
