import { ModeloBase } from "./ModeloBase";

export class Sesion extends ModeloBase
{
    private idUsuarioActivo: number | null;

    constructor()
    {
        super();
        this.idUsuarioActivo = null;
    }

    setIdUsuarioActivo(idUsuarioActivo: number | null) { this.idUsuarioActivo = idUsuarioActivo;; return this; }
    getIdUsuarioActivo() { return this.idUsuarioActivo; }
}