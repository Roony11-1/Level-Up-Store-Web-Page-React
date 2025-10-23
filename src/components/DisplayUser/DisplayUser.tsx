import { Usuario } from "../../model/Usuario";
import "../../assets/css/DisplayUser/displayuser.css"
import { FormInput } from "../Formularios/FormInput/FormInput";
import { FormSelect } from "../Formularios/FormSelect/FormSelect";
import { useEffect, useState } from "react";
import { UbicacionService } from "../../utilities/RegionComuna";
import { useUsuarioService } from "../../context/UsuarioServiceContext/UseUsuarioService";
import { Boton } from "../Boton/Boton";

export function DisplayUser({ usuario }: { usuario: Usuario }) 
{
    return (
        <div>
            <img src={usuario.getProfilePhoto()} width={150} height={150} />
            <p>Id: {usuario.getId()}</p>
            <p>Nombre: {usuario.getNombreUsuario()}</p>
            <p>Contraseña: {usuario.getContraseña()}</p>
            <p>Email: {usuario.getEmail()}</p>
            <p>Tipo: {usuario.getTipo()}</p>
            <p>Teléfono: {usuario.getTelefono() || "No proporcionado"}</p>
            <p>Región: {usuario.getRegion() || "No proporcionado"}</p>
            <p>Comuna: {usuario.getComuna() || "No proporcionado"}</p>
            <p>Foto: {usuario.getProfilePhoto()}</p>
        </div>
    );
}

 interface EditUserProps
 {
    usuario: Usuario;
 }

export function EditUser({usuario}: EditUserProps)
{
    const [formData, setFormData] = useState({
        nombreUsuario: usuario.getNombreUsuario()  || "No proporcionado",
        email: usuario.getEmail()  || "No proporcionado",
        confirmarEmail: "",
        contraseña: usuario.getContraseña()  || "No proporcionado",
        confirmarContraseña: "",
        telefono: usuario.getTelefono()  || "",
        region: usuario.getRegion() || "",
        comuna: usuario.getComuna() || ""
    });

    const [regiones, setRegiones] = useState<string[]>([]);
    const [comunas, setComunas] = useState<string[]>([]);

    const { usuarioService } = useUsuarioService()

    useEffect(() => 
    {
        setRegiones(UbicacionService.getRegiones());
    }, []);

    useEffect(() => 
    {
        if (formData.region) 
            setComunas(UbicacionService.getComunas(formData.region));
        else
            setComunas([]);
    }, [formData.region]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => 
    {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => 
    {
        const { name, value } = e.target;

        setFormData((prev) => 
        {
            // Reiniciamos el valor de comuna
            if (name === "region")
                return { ...prev, region: value, comuna: "" };

            return { ...prev, [name]: value };
        });
    };

    function validarFormRegistro(formData: any): string[] 
    {
        const errores: string[] = [];

        if (!formData.nombreUsuario.trim())
            errores.push("El nombre de usuario es obligatorio.");

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email))
            errores.push("El correo electrónico no es válido.");

        if (formData.confirmarEmail && formData.email !== formData.confirmarEmail)
            errores.push("Los correos no coinciden.");

        if (formData.contraseña.length < 6)
            errores.push("La contraseña debe tener al menos 6 caracteres.");

        if (formData.confirmarContraseña && formData.contraseña !== formData.confirmarContraseña)
            errores.push("Las contraseñas no coinciden.");

        if (formData.telefono)
            if (!/^\d{9}$/.test(formData.telefono))
                errores.push("El teléfono debe tener 9 dígitos.");

        if (usuario.getTipo() !== "admin")
        {
            if (!formData.region)
                errores.push("Debes seleccionar una región!")

            if (!formData.comuna)
                errores.push("Debes seleccionar una comuna!")
        }

        return errores;
    }

    const handleSubmit = async (e: React.FormEvent) => 
    {
        e.preventDefault();

        const errores = validarFormRegistro(formData);

        if (errores.length > 0) 
        {
            alert("Errores:\n" + errores.join("\n"));
            return;
        }

        
        const usuarioNuevo = new Usuario()
            .setId(usuario.getId())
            .setNombreUsuario(formData.nombreUsuario)
            .setEmail(formData.email)
            .setContraseña(formData.contraseña)
            .setTelefono(formData.telefono)
            .setRegion(formData.region)
            .setComuna(formData.comuna)
            .setProfilePhoto(usuario.getProfilePhoto())
            .setTipo(usuario.getTipo() || "usuario");

        const resultado = await usuarioService.update(usuario.getId(), usuarioNuevo);

        if (resultado.success)
        {
            setFormData({
                nombreUsuario: usuarioNuevo.getNombreUsuario()  || "No proporcionado",
                email: usuarioNuevo.getEmail()  || "No proporcionado",
                confirmarEmail: "",
                contraseña: usuarioNuevo.getContraseña()  || "No proporcionado",
                confirmarContraseña: "",
                telefono: usuarioNuevo.getTelefono()  || "",
                region: usuarioNuevo.getRegion() || "",
                comuna: usuarioNuevo.getComuna() || ""
            });
        }

        alert(resultado.message);
        return resultado.success;
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="panel-usuario-editar">
                    <FormInput 
                        name='nombreUsuario'
                        label='Nombre de Usuario'
                        onChange={handleChange}
                        value={formData.nombreUsuario} />
                    <FormInput 
                        name='email'
                        label='Correo'
                        onChange={handleChange}
                        value={formData.email} />
                    <FormInput 
                        name='confirmarEmail'
                        label='Confirmar Correo'
                        onChange={handleChange}
                        value={formData.confirmarEmail} />
                    <FormInput 
                        name='contraseña'
                        label='Contraseña'
                        onChange={handleChange}
                        value={formData.contraseña} />
                    <FormInput 
                        name='confirmarContraseña'
                        label='Confirmar Contraseña'
                        onChange={handleChange}
                        value={formData.confirmarContraseña} />
                    <FormInput
                        name='telefono'
                        label='Telefono (Opcional)'
                        placeholder='9XXXXXXXX'
                        onChange={handleChange}
                        value={formData.telefono} />
                    <FormSelect
                        name="region"
                        label='Región'
                        value={formData.region}
                        options={regiones.map(r => ({ value: r, label: r }))}
                        onChange={handleSelectChange} />
                    <FormSelect
                        name="comuna"
                        label='Comuna'
                        value={formData.comuna}
                        options={comunas.map(c => ({ value: c, label: c }))}
                        onChange={handleSelectChange} />
                    <div>
                        <Boton
                            className='formulario'
                            type="submit">
                                Guardar
                        </Boton> 
                    </div>
                </div>
            </form>
        </>
    );
}