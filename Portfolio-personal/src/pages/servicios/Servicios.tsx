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

  // 3. Mientras se descargan los datos, mostramos un mensaje de carga estético
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
        <section id="servicios" className="min-h-screen  flex-col  items-center justify-center">
            <h1 className="text-center text-gray-900 py-10 text-3xl font-bold">
            Servicios Ofrecidos
            </h1>
            <ServiciosCard servicios={dataServicios} />
            

        </section>
    )
}