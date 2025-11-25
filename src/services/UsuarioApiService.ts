import { Usuario } from "../model/Usuario";
import { BaseApiService } from "./BaseApiService";
import type { LoginRequest } from "../model/LoginRequest";
import axios from "axios";
import type { ApiResponseDTO } from "../model/dto/ApiResponseDTO";
import type { AuthResponseDTO } from "../model/dto/AuthResponseDTO";

export class UsuarioApiService extends BaseApiService<Usuario> 
{
  constructor() 
  {
    super("usuarios", Usuario);
  }

  async login(loginRequest: LoginRequest): Promise<ApiResponseDTO<AuthResponseDTO>> 
  {
    try 
    {
      const res = await axios.post(`${this.baseUrl}/auth/authenticate`, loginRequest);

      return {
        message: res.data.message,
        data: {
          id: res.data.data.id,
          token: res.data.data.token
        }
      };

    } 
    catch (err: any) 
    {
      return {
        message: err.response?.data?.message ?? 'Error al autenticarse',
        data: null
      };
    }
  }

  async fetchByEmail(email: string)
  {
    const res = await axios.get(`${this.url}/email/${email}`)

    return res.data; // Usuario
  }

  async findProfile(id: number, token: string) 
  {
    const res = await axios.get(`${this.baseUrl}/auth/profile/${id}`,
      {
        headers: 
        {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return this.modelClass.fromJSON(res.data);
  }
}