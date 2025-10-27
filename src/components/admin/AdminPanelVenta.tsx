import { AdminPanelBase, type AdminBaseView } from "./AdminPanelBase";
import { AdminPanelBotones } from "./AdminPanelBotones";
import { Venta } from "../../model/Venta";
import { VentaApiService } from "../../services/VentaApiService";
import type { Producto } from "../../model/Producto";
import { useEffect, useState } from "react";
import { useProductoService } from "../../context/ProductoServiceContext/UseProductoService";
import type { itemsType } from "../../model/Carrito";
import { VentaItem } from "../VentaItem/VentaItem";

function AdminVentaView({entity}: AdminBaseView<Venta>) 
{
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState<Producto[]>([]);
    const { productoService } = useProductoService();
    const listaProductos = entity.getProductos();

    useEffect(() => 
    {
        const fetchProductos = async () => 
        {
        const datos = await productoService.fetchAll();

            setProductos(datos);
            setLoading(false)
        };
                
        fetchProductos();
    }, [productoService]);

    if (loading) return <p>Cargando...</p>;

    return (
        <div className="item-admin">
            <div>
                <p>ID: {entity.getId()}</p>
                <p>ID cliente: {entity.getIdCliente()}</p>
                <div>
                    {listaProductos.map((item: itemsType) => 
                    {
                    const producto = productos.find((p: Producto) => p.id === item.productoId);
                    return <VentaItem key={item.productoId} producto={producto || null} cantidad={item.cantidad} />;
                    })}
                </div>
                <hr />
                <div>
                    <h1>Total: ${entity.getTotal().toLocaleString("es-CL")}</h1>
                </div>
            </div>
            <AdminPanelBotones />
        </div>
    );
}

export function AdminPanelVenta() 
{
    const ventaApiService = new VentaApiService();

    return (
        <AdminPanelBase<Venta>
            title="Ventas"
            service={ventaApiService}
            renderItem={(p, onDelete) => (<AdminVentaView entity={p} />)} />
    );
}
