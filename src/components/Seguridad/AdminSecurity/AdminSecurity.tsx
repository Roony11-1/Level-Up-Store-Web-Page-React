import { useEffect, useState, type ReactNode } from "react";
import { useSesion } from "../../../context/SesionContext/UseSesion";
import { UsuarioApiService } from "../../../services/UsuarioApiService";
import { NotFound } from "../../../pages/NotFound";

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
            const tokenUsuarioActivo = sesion.getToken();

            if (idUsuarioActivo && tokenUsuarioActivo) 
            {
                const datos = await usuarioService.findProfile(idUsuarioActivo, tokenUsuarioActivo);
                setIsAdmin(datos?.isAdmin() || false);
            } 
            else 
                setIsAdmin(false);

            setLoading(false);
        };

        fetchUsuario();
    }, [sesion]);

    if (loading) return <p>Cargando Sesión...</p>;

    if (!isAdmin) 
        return <NotFound />

    return <>{children}</>;
}