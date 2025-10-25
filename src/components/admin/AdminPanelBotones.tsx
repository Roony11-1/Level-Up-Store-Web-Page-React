import { Boton } from "../Boton/Boton";

interface AdminPanelBotonesProps
{
    onDelete: () => void;
    onEdit: () => void;
}

export function AdminPanelBotones( {onDelete, onEdit}:AdminPanelBotonesProps )
{
    return(
        <div className="admin-panel-btns">
            <Boton onClick={onDelete}>Borrar</Boton>
            <Boton onClick={onEdit}>Editar</Boton>
        </div>
    );
}