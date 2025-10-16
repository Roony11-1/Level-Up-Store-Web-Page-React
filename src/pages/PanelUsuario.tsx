import { ProfilePhoto } from "../components/ProfilePhoto/ProfilePhoto";
import { LoginSecurity } from "../components/Seguridad/LoginSecurity/LoginSecurity";
import { useSesion } from "../context/SesionContext/UseSesion";

export function PanelUsuario()
{
    const { sesion } = useSesion();

    const usuarioActivo = sesion.getUsuarioActivo();

    return (
        <LoginSecurity>
            {usuarioActivo && (
                <>
                    <div>
                        <ProfilePhoto profilePhoto={usuarioActivo.getProfilePhoto()} />
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
                </>
            )}
        </LoginSecurity>
    );
}