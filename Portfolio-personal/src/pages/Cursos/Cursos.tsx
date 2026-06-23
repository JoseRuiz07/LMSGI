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

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-medium text-gray-500 animate-pulse">
          Cargando estudios realizados...
        </p>
      </section>
    );
  }

  return (
    <section id="servicios" className="min-h-screen flex-col items-center justify-center">
      <h1 className="text-center text-gray-900 py-10 text-3xl font-bold">
        Estudios realizados
      </h1>
      <CursosCard cursos={dataCursos} />
    </section>
  );
};