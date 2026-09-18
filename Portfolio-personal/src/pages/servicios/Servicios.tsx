import { ServiciosCard } from '@/components/servicios/ServiciosCard';
import type { IServicio } from '@/model/interface/IServicios';
import { useEffect, useState } from 'react';
import { getServicio } from '@/model/api/main/apiServicio';

export const Servicios = () => {
  const [dataServicios, setDataServicios] = useState<IServicio[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        setLoading(true);
        const datosCargados = await getServicio();
        setDataServicios(datosCargados);
      } catch (error) {
        console.error("Error al cargar sevicios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServicios();
  }, []);

  // --- ESTADO DE CARGA (Estilo Tech) ---
  if (loading) {
    return (
      <section className="min-h-screen bg-[#0b0f16] flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-cyan-900 border-t-cyan-400 rounded-full animate-spin mb-4 shadow-[0_0_15px_rgba(34,211,238,0.2)]"></div>
        <p className="text-xs font-mono tracking-widest text-cyan-500 animate-pulse uppercase">
          Cargando servicios...
        </p>
      </section>
    );
  }

  // --- RENDERIZADO PRINCIPAL ---
  return (
    <section id="servicios" className="min-h-screen bg-[#0b0f16] text-slate-300 font-sans p-6 md:p-12 selection:bg-cyan-900 selection:text-cyan-100">
      <div className="max-w-7xl mx-auto">

        {/* --- CABECERA --- */}
        <div className="text-center mb-16 pt-8 md:pt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Servicios Ofrecidos
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Soluciones técnicas adaptadas a cada necesidad, desde infraestructura y redes hasta soporte y mantenimiento de sistemas.
          </p>
        </div>

        {/* --- COMPONENTE DE TARJETAS --- */}
        <div className="w-full">
          <ServiciosCard servicios={dataServicios} />
        </div>

      </div>
    </section>
  );
};