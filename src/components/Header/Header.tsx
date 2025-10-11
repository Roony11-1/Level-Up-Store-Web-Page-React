import '../../assets/css/Header/header.css';

import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { IniciarSesion } from './IniciaSesion/IniciarSesion';
import { UserPanel } from '../UserPanel/UserPanel';
import { SearchBar } from '../SearchBar/SearchBar';

export function Header() 
{
  return(
    <header>
      <div className="contenedor-header">
          <div className="izquierda">
            <HeaderLogo />
            <UserPanel/>
          </div>
          <div className="central">
            <SearchBar />
          </div>
          <div className="derecha">
            <IniciarSesion />
          </div>
      </div>
    </header>
  )
}