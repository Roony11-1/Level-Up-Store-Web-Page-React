import { UsuarioRepository } from "./repository/UsuarioRepository";
import { UsuarioService } from "./service/UsuarioService";
import { UsuarioController } from "./controller/UsuarioController";

import { ProductoRepository } from "./repository/ProductoRepository";
import { ProductoService } from "./service/ProductoService";
import { ProductoController } from "./controller/ProductoController";

import { BlogRepository } from "./repository/BlogRepository";
import { BlogService } from "./service/BlogService";
import { BlogController } from "./controller/BlogController";

const usuarioRepository = new UsuarioRepository();
const usuarioService = new UsuarioService(usuarioRepository);
export const usuarioController = new UsuarioController(usuarioService);

const productoRepository = new ProductoRepository();
const productoService = new ProductoService(productoRepository);
export const productoController = new ProductoController(productoService);

const blogRepository = new BlogRepository();
const blogService = new BlogService(blogRepository);
export const blogController = new BlogController(blogService);