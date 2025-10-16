import { Producto } from "../model/Producto";
import { useEffect, useMemo } from "react";
import { useState } from "react";
import { DisplayProduct } from "../components/DisplayProduct/DisplayProduct";
import { ProductoApiService } from "../services/ProductoApiService"; 

import "../assets/css/Productos/productos.css"
import { useParams } from "react-router-dom";

export function Productos() 
{
  const [productos, setProductos] = useState<Producto[]>([])

  const productoService = useMemo(() => new ProductoApiService(), []);

  const { categoria } = useParams();
    
  useEffect(() => 
    {
      const fetchProductos = async () => 
      {
        let datos;
        if (categoria)
          datos = await productoService.fetchByFiltro(categoria);
        else
          datos = await productoService.fetchAll();

        setProductos(datos);
      };
            
    fetchProductos();
    }, [categoria, productoService]);

    return (
      <div className="catalogo-container">
        <div className="contenedor-filtros">
            <h1>Filtros</h1>
            <p>Buscando: {categoria}</p>
        </div>
        <div className="contenedor-productos">
          {productos.length > 0 ? 
            (productos.map((p) => <DisplayProduct key={p.id} producto={p} />)) : 
            (<p>No hay productos disponibles.</p>)}
        </div>
      </div>

    );
}