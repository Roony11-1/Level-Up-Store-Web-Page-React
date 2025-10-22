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
  const { carrito, eliminarUnidad } = useCarrito();

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

  let total = 0;

  return (
    <div className="contenedor">
      <div className="contenedor-items">
        {listaProductos.map((item: itemsType) => 
        {
          const producto = productos.find((p: Producto) => p.id === item.productoId);

          const precio = producto?.getPrecio() || 0;
          const descuento = producto?.getOferta() || 1;
          
          if (descuento === 1)
            total = total + precio*1*item.cantidad;
          else
            total = total + precio*(1-descuento)*item.cantidad;

          return (<CarritoItem producto={producto || null} />);
        })}
      </div>
      <hr />
      <Boton>Ir a Pagar</Boton>
      <h2>Total: ${total.toLocaleString("es-CL")}</h2>
    </div>
  );
}