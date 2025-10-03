import '../../assets/css/Header/header.css';

import { HeaderLogo } from './HeaderLogo';

export function Header() 
{
  return(
    <header>
      <div className="parent">
          <div className="izquierda"><HeaderLogo /></div>
          <div className="central">2</div>
          <div className="derecha">3</div>
      </div>
    </header>
  )
}