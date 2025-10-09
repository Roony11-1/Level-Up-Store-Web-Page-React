import { useState } from "react";
import { LoginRequest } from "../model/LoginRequest";
import { UsuarioApiService } from "../services/UsuarioApiService";

import "../assets/css/Login/login.css"

export function Login() 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => 
    {
        e.preventDefault();

        const loginRequest: LoginRequest = new LoginRequest(email, password);


        const usuarioLogin = await new UsuarioApiService().login(loginRequest);

        if (usuarioLogin)
            alert(`Email: ${usuarioLogin.getEmail()}, Password: ${usuarioLogin.getContraseña()}`);
        else
            alert("Error en el login");
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td>Email: </td>
                            <td>
                                <input
                                    placeholder="Correo Electrónico"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Contraseña: </td>
                            <td>
                                <input
                                    type="password"
                                    placeholder="Contraseña"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}/>
                            </td>
                        </tr>
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