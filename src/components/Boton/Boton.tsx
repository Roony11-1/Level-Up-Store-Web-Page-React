import { type ReactNode } from "react";

import "../../assets/css/Boton/boton.css"

interface BotonProps
{
    children: ReactNode;
}

export function Boton( {children}:BotonProps )
{
    return(
        <div className="btn">
            {children}
        </div>
    );
}