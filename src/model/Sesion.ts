import type { Usuario } from "./Usuario";

export class Sesion
{
    private usuarioActivo: Usuario | null;

    constructor()
    {
        this.usuarioActivo = null;
    }

    setUsuarioActivo(usuarioActivo: Usuario | null) { this.usuarioActivo = usuarioActivo;; return this; }
    getUsuarioActivo() { return this.usuarioActivo; }
}