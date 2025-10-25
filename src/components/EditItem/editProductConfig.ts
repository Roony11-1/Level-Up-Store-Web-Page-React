import { Producto } from "../../model/Producto"
import { type EditItemConfig } from "./EditItem"

export const editProductConfig: EditItemConfig<Producto> = 
{
    getInitialData: (p) => 
    ({
        nombre: p.getNombre(),
        codigo: p.getCodigo(),
        marca: p.getMarca(),
        descripcion: p.getDescripcion(),
        categoria: p.getCategoria(),
        precio: p.getPrecio(),
        cantidad: p.getCantidad(),
        destacado: p.getDestacado(),
        oferta: p.getOferta(),
        imagen: p.getImagen(),
    }),
    buildEntity: (data, p) =>
        new Producto()
            .setId(p.getId())
            .setNombre(data.nombre)
            .setCodigo(data.codigo)
            .setMarca(data.marca)
            .setDescripcion(data.descripcion)
            .setCategoria(data.categoria)
            .setPrecio(data.precio)
            .setCantidad(data.cantidad)
            .setDestacado(data.destacado)
            .setOferta(data.oferta)
            .setImagen(data.imagen),
    fields: 
    [
        { name: "nombre", label: "Nombre", validate: (v) => (!v ? "Obligatorio" : null) },
        { name: "codigo", label: "Código", validate: (v) => (!v ? "Obligatorio" : null) },
        { name: "marca", label: "Marca", validate: (v) => (!v ? "Obligatorio" : null) },
        { name: "descripcion", label: "Descripción" },
        { name: "categoria", label: "Categoría" },
        { name: "precio", label: "Precio", type: "number" },
        { name: "cantidad", label: "Cantidad", type: "number" },
        { name: "oferta", label: "Oferta", type: "number" },
        { name: "imagen", label: "Imagen" },
        { name: "destacado", label: "Destacado", type: "checkbox" },
    ],
};
