import { AdminSecurity } from "../components/Seguridad/AdminSecurity/AdminSecurity";
import { LoginSecurity } from "../components/Seguridad/LoginSecurity/LoginSecurity";

import "../assets/css/PanelAdmin/paneladmin.css"
import type { Producto } from "../model/Producto";
import { useEffect, useState } from "react";
import { useProductoService } from "../context/ProductoServiceContext/UseProductoService";
import { DisplayProduct } from "../components/DisplayProduct/DisplayProduct";

export function PanelAdminProducto()
{
    const [productos, setProductos] = useState<Producto[]>([]);
    const [loading, setLoading] = useState(true);

    const { productoService } = useProductoService();

    const fetchProductos = async () => 
    {
        const datos = await productoService.fetchAll();
        setProductos(datos);
        setLoading(false);
    };

    useEffect(() => 
    {
        fetchProductos();
    }, []);

    if (loading) return <p>Cargando productos...</p>;

    return(
        <LoginSecurity>
            <AdminSecurity>
                <div className="contenedor-admin">
                    <div className="productos" >
                        {productos.map((p: Producto) => (
                            <div className="producto">
                                <img src={p.getImagen()} />
                                <div>
                                    <p>Nombre: {p.getNombre()}</p>
                                    <p>Codigo: {p.getCodigo()}</p>
                                    <p>Marca: {p.getMarca()}</p>
                                    <p>Descripción: {p.getDescripcion()}</p>
                                    <p>Categoria: {p.getCategoria()}</p>
                                    <p>Precio: ${p.getPrecio().toLocaleString("es-CL")}</p>
                                    <p>Cantidad: {p.getCantidad()}</p>
                                    <p>Destacado: {p.getDestacado() ? "Si" : "No"}</p>
                                    <p>Oferta: {p.getOferta()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AdminSecurity>
        </LoginSecurity>
    );
}