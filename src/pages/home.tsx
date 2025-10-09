import '../assets/css/home/home.css';
import "../css/inicio.css"

export function Home() {
  return (
    <main className="principal">
      <div className="sidepanel" id="sidepanel-header"></div>
      <section>
        <div className="ini">

          <div className="text">
            <h1>TIENDA ONLINE</h1>
            <p>
              Nuestro catálogo ofrece productos de la mejor calidad y precio.
              Descubre nuestras guías y productos exclusivos disponibles ahora.
            </p>
            <a href="productos.html" className="btn">Ver productos</a>
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
      </section>
      <div className="sidepanel" id="sidepanel-carrito"></div>
    </main>

  )
}
