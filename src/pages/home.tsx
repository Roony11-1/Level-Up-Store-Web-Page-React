import { useEffect } from "react";
import { useState } from "react";
import '../assets/css/home/home.css';
import type { Producto } from "../model/Producto";
import { ProductoApiService } from "../services/ProductoApiService";
import { NavLink } from "react-router-dom";
import { Boton } from "../components/Boton/Boton";

export function Home() 
{
  const [productosDestacados, setProductosDestacados] = useState<Producto[]>([])
  const productoService = new ProductoApiService();

  useEffect(() => {
    const fetchProductosDestacados = async () => {
      const datos = await productoService.fetchByDestacado();
      setProductosDestacados(datos);
    };
      
    fetchProductosDestacados();
  }, []);

  console.log(productosDestacados);

  return (
  <div className="home-container">
    <div className="titulo-home">
      <h1>TIENDA ONLINE</h1>
      <p>
        Nuestro catálogo ofrece productos de la mejor calidad y precio.
        Descubre nuestras guías y productos exclusivos disponibles ahora.
      </p>
      <NavLink to="/catalogo"><Boton>Ver Productos</Boton></NavLink>
    </div>
    <div className="imagenes-home">
      <div className="destacados">
        <p>Hola</p>
      </div>
    </div>
  </div>
  )
}
