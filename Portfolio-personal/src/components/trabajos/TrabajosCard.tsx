import { TrabajoCard } from "./TrabajoCard";
import type { ITrabajos } from "@/model/interface/ITrabajos";
import { NavLink } from "react-router-dom";

// Define las propiedades de entrada del componente TrabajosCard
interface Props {
  trabajos: ITrabajos[];
}

export const TrabajosCard = ({ trabajos }: Props) => {
  // Responsabilidad: mostrar en un listado de Cards la información de los trabajos que se le pasan por props
  return (
    <div className="grid gap-8 p-10 md:grid-cols-2 bg-[#0b0f16]">
      {
        trabajos.map((trabajo) => (
          // ─── SOLUCIÓN: El key se coloca aquí, en la etiqueta más externa del .map() ───
          <NavLink 
            key={trabajo.id} 
            to={`/trabajos/${trabajo.id}`} 
            className="cursor-pointer hover:scale-105 transition block"
          >
            <TrabajoCard trabajo={trabajo} />    
          </NavLink>
        ))
      }
    </div>
  );
};