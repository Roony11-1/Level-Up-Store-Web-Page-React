import { Link } from "react-router-dom"
import "../../../assets/css/Header/IniciarSesion/iniciarsesion.css"
import { useSesion } from "../../../context/SesionContext/SesionContext"
import { Boton } from "../../Boton/Boton";
import { ProfilePhoto } from "../../ProfilePhoto/ProfilePhoto";

export function LoginStatus()
{
    const { sesion, sesionLogout } = useSesion();

    return(
        <div className="sesion-header">

        {!sesion.getUsuarioActivo() ? <NoLogeado /> : 
            <Logeado 
                nombreUsuario={sesion.getUsuarioActivo()?.getNombreUsuario() || ""}
                cerrarSesion={sesionLogout}
                profilePhoto={sesion.getUsuarioActivo()?.getProfilePhoto()} />}
        </div>
    )
}

function NoLogeado()
{
    return (
        <div>
            <h2>Hola!</h2>
            <p>Ingresa a tu cuenta!</p>

            <PanelNoLogeado />
        </div>
    );
}

interface PanelLogeadoProps 
{
    nombreUsuario: string;
    cerrarSesion: () => void;
    profilePhoto?: string;
}

function Logeado({ nombreUsuario, cerrarSesion, profilePhoto }: PanelLogeadoProps)
{
    return(
        <div>
            <ProfilePhoto 
                profilePhoto={profilePhoto} />

            <PanelLogeado 
                nombreUsuario={nombreUsuario || ""} 
                cerrarSesion={cerrarSesion}/>
        </div>
    );
}

function PanelNoLogeado()
{
    return(
        <div className="sesion-panel">
            <Link to={'/login'}><h1>Iniciar Sesión</h1></Link>
            <Link to={'/registrarse'}><h1>Registrarse</h1></Link>
        </div>
    );
}

function PanelLogeado({ nombreUsuario, cerrarSesion }: PanelLogeadoProps)
{
    return(
        <div className="sesion-panel">
            <h2>Bienvenido {nombreUsuario}</h2>
            <Boton
                onClick={cerrarSesion}>
                    Cerrar Sesión
                </Boton>
        </div>
    );
}