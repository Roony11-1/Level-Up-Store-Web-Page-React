import { useState, type ReactNode } from "react";
import { SesionContext } from "./UseSesion";
import { Sesion } from "../../model/Sesion";
import { Usuario } from "../../model/Usuario";

export function SesionProvider({ children }: { children: ReactNode }) 
{
    const [sesion, setSesion] = useState(() => 
    {
        const datosGuardados = localStorage.getItem("sesion");
        if (datosGuardados) 
        {
            const datos = JSON.parse(datosGuardados);

            const sesionInicial = new Sesion();

            if (datos.usuarioActivo) 
            {
                const u = new Usuario();
                u.setEmail(datos.usuarioActivo.email);
                u.setNombreUsuario(datos.usuarioActivo.nombre);
                u.setTelefono(datos.usuarioActivo.telefono);
                u.setRegion(datos.usuarioActivo.region);
                u.setComuna(datos.usuarioActivo.comuna);
                u.setTipo(datos.usuarioActivo.tipo);
                u.setProfilePhoto(datos.usuarioActivo.profilePhoto);

                sesionInicial.setUsuarioActivo(u);
            }

            return sesionInicial;
        }

        return new Sesion();
    });

    const sesionLogin = (usuario: Usuario) => 
    {
        const nuevaSesion = new Sesion();
        nuevaSesion.setUsuarioActivo(usuario);
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
