import { useEffect, useState } from 'react';
import { CursosCard } from "@/components/cursos/CursosCard";
import { getCursos } from "@/model/api/main/apiCurso"; 
import type { ICursos } from "@/model/interface/ICursos";

export const Cursos = () => {
  const [dataCursos, setDataCursos] = useState<ICursos[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        setLoading(true);
        const datosCargados = await getCursos();
        setDataCursos(datosCargados);
      } catch (error) {
        console.error("Error al cargar cursos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCursos();
  }, []); 

  // --- ESTADO DE CARGA (Estilo Tech) ---
  if (loading) {
    return (
      <section className="min-h-screen bg-[#0b0f16] flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-cyan-900 border-t-cyan-400 rounded-full animate-spin mb-4 shadow-[0_0_15px_rgba(34,211,238,0.2)]"></div>
        <p className="text-xs font-mono tracking-widest text-cyan-500 animate-pulse uppercase">
          Cargando módulos de estudio...
        </p>
      </section>
    );
  }

  // --- RENDERIZADO PRINCIPAL ---
  return (
    <section id="cursos" className="min-h-screen bg-[#0b0f16] text-slate-300 font-sans p-6 md:p-12 selection:bg-cyan-900 selection:text-cyan-100">
      <div className="max-w-7xl mx-auto">
        
        {/* --- CABECERA --- */}
        <div className="text-center mb-16 pt-8 md:pt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Estudios realizados
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Formación reglada técnica en Administración de Sistemas Informáticos en Red, combinada con 
            certificaciones oficiales de infraestructura, networking y virtualización empresarial.
          </p>
        </div>

        {/* --- COMPONENTE DE TARJETAS --- */}
        <div className="w-full">
          {/* 
            NOTA: Este componente CursosCard será el encargado de renderizar el grid (display: grid) 
            y el diseño interior oscuro de las tarjetas individuales con las imágenes y los badges.
          */}
          <CursosCard cursos={dataCursos} />
        </div>
        
      </div>
    </section>
  );
};