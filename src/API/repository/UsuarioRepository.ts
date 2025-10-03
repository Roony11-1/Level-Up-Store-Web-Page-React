export interface UsuarioRepository
{
    findAll(): Promise<any>;
}