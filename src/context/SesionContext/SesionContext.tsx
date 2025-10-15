import { createContext, useContext } from "react";
import type { Sesion } from "../../model/Sesion";
import type { Usuario } from "../../model/Usuario";

export interface SesionContextType 
{
  sesion: Sesion;
  sesionLogin: (usuario: Usuario) => void;
  sesionLogout: () => void;
}

export const SesionContext = createContext<SesionContextType | undefined>(undefined);

export const useSesion = () => {
  const context = useContext(SesionContext);
  if (!context) throw new Error("useSesion debe usarse dentro de un SesionProvider");
  return context;
};