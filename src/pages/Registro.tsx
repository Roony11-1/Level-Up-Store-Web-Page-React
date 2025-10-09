import { useState } from 'react';
import "../assets/css/Registro/registro.css"

export function Registro() 
{
    const [nombreUsuario, setNombreUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [confirmarEmail, setConfirmarEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmarContraseña, setConfirmarContraseña] = useState("");
    const [telefono, setTelefono] = useState("");

    const handleSubmit = async (e: React.FormEvent) => 
    {
        e.preventDefault();
        alert("Mira soy una alerta!");
    };

    return (
        <div>
            <h1>Página de Registro</h1>

        <div className='registroContainer'>
        <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>Nombre de Usuario:</td>
                        <td>
                            <input 
                                placeholder="Nombre de Usuario"
                                onChange={(e) => setNombreUsuario(e.target.value)}
                                value={nombreUsuario}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Correo:</td>
                        <td>
                            <input
                                placeholder="Correo"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Confirmar Correo:</td>
                        <td>
                            <input
                                placeholder="Confirmar Correo"
                                onChange={(e) => setConfirmarEmail(e.target.value)}
                                value={confirmarEmail}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Contraseña:</td>
                        <td>
                            <input
                                placeholder="Contraseña"
                                onChange={(e) => setContraseña(e.target.value)}
                                value={contraseña}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Confirmar Contraseña:</td>
                        <td>
                            <input
                                placeholder="Confirmar Contraseña"
                                onChange={(e) => setConfirmarContraseña(e.target.value)}
                                value={confirmarContraseña}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Telefono (Opcional):</td>
                        <td>
                            <input
                                placeholder="Telefono (Opcional)"
                                onChange={(e) => setTelefono(e.target.value)}
                                value={telefono}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Región:</td>
                        <td>
                            <select id="region" required>
                            <option value="">Seleccione región</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Comuna:</td>
                        <td>
                            <select id="comuna" required>
                            <option value="">Seleccione comuna</option>
                            </select>
                        </td>
                    </tr>
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