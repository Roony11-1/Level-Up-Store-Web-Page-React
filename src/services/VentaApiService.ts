import { Venta } from "../model/Venta";
import { BaseApiService } from "./BaseApiService";

export class VentaApiService extends BaseApiService<Venta>
{
    constructor()
    {
        super("venta", Venta);
    }
}