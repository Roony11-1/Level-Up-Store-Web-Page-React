import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductoApiService } from "../services/ProductoApiService";
import { Producto } from "../model/Producto";

import "../assets/css/ProductoPagina/productopagina.css"
import { Boton } from "../components/Boton/Boton";
import { RelatedProduct } from "../components/RelatedProduct/RelatedProduct";

export function ProductoPagina()
{
    const [producto, setProducto] = useState<Producto | null>();
    const [productosRelacionados, setProductosRelacionados] = useState<Producto[]>();

    const productoService = useMemo(() => new ProductoApiService(), []);

    const [searchParams] = useSearchParams();
    const nombre = searchParams.get("nombre");

    useEffect(() => 
    {
        if (!nombre) 
            return;

        // Metodo custom para este componente
        productoService.fetchProductoConRelacionados(nombre)
        .then(({ producto, relacionados }) => 
        {
            setProducto(producto);
            setProductosRelacionados(relacionados);
        });
    }, [nombre, productoService]);

    if (!producto)
        return(
            <h1>No hay productos asociados a ese nombre</h1>
    );

    return (
        <div className="displayer-producto">
            <div className="displayer-imagen">
                <img
                    src={producto.getImagen()} />
            </div>
            <div className="displayer-info">
                <div className="info-header">
                    <strong>{producto.getNombre()}</strong><br />
                    <strong>{producto.getMarca()}</strong>
                </div>
                <div className="info-body">
                    <p>{producto.getDescripcion()}</p>
                    <p>${producto.getPrecio().toLocaleString("es-CL")}</p>
                </div>
                <div className="info-footer">
                    <Boton>
                        Añadir al carrito
                    </Boton>
                    <span>Cantidad: {producto.getCantidad()}</span>
                </div>
            </div>
            <div className="displayer-parecidos">
                <h1>Productos Relacionados</h1>
                <div className="parecidos">
                    {productosRelacionados && productosRelacionados.length > 0 ? (
                        productosRelacionados.map((p) => (
                            <RelatedProduct key={p.getId()} producto={p} />
                        ))
                    ) : (
                        <p>No hay productos relacionados</p>
                    )}
                </div>
            </div>
            <div className="displayer-imagenes">
                <h1>Lista Imagenes Producto</h1>
            </div>
        </div>
    );
}