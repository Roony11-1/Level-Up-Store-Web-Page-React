import { AdminPanelBase } from "./AdminPanelBase";
import { Usuario } from "../../model/Usuario";
import { useUsuarioService } from "../../context/UsuarioServiceContext/UseUsuarioService";
import { EditItem } from "../EditItem/EditItem";
import { editUsuarioConfig } from "../EditItem/editUsuarioConfig";
import { AdminPanelBotones } from "./AdminPanelBotones";

function AdminUsuarioView({usuario,onEdit,onDelete,}: {usuario: Usuario;onEdit: () => void;onDelete: () => void;}) 
{
    return (
        <div className="item-admin">
            <img src={usuario.getProfilePhoto()} width={150} height={150}  />
            <div>
                <hr />
                <p>id: {usuario.getId()}</p>
                <hr />
                <p>Nombre de usuario: {usuario.getNombreUsuario()}</p>
                <p>Correo Electrónico: {usuario.getEmail()}</p>
                <p>Contraseña: {usuario.getContraseña()}</p>
                <hr />
                <p>Teléfono: {usuario.getTelefono()}</p>
                <p>Región: {usuario.getRegion()}</p>
                <p>Comuna: {usuario.getComuna()}</p>
                <p>Tipo: {usuario.getTipo()}</p>
                <hr />
            </div>
            <AdminPanelBotones onDelete={onDelete} onEdit={onEdit} />
        </div>
    );
}

export function AdminPanelUsuario() 
{
    const { usuarioService } = useUsuarioService();

    const crearUsuarioRandom = async (addItem: (p: Usuario) => Promise<void>) => 
    {
        const randomName = "Usuario" + Math.floor(Math.random() * 1000);
        const usuarioRandom = new Usuario()
            .setNombreUsuario(randomName)
            .setEmail(randomName+"@gmail.com")
            .setContraseña("123456")
            .setTelefono("995970988")
            .setRegion("Chile")
            .setComuna("Santiago")
            .setTipo("usuario")

            await addItem(usuarioRandom)
    };

    return (
        <AdminPanelBase<Usuario>
            title="Usuarios"
            service={usuarioService}
            renderItem={(p, onEdit, onDelete) => (<AdminUsuarioView usuario={p} onEdit={onEdit} onDelete={onDelete} />)}
            renderEditor={(p, onCloseEdit) => (<EditItem item={p} config={editUsuarioConfig} service={usuarioService} onCloseEdit={onCloseEdit} />)}
            onAddRandom={crearUsuarioRandom} />
    );
}
