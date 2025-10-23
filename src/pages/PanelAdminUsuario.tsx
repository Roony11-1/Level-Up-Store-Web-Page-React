import { useEffect, useState } from "react";
import "../assets/css/PanelAdmin/paneladmin.css"

import { Usuario } from "../model/Usuario";
import { LoginSecurity } from "../components/Seguridad/LoginSecurity/LoginSecurity";
import { AdminSecurity } from "../components/Seguridad/AdminSecurity/AdminSecurity";
import { DisplayUser, EditUser } from "../components/DisplayUser/DisplayUser";
import { Boton } from "../components/Boton/Boton";
import { useSesion } from "../context/SesionContext/UseSesion";
import { useUsuarioService } from "../context/UsuarioServiceContext/UseUsuarioService";

export function PanelAdminUsuario()
{
    const { sesion } = useSesion();
    // Carguemos los usuarios
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [loading, setLoading] = useState(true);
    const [editUserId, setEditUserId] = useState<number | null>(null);

    const { usuarioService } = useUsuarioService();

    const fetchUsuarios = async () => 
    {
        const datos = await usuarioService.fetchAll();
        setUsuarios(datos);
        setLoading(false);
    };

    useEffect(() => 
    {
        fetchUsuarios();
    }, []);

    const clickAddUserRandom = async (e: React.MouseEvent<HTMLButtonElement>) => 
    {
        e.preventDefault();

        const randomName = "Usuario" + Math.floor(Math.random() * 1000);

        const usuario = new Usuario()
            .setNombreUsuario(randomName)
            .setEmail(randomName.toLowerCase() + "@mail.com")
            .setContraseña("123456");

        const resultado = await usuarioService.save(usuario);
        await fetchUsuarios();

        alert(resultado.message);
    };

    const clickBorrar = async (id: number) =>
    {
        if (sesion.getIdUsuarioActivo() === id)
        {
            alert("No puedes borrar tu misma sesion crack ;)")
            return
        }

        const confirmar = confirm("¿Estás seguro de que quieres borrar este usuario?");
        if (!confirmar)
            return;

        const resultado = await usuarioService.deleteById(id);
        await fetchUsuarios();

        alert(resultado.message);
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
                        <div key={u.getId()} className="usuario">
                            {editUserId === u.getId() ? (
                                <EditUser usuario={u} onCloseEdit={() => setEditUserId(null)} />
                            ) : (
                                <DisplayUser usuario={u} />
                            )}

                            <Boton className="boton-admin-borrar" onClick={() => clickBorrar(u.getId())}>
                                Borrar
                            </Boton>

                            <Boton
                                className="boton-admin-editar"
                                onClick={() => setEditUserId(editUserId === u.getId() ? null : u.getId())}>
                                    {editUserId === u.getId() ? "Cancelar" : "Editar"}
                            </Boton>
                        </div>
                    ))}
                    </div>
                </div>
            </AdminSecurity>
        </LoginSecurity>
    );
}