import { useEffect, useState, type ReactNode } from "react";
import { useSesion } from "../../../context/SesionContext/UseSesion";
import { Navigate } from "react-router-dom";
import { UsuarioApiService } from "../../../services/UsuarioApiService";

interface AdminSecurityProps 
{
    children: ReactNode;
}

export function AdminSecurity({ children }: AdminSecurityProps)
{
    const { sesion } = useSesion();

    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    const usuarioService = new UsuarioApiService();

    useEffect(() => 
    {
        const fetchUsuario = async () => 
        {
            const idUsuarioActivo = sesion.getIdUsuarioActivo();

            if (idUsuarioActivo !== null) 
            {
                const datos = await usuarioService.fetchById(idUsuarioActivo);
                setIsAdmin(datos?.isAdmin() || false);
            } 
            else 
                setIsAdmin(false);

            setLoading(false);
        };

        fetchUsuario();
    }, [sesion]);

    if (loading) return <p>Cargando...</p>;

    if (!isAdmin) 
        return <Navigate to="/" replace />;

    return <>{children}</>;
}