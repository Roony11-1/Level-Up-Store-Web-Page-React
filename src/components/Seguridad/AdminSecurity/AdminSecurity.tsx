import type { ReactNode } from "react";
import { useSesion } from "../../../context/SesionContext/UseSesion";
import { Navigate } from "react-router-dom";

interface AdminSecurityProps 
{
    children: ReactNode;
}

export function AdminSecurity({ children }: AdminSecurityProps)
{
    const { sesion } = useSesion();

    const isAdmin = sesion.getUsuarioActivo()?.isAdmin();

    if (!isAdmin)
        return <Navigate to="/" replace />;

    return <>{children}</>;
}