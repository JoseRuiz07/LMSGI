import { useEffect, useState } from "react"; 
import { Link, useParams } from "react-router-dom";
import { getCursoById } from "@/model/api/main/apiCurso"; 
import type { ICursos } from "@/model/interface/ICursos";
import { CursoCard } from "@/components/cursos/CursoCard";
import { Button } from "@/components/ui/button";

export const CursoDetalle = () => {
  const { id } = useParams();
  
  const [curso, setCurso] = useState<ICursos | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCursoIndividual = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const datosCurso = await getCursoById(Number(id));
        setCurso(datosCurso);
      } catch (error) {
        console.error("Error cargando el detalle en el controlador:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCursoIndividual();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)] p-6 bg-background">
        <p className="text-lg font-medium text-muted-foreground animate-pulse">Cargando...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] p-6 bg-[#0b0f16]">
      {curso ? (
        <CursoCard curso={curso} isDetail={true} />
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Curso no encontrado</h2>
          <Link to="/cursos">
            <Button>Regresar a Cursos</Button>
          </Link>
        </div>
      )}
    </div>
  );
};