import { ModeloBase } from "./ModeloBase";
import type { Usuario } from "./Usuario";

export class Sesion extends ModeloBase
{
    private usuarioActivo: Usuario | null;

    constructor()
    {
        super();
        this.usuarioActivo = null;
    }

    setUsuarioActivo(usuarioActivo: Usuario | null) { this.usuarioActivo = usuarioActivo;; return this; }
    getUsuarioActivo() { return this.usuarioActivo; }
}