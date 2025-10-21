import { Producto } from "../model/Producto";
import { useEffect } from "react";
import { useState } from "react";
import { DisplayProduct } from "../components/DisplayProduct/DisplayProduct";

import "../assets/css/Productos/productos.css"
import { Link, useSearchParams } from "react-router-dom";
import { useProductoService } from "../context/ProductoServiceContext/UseProductoService";

export function Productos() 
{
  const [productos, setProductos] = useState<Producto[]>([])
  const [loading, setLoading] = useState(true);

  const { productoService } = useProductoService();

  const [searchParams] = useSearchParams();
  const categoria = searchParams.get("filtro");
    
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
        setLoading(false)
      };
            
    fetchProductos();
    }, [categoria, productoService]);

    if (loading) return <p>Cargando...</p>;

    if (productos.length === 0) return <p>No hay productos disponibles.</p>;

    return (
      <div className="catalogo-container">
        <div className="contenedor-filtros">
            <h1>Filtros</h1>
            <Link to={"/catalogo"}>Quitar Filtros</Link>
        </div>
        <div className="contenedor-productos">
          {productos.map((p) => <DisplayProduct key={p.id} producto={p} />)}
        </div>
      </div>

    );
}