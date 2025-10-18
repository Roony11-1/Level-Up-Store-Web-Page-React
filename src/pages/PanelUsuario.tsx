import { useEffect, useState } from "react";
import { ProfilePhoto } from "../components/ProfilePhoto/ProfilePhoto";
import { LoginSecurity } from "../components/Seguridad/LoginSecurity/LoginSecurity";
import { useSesion } from "../context/SesionContext/UseSesion";
import type { Usuario } from "../model/Usuario";
import { UsuarioApiService } from "../services/UsuarioApiService";

export function PanelUsuario()
{
    const { sesion } = useSesion();
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [loading, setLoading] = useState(true);

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

            setLoading(false)
        };

        fetchUsuario();
    }, []);

    if (loading) return <p>Cargando...</p>;

    return (
        <LoginSecurity>
            {usuario && (
                <>
                    <div>
                        <ProfilePhoto profilePhoto={usuario.getProfilePhoto()} />
                    </div>

                    <div>
                        <p><strong>Nombre de Usuario:</strong> {usuario.getNombreUsuario() || "No proporcionado"}</p>
                        <p><strong>Email:</strong> {usuario.getEmail() || "No proporcionado"}</p>
                        <p><strong>Contraseña:</strong> {usuario.getContraseña() || "No proporcionado"}</p>
                        <p><strong>Teléfono:</strong> {usuario.getTelefono() || "No proporcionado"}</p>
                        <p><strong>Región:</strong> {usuario.getRegion() || "No proporcionado"}</p>
                        <p><strong>Comuna:</strong> {usuario.getComuna() || "No proporcionado"}</p>
                    </div>
                </>
            )}
        </LoginSecurity>
    );
}