import type { Usuario } from "../../model/Usuario";
import { type UsuarioRepository } from "../repository/UsuarioRepository";

export class UsuarioService 
{
    private usuarioRepository: UsuarioRepository;

    constructor(usuarioRepository: UsuarioRepository) 
    {
        this.usuarioRepository = usuarioRepository;
    }

    findAll(): any[]
    {
        return this.usuarioRepository.findAll();
    }

    findById(id: number): any | null
    {
        return this.usuarioRepository.findById(id);
    }

    findByEmail(email: string): any | null
    {
        return this.usuarioRepository.findByEmail(email);
    }

    save(usuario: Usuario): boolean
    {
        return this.usuarioRepository.save(usuario);
    }

    deleteById(id: number): boolean
    {
        return this.usuarioRepository.deleteById(id);
    }

    login(email: string, password: string): any | null
    {
        const usuario = this.findByEmail(email);

        if (usuario && usuario.contraseña === password) 
            return usuario;

        return null;
    }   
}