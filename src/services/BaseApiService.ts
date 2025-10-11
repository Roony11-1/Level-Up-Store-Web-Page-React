import { type ServiceApiInterface } from "./ServiceApiInterface";

export abstract class BaseApiService<T> implements ServiceApiInterface<T> 
{
  protected apiStrategy: any;
  protected controller: any;
  protected modelClass: { fromJSON(json: any): T };

  constructor(controller: any, modelClass: { fromJSON(json: any): T }) 
  {
    this.controller = controller;
    this.modelClass = modelClass;
  }

  getModelClass()
  {
    return this.modelClass;
  }

  async fetchAll(): Promise<T[]> 
  {
    const datosJson = await this.controller.findAll();
    return datosJson ? datosJson.map((d: any) => this.modelClass.fromJSON(d)) : [];
  }

  async fetchById(id: number): Promise<T | null> 
  {
    const datoJson = await this.controller.findById(id);
    return datoJson ? this.modelClass.fromJSON(datoJson) : null;
  }

  async save(entity: T): Promise<{ success: boolean; message: string }> 
  {
      return this.controller.save(entity);
  }

  async deleteById(id: number): Promise<boolean>
  {
    return this.controller.deleteById(id);
  }
}