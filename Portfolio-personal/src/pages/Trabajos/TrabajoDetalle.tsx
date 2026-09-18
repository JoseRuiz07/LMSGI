import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { ITrabajos } from "@/model/interface/ITrabajos";
import { useState, useEffect } from "react";
import { TrabajoCard } from "@/components/trabajos/TrabajoCard";
import { getTrabajoById } from "@/model/api/main/apiTrabajo"; // <-- Importación corregida

export const TrabajoDetalle = () => {
  const { id } = useParams();
  
  const [trabajo, setTrabajo] = useState<ITrabajos | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTrabajoIndividual = async () => {
      if (!id) return; // Validación temprana

      try {
        setLoading(true);
        const datosTrabajo = await getTrabajoById(Number(id));
        setTrabajo(datosTrabajo);
      } catch (error) {
        console.error("Error cargando el detalle en el controlador de trabajos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrabajoIndividual();
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
      {trabajo ? (
        <TrabajoCard trabajo={trabajo} isDetail={true} />
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Trabajo no encontrado</h2>
          <Link to="/trabajos">
            <Button>Regresar a Trabajos</Button>
          </Link>
        </div>
      )}
    </div>
  );
};