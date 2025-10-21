import { Usuario } from "../../model/Usuario";
import "../../assets/css/DisplayUser/displayuser.css"
import { ProfilePhoto } from "../ProfilePhoto/ProfilePhoto";
import { Boton } from "../Boton/Boton";

export function DisplayUser({ usuario }: { usuario: Usuario }) {
    return (
        <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
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



export function DisplayUserTable({ usuarios }: { usuarios: Usuario[] }) 
{
    const handleClick = (e: React.MouseEvent<HTMLTableCellElement>) => 
    {
        const celda = e.currentTarget;
        console.log("Texto:", celda.textContent);
        console.log("Elemento:", celda);
    };

    if (!(usuarios.length > 0))
        return(
            <h1>No hay usuarios que mostrar!</h1>
        );
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Contraseña</th>
                    <th>Email</th>
                    <th>Tipo</th>
                    <th>Teléfono</th>
                    <th>Región</th>
                    <th>Comuna</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map((u) => 
                (
                    <tr key={u.getId()}>
                        <td>{u.getId()}</td>
                        <td><ProfilePhoto profilePhoto={u.getProfilePhoto()}/></td>
                        <td><p onClick={handleClick}>{u.getNombreUsuario()}</p></td>
                        <td><p onClick={handleClick}>{u.getContraseña()}</p></td>
                        <td><p onClick={handleClick}>{u.getEmail()}</p></td>
                        <td><p onClick={handleClick}>{u.getTipo()}</p></td>
                        <td><p onClick={handleClick}>{u.getTelefono() || "-"}</p></td>
                        <td><p onClick={handleClick}>{u.getRegion() || "-"}</p></td>
                        <td><p onClick={handleClick}>{u.getComuna() || "-"}</p></td>
                        {/* Acciones */}
                        <td>
                            <div className="contenedor-acciones">
                                <div>
                                    <Boton>
                                        editar
                                    </Boton>
                                </div>
                                <div>
                                    <Boton>
                                        borrar
                                    </Boton>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}