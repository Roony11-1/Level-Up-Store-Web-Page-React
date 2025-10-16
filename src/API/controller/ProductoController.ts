import type { Producto } from "../../model/Producto";
import { type ProductoService } from "../service/ProductoService";

export class ProductoController
{
    private productoService: ProductoService;

    constructor(productoService: ProductoService)
    {
        this.productoService = productoService;
    }

    findAll(): Producto[]
    {
        return this.productoService.findAll();
    }

    findById(id: number): Producto | null
    {
        return this.productoService.findById(id);
    }

    findByDestacado(): Producto[]
    {
        return this.productoService.findByDestacado();
    }

    findByCategoria(categoria: string): Producto[]
    {
        return this.productoService.findByCategoria(categoria);
    }

    findProducto(filtro: string): Producto[]
    {
        return this.productoService.findProducto(filtro);
    }

    save(usuario: Producto): boolean
    {
        return this.productoService.save(usuario);
    }

    deleteById(id: number): boolean
    {
        return this.productoService.deleteById(id);
    }
}