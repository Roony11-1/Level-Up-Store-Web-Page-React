import { Usuario } from "../../model/Usuario";


export function DisplayUser({ usuario }: { usuario: Usuario }) {
    return (
        <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <p>Id: {usuario.getId()}</p>
            <p>Nombre: {usuario.getNombreUsuario()}</p>
            <p>Contraseña: {usuario.getContraseña()}</p>
            <p>Email: {usuario.getEmail()}</p>
            <p>Tipo: {usuario.getTipo()}</p>
            <p>Teléfono: {usuario.getTelefono()}</p>
            <p>Región: {usuario.getRegion()}</p>
            <p>Comuna: {usuario.getComuna()}</p>
        </div>
    );
}
