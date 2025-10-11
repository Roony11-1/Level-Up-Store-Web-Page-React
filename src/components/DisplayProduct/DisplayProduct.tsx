import "../../assets/css/DisplayProduct/displayproduct.css"

import { Producto } from "../../model/Producto";
import { Boton } from "../Boton/Boton";


export function DisplayProduct({ producto }: { producto: Producto }) {
    return (
        <div className="producto">
            <img src={producto.getImagen()} alt={producto.getNombre()}/>
            <h1>{producto.getNombre()}</h1>
            <p>${producto.getPrecio().toLocaleString("es-CL")}</p>

            <Boton>
                Detalles
            </Boton>
        </div>
        
    );
}
