import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Login from "../src/pages/Login.tsx";
import { describe, expect, test } from "vitest";
import { UsuarioService } from "../src/API/service/UsuarioService.ts";
import { UsuarioServiceProvider } from '../src/context/UsuarioServiceContext/UsuarioServiceProvider'; 

describe('Login', () =>{

    test('Muestra errores al enviar formulario vacio', async () => {
        render(
            <UsuarioServiceProvider>
                <SesionProvider>
                    <Login/>
                </SesionProvider>
            </UsuarioServiceProvider>
        );
        const boton = screen.getByRole('button', {name: 'Iniciar Sesion'})
        fireEvent.click(boton)
        await waitFor(() => {
            expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('El correo es obligatorio'))
            expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('La contraseña es obligatoria'))
        })
    })

    

})