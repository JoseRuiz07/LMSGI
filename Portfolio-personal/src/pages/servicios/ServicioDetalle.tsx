import { useEffect, useState } from "react"; 
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { IServicio } from "@/model/interface/IServicios";
import { ServicioCard } from "@/components/servicios/ServicioCard";
import { getServicioById } from "@/model/api/main/apiServicio";

export const ServicioDetalle = () => {
  const { id } = useParams();
  
  const [servicio, setServicio] = useState<IServicio | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchServicioIndividual = async () => {
      if (!id) return; // Validación temprana igual que en cursos

      try {
        setLoading(true);
        const datosServicio = await getServicioById(Number(id));
        setServicio(datosServicio);
      } catch (error) {
        console.error("Error cargando el detalle en el controlador:", error);
      } {
        setLoading(false);
      }
    };

    fetchServicioIndividual();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)] p-6 bg-background">
        <p className="text-lg font-medium text-muted-foreground animate-pulse">Cargando...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] p-6 bg-background">
      {servicio ? (
        <ServicioCard servicio={servicio} isDetail={true} />
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Servicio no encontrado</h2>
          <Link to="/servicios"> 
            <Button>Regresar a Servicios</Button>
          </Link>
        </div>
      )}
    </div>
  );
};