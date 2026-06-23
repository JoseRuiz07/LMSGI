import { useEffect, useState } from 'react';
import { ProductosCard } from "@/components/productos/ProductosCard";
import { getProductos } from "@/model/api/main/apiProductos"; // Asegúrate de que tu archivo de API se llame así
import type { IProductos } from "@/model/interface/IProductos";

export const Productos = () => {
  const [dataProductos, setDataProductos] = useState<IProductos[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        const datosCargados = await getProductos();
        setDataProductos(datosCargados);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []); 

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-medium text-gray-500 animate-pulse">
          Cargando catálogo de productos...
        </p>
      </section>
    );
  }

  return (
    <section id="productos" className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-center text-gray-900 py-10 text-3xl font-bold">
        Productos Disponibles
      </h1>
      <ProductosCard productos={dataProductos} />
    </section>
  );
};