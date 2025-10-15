import { Link } from "react-router-dom"
import "../../../assets/css/Header/IniciarSesion/iniciarsesion.css"
import { useSesion } from "../../../context/SesionContext/SesionContext"
import { Boton } from "../../Boton/Boton";

export function IniciarSesion()
{
    const { sesion, sesionLogout } = useSesion();

    return(
        <div className="sesion-header">
            <h2>Hola!</h2>
            <p>Ingresa a tu cuenta!</p>

        {!sesion.getUsuarioActivo() ? <PanelNoLogeado /> : 
        <PanelLogeado 
            nombreUsuario={sesion.getUsuarioActivo()?.getNombreUsuario() || ""} 
            cerrarSesion={sesionLogout}/>}
        </div>
    )
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

interface PanelLogeadoProps 
{
    nombreUsuario: string;
    cerrarSesion: () => void;
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