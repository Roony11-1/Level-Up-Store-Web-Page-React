import type { ReactNode } from "react";
import { useSesion } from "../../../context/SesionContext/UseSesion";
import { Navigate } from "react-router-dom";

export function LoginSecurity({ children, loginNeeded=true }: { children: ReactNode; loginNeeded?: boolean })
{
    const { sesion } = useSesion();

    const usuarioActivo = sesion.getUsuarioActivo();

    if (!usuarioActivo && loginNeeded)
        return <Navigate to="/login" replace />;

    return <>{children}</>;
}