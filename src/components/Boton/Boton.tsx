import { type ReactNode } from "react";

import "../../assets/css/Boton/boton.css"

interface BotonProps
{
    children: ReactNode;
}

export function Boton( {children}:BotonProps )
{
    return(
        <button className="btn">
            {children}
        </button>
    );
}