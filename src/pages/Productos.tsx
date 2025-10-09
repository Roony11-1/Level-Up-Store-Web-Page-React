import { Producto } from "../model/Producto";
import { useEffect } from "react";
import { useState } from "react";
import { DisplayProduct } from "../components/DisplayProduct/DisplayProduct";
import { ProductoApiService } from "../services/ProductoApiService"; 

import "../assets/css/Productos/productos.css"

export function Productos() {
    const [productos, setProductos] = useState<Producto[]>([])
        const productoService = new ProductoApiService();
    
        useEffect(() => {
            const fetchProductos = async () => {
                const datos = await productoService.fetchAll();
                setProductos(datos);
              };
            
              fetchProductos();
        }, []);
    return (
          <div className="contenedor-productos">
                  {productos.map((p) => (
                    <DisplayProduct producto={p} />
                  ))}
                </div>
    );
}