import { ServicioCard } from "./ServicioCard";
import type { IServicio } from "@/model/interface/IServicios";
import { NavLink } from "react-router-dom";

// Define las propiedades de entrada del componente ServiciosCard
interface Props {
  servicios: IServicio[];
}

export const ServiciosCard = ({ servicios }: Props) => {
  // Responsabilidad: mostrar en un listado de Cards la información de los servicios que se le pasan por props
  return (
    <div className="grid gap-8 p-10 md:grid-cols-2 bg-[#0b0f16]">
      {
        servicios.map((servicio) => (
          // ─── SOLUCIÓN: Eliminamos el <> y movemos la key al elemento más externo ───
          <NavLink 
            key={servicio.id} 
            to={`/servicios/${servicio.id}`} 
            className="cursor-pointer hover:scale-105 transition block"
          >
            <ServicioCard servicio={servicio} />    
          </NavLink>
        ))
      }
    </div>
  );
};