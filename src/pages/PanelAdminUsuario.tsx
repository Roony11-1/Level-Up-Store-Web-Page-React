import { useEffect, useState } from "react";
import "../assets/css/PanelAdmin/paneladmin.css"

import { UsuarioApiService } from "../services/UsuarioApiService";

import { Usuario } from "../model/Usuario";
import { LoginSecurity } from "../components/Seguridad/LoginSecurity/LoginSecurity";
import { AdminSecurity } from "../components/Seguridad/AdminSecurity/AdminSecurity";
import { DisplayUser } from "../components/DisplayUser/DisplayUser";
import { Boton } from "../components/Boton/Boton";
import { useSesion } from "../context/SesionContext/UseSesion";

export function PanelAdminUsuario()
{
    const { sesion } = useSesion();
    // Carguemos los usuarios
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [loading, setLoading] = useState(true);

    const usuarioService = new UsuarioApiService();

    useEffect(() => 
    {
        const fetchUsuarios = async () => 
        {
            const datos = await usuarioService.fetchAll();
            setUsuarios(datos);
            setLoading(false)
        };

        fetchUsuarios();
    }, [usuarios]);

    const clickAddUserRandom = async (e: React.MouseEvent<HTMLButtonElement>) => 
    {
        e.preventDefault();

        const randomName = "Usuario" + Math.floor(Math.random() * 1000);

        const usuario = new Usuario()
            .setNombreUsuario(randomName)
            .setEmail(randomName.toLowerCase() + "@mail.com")
            .setContraseña("123456");

        await usuarioService.save(usuario);
    };

    const clickBorrar = async (id: number) =>
    {
        if (sesion.getIdUsuarioActivo() === id)
        {
            alert("No puedes borrar tu misma sesion crack ;)")
            return
        }

        usuarioService.deleteById(id);
    }

    if (loading) return <p>Cargando usuarios...</p>;

    return(
        <LoginSecurity>
            <AdminSecurity>
                <div className="contenedor-admin">
                    <Boton
                        onClick={clickAddUserRandom}>
                        Agregar Usuario
                    </Boton>
                    <div className="usuarios">
                        {usuarios.map((u: Usuario) => (
                            <div className="usuario">
                                <DisplayUser usuario={u} />
                                <Boton onClick={() => clickBorrar(u.getId())}>Borrar</Boton>
                                <Boton>Editar</Boton>
                            </div>
                        ))}
                    </div>
                </div>
            </AdminSecurity>
        </LoginSecurity>
    );
}