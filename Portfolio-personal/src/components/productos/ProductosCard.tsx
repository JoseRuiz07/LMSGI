import { ProductoCard } from "./ProductoCard";
import type { IProductos } from "@/model/interface/IProductos";
import { NavLink } from "react-router-dom";

// Define las propiedades de entrada del componente ProductosCard
interface Props {
  productos: IProductos[];
}

export const ProductosCard = ({ productos }: Props) => {
  // Responsabilidad: mostrar en un listado de Cards la información de los productos que se le pasan por props
  return (
    <div className="grid gap-8 p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-[#0b0f16]">
      {
        productos.map((producto) => (
          <NavLink 
            key={producto.id} 
            to={`/productos/${producto.id}`} 
            className="cursor-pointer hover:scale-105 transition block h-full"
          >
            <ProductoCard producto={producto} />    
          </NavLink>
        ))
      }
    </div>
  )
}