import { NavLink } from 'react-router-dom';
import '../../assets/css/Footer/footer.css';



export function Footer() {
  return (

    <footer>
      <div className="Footer">
        <div className="div2">
        <NavLink to="nosotros" ><h2>Nosotros</h2></NavLink>
        <NavLink to="contactos" ><h2>Contacto</h2></NavLink>
        </div>

        <div className="div3">
        {/* Columna izquierda: Título y descripción */}
        <div className="footer-col">
          <h3 className="footer-title">Level-Up Store © 2025</h3>
          <p className="footer-text">
            Tu tienda de confianza para todo lo relacionado con videojuegos.
          </p>
        </div>

        {/* Columna central: Categorías y enlaces */}
        <div className="footer-col">
          <p className="footer-text">
            Categorías: Consolas, Juegos, Accesorios, Merchandising
          </p>
        </div>

          {/* Columna derecha: Newsletter */}
          <div className="footer-col">
            <p className="footer-text">Contacto:</p>
            <p className="footer-text">Suscríbete a nuestra newsletter</p>
            <label className="footer-text">
              Tu Email:
              <input type="email" placeholder="email@example.com" className="footer-input" />
            </label>
          </div>
          </div>
          </div>

     

    </footer>
  )
}