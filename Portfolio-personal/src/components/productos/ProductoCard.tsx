import { useState } from "react";
import type { IProductos } from "@/model/interface/IProductos";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  producto: IProductos;
  isDetail?: boolean;
}

export const ProductoCard = ({ producto, isDetail = false }: Props) => {
  const [imagenActiva, setImagenActiva] = useState<string>(
    producto.imagen && producto.imagen.length > 0 ? producto.imagen[0] : ""
  );

  const fotoPrincipal = producto.imagen && producto.imagen.length > 0 
    ? producto.imagen[0] 
    : "https://via.placeholder.com/400x200";

  // ─── VISTA DETALLADA MODIFICADA ───
  if (isDetail) {
    return (
      <div className="w-full max-w-7xl mx-auto p-6 bg-white rounded-2xl border border-gray-150 shadow-sm animate-in fade-in zoom-in duration-300">
        
        {/* Botón superior para volver atrás */}
        <div className="mb-6">
          <Link to="/productos">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-500 hover:text-black">
              <ArrowLeft size={16} />
              Volver al catálogo
            </Button>
          </Link>
        </div>

        {/* CONTENEDOR PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* COLUMNA IZQUIERDA: Solo Galería de Fotos (Imagen principal + Miniaturas) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Imagen Principal Grande */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white aspect-[4/3] flex items-center justify-center p-4 shadow-inner">
              <img 
                src={imagenActiva || fotoPrincipal} 
                alt={producto.titulo} 
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Fila de Miniaturas */}
            {producto.imagen && producto.imagen.length > 0 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {producto.imagen.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setImagenActiva(imgUrl)}
                    className={`w-20 h-20 rounded-lg border-2 overflow-hidden bg-gray-50 p-1 transition-all flex-shrink-0 ${
                      (imagenActiva === imgUrl || (!imagenActiva && idx === 0))
                        ? "border-black scale-95" 
                        : "border-gray-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={imgUrl} alt={`Vista ${idx + 1}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* COLUMNA DERECHA: Textos, Especificaciones y Caja de Compra */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-4">
            
            {/* Subcolumna 1: Información textual unificada */}
            <div className="space-y-6">
              {/* Título y Categoría */}
              <div>
                <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                  {producto.titulo}
                </h1>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-1">
                  {producto.categoria}
                </p>
              </div>
              
              {/* Descripción */}
              <div className="space-y-1">
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Descripción
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {producto.descripcion}
                </p>
              </div>

              {/* ─── MOVIDO AQUÍ: Especificaciones Técnicas justo bajo la descripción ─── */}
              {producto.especific && (
                <div className="pt-4 border-t border-gray-150 space-y-2">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    Especificaciones
                  </h4>
                  <div className="bg-gray-50/70 p-4 rounded-xl border border-gray-200 text-xs text-gray-700 whitespace-pre-line leading-relaxed font-medium shadow-inner">
                    {producto.especific}
                  </div>
                </div>
              )}
            </div>

            {/* Subcolumna 2: Caja de Precio y Botón de Compra */}
            <div className="bg-gray-50/70 p-6 rounded-2xl border border-gray-200 text-center space-y-4 shadow-sm md:sticky md:top-6">
              <div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Precio del producto
                </span>
                <div className="text-4xl font-black text-gray-900 tracking-tight">
                  {producto.precio}
                </div>
              </div>

              <Button className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-6 rounded-xl uppercase tracking-wider text-xs gap-2 shadow-md transition-all">
                <ShoppingCart size={15} />
                Comprar ahora
              </Button>
            </div>

          </div>

        </div>
      </div>
    );
  }

  // ─── VISTA EN TARJETA (CATÁLOGO - SE QUEDA EXACTAMENTE IGUAL) ───
  return (
    <Card className="overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white h-full flex flex-col relative rounded-2xl">
      {producto.recomend && (
        <Badge className="absolute top-4 right-4 z-20 bg-black text-white hover:bg-black font-bold uppercase text-[10px] tracking-wider rounded-md px-2.5 py-1">
          {producto.recomend}
        </Badge>
      )}

      <div className="relative h-56 overflow-hidden bg-gray-50 border-b border-gray-150">
        <img 
          src={fotoPrincipal} 
          className="w-full h-full object-cover"
          alt={producto.titulo}
        />
      </div>

      <CardHeader className="space-y-1 p-5 flex-grow flex flex-col items-center justify-center text-center">
        <CardTitle className="text-lg font-bold text-gray-900 line-clamp-1">
          {producto.titulo}
        </CardTitle>
        <CardDescription className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          {producto.categoria}
        </CardDescription>
      </CardHeader>

      <CardFooter className="p-5 pt-0 flex flex-col items-center gap-4 mt-auto">
        <div className="text-2xl font-black text-gray-900">
          {producto.precio}
        </div>
        <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-5 rounded-xl transition-colors text-xs uppercase tracking-wider">
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
};