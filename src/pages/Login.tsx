import { useState } from "react";

export function Login() 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => 
    {
        e.preventDefault();

        alert(`Email: ${email}, Password: ${password}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Correo Electrónico"
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>

            <input
                type="password"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}/>

            <button type="submit">Iniciar Sesión</button>
        </form>
    );
}