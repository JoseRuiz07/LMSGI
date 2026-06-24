import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import miImagen from "@/assets/miImagen.png"; 

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Inicio", to: "/" },
    { name: "Sobre mi", to: "/sobremi" },
    { name: "Cursos", to: "/cursos" },
    { name: "Servicios", to: "/servicios" },
    { name: "Trabajos", to: "/trabajos" },
    { name: "Productos", to: "/productos" },
    { name: "Redes Sociales", to: "/sociales" },
    { name: "Contacto directo", to: "/contacto-directo" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm relative z-50">
      {/* py-3 hace el navbar más estrecho, px-8 da espacio en los extremos */}
      <div className="max-w-[1400px] mx-auto px-8 py-3 flex justify-around items-center">
        
        {/* Logo alineado a la izquierda */}
        <div className="flex items-center">
          <img src={miImagen} alt="Logo" className="h-40 w-auto" /> 
        </div>

        {/* Botón Hamburguesa */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú alineado a la derecha: text-sm para hacerlo más pequeño */}
        <ul className={`
          absolute md:static top-full left-0 w-full bg-white md:bg-transparent
          flex flex-col md:flex-row items-center gap-6 p-6 md:p-0 
          shadow-lg md:shadow-none transition-all duration-300
          ${isOpen ? "flex" : "hidden md:flex"}
        `}>
          {links.map((link) => (
            <li key={link.to}>
              <Link 
                to={link.to} 
                className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors whitespace-nowrap"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};