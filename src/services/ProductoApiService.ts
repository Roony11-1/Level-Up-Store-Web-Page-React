import { Producto } from "../model/Producto";
import { productoController } from "../API/Api";
import { BaseApiService } from "./BaseApiService";

export class ProductoApiService extends BaseApiService<Producto> 
{
  constructor() 
  {
    super(productoController, Producto);
  }
}