import { type ReactNode } from "react";

import "../../assets/css/Boton/boton.css"

interface BotonProps
{
    children: ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Boton( {children, className="", onClick}:BotonProps )
{
    return(
        <button className={`btn${className}`} onClick={onClick}>
            {children}
        </button>
    );
}