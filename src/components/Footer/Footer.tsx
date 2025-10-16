import { Link } from 'react-router-dom';
import '../../assets/css/Footer/footer.css';
import { useState } from 'react';



export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Verificar si la tecla presionada es "Enter"
    if (e.key === 'Enter') {
      e.preventDefault();
      if (email) {
        setIsSubscribed(true);
      }
      setTimeout(() => {
        setIsSubscribed(false); // Ocultar el mensaje
        setEmail(''); 
      }, 4000); //4000 ms = 4 segundos
    }
  }

  return (

    <footer>
      <div className="Footer">
        <div className="div2">
        <Link to="nosotros" ><h2>Nosotros</h2></Link>
        <Link to="contactos" ><h2>Contacto</h2></Link>
        {/* Columna izquierda: Título y descripción */}
        <div className="footer-col">
          <h3 className="footer-title">Level-Up Store © 2025</h3>
          <p className="footer-text">
            Tu tienda de confianza para todo lo relacionado con videojuegos.
          </p>
        </div>
        </div>

        <div className="div3">
        

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
              <input type="email" placeholder="email@example.com" className="footer-input"
               value={email} onChange={handleEmailChange}  onKeyDown={handleKeyPress}/>
            </label>
            {isSubscribed && (
              <p className="subscription-message">¡Te has suscrito a nuestra  newsletter!</p>
            )}
          </div>
          </div>
          </div>

     

    </footer>
  )
}