import type { Producto } from "../../model/Producto";
import { type ProductoRepository } from "../repository/ProductoRepository";

export class ProductoService 
{
    private productoRepository: ProductoRepository;

    constructor(productoRepository: ProductoRepository) 
    {
        this.productoRepository = productoRepository;
    }

    findAll(): Producto[]
    {
        return this.productoRepository.findAll();
    }

    findById(id: number): Producto | null
    {
        return this.productoRepository.findById(id);
    }

    findByDestacado(): Producto[]
    {
        return this.productoRepository.findByDestacado();
    }

    findByCategoria(categoria: string): Producto[]
    {
        return this.productoRepository.findByCategoria(categoria);
    }

    findByNombre(nombre: string): Producto[]
    {
        return this.productoRepository.findByNombre(nombre);
    }

    findByMarca(marca: string): Producto[]
    {
        return this.productoRepository.findByMarca(marca);
    }

    findProducto(filtro: string): Producto[] 
    {
        const productos = [
            ...this.findByCategoria(filtro),
            ...this.findByNombre(filtro),
            ...this.findByMarca(filtro)
        ];
    
        const productosUnicos = productos.filter(
            (producto, index, self) =>
                index === self.findIndex(p => p.id === producto.id)
        );
    
        return productosUnicos;
    }

    save(usuario: Producto): boolean
    {
        return this.productoRepository.save(usuario);
    }

    deleteById(id: number): boolean
    {
        return this.productoRepository.deleteById(id);
    }
}