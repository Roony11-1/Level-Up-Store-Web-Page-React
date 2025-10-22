import { Link } from "react-router-dom";
import { useProductoService } from "../../../../context/ProductoServiceContext/UseProductoService";

export function Filtro()
{
    const { productoService } = useProductoService();

    const marcas = productoService.getMarcas();
    const categorias = productoService.getCategorias();

    return(
        <div className="contenedor-filtros">
            <Link to={"/catalogo"}>Quitar Filtros</Link>
            <div>
                <h2>Selecciona una marca</h2>
                <div className="contenedor-marcas">
                    {marcas && marcas.length > 0 && marcas.map((m, index) => (
                        <Link key={index} to={`/catalogo/search?filtro=${m}`}>
                            <h2>{m}</h2>
                        </Link>
                    ))}
                </div>
            </div>
            <div>
                <h2>Selecciona una categoria</h2>
                <div className="contenedor-categorias">
                    {categorias && categorias.length > 0 && categorias.map((c, index) => (
                        <Link key={index} to={`/catalogo/search?filtro=${c}`}>
                            <h2>{c}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}