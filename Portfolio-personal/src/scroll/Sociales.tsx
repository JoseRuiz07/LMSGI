import { useEffect, useState } from 'react';
import { getSociales } from '@/model/api/main/apiSocial';
import type { ISociales } from '@/model/interface/ISociales';
import { ExternalLink, Link2, Terminal } from 'lucide-react'; // Iconos para la estética SysAdmin

export const Sociales = () => {
  const [redesSociales, setRedesSociales] = useState<ISociales[]>([]);
  const [redActivaId, setRedActivaId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRedes = async () => {
      try {
        setLoading(true);
        const datos = await getSociales();
        setRedesSociales(datos);
        if (datos.length > 0) {
          setRedActivaId(datos[0].id);
        }
      } catch (error) {
        console.error("Error al cargar las redes sociales:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRedes();
  }, []);

  // ─── SENSOR DE SCROLL AUTOMÁTICO (INTERSECTION OBSERVER) ───
  useEffect(() => {
    if (redesSociales.length === 0) return;


    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {

            const id = Number(entry.target.getAttribute('data-id'));
            setRedActivaId(id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0.1,
      }
    );


    redesSociales.forEach((red) => {
      const elemento = document.getElementById(`social-card-${red.id}`);
      if (elemento) observer.observe(elemento);
    });

    return () => observer.disconnect();
  }, [redesSociales]);

  
  const scrollToSocial = (id: number) => {
    const elemento = document.getElementById(`social-card-${id}`);
    if (elemento) {
      setRedActivaId(id);
      elemento.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#0b0f17] flex items-center justify-center text-cyan-500/50 animate-pulse font-mono text-sm">
        <Terminal size={16} className="mr-2 inline" /> Inicializando ecosistema social...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#0b0f17] pb-32 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* ─── NAVBAR ESTILO DARK/SYSADMIN CON SCROLL HORIZONTAL ─── */}
      <div className="sticky top-0 z-40 w-full bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800 shadow-xl">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center">
          
          <nav className="flex space-x-2 overflow-x-auto scrollbar-none py-2 w-full snap-x">
            {redesSociales.map((red) => (
              <button
                key={red.id}
                onClick={() => scrollToSocial(red.id)}
                className={`snap-start px-5 py-2 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                  redActivaId === red.id
                    ? 'bg-cyan-400 text-[#0b0f17] shadow-[0_0_15px_rgba(34,211,238,0.3)] scale-[1.02]' 
                    : 'text-slate-400 bg-transparent hover:bg-slate-800/50 hover:text-slate-200'
                }`}
              >
                <Terminal size={14} className={redActivaId === red.id ? 'text-[#0b0f17]' : 'text-slate-500'} />
                {red.nombre}
              </button>
            ))}
          </nav>

        </div>
      </div>

      {/* ─── ENCABEZADO ─── */}
      <div className="max-w-4xl mx-auto px-4 mt-16 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Mis Conexiones
        </h1>
        <p className="text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
          Ecosistema de canales profesionales, repositorios de infraestructura, comunidades técnicas de administración de sistemas y redes telemáticas.
        </p>
      </div>

      {/* ─── TARJETAS DE CONEXIONES ─── */}
      <main className="max-w-4xl mx-auto px-4 flex flex-col gap-12"> 
        {redesSociales.map((red) => (
          <section
            key={red.id}
            id={`social-card-${red.id}`}
            data-id={red.id}
            className="bg-[#131926] rounded-2xl border border-slate-800/80 p-6 shadow-2xl flex flex-col md:flex-row gap-6 scroll-mt-32 transition-colors duration-300 hover:border-slate-700/80 group"
          >
            
            {/* Contenedor de la Imagen (Efecto Glow) */}
            <div className="w-full md:w-36 h-48 md:h-36 shrink-0 bg-[#0b0f17] rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center p-2 relative">
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={red.imagen || "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=500"} 
                alt={red.nombre}
                className="w-full h-full object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Contenedor de Textos y Enlaces */}
            <div className="flex-1 flex flex-col justify-center min-w-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {red.nombre}
              </h2>
              
              {/* Texto descriptivo (Utiliza la propiedad descripcion si existe, si no usa un fallback estilo ASIR) */}
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {(red as any).descripcion || "Repositorios de configuración, laboratorios de infraestructuras en Cisco Packet Tracer, virtualización y despliegue de redes telemáticas en sistemas Linux/Windows."}
              </p>
              
              {/* Footer de la tarjeta: URL y Botón */}
              <div className="mt-auto pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                
                {/* Indicador de URL */}
                <div className="flex items-center gap-2 text-slate-500 font-mono text-xs overflow-hidden w-full sm:w-auto">
                  <Link2 size={14} className="shrink-0" />
                  <span className="truncate">{red.url}</span>
                </div>

                {/* Botón de Acción Cyan */}
                <a 
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 font-mono text-xs font-bold text-[#0b0f17] bg-cyan-400 hover:bg-cyan-300 px-5 py-2.5 rounded-lg transition-all duration-200 shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] active:scale-95"
                >
                  Acceder al Enlace
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

          </section>
        ))}

        {redesSociales.length === 0 && (
          <div className="text-center bg-[#131926] border border-slate-800 rounded-2xl p-12">
            <p className="text-slate-500 font-mono text-sm inline-flex items-center gap-2">
              <Terminal size={16} /> No se encontraron conexiones configuradas en la base de datos.
            </p>
          </div>
        )}
      </main>

    </div>
  );
};