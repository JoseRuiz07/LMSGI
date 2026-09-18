import { CursoCard } from "./CursoCard";
import type { ICursos } from "@/model/interface/ICursos";
import { NavLink } from "react-router-dom";

//define las propiedades de entrada del componente ServiciosCard
interface Props {
  cursos: ICursos[];
}

export const CursosCard = ({cursos}: Props) => {
  //responsalidad: mostrar en una listado de Cards la información de los servicios que se le pasan por props
  return (
    <div  className="grid gap-8 p-10 md:grid-cols-2 bg-[#0b0f16]">
      {
        cursos.map( (curso) => (
                <NavLink key={curso.id} to={`/cursos/${curso.id}`} 
                      className="cursor-pointer hover:scale-105 transition">
                    <CursoCard 
                        curso={curso} 
                        
                    />    
                </NavLink>

        ))
      }
    </div>
    
  )
}