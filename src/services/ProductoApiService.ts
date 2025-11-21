import axios from "axios";
import { Producto } from "../model/Producto";
import { BaseApiService } from "./BaseApiService";

export class ProductoApiService extends BaseApiService<Producto> 
{
  constructor() 
  {
    super("productos", Producto);
  }

  async fetchByDestacado(): Promise<Producto[]>
  {
    const res = await axios.get(`${this.url}/getDestacados`);
    return res.data ? res.data.map((d: any) => this.modelClass.fromJSON(d)) : [];
  }

  async fetchByCategoria(categoria: string): Promise<Producto[]>
  {
    const datos = await this.controller.findByCategoria(categoria);
    return datos ? datos.map((d: any) => this.modelClass.fromJSON(d)) : [];
  }

  async fetchByMarca(marca: string): Promise<Producto[]>
  {
    const datos = await this.controller.findByMarca(marca);
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

  async fetchProductoConRelacionados(nombre: string): Promise<{ producto: Producto | null, relacionados: Producto[] }> 
  {
    const res = await axios.get(`${this.url}/con-relacionados/${nombre}`);

    const data = res.data;

    return {
      producto: data.producto ? this.modelClass.fromJSON(data.producto) : null,
      relacionados: data.relacionados
        ? data.relacionados.map((p: any) => this.modelClass.fromJSON(p))
        : []
    };
  }

  async getMarcas(): Promise<string[]>
  {
    try 
    {
      const res = await axios.get(`${this.url}/getMarcas`);
      return res.data ?? [];
    } 
    catch 
    {
      return [];
    }
  }

  async getCategorias(): Promise<string[]>
  {
    try 
    {
      const res = await axios.get(`${this.url}/getCategorias`);
      return res.data ?? [];
    } 
    catch 
    {
      return [];
    }
  }
}