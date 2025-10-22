export interface itemsType
{
    productoId: number;
    cantidad: number;
}

export class Carrito
{
    id: number;
    items: itemsType[];
    total: number;

    constructor()
    {
        this.id = 1;
        this.items = [{productoId: 1, cantidad: 1}, {productoId: 2, cantidad: 1}, {productoId: 200, cantidad: 500}];
        this.total = 0;
    }

    getId(): number { return this.id; }
    getItems(): itemsType[] { return this.items; }
    getTotal(): number { return this.total; }

    setid(id: number) { this.id = id; return this; }
    setItems(items: itemsType[]) { this.items = items; return this; }
    setTotal(total: number) { this.total = total; return this; }

    /**
     * Metodo booleando que me dira si existe o no en el carrito
     */
    existeEnElCarrito(productoId: number): boolean
    {
        const items = this.getItems();

        const existente = items.find(i => i.productoId === productoId);

        if (existente)
            return true;
        else
            return false;
    }
}