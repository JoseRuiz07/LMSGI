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

  // 3. Mientras se descargan los datos, mostramos un mensaje de carga estético
  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-medium text-gray-500 animate-pulse">
          Cargando trabajos realizados...
        </p>
      </section>
    );
  }

    return (
        <section id="trabajos" className="min-h-screen  flex-col  items-center justify-center">
            <h1 className="text-center text-gray-900 py-10 text-3xl font-bold">
            Trabajos Ofrecidos
            </h1>
            <TrabajosCard trabajos={dataTrabajos} />
            

        </section>
    )
}