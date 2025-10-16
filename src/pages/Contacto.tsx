import '../css/contacto.css'
import {useState} from "react";
export function Contacto() {
    const [nombre,setNombre]=useState('')
    const [mensaje,setMensaje]=useState('')
    const [correo,setCorreo]=useState('')
    const [respuesta,setRespuesta]=useState('')

    const enviarForm=(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log(mensaje)
        setRespuesta(mensaje)
    }
    return (
        
        <form onSubmit={enviarForm}>
            <h1>FORMULARIO DE CONTACTO</h1>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name='nombre' id='nombre' 
            value={nombre} onChange={(e)=>setNombre(e.target.value)}/>

            <label htmlFor="correo">Correo:</label>
            <input type="text" name='correo' id='correo'
            value={correo} onChange={(e)=>setCorreo(e.target.value)}/>

            <label htmlFor="mensaje">Mensaje:</label>
            <input type="text" name='mensaje' id='mensaje' 
            value={mensaje} onChange={(e)=>setMensaje(e.target.value)}/>
            <input type="submit" value="enviar" />
            {respuesta && <p role="alert">{respuesta}</p>}
        </form>


    )
}
export default Contacto