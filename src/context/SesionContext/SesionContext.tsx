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
  return useContext(SesionContext);
};