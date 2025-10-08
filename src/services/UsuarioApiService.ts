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

  async login(loginRequest: LoginRequest): Promise<Usuario | null>
  {
    const loginResponse = await this.controller.login(loginRequest)

    if (!loginResponse)
      return null

    return this.modelClass.fromJSON(loginResponse);
  }
}