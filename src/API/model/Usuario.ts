export class Usuario 
{
    id: number | null;
    nombreUsuario: string | null;
    email: string | null;
    contraseña: string | null;
    telefono: string | null;
    region: string | null;
    comuna: string | null;
    tipo: string;

    constructor() 
    {
        this.id = null;
        this.nombreUsuario = null;
        this.email = null;
        this.contraseña = null;
        this.telefono = null;
        this.region = null;
        this.comuna = null;
        this.tipo = "usuario";
    }
}