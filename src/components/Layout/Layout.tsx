import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Outlet } from "react-router-dom";

import '../../assets/css/Layout/layout.css';
import { UserPanel } from '../UserPanel/UserPanel';

export function Layout() 
{
  return(
    <>
      <Header />
      <main>
        <UserPanel />
        <div className="outlet-container">
          <Outlet />
        </div>
      </main>
      <Footer />  
    </>
  )
}