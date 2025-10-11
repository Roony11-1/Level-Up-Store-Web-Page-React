import { Link } from "react-router-dom"
import "../../../assets/css/Header/IniciarSesion/iniciarsesion.css"

export function IniciarSesion()
{
    return(
        <div className="sesion-header">
            <h2>Hola!</h2>
            <p>Ingresa a tu cuenta!</p>

            <div className="sesion-panel">
                <Link to={'/login'}><h1>Iniciar Sesión</h1></Link>
                <Link to={'/registrarse'}><h1>Registrarse</h1></Link>
            </div>
        </div>
    )
}