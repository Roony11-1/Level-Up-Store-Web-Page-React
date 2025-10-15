import { ProfilePhoto } from "../components/ProfilePhoto/ProfilePhoto";
import { LoginSecurity } from "../components/Seguridad/LoginSecurity/LoginSecurity";
import { useSesion } from "../context/SesionContext/UseSesion";
import { useState } from "react";

export function PanelUsuario()
{
    const { sesion } = useSesion();

    const usuarioActivo = sesion.getUsuarioActivo();

    const imagen = !usuarioActivo ? "/profilePhotos/nofoto.jpg" : usuarioActivo.getProfilePhoto();

    const [preview, setPreview] = useState<string>(imagen);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => 
    {
        const foto = e.target.files?.[0];
        if (foto) 
        {
            const url = URL.createObjectURL(foto);
            setPreview(url);
        }
    };


    return (
        <LoginSecurity>
            {usuarioActivo && (
                <>
                    <div>
                        <ProfilePhoto profilePhoto={preview} />
                        <h5>
                            Editar foto de perfil<br /><br />
                            <input 
                                type="file"
                                accept="image/*"
                                onChange={handleChange}
                            />
                        </h5>
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