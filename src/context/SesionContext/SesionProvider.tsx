import { useState, type ReactNode } from "react";
import { SesionContext } from "./UseSesion";
import { Sesion } from "../../model/Sesion";
import type { Usuario } from "../../model/Usuario";


export function SesionProvider({ children }: { children: ReactNode })
{
    const sesionActiva = new Sesion();

    const [sesion, setSesion] = useState(sesionActiva);

    const sesionLogin = (usuario: Usuario) => 
    {
        const nuevaSesion = new Sesion();
        nuevaSesion.setUsuarioActivo(usuario);
        setSesion(nuevaSesion);
    };

    const sesionLogout = () => setSesion(new Sesion());

    return (
        <SesionContext.Provider value={ { sesion, sesionLogin, sesionLogout } }>
            {children}
        </SesionContext.Provider>
    );
}