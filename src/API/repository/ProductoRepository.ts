import { LocalStorageStrategy } from "../../utilities/LocalStorageStrategy";
import { ProductosFalsos } from "../datos-pre-guardados/ProductosFalsos";
import type { RepositoryInterface } from "./RepositoryInterface";
import type { Producto } from "../../model/Producto";

export class ProductoRepository implements RepositoryInterface<Producto>
{
    private storage = new LocalStorageStrategy("productos");

    constructor() 
    {
        // Inicializar con datos falsos si no hay usuarios
        if (this.storage.findAll().length === 0) 
            this.storage.guardar(ProductosFalsos());
    }

    findAll(): any[] 
    {
        return this.storage.findAll();
    }

    findById(id: number): any | null 
    {
        const usuariosJson = this.findAll();
        return usuariosJson.find((u: any) => u.id === id) || null;
    }

    findByDestacado(): any[]
    {
        const productosJsonDestacado = this.findAll();
        return productosJsonDestacado.filter((p:any) => p.destacado === true) || null;
    }

    findByCategoria(categoria: string): any[]
    {
        const productosJsonCategoria = this.findAll();
        return productosJsonCategoria.filter((p:any) => p.categoria === categoria) || null;
    }

    save(producto: Producto): boolean
    {
        const productosActual = this.findAll();
        producto.setId(productosActual.length > 0 ? productosActual[productosActual.length - 1].id + 1 : 1);
        productosActual.push(producto);
        this.storage.guardar(productosActual);

        return true;
    }

    deleteById(id: any): boolean 
    {
        const productosActual = this.findAll();
        const indice = productosActual.findIndex((u: any) => u.id === id);

        if (indice !== -1) 
        {
            productosActual.splice(indice, 1);
            this.storage.guardar(productosActual);
            return true;
        }
        
        return false;
    }
}