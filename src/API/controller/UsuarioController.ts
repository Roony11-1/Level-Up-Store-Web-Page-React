import { type UsuarioService } from "../service/UsuarioService";

export class UsuarioController
{
    private usuarioService: UsuarioService;
    constructor(usuarioService: UsuarioService)
    {
        this.usuarioService = usuarioService;
    }

    async findAll()
    {
        return this.usuarioService.findAll();
    }
}