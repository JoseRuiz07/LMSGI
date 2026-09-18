import { Link } from "react-router-dom";
import fotoinicio from "@/assets/foto.png";

export const Inicio = () => {

  const secciones = [
    { 
      titulo: "Sobre mí", 
      desc: "Conoce más sobre mi experiencia, formación, habilidades y los valores que me definen.", 
      to: "/sobremi", 
      btn: "Ir a Sobre mí",
      mod: "MOD: 01 / PROFILE",
      icon: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0z" />
    },
    { 
      titulo: "Cursos", 
      desc: "Información sobre los cursos, certificaciones y estudios que he realizado.", 
      to: "/cursos", 
      btn: "Ver Cursos",
      mod: "MOD: 02 / CERT",
      icon: <path d="M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5" />
    },
    { 
      titulo: "Servicios", 
      desc: "Servicios de administración de sistemas, redes y soporte técnico.", 
      to: "/servicios", 
      btn: "Ver Servicios",
      mod: "MOD: 03 / OPS",
      icon: <path d="M20 16V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12 M4 16h16 M2 20h20 M12 16v4" />
    },
    { 
      titulo: "Trabajos", 
      desc: "Consulta algunos de los trabajos y proyectos que he realizado.", 
      to: "/trabajos", 
      btn: "Ver Trabajos",
      mod: "MOD: 04 / LABS",
      icon: <path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14 M4 9h16 M10 19v-4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4" />
    },
    { 
      titulo: "Productos", 
      desc: "Equipos informáticos seleccionados para cubrir necesidades tecnológicas.", 
      to: "/productos", 
      btn: "Ver Productos",
      mod: "MOD: 05 / HARDWARE",
      icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12" />
    },
    { 
      titulo: "Sociales", 
      desc: "Accede a mis redes sociales y canales de comunicación.", 
      to: "/sociales", 
      btn: "Ir a Sociales",
      mod: "MOD: 06 / COMMUNITY",
      icon: <path d="M18 8A3 3 0 1 0 18 2a3 3 0 0 0 0 6z M6 15A3 3 0 1 0 6 9a3 3 0 0 0 0 6z M18 22A3 3 0 1 0 18 16a3 3 0 0 0 0 6z M8.59 13.51l6.83 3.98 M15.41 6.51l-6.82 3.98" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b0f16] text-slate-300 font-sans p-6 md:p-12 selection:bg-cyan-900 selection:text-cyan-100">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HERO SECTION --- */}
        <section className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 pt-8">
          <div className="lg:w-1/2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-800/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
              <span className="text-xs font-mono text-cyan-300 tracking-wide">Estudiante de ASIR</span>
            </div>
            
            <p className="text-cyan-500 font-mono text-sm tracking-[0.2em] uppercase mb-2">Portafolio</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Bienvenido/a</h1>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Este espacio ha sido creado para que puedas conocer mejor quién soy, qué hago y cómo puedo ayudarte.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed border-l-2 border-slate-700 pl-4">
              Estudiante de ASIR.
            </p>
          </div>
          
          <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden border border-slate-800 bg-[#121822] shadow-2xl relative aspect-[16/9] flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 to-transparent z-10 mix-blend-overlay"></div>
            <img 
              src={fotoinicio} 
              alt="fotoinicio" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
            />
          </div>
        </section>

        {/* --- DIRECTORIO HEADER --- */}
        <div className="mb-10">
          <p className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
            Índice del portafolio // Módulos principales
          </p>
          <div className="flex justify-between items-end">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Directorio de Navegación</h2>
            <span className="hidden md:block w-2 h-2 rounded-full bg-cyan-500/50"></span>
          </div>
        </div>

        {/* --- GRID DE SECCIONES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {secciones.map((s, i) => (
            <div key={i} className="bg-[#12161f] p-7 rounded-2xl border border-[#232a36] hover:border-slate-600/60 transition-all duration-300 flex flex-col group">
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-2.5 bg-[#1a202c] rounded-xl border border-[#2d3544] text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-900/50 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    {s.icon}
                  </svg>
                </div>
                <span className="text-[10px] font-mono text-slate-500 tracking-wider bg-[#1a202c] px-2 py-1 rounded-md border border-[#2d3544]">{s.mod}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{s.titulo}</h3>
              <p className="text-sm text-slate-400 mb-8 flex-grow leading-relaxed">{s.desc}</p>
              
              <Link 
                to={s.to} 
                className="mt-auto flex justify-between items-center w-full bg-[#1a202c] hover:bg-[#232a36] border border-[#2d3544] text-slate-300 py-3.5 px-5 rounded-xl transition-colors text-sm font-medium"
              >
                <span>{s.btn}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          ))}
        </div>

        {/* --- TARJETA DE CONTACTO DESTACADA --- */}
        <div className="bg-[#12161f] border border-[#232a36] p-8 md:p-10 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10 max-w-2xl">
            <p className="text-cyan-500 text-[10px] font-mono tracking-widest uppercase mb-3 flex items-center gap-2">
              MOD: 07 // DIRECT LINE <span className="text-cyan-400/50">•</span> READY TO CHAT
            </p>
            <h3 className="text-3xl font-bold text-white mb-3">Contacto Directo</h3>
            <p className="text-slate-300 text-base mb-4">Envíame un mensaje por correo.</p>
            <p className="text-slate-500 text-xs leading-relaxed max-w-lg">
              ¿Tienes una vacante de prácticas, puesto junior de administración de sistemas o consulta técnica de redes?<br/>
              Responderé con la máxima celeridad técnica.
            </p>
          </div>
          <Link 
            to="/contacto-directo" 
            className="relative z-10 bg-cyan-400 hover:bg-cyan-300 text-cyan-950 font-bold py-3.5 px-8 rounded-xl flex items-center gap-3 transition-colors flex-shrink-0 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            Contactar
          </Link>
        </div>

        {/* --- FOOTER BANNER CENTRAL --- */}
        <div className="max-w-2xl mx-auto bg-[#12161f] border border-[#232a36] rounded-2xl p-8 text-center mb-24 shadow-lg shadow-black/20">
          <div className="w-12 h-12 mx-auto bg-[#1a202c] border border-[#2d3544] rounded-full flex items-center justify-center mb-5 text-slate-400">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <p className="text-slate-200 text-lg font-medium mb-4">Gracias por visitar este sitio. Te invito a explorar cada sección.</p>
          <div className="inline-flex items-center justify-center gap-2 text-[10px] font-mono text-cyan-500 tracking-widest uppercase bg-[#0b0f16] px-3 py-1.5 rounded-full border border-[#232a36]">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,211,238,1)]"></span>
            SESIÓN CONECTADA • ASIR
          </div>
        </div>
      </div>
    </div>
  );
};