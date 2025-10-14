import '../css/contacto.css'
export function Contacto() {
    return (

        <div className="contacto">
            <div className='contenedor-logo'>
                
            <img src="/Logo_level-Up.png" alt="nuestra empresa" width="150px" height="150px" />
            </div>
            <form method="post" id="form-contacto">
                <div className='contenedor-tabla'>
                    <table>
                        <tr>
                            <td colSpan={2} style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
                                Formulario de contactos
                            </td>
                        </tr>
                        <tr>
                            <td className="contacto td">
                                <label htmlFor="nombre">NOMBRE COMPLETO:</label>
                            </td>
                            <td>
                                <input type="text" name="nombre" id="nombre" required />
                            </td>
                        </tr>
                        <tr>
                            <td className="contacto td">
                                <label htmlFor="correo">CORREO</label>
                            </td>
                            <td>
                                <input type="email" name="Correo" id="correo" required />
                            </td>
                        </tr>
                        <tr>
                            <td className="contacto td">
                                <label htmlFor="contenido">CONTENIDO DEL MENSAJE</label>
                            </td>
                            <td>
                                <textarea className="contacto textarea" name="contenido" id="contenido" rows={4} required></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{ textAlign: "center" }}>
                                <input type="submit" value="ENVIAR MENSAJE" />
                            </td>
                        </tr>
                    </table>
                </div>
            </form>
        </div>

    )
}