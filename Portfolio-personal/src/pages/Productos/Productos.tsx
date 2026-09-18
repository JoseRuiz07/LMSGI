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

  // --- ESTADO DE CARGA (Estilo Tech) ---
  if (loading) {
    return (
      <section className="min-h-screen bg-[#0b0f16] flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-cyan-900 border-t-cyan-400 rounded-full animate-spin mb-4 shadow-[0_0_15px_rgba(34,211,238,0.2)]"></div>
        <p className="text-xs font-mono tracking-widest text-cyan-500 animate-pulse uppercase">
          Cargando catálogo de productos...
        </p>
      </section>
    );
  }

  // --- RENDERIZADO PRINCIPAL ---
  return (
    <section id="productos" className="min-h-screen bg-[#0b0f16] text-slate-300 font-sans p-6 md:p-12 selection:bg-cyan-900 selection:text-cyan-100">
      <div className="max-w-7xl mx-auto">

        {/* --- CABECERA --- */}
        <div className="text-center mb-16 pt-8 md:pt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Productos Disponibles
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Soluciones de infraestructura empaquetadas, scripts de automatización, imágenes de servidores preconfigurados y plantillas de laboratorio técnico validadas para entornos empresariales y homelabs.
          </p>
        </div>

        {/* --- COMPONENTE DE TARJETAS --- */}
        <div className="w-full">
          <ProductosCard productos={dataProductos} />
        </div>

      </div>
    </section>
  );
};