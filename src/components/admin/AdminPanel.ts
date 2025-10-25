import { AdminPanelProducto } from "./AdminPanelProducto";
import { AdminPanelUsuario } from "./AdminPanelUsuario";
import type { AdminPanel } from "../../model/AdminPanel";
import { AdminPanelHome } from "./AdminPanelHome";

export const adminPanels: AdminPanel[] = 
[
    {
        id: "inicio",
        nombre: "Inicio",
        componente: AdminPanelHome
    },
    {
        id: "usuarios",
        nombre: "Usuarios",
        componente: AdminPanelUsuario
    },
    {
        id: "productos",
        nombre: "Productos",
        componente: AdminPanelProducto
    }
];
