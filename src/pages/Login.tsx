import { useState } from "react";
import { LoginRequest } from "../model/LoginRequest";
import { UsuarioApiService } from "../services/UsuarioApiService";

import "../assets/css/Formulario/formulario.css"
import { FormInput } from "../components/Formularios/FormInput/FormInput";
import { Boton } from "../components/Boton/Boton";

export function Login() 
{
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => 
    {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    function validarFormRegistro(formData: any): string[] 
    {
        const errores: string[] = [];

        if (!formData.email)
            errores.push("El correo es obligatorio.");

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email))
            errores.push("El correo electrónico no es válido.");

        if (!formData.password)
            errores.push("La contraseña es obligatoria.");

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

        const loginRequest: LoginRequest = new LoginRequest(formData.email, formData.password);
        const usuarioService = new UsuarioApiService();

        const resultado = await usuarioService.login(loginRequest);

        if (resultado.success) 
        {
            setFormData({
                email: "",
                password: ""
            });
            
            // Recibimos el usuario ya veremos que hacemos con el
            //const usuario = usuarioService.getModelClass().fromJSON(resultado.usuario)
        }

        alert(resultado.message);
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                <div className="formularioContainer">
                    <FormInput 
                        name='email'
                        label='Correo Electrónico'
                        onChange={handleChange}
                        value={formData.email} />
                    <FormInput 
                        name='password'
                        label='Contraseña'
                        onChange={handleChange}
                        value={formData.password} />
                    <Boton>Iniciar Sesión</Boton>
                </div>
            </form>
        </div>
    );
}