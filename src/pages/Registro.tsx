import { useState } from 'react';
import "../assets/css/Registro/registro.css"
import { UsuarioApiService } from '../services/UsuarioApiService';
import { FormSelect } from '../components/Formularios/FormSelect/FormSelect';
import { FormInput } from '../components/Formularios/FormInput/Forminput';

export function Registro() 
{
    const [formData, setFormData] = useState({
        nombreUsuario: "",
        email: "",
        confirmarEmail: "",
        contraseña: "",
        confirmarContraseña: "",
        telefono: "",
        region: "",
        comuna: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => 
    {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    function validarFormRegistro(formData: any): string[] 
    {
        const errores: string[] = [];

        if (!formData.nombreUsuario.trim())
            errores.push("El nombre de usuario es obligatorio.");

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email))
            errores.push("El correo electrónico no es válido.");

        if (formData.email !== formData.confirmarEmail)
            errores.push("Los correos no coinciden.");

        if (formData.contraseña.length < 6)
            errores.push("La contraseña debe tener al menos 6 caracteres.");

        if (formData.contraseña !== formData.confirmarContraseña)
            errores.push("Las contraseñas no coinciden.");


        if (formData.telefono)
            if (!/^\d{8}$/.test(formData.telefono))
                errores.push("El teléfono debe tener 9 dígitos.");

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

        const usuarioService = new UsuarioApiService();
        const usuario = usuarioService.getModelClass().fromJSON(formData)

        const resultado = await usuarioService.save(usuario);

        if (resultado.success)
        {
            setFormData({
                nombreUsuario: "",
                email: "",
                confirmarEmail: "",
                contraseña: "",
                confirmarContraseña: "",
                telefono: "",
                region: "",
                comuna: ""
            });
        }

        alert(resultado.message);
    };

    return (
        <div>
            <h1>Página de Registro</h1>

        <div className='registroContainer'>
        <form onSubmit={handleSubmit}>
                <table>
                    <FormInput 
                        name='nombreUsuario'
                        label='Nombre de Usuario'
                        onChange={handleChange}
                        value={formData.nombreUsuario} />
                    <FormInput 
                        name='email'
                        label='Confirmar Correo'
                        onChange={handleChange}
                        value={formData.confirmarEmail} />
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
                        options={[]}
                        onChange={handleSelectChange} />
                    <FormSelect
                        name="comuna"
                        label='Comuna'
                        value={formData.comuna}
                        options={[]}
                        onChange={handleSelectChange} />
                    <tr>
                        <td colSpan={2}>
                            <button>Registrar</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        </div>
    )
}