import { Link } from 'react-router-dom';
import '../../assets/css/Header/header.css';

import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { HeaderMenu } from './HeaderLogo/HeaderMenu';
import { IniciarSesion } from './IniciaSesion/IniciarSesion';

export function Header() 
{
  return(
    <header>
      <div className="parent">
          <div className="izquierda">
            <HeaderLogo />
            <HeaderMenu />
          </div>
          <div className="central">
            <Link to={'/Login'}><h2>Inicio Secion</h2></Link>
          </div>
          <div className="derecha">
            <IniciarSesion />
          </div>
      </div>
    </header>
  )
}