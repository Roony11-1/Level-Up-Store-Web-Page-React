import type { ReactNode } from "react";
import { CarritoProvider } from "./context/CarritoContext/CarritoProvider";
import { ProductoServiceProvider } from "./context/ProductoServiceContext/ProductoServiceProvider";
import { SesionProvider } from "./context/SesionContext/SesionProvider";

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <ProductoServiceProvider>
    <SesionProvider>
      <CarritoProvider>
        {children}
      </CarritoProvider>
    </SesionProvider>
  </ProductoServiceProvider>
);