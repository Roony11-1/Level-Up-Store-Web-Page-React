import{render,screen} from "@testing-library/react";
import Contacto from "../src/pages/Contacto";
import userEvent from "@testing-library/user-event";
import{describe,expect,test} from "vitest";
describe('testin de formulario',()=>{
    test('render',()=>{
        render(<Contacto/>)
        const titulo=screen
        .getByRole('heading',{name:/FoRMULARIO DE CONTACTO/})
        expect(titulo).toBeInTheDocument()
    });
    test('simular ingreso',async()=>{
        render(<Contacto/>)
        const usuario=userEvent.setup()

        const mensaje=screen.getByRole('textbox',{name:/mensaje:/})
        const nombre=screen.getByRole('textbox',{name:/Nombre:/})
        const boton=screen.getByRole('button',{name:/enviar:/})

        await usuario.type(nombre,'juan')
        await usuario.type(mensaje,'hola juan')
        await usuario.click(boton)

        const alerta=screen.getByRole('alert')
        expect(alerta).toHaveTextContent(/hola juanito/)

    })
}
)
