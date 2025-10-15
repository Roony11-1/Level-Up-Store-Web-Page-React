import { ProfilePhoto } from "../components/ProfilePhoto/ProfilePhoto";
import { useSesion } from "../context/SesionContext/SesionContext";

export function PanelUsuario()
{
    const { sesion } = useSesion();

    const usuarioActivo = sesion.getUsuarioActivo();

    if (!usuarioActivo)
        return <h1>No estás logeado</h1>;

    return (
        <div>
            <div>
                <ProfilePhoto profilePhoto={usuarioActivo.getProfilePhoto()} />
                <h2>{usuarioActivo.getNombreUsuario() || "Usuario"}</h2>
            </div>

            <div>
                <p><strong>Email:</strong> {usuarioActivo.getEmail() || "No proporcionado"}</p>
                <p><strong>Teléfono:</strong> {usuarioActivo.getTelefono() || "No proporcionado"}</p>
                <p><strong>Región:</strong> {usuarioActivo.getRegion() || "No proporcionado"}</p>
                <p><strong>Comuna:</strong> {usuarioActivo.getComuna() || "No proporcionado"}</p>
                <p><strong>Tipo de usuario:</strong> {usuarioActivo.getTipo()}</p>
            </div>

            <div>
                <h1>Carritos</h1>
                <div>
                    <h2>Ninguno</h2>
                </div>
            </div>
        </div>
    );
}