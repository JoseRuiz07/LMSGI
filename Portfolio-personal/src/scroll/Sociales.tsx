import { useEffect, useState } from 'react';
import { getSociales } from '@/model/api/main/apiSocial';
import type { ISociales } from '@/model/interface/ISociales';

export const Sociales = () => {
  const [redesSociales, setRedesSociales] = useState<ISociales[]>([]);
  const [redActivaId, setRedActivaId] = useState<number | null>(null); // <-- Estado para saber cuál pintar de azul
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

    // Configuramos el sensor para que detecte qué tarjeta está en la mitad de la pantalla
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Extraemos el ID numérico que le pusimos al atributo data-id
            const id = Number(entry.target.getAttribute('data-id'));
            setRedActivaId(id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -40% 0px', // Enfoca la detección en la zona central de la pantalla
        threshold: 0.1,
      }
    );

    // Enganchamos el sensor a todas nuestras tarjetas de redes sociales
    redesSociales.forEach((red) => {
      const elemento = document.getElementById(`social-card-${red.id}`);
      if (elemento) observer.observe(elemento);
    });

    return () => observer.disconnect();
  }, [redesSociales]);

  // Función manual al hacer clic en las pestañas
  const scrollToSocial = (id: number) => {
    const elemento = document.getElementById(`social-card-${id}`);
    if (elemento) {
      setRedActivaId(id); // Forzamos el azul de inmediato al hacer clic
      elemento.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  if (loading) {
    return (
      <div className="w-full text-center py-20 text-gray-500 animate-pulse font-medium">
        Cargando ecosistema social...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 pb-32">
      
      {/* ─── SEGUNDA NAVBAR CON ESTADO ACTIVO AZUL DINÁMICO ─── */}
      <div className="sticky top-0 z-40 w-full bg-slate-800 text-white shadow-md border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center">
          
          <nav className="flex space-x-2 overflow-x-auto scrollbar-none py-1 w-full">
            {redesSociales.map((red) => (
              <button
                key={red.id}
                onClick={() => scrollToSocial(red.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  redActivaId === red.id
                    ? 'bg-blue-600 text-white shadow scale-105' // <-- Si es la activa por scroll o click, se pone azul
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {red.nombre}
              </button>
            ))}
          </nav>

        </div>
      </div>

      <div className="text-center mt-16 mb-12">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Mis Conexiones</h1>
      </div>

      {/* ─── SCROLL VERTICAL CON SEPARACIÓN AMPLIADA ─── */}
      <main className="max-w-4xl mx-auto p-4 flex flex-col gap-48"> 
        {redesSociales.map((red) => (
          <section
            key={red.id}
            id={`social-card-${red.id}`}
            data-id={red.id} // <-- Atributo clave para que el sensor de scroll sepa qué ID es
            className="bg-white rounded-2xl border border-gray-200 p-8 shadow-xl flex flex-col md:flex-row items-center gap-8 scroll-mt-24 transition-all duration-300"
          >
            
            {/* Contenedor de la Imagen (IMG) */}
            <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-slate-100 rounded-xl overflow-hidden shadow-inner border border-gray-100 flex items-center justify-center">
              <img 
                src={red.imagen || "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=500"} 
                alt={red.nombre}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenedor de Textos (Nombre y URL) */}
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
                Red Social
              </span>
              <h2 className="text-4xl font-black text-slate-900 mb-3">
                {red.nombre}
              </h2>
              
              {/* Enlace Directo (URL) */}
              <a 
                href={red.url}
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center md:justify-start font-mono text-sm text-blue-500 bg-blue-50/50 hover:bg-blue-50 border border-blue-100 rounded-lg p-3 transition-colors break-all group"
              >
                <span className="group-hover:underline">{red.url}</span>
              </a>
            </div>

          </section>
        ))}

        {redesSociales.length === 0 && (
          <p className="text-center text-gray-400 italic py-12">No hay redes sociales configuradas en Supabase.</p>
        )}
      </main>

    </div>
  );
};