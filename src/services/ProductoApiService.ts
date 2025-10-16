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

  async fetchProductoConRelacionados(nombre: string): Promise<{producto: Producto | null, relacionados: Producto[]}> 
  {
    const producto = await this.fetchByNombre(nombre);

    if (!producto) 
      return { producto: null, relacionados: [] };

    const porCategoria = await this.fetchByCategoria(producto.getCategoria());
    const porMarca = await this.fetchByMarca(producto.getMarca());

    let relacionados = [...porCategoria, ...porMarca];

    // Filtrar duplicados y producto actual
    const idsVistos = new Set<number>();
    relacionados = relacionados.filter(p => {
      if (p.getId() === producto.getId()) 
        return false;
      if (idsVistos.has(p.getId())) 
        return false;
      idsVistos.add(p.getId());
      return true;
    });

      return { producto, relacionados };
  }
}