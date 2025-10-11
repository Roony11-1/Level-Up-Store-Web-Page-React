import type { Producto } from "../../../model/Producto";

export function DisplayMarkedProduct({ producto }: { producto: Producto })
{
    return(
        <div className="producto-destacado">
            <img src={producto.getImagen()} alt={producto.getNombre()}/>
        </div>
    );
}