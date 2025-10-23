import{render,screen, fireEvent} from "@testing-library/react";
import Contacto from "../src/pages/Contacto";
import userEvent from "@testing-library/user-event";
import{describe,expect,test} from "vitest";

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
  })
