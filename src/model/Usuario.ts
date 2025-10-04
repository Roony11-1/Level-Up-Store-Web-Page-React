export class Usuario 
{
    private id: number | null;
    private nombreUsuario: string | null;
    private email: string | null;
    private contraseña: string | null;
    private telefono: string | null;
    private region: string | null;
    private comuna: string | null;
    private tipo: string;

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

    setId(id: number | null) { this.id = id; return this; }
    setNombreUsuario(nombre: string | null) { this.nombreUsuario = nombre; return this; }
    setEmail(email: string | null) { this.email = email; return this; }
    setContraseña(pass: string | null) { this.contraseña = pass; return this; }
    setTelefono(tel: string | null) { this.telefono = tel; return this; }
    setRegion(region: string | null) { this.region = region; return this; }
    setComuna(comuna: string | null) { this.comuna = comuna; return this; }
    setTipo(tipo: string) { this.tipo = tipo; return this; }

    getId(): number | null { return this.id; }
    getNombreUsuario(): string | null { return this.nombreUsuario; }
    getEmail(): string | null { return this.email; }
    getContraseña(): string | null { return this.contraseña; }
    getTelefono(): string | null { return this.telefono; }
    getRegion(): string | null { return this.region; }
    getComuna(): string | null { return this.comuna; }
    getTipo(): string | null { return this.tipo; }

    // Método estático para convertir JSON a instancia de Usuario
    static fromJSON(obj: Usuario): Usuario 
    {
        return new Usuario()
            .setId(obj.id ?? null)
            .setNombreUsuario(obj.nombreUsuario ?? null)
            .setEmail(obj.email ?? null)
            .setContraseña(obj.contraseña ?? null)
            .setTelefono(obj.telefono ?? null)
            .setRegion(obj.region ?? null)
            .setComuna(obj.comuna ?? null)
            .setTipo(obj.tipo ?? null);
    }
}