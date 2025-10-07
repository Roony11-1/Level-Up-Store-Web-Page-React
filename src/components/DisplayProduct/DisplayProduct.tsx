import { Producto } from "../../model/Producto";


export function DisplayProduct({ producto }: { producto: Producto }) {
    return (
        <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <p>Id: {producto.getId()}</p>
            <p>Código: {producto.getCodigo()}</p>
            <p>Nombre: {producto.getNombre()}</p>
            <p>Descripción: {producto.getDescripcion()}</p>
            <p>Categoría: {producto.getCategoria()}</p>
            <p>Precio: ${producto.getPrecio().toFixed(2)}</p>
            <p>Cantidad: {producto.getCantidad()}</p>
            <p>Destacado: {producto.getDestacado() ? "Sí" : "No"}</p>
            <img src={producto.getImagen()} alt={producto.getNombre()} style={{ maxWidth: "200px" }} />
        </div>
    );
}
