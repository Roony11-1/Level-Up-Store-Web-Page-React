import { UsuarioRepository } from "./repository/UsuarioRepository";
import { UsuarioService } from "./service/UsuarioService";
import { UsuarioController } from "./controller/UsuarioController";

const usuarioRepository = new UsuarioRepository();
const usuarioService = new UsuarioService(usuarioRepository);
export const usuarioController = new UsuarioController(usuarioService);