import { useState } from "react";
import { LoginRequest } from "../model/LoginRequest";
import { UsuarioApiService } from "../services/UsuarioApiService";

import "../assets/css/Login/login.css"
import { FormInput } from "../components/Formularios/FormInput/Forminput";

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
            
        }
        
        alert(resultado.message);
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <table>
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
                        <tr>
                            <td colSpan={2}>
                                <button type="submit">Iniciar Sesión</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
}