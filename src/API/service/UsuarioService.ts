import { type UsuarioRepository } from "../repository/UsuarioRepository";

export class UsuarioService 
{
    private usuarioRepository: UsuarioRepository;

    constructor(usuarioRepository: UsuarioRepository) 
    {
        this.usuarioRepository = usuarioRepository;
    }

    async findAll()
    {
        return this.usuarioRepository.findAll();
    }
}