
import { Link } from "react-router-dom";
import { CarritoContext, useCarrito } from "../context/useCarrito";
import { CarritoProvider } from "../context/CarritoProvider";

import "../css/carrito.css"

export const CarritoPage: React.FC = () => {
  const carritoContext = useCarrito();

  if (!carritoContext) {
    return <p>Error al cargar el carrito 😢</p>;
  }

  const { carrito, eliminarDelCarrito, getTotal, limpiarCarrito } = carritoContext;




  return (
    <div className="carrito-page-container">
    <h1>🛒 Carrito de Compras</h1>

    {carrito.length === 0 ? (
      <div className="carrito-vacio">
        <p>No hay productos en el carrito</p>
        <Link to="/catalogo" className="btn-volver">Ir al catálogo</Link>
      </div>
    ) : (
      <>
        <table className="tabla-carrito">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((p) => (
              <tr key={p.id}>
                <td><img src={p.imagen} alt={p.nombre} width="70" /></td>
                <td>{p.nombre}</td>
                <td>${p.precio.toLocaleString("es-CL")}</td>
                <td>{p.cantidad}</td>
                <td>${(p.precio * p.cantidad).toLocaleString("es-CL")}</td>
                <td>
                  <button className="btn-eliminar" onClick={() => (p.id)}>
                    
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="carrito-total">
          <h2>Total: ${getTotal().toLocaleString("es-CL")}</h2>
          <div className="carrito-botones">
            <button className="btn-limpiar" onClick={limpiarCarrito}>Vaciar Carrito</button>
            <button className="btn-pagar" onClick={carritoContext.eliminarDelCarrito(carritoContext.carrito.id) => alert("Gracias por tu compra ")}>
              Pagar
            </button>
          </div>
        </div>
      </>
    )}
  </div>
  );
};