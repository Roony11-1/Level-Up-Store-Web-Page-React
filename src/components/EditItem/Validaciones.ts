export class ValidacionesFormulario
{
    public static obligatorio(valor: string): string | null 
    {
        if (!valor || valor.trim() === "")
            return "Este campo es obligatorio";
        return null;
    }

    public static validarEmail(email:string): string | null
    {
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
            return "El correo electrónico no es válido"
        return null
    }
}