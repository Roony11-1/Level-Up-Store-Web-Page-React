import "../../assets/css/DisplayProduct/displayproduct.css"

import { Producto } from "../../model/Producto";


export function DisplayProduct({ producto }: { producto: Producto }) {
    return (
        <div className="producto">
            <img src={producto.getImagen()} alt={producto.getNombre()}/>
            <h1>{producto.getNombre()}</h1>
            <p>${producto.getPrecio().toLocaleString("es-CL")}</p>

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#${modalId}">
                Detalles
            </button>
        </div>
        
    );
}
