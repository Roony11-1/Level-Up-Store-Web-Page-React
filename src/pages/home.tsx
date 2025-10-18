import { useEffect } from "react";
import { useState } from "react";
import '../assets/css/home/home.css';
import type { Producto } from "../model/Producto";
import { ProductoApiService } from "../services/ProductoApiService";
import { Link } from "react-router-dom";
import { Boton } from "../components/Boton/Boton";
import { Blog } from "../model/Blog";
import { BlogApiService } from "../services/BlogApiService";
import { CarruselDestacado } from "../components/CarruselDestacado/CarruselDestacado";

export function Home() 
{
  const [productosDestacados, setProductosDestacados] = useState<Producto[]>([])
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const productoService = new ProductoApiService();
  const blogService = new BlogApiService();

  useEffect(() => {
    const fetchProductosDestacados = async () => {
      const datos = await productoService.fetchByDestacado();
      setProductosDestacados(datos);
    };

    const fetchBlogs = async () => {
      const datos = await blogService.fetchAll();
      setBlogs(datos);
    };
      
    fetchProductosDestacados();
    fetchBlogs();
  }, []);

  return (
  <div className="home-container">
    <div className="titulo-home">
      <div className="banner">
        <h1>La mejor página para Gamers de verdad</h1>
        <p>
          Nuestro catálogo ofrece productos de la mejor calidad y precio.
          Descubre nuestras guías y productos exclusivos disponibles ahora.
        </p>
        <Link to="/catalogo"><Boton>Ver Productos</Boton></Link>
      </div>
      <div className="blogs-container">
        <h1>Noticias de esta semana</h1>
        <div className="blogs">
          {blogs[0] && <CarruselDestacado item={blogs} interval={6000} />}
        </div>
        <Link to="/blogs"><Boton>Ver Blogs</Boton></Link>
      </div>
    </div>
    <div className="destacado-home">
      <h1>Productos Destacados</h1>
      <div className="destacados">
        {productosDestacados[0] && <CarruselDestacado item={productosDestacados} interval={3000} />}
      </div>
    </div>
  </div>
  )
}
