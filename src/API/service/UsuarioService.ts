import type { Usuario } from "../../model/Usuario";
import { type UsuarioRepository } from "../repository/UsuarioRepository";

export class UsuarioService 
{
    private usuarioRepository: UsuarioRepository;

    constructor(usuarioRepository: UsuarioRepository) 
    {
        this.usuarioRepository = usuarioRepository;
    }

    findAll(): Usuario[]
    {
        return this.usuarioRepository.findAll();
    }

    findById(id: number): Usuario | null
    {
        return this.usuarioRepository.findById(id);
    }

    save(usuario: Usuario): boolean
    {
        return this.usuarioRepository.save(usuario);
    }

    deleteById(id: number): boolean
    {
        return this.usuarioRepository.deleteById(id);
    }
}