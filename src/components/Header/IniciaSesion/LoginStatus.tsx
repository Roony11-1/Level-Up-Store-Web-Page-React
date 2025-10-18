import { Link } from "react-router-dom"
import "../../../assets/css/Header/LoginStatus/loginstatus.css"
import { useSesion } from "../../../context/SesionContext/UseSesion"
import { Boton } from "../../Boton/Boton";
import { ProfilePhoto } from "../../ProfilePhoto/ProfilePhoto";
import { UsuarioApiService } from "../../../services/UsuarioApiService";
import { useEffect, useState } from "react";
import type { Usuario } from "../../../model/Usuario";

export function LoginStatus()
{
    const { sesion, sesionLogout } = useSesion();
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    const usuarioService = new UsuarioApiService();

    useEffect(() => 
    {
        const fetchUsuario = async () => 
        {
            const idUsuarioActivo = sesion.getIdUsuarioActivo();

            if (idUsuarioActivo !== null)
            {
                const datos = await usuarioService.fetchById(idUsuarioActivo);
                setUsuario(datos);
            }
            else
                setUsuario(null);
        };

        fetchUsuario();
    }, [sesion]);

    // No esta Logeado
    if (!usuario)
        return(
            <div className="sesion-header">
                <div>
                    <h2>Hola!</h2>
                    <p>No estás usando una cuenta</p>
                </div>
                <div className="sesion-panel"> 
                    <Link to={'/login'}><h3>Iniciar Sesión</h3></Link> 
                    <Link to={'/registrarse'}><h3>Registrarse</h3></Link> 
                </div>
            </div>
        );

    // Logeado
    return(
        <div className="sesion-header">
            <div>
                <ProfilePhoto
                    profilePhoto={usuario.getProfilePhoto()} />
            </div>
            <div className="sesion-panel">
                {/* Atajos a paneles de administración */}
                {usuario.isAdmin() &&
                    <div>
                        <h2>Panel de Administración</h2>
                        <Link to={'/admin-usuario'}><h3>Administrar Usuarios</h3></Link> 
                        <hr />
                    </div>
                }
                <h2>Panel de Usuario</h2>
                <Link to={'/panel-usuario'}><h3>Ver Perfil</h3></Link>

                <hr />
                <Boton
                    onClick={sesionLogout}>
                    Cerrar Sesión
                </Boton>
            </div>
        </div>
    );
}
