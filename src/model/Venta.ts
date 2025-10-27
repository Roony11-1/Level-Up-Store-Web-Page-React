import type { itemsType } from "./Carrito";
import { ModeloBase } from "./ModeloBase";

export class Venta extends ModeloBase
{
    id: number;
    idCliente: number;
    productos: itemsType[];
    total: number;

    constructor()
    {
        super();
        this.id = 0;
        this.idCliente = 0;
        this.productos = [];
        this.total = 0;
    }

    setId(id: number) { this.id = id; return this; }
    setIdCliente(idCliente: number) { this.idCliente = idCliente; return this; }
    setProductos(productos: itemsType[]) { this.productos = productos; return this; }
    setTotal(total: number) { this.total = total; return this; }

    getId(): number { return this.id; }
    getIdCliente(): number { return this.idCliente; }
    getProductos(): itemsType[] { return this.productos; }
    getTotal(): number { return this.total; }
}