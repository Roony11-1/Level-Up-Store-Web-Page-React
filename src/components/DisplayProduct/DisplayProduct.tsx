import { Link } from "react-router-dom";
import "../../assets/css/DisplayProduct/displayproduct.css"

import { Producto } from "../../model/Producto";


export function DisplayProduct({ producto }: { producto: Producto }) {
    return (
        <div className="producto">
            <Link to={`/producto?nombre=${producto.getNombre()}`}><img src={producto.getImagen()} alt={producto.getNombre()}/></Link>
            <Link to={`/producto?nombre=${producto.getNombre()}`}><h1>{producto.getNombre()}</h1></Link>
            {producto.getCantidad()> 0 ? <h1></h1> : <h2 className="producto-agotado">Agotado</h2>}
            <p>${producto.getPrecio().toLocaleString("es-CL")}</p>
        </div>
    );
}
