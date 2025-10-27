import { ventaController } from "../API/Api";
import { Venta } from "../model/Venta";
import { BaseApiService } from "./BaseApiService";

export class VentaApiService extends BaseApiService<Venta>
{
    constructor()
    {
        super(ventaController, Venta);
    }

    async fetchByIdCliente(idCliente: number): Promise<any[]>
    {
        const datosJson = this.controller.findByIdCliente(idCliente);
        return datosJson ? datosJson.map((d: any) => this.modelClass.fromJSON(d)) : [];
    }
}