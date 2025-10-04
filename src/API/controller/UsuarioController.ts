import type { Usuario } from "../../model/Usuario";
import { type UsuarioService } from "../service/UsuarioService";

export class UsuarioController
{
    private usuarioService: UsuarioService;
    constructor(usuarioService: UsuarioService)
    {
        this.usuarioService = usuarioService;
    }

    findAll(): Usuario[]
    {
        return this.usuarioService.findAll();
    }

    findById(id: number): Usuario | null
    {
        return this.usuarioService.findById(id);
    }

    save(usuario: Usuario): boolean
    {
        return this.usuarioService.save(usuario);
    }

    deleteById(id: number): boolean
    {
        return this.usuarioService.deleteById(id);
    }
}