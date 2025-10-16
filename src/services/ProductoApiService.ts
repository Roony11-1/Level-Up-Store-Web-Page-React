import { Producto } from "../model/Producto";
import { productoController } from "../API/Api";
import { BaseApiService } from "./BaseApiService";

export class ProductoApiService extends BaseApiService<Producto> 
{
  constructor() 
  {
    super(productoController, Producto);
  }

  async fetchByDestacado(): Promise<Producto[]>
  {
    const datos = await this.controller.findByDestacado();
    return datos ? datos.map((d: any) => this.modelClass.fromJSON(d)) : [];
  }

  async fetchByCategoria(categoria: string): Promise<Producto[]>
  {
    const datos = await this.controller.findByCategoria(categoria);
    return datos ? datos.map((d: any) => this.modelClass.fromJSON(d)) : [];
  }

  async fetchByNombre(nombre: string): Promise<Producto | null>
  {
    const datos = await this.controller.findByNombre(nombre);
    return datos && datos.length > 0 ? this.modelClass.fromJSON(datos[0]) : null;
  }

  async fetchByFiltro(filtro: string): Promise<Producto[]>
  {
    const datos = await this.controller.findProducto(filtro);
    return datos ? datos.map((d: any) => this.modelClass.fromJSON(d)) : [];
  }
}