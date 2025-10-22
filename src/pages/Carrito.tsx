import { useEffect, useState } from "react";
import { useCarrito } from "../context/CarritoContext/useCarrito";
import { useProductoService } from "../context/ProductoServiceContext/UseProductoService";
import type { Producto } from "../model/Producto";
import { Boton } from "../components/Boton/Boton";
import type { itemsType } from "../model/Carrito";

import "../assets/css/Carrito/carrito.css"
import { CarritoItem } from "../components/Carrito/CarritoItem/CarritoItem";

export function Carrito()
{
  const { carrito } = useCarrito();

  const { productoService } = useProductoService();

  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => 
  {
    const fetchProductos = async () => 
    {
      const datos = await productoService.fetchAll();

      setProductos(datos);
      setLoading(false)
      };
            
    fetchProductos();
  }, [carrito, productoService]);

  const listaProductos = carrito.getItems();

  if (listaProductos.length === 0)
    return <>Carrito Vacío</>

  if (loading) return <p>Cargando...</p>;

  /**
   * Calcula el total 
   */
  const total = listaProductos.reduce((acumulado, item) => 
  {
    const producto = productos.find((p: Producto) => p.id === item.productoId);

    if (!producto)
    { 
      // quitamos ese elemento de listaProductos lo hago aca y que pasa que pereza compita aaaaaaa  
      carrito.setItems(listaProductos.splice(item.productoId, 1));
      return acumulado;
    }
      

    const precio = producto.getPrecio();
    const descuento = producto.getOferta() ?? 0;
    const subtotal = descuento === 0 ? (precio * item.cantidad) : (precio * (1 - descuento) * item.cantidad);

    return acumulado + subtotal;
  }, 0);

  carrito.setTotal(total);

  const handlePagar = () =>
  {
    if (carrito.getItems().length === 0)
      alert("Primero agrega productos al carrito we")
    else
      alert("Pagaste pa")
  }

  return (
    <div className="contenedor">
      <div className="contenedor-items">
        {listaProductos.map((item: itemsType) => 
        {
          const producto = productos.find((p: Producto) => p.id === item.productoId);
          return <CarritoItem key={item.productoId} producto={producto || null} />;
        })}
      </div>
      <hr />
      <Boton
        onClick={handlePagar}>Ir a Pagar</Boton>
      <h2>Total: ${total.toLocaleString("es-CL")}</h2>
    </div>
  );
}