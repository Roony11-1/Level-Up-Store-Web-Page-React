import { Link } from 'react-router-dom';
import '../../assets/css/UserPanel/userpanel.css';

export function UserPanel() 
{
  return(
    <section className="user-panel">
      <h1>Panel Usuario</h1>
      <hr /><br />
      <div>
        <Link to={'/'}><h2>Inicio</h2></Link>
        <Link to={'/productos'}><h2>Productos</h2></Link>
        <Link to={'/nosotros'}><h2>Nosotros</h2></Link>
        <Link to={'/blogs'}><h2>Blogs</h2></Link>
        <Link to={'/contactos'}><h2>Contactos</h2></Link>
      </div>
      <Link to={'/app'}><h2>App</h2></Link>
        
    </section>
  )
}