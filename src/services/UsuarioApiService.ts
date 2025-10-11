import { Usuario } from "../model/Usuario";
import { usuarioController } from "../API/Api";
import { BaseApiService } from "./BaseApiService";
import type { LoginRequest } from "../model/LoginRequest";

export class UsuarioApiService extends BaseApiService<Usuario> 
{
  constructor() 
  {
    super(usuarioController, Usuario);
  }

  async login(loginRequest: LoginRequest): Promise<{ success: boolean; message: string }> 
  {
    return await this.controller.login(loginRequest);

  }
}