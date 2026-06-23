import { Link } from "react-router-dom";
import { Mail, MapPin, Code2, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  // Función opcional para volver arriba suavemente
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800">
      
      {/* ─── CONTENIDO PRINCIPAL (GRID) ─── */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Columna 1: Identidad / Bio */}
        <div className="space-y-4">
          <h2 className="text-xl font-black text-white tracking-wider uppercase">
            Mi Portfolio
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Desarrollador enfocado en construir aplicaciones web modernas, eficientes y conectadas en tiempo real.
          </p>
        </div>

        {/* Columna 2: Enlaces de Navegación rápidos */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Navegación
          </h3>
          <ul className="space-y-2 text-sm font-medium">
            <li>
              <Link to="/" onClick={scrollToTop} className="hover:text-blue-500 transition-colors inline-flex items-center gap-1 group">
                Inicio <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link to="/cursos" onClick={scrollToTop} className="hover:text-blue-500 transition-colors inline-flex items-center gap-1 group">
                Estudios <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link to="/trabajos" onClick={scrollToTop} className="hover:text-blue-500 transition-colors inline-flex items-center gap-1 group">
                Trabajos <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link to="/sociales" onClick={scrollToTop} className="hover:text-blue-500 transition-colors inline-flex items-center gap-1 group">
                Redes <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto Directo */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Contacto
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-blue-500" />
              <a href="mailto:tu-correo@example.com" className="hover:underline hover:text-white transition-colors">
                tu-correo@example.com
              </a>
            </li>
            <li className="flex items-center gap-2 text-slate-400">
              <MapPin size={16} className="text-blue-500" />
              <span>Tu Ciudad, Tu País</span>
            </li>
          </ul>
        </div>

      </div>

      {/* ─── BARRA INFERIOR DE CRÉDITOS ─── */}
      <div className="w-full bg-slate-950 py-4 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <Code2 size={14} className="text-blue-500" />
            Hecho con React, Tailwind CSS & Supabase
          </p>
        </div>
      </div>

    </footer>
  );
};