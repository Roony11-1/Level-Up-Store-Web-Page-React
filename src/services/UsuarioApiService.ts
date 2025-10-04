import { Usuario } from "../model/Usuario";
import { usuarioController } from "../API/Api";
import { BaseApiService } from "./BaseApiService";

export class UsuarioApiService extends BaseApiService<Usuario> 
{
  constructor() 
  {
    super(usuarioController, Usuario);
  }
}