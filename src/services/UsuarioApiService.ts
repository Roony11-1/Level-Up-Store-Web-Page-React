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

  async login(loginRequest: LoginRequest): Promise<{ success: boolean; message: string; usuario?: Usuario }> 
  {
    const resultado = await this.controller.login(loginRequest);

    let usuarioInstancia: Usuario | undefined;
    
    if (resultado.usuario)
      usuarioInstancia = Usuario.fromJSON(resultado.usuario);

    return {
      success: resultado.success,
      message: resultado.message,
      usuario: usuarioInstancia
    };
  }

  async fetchByEmail(email: string)
  {
    return this.controller.findByEmail(email);
  }
}