import { Link } from "react-router-dom"
import "../../../assets/css/Header/IniciarSesion/iniciarsesion.css"

export function IniciarSesion()
{
    return(
        <div className="sesion-header">
            <h2>Hola!</h2>
            <p>Ingresa a tu cuenta!</p>

            <div className="sesion-panel">
                <Link to={'/login'}><p>Iniciar Sesión</p></Link>
                <Link to={'/registrarse'}><p>Registrarse</p></Link>
            </div>
        </div>
    )
}