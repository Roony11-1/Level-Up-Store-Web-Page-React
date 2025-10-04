import { Usuario } from "../../model/Usuario";

export function UsuariosFalsos() 
{
    return [
                new Usuario()
                    .setId(1)
                    .setNombreUsuario("Admin")
                    .setEmail("admin@levelup.com")
                    .setContraseña("123456")
                    .setTipo("admin"),
                new Usuario()
                    .setId(2)
                    .setNombreUsuario("User")
                    .setEmail("user@levelup.com")
                    .setContraseña("123456")
                    .setTipo("usuario")
                    .setComuna("Santiago")
                    .setRegion("Metropolitana")
                    .setTelefono("987654321")];
}