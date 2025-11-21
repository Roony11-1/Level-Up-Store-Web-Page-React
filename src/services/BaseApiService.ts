import axios from "axios";
import { type ServiceApiInterface } from "./ServiceApiInterface";

export abstract class BaseApiService<T> implements ServiceApiInterface<T> 
{
  protected apiStrategy: any;
  protected endpoint: string;
  protected modelClass: { fromJSON(json: any): T };
  protected baseUrl: string = "http://localhost:8001/api";

  constructor(endpoint: string, modelClass: { fromJSON(json: any): T }) 
  {
    this.endpoint = endpoint;
    this.modelClass = modelClass;
  }

  getModelClass()
  {
    return this.modelClass;
  }

  protected get url(): string 
  {
    return `${this.baseUrl}/${this.endpoint}`;
  }

  async fetchAll(): Promise<T[]> 
  {
    const res = await axios.get(this.url);
    return res.data.map((d: any) => this.modelClass.fromJSON(d));
  }

  async fetchById(id: number): Promise<T | null> 
  {
    try 
    {
      const res = await axios.get(`${this.url}/id/${id}`);
      return this.modelClass.fromJSON(res.data);
    } 
    catch (err: any) 
    {
      if (err.response?.status === 404) 
        return null;
      throw err;
    }
  }

  async save(entity: T): Promise<{ success: boolean; message: string }> {
    try 
    {
      const res = await axios.post(this.url, entity);
      return {
        success: true,
        message: res.data?.message ?? "Creado correctamente"
      };
    } 
    catch (err: any) 
    {
      return {
        success: false,
        message: err.response?.data?.message ?? "Error al crear - Error: " +err
      };
    }
  }

  async update(id: number, entity: T): Promise<{ success: boolean; message: string }> 
  {
    try 
    {
      const res = await axios.put(`${this.url}/${id}`, entity);
      return {
        success: true,
        message: res.data?.message ?? "Actualizado correctamente",
      };
    } 
    catch (err: any) 
    {
      return {
        success: false,
        message: err.response?.data?.message ?? "Error al actualizar",
      };
    }
  }

  async deleteById(id: number): Promise<{ success: boolean; message: string }> {
    try 
    {
      const res = await axios.delete(`${this.url}/${id}`);
      return {
        success: true,
        message: res.data?.message ?? "Eliminado correctamente",
      };
    } 
    catch (err: any) 
    {
      return {
        success: false,
        message: err.response?.data?.message ?? "Error al eliminar",
      };
    }
  }
}