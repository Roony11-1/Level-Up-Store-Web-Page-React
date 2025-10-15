import { ProfilePhoto } from "../components/ProfilePhoto/ProfilePhoto";
import { useSesion } from "../context/SesionContext/SesionContext";
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

    if (!usuarioActivo)
        return <h1>No estás logeado</h1>;

    return (
        <div>
            <div>
                <ProfilePhoto profilePhoto={preview} />
                <h5>
                    Editar foto de perfil<br /><br />
                    <input 
                        type="file"
                        accept="image/*"
                        onChange={handleChange}>
                    </input>
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
        </div>
    );
}