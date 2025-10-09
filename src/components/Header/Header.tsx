import { Link } from 'react-router-dom';
import '../../assets/css/Header/header.css';

import { HeaderLogo } from './HeaderLogo';

export function Header() 
{
  return(
    <header>
      <div className="parent">
          <div className="izquierda"><HeaderLogo /></div>
          <div className="central">
            <Link to={'/Login'}><h2>Inicio Secion</h2></Link>
          </div>
          <div className="derecha">3</div>
      </div>
    </header>
  )
}