import { useEffect } from "react";
import { useState } from "react";
import '../assets/css/home/home.css';
import type { Producto } from "../model/Producto";
import { ProductoApiService } from "../services/ProductoApiService";
import { NavLink } from "react-router-dom";
import { Boton } from "../components/Boton/Boton";
import { Blog } from "../model/Blog";
import { BlogApiService } from "../services/BlogApiService";
import { DisplayMarkedProduct } from "../components/Home/DisplayMarkedProduct/DisplayMarkedProduct";
import { DisplayMarkedBlogs } from "../components/Home/DisplayMarkedBlog/DisplayMarkedBlog";

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
        <NavLink to="/catalogo"><Boton>Ver Productos</Boton></NavLink>
      </div>
      <div className="blogs-container">
        <h1>Noticias de esta semana</h1>
        <div className="blogs">
          {blogs[0] && <DisplayMarkedBlogs blog={blogs[0]} />}
        </div>
        <NavLink to="/blogs"><Boton>Ver Blogs</Boton></NavLink>
      </div>
    </div>
    <div className="imagenes-home">
      <h1>Productos Destacados</h1>
      <div className="destacados">
        {productosDestacados[0] && <DisplayMarkedProduct producto={productosDestacados[0]} />}
      </div>
    </div>
  </div>
  )
}
