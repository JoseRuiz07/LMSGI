import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import miImagen from "@/assets/miImagen.png"; 

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Inicio", to: "/" },
    { name: "Sobre mí", to: "/sobremi" },
    { name: "Cursos", to: "/cursos" },
    { name: "Servicios", to: "/servicios" },
    { name: "Trabajos", to: "/trabajos" },
    { name: "Productos", to: "/productos" },
    { name: "Sociales", to: "/sociales" },
    { name: "Contacto Directo", to: "/contacto-directo" },
  ];

  return (
    <nav className="bg-[#0b0f16] relative z-50  border-b border-slate-800">
      {/* 
        CAMBIO AQUÍ: 
        - justify-between (para móviles, separa el logo y el botón hamburguesa)
        - md:justify-center (en escritorio centra todo el contenido)
        - md:gap-16 lg:gap-24 (separa el logo de la lista de enlaces en el centro)
      */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex justify-between md:justify-center items-center md:gap-16 lg:gap-24">
        
        {/* --- CONTENEDOR DEL LOGO --- */}
        <Link 
          to="/" 
          className="relative flex items-center justify-center bg-[#151a23] p-4 rounded-xl border border-cyan-900/30 shadow-[0_0_15px_rgba(34,211,238,0.05)] hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300"
        >
          {/* Punto Verde de Estado */}
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)] border-[1.5px] border-[#0b0f16]"></span>
          
          <img src={miImagen} alt="Logo" className="h-40 w-auto object-contain" /> 
        </Link>

        {/* --- BOTÓN HAMBURGUESA (MÓVIL) --- */}
        <button 
          className="md:hidden p-10 text-slate-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* --- LISTA DE ENLACES --- */}
        <ul className={`
          absolute md:static top-full left-0 w-full md:w-auto bg-[#0b0f16] md:bg-transparent
          flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10 p-6 md:p-0 
          border-b border-[#232a36] md:border-none z-40
          transition-all duration-300
          ${isOpen ? "flex" : "hidden md:flex"}
        `}>
          {links.map((link) => (
            <li key={link.to}>
              <Link 
                to={link.to} 
                className="text-slate-300 hover:text-white font-semibold text-sm transition-colors whitespace-nowrap tracking-wide"
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