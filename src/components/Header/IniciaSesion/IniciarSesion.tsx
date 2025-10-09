import { Link } from "react-router-dom"
import "../../../assets/css/Header/IniciarSesion/iniciarsesion.css"

export function IniciarSesion()
{
    return(
        <div className="sesion-header">
            <h2>Hola!</h2>
            <p>Ingresa a tu cuenta!</p>

        <div className="sesion-panel">
            <ul>
            <Link to={'/login'}><h2>Iniciar Sesión</h2></Link>
            <Link to={'/registrarse'}><h2>Registrarse</h2></Link>
            </ul>
        </div>
        </div>
    )
}