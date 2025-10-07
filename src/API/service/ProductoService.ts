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

    save(usuario: Producto): boolean
    {
        return this.productoRepository.save(usuario);
    }

    deleteById(id: number): boolean
    {
        return this.productoRepository.deleteById(id);
    }
}