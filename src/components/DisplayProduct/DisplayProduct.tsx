import { Link } from "react-router-dom";
import "../../assets/css/DisplayProduct/displayproduct.css"

import { Producto } from "../../model/Producto";


export function DisplayProduct({ producto }: { producto: Producto }) {
    return (
        <div className="producto">
            <img src={producto.getImagen()} alt={producto.getNombre()}/>
            <Link to={`/producto?nombre=${producto.getNombre()}`}><h1>{producto.getNombre()}</h1></Link>
            <p>${producto.getPrecio().toLocaleString("es-CL")}</p>
        </div>
    );
}
