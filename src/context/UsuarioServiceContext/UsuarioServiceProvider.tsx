import { useState, type ReactNode } from "react";
import { UsuarioApiService } from "../../services/UsuarioApiService";
import { UsuarioServiceContext } from "./UseUsuarioService";

export function UsuarioServiceProvider({ children }: { children: ReactNode }) 
{
    const [usuarioService] = useState(() => 
    {
        return new UsuarioApiService();
    });

    return(
        <UsuarioServiceContext.Provider value={{usuarioService}}>
            {children}
        </UsuarioServiceContext.Provider>
    );
}