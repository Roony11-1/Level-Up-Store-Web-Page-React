import { useState, type ReactNode } from "react";
import { SesionContext } from "./UseSesion";
import { Sesion } from "../../model/Sesion";

export function SesionProvider({ children }: { children: ReactNode }) 
{
    const [sesion, setSesion] = useState(() => 
    {
        const datosGuardados = localStorage.getItem("sesion");
        if (datosGuardados) 
        {
            const datos = JSON.parse(datosGuardados);

            const sesionInicial = new Sesion();

            if (datos.idUsuarioActivo != null)
                sesionInicial.setIdUsuarioActivo(datos.idUsuarioActivo);

            return sesionInicial;
        }

        return new Sesion();
    });

    const sesionLogin = (id: number) => 
    {
        const nuevaSesion = new Sesion();
        nuevaSesion.setIdUsuarioActivo(id);
        localStorage.setItem("sesion", JSON.stringify(nuevaSesion));
        setSesion(nuevaSesion);
    };

    const sesionLogout = () => 
    {
        localStorage.removeItem("sesion");
        setSesion(new Sesion());
    };

    return (
        <SesionContext.Provider value={{ sesion, sesionLogin, sesionLogout }}>
            {children}
        </SesionContext.Provider>
    );
}
