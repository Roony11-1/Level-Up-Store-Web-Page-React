import { Usuario } from "../model/Usuario";
import { BaseApiService } from "./BaseApiService";
import type { LoginRequest } from "../model/LoginRequest";
import axios from "axios";

export class UsuarioApiService extends BaseApiService<Usuario> 
{
  constructor() 
  {
    super("usuarios", Usuario);
  }

  async login(loginRequest: LoginRequest): Promise<{ success: boolean; message: string; entity?: Usuario }> 
  {
    try 
    {
      const res = await axios.post(`${this.url}/login`, loginRequest);

      let usuarioInstancia: Usuario | undefined;

      if (res.data.entity)
        usuarioInstancia = Usuario.fromJSON(res.data.entity);

      return {
        success: res.data.success,
        message: res.data.message,
        entity: usuarioInstancia
      };

    } 
    catch (err: any) 
    {
      return {
        success: false,
        message: err.response?.data?.message ?? "Error de conexión"
      };
    }
  }

  async fetchByEmail(email: string)
  {
    const res = await axios.get(`${this.url}/email/${email}`)

    return res.data; // Usuario
  }
}