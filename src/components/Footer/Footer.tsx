import { NavLink } from 'react-router-dom';
import '../../assets/css/Footer/footer.css';


export function Footer() {
  return (

    <footer>
      <div className="Footer">
        <div className="div2">
        <NavLink to="nosotros" ><h2>Nosotros</h2></NavLink>
        <NavLink to="contacto" ><h2>Contacto</h2></NavLink>
        </div>

        <div className="div3">
        
        </div>
      </div>

    </footer>
  )
}