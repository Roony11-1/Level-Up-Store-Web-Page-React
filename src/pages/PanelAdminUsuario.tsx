import { useEffect, useState } from "react";
import "../assets/css/PanelAdmin/paneladmin.css"

import { UsuarioApiService } from "../services/UsuarioApiService";
import { DisplayUserTable } from "../components/DisplayUser/DisplayUser";

import type { Usuario } from "../model/Usuario";
import { LoginSecurity } from "../components/Seguridad/LoginSecurity/LoginSecurity";
import { AdminSecurity } from "../components/Seguridad/AdminSecurity/AdminSecurity";

export function PanelAdminUsuario()
{
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
        <LoginSecurity>
            <AdminSecurity>
                <div className="contenedor-admin">
                    <DisplayUserTable usuarios={usuarios} />
                </div>
            </AdminSecurity>
        </LoginSecurity>
    );
}