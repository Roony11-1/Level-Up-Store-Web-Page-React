import { useEffect, useState } from "react";
import "../assets/css/PanelAdmin/paneladmin.css"
import type { Usuario } from "../model/Usuario";
import { UsuarioApiService } from "../services/UsuarioApiService";
import { DisplayUserTable } from "../components/DisplayUser/DisplayUser";
import { useSesion } from "../context/SesionContext/SesionContext";

export function PanelAdminUsuario()
{
    const { sesion } = useSesion();

    const usuarioAdmin = sesion.getUsuarioActivo()?.isAdmin();

    if (!usuarioAdmin)
        return(
            <h1>No tienes permiso de ver esto</h1>
        );
    // Carguemos los usuarios
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const usuarioService = new UsuarioApiService();

    useEffect(() => 
    {
        const fetchUsuarios = async () => 
        {
            const datos = await usuarioService.fetchAll();
            setUsuarios(datos);
        };

        fetchUsuarios();
    }, []);

    return(
        <div className="contenedor-admin">
            <DisplayUserTable usuarios={usuarios} />
        </div>
    );
}