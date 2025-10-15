import '../../assets/css/Header/header.css';

import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { LoginStatus } from './IniciaSesion/LoginStatus';
import { UserPanel } from '../UserPanel/UserPanel';
import { SearchBar } from '../SearchBar/SearchBar';
import { useState } from 'react';
import { Boton } from '../Boton/Boton';

export function Header() 
{
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  return(
    <header>
      <div className="contenedor-header">
          <div className="izquierda">
            <HeaderLogo />
            <UserPanel/>
          </div>

          <Boton className="hamburguesa" onClick={toggleMenu}>
            ☰
          </Boton>

          <div className={`central ${menuAbierto ? 'abierto' : ''}`}>
            <SearchBar />
          </div>

          <div className={`derecha ${menuAbierto ? 'abierto' : ''}`}>
            <LoginStatus />
          </div>
      </div>
    </header>
  )
}