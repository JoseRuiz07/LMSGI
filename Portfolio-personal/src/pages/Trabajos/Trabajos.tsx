import { TrabajosCard } from '@/components/trabajos/TrabajosCard';
import type { ITrabajos } from '@/model/interface/ITrabajos';
import { useEffect, useState } from 'react';
import { getTrabajo } from '@/model/api/main/apiTrabajo';

export const Trabajos = () => {
  const [dataTrabajos, setDataTrabajos] = useState<ITrabajos[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTrabajos = async () => {
      try {
        setLoading(true);
        const datosCargados = await getTrabajo();
        setDataTrabajos(datosCargados);
      } catch (error) {
        console.error("Error al cargar sevicios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrabajos();
  }, []);

  // --- ESTADO DE CARGA (Estilo Tech) ---
  if (loading) {
    return (
      <section className="min-h-screen bg-[#0b0f16] flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-cyan-900 border-t-cyan-400 rounded-full animate-spin mb-4 shadow-[0_0_15px_rgba(34,211,238,0.2)]"></div>
        <p className="text-xs font-mono tracking-widest text-cyan-500 animate-pulse uppercase">
          Cargando trabajos realizados...
        </p>
      </section>
    );
  }

  // --- RENDERIZADO PRINCIPAL ---
  return (
    <section id="trabajos" className="min-h-screen bg-[#0b0f16] text-slate-300 font-sans p-6 md:p-12 selection:bg-cyan-900 selection:text-cyan-100">
      <div className="max-w-7xl mx-auto">

        {/* --- CABECERA --- */}
        <div className="text-center mb-16 pt-8 md:pt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Trabajos Realizados
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Proyectos desarrollados aplicando conocimientos técnicos en infraestructura, sistemas y desarrollo, con resultados reales y verificables.
          </p>
        </div>

        {/* --- COMPONENTE DE TARJETAS --- */}
        <div className="w-full">
          <TrabajosCard trabajos={dataTrabajos} />
        </div>

      </div>
    </section>
  );
};