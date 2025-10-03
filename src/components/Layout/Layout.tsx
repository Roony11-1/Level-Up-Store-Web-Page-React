import { Header } from '../Header/Header';
import { Outlet } from "react-router-dom";

import '../../assets/css/Layout/layout.css';

export function Layout() 
{
  return(
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}