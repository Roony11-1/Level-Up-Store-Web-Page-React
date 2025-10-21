import type { ReactNode } from "react";
import { CarritoProvider } from "./context/CarritoContext/CarritoProvider";
import { ProductoServiceProvider } from "./context/ProductoServiceContext/ProductoServiceProvider";
import { SesionProvider } from "./context/SesionContext/SesionProvider";
import { UsuarioServiceProvider } from "./context/UsuarioServiceContext/UsuarioServiceProvider";

export const AppProviders = ({ children }: { children: ReactNode }) => (
    <UsuarioServiceProvider>
        <ProductoServiceProvider>
            <SesionProvider>
                <CarritoProvider>
                    {children}
                </CarritoProvider>
            </SesionProvider>
        </ProductoServiceProvider>
    </UsuarioServiceProvider>
);