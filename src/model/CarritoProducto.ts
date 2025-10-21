import { ModeloBase } from "./ModeloBase";

export class CarritoProducto extends ModeloBase{
     id:number;
     nombre:string
     precio:number;
     imagen:string;

    constructor()
    {
        super()
        this.id=0;
        this.nombre="Ninguno";
        this.precio=0;
        this.imagen="/productos/istockphoto-1396814518-612x612.jpg"
    }
    setId(id: number): this {
        this.id = id;
        return this;
    }

    setNombre(nombre: string): this {
        this.nombre = nombre;
        return this;
    }

    setPrecio(precio: number): this {
        this.precio = precio;
        return this;
    }

    setImagen(imagen: string): this {
        this.imagen = imagen;
        return this;
    }
}