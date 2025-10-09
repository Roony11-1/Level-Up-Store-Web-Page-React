import { Link } from 'react-router-dom';
import '../../assets/css/Header/header.css';

import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { IniciarSesion } from './IniciaSesion/IniciarSesion';
import { UserPanel } from '../UserPanel/UserPanel';

export function Header() 
{
  return(
    <header>
      <div className="parent">
          <div className="izquierda">
            <HeaderLogo />
            <UserPanel/>
          </div>
          <div className="central">
          </div>
          <div className="derecha">
            <IniciarSesion />
          </div>
      </div>
    </header>
  )
}