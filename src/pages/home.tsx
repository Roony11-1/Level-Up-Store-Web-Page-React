import { useEffect } from "react";
import { useState } from "react";
import '../assets/css/home/home.css';
import "../css/inicio.css"
import type { Producto } from "../model/Producto";
import { ProductoApiService } from "../services/ProductoApiService";
import { NavLink } from "react-router-dom";

export function Home() {
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
      <div>
        <div className="ini">

          <div className="text">
            <h1>TIENDA ONLINE</h1>
            <p>
              Nuestro catálogo ofrece productos de la mejor calidad y precio.
              Descubre nuestras guías y productos exclusivos disponibles ahora.
            </p>
            <NavLink to="/catalogo" className={"btn"}>Ver Productos</NavLink>
          </div>


          <div className="img">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" id="destacado">

              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>

  )
}
