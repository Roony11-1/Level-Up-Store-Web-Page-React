import { useState, type ReactNode } from "react";
import { ProductoApiService } from "../../services/ProductoApiService";
import { ProductoServiceContext } from "./UseProductoService";

interface ProductoServiceProviderProps
{
    children: ReactNode;
}

export function ProductoServiceProvider( {children}:ProductoServiceProviderProps )
{
    const [productoService] = useState(() => 
    {
        return new ProductoApiService();
    });

    return(
        <ProductoServiceContext.Provider value={ {productoService} }>
            {children}
        </ProductoServiceContext.Provider>
    );
}