import { Link } from "react-router-dom";
import { Mail, MapPin, Code2, Lock, ArrowUp } from "lucide-react"; // Añadí ArrowUp

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800">
      
      {/* ─── CONTENIDO PRINCIPAL (GRID) ─── */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Columna 1: Identidad */}
        <div className="space-y-4">
          <h2 className="text-xl font-black text-white tracking-wider uppercase cursor-pointer" onClick={scrollToTop}>
            Mi Portfolio
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Estudiante 
          </p>
        </div>

        {/* Columna 2: Mapa */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Ubicación
          </h3>
          <div className="w-full h-32 rounded-lg overflow-hidden border border-slate-700">
            {/* URL corregida para insertar mapa de Google */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12753.30398642283!2d-1.921313380224613!3d37.15933610000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd791c5e917d5e4b%3A0x8673753232147321!2sTurre%2C%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1687654321000!5m2!1ses!2ses"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
            ></iframe>
          </div>
        </div>

        {/* Columna 3: Contacto */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Contacto
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-blue-500" />
              <a href="mailto:joseruizgennell@gmail.com" className="hover:underline hover:text-white transition-colors">
                joseruizgennell@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2 text-slate-400">
              <MapPin size={16} className="text-blue-500" />
              <span>Turre, Almeria, España</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ─── BARRA INFERIOR ─── */}
      <div className="w-full bg-slate-950 py-4 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Jose Luis.</p>
          
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-1">
              <Code2 size={14} className="text-blue-500" /> Hecho con React
            </p>
            <Link to="/admin" className="flex items-center gap-1 hover:text-blue-400 border-l border-slate-800 pl-4">
              <Lock size={12} /> Admin
            </Link>
            {/* AQUÍ USAMOS scrollToTop */}
            <button onClick={scrollToTop} className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};