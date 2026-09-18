import { useState } from "react";
import type { IProductos } from "@/model/interface/IProductos";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
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

  // ─── VISTA DETALLADA (Dark Mode para coherencia con Cursos/Servicios/Trabajos) ───
  if (isDetail) {
    return (
      <div className="w-full max-w-7xl mx-auto p-6 bg-[#0d1119] rounded-2xl border border-[#232a36] shadow-2xl shadow-black/40 animate-in fade-in zoom-in duration-300">
        
        {/* Botón superior para volver atrás */}
        <div className="mb-6">
          <Link to="/productos">
            <Button variant="ghost" className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 hover:bg-[#1a202c]">
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
            <div className="overflow-hidden rounded-xl border border-[#232a36] bg-[#12161f] aspect-[4/3] flex items-center justify-center p-4 shadow-inner">
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
                    className={`w-20 h-20 rounded-lg border-2 overflow-hidden bg-[#12161f] p-1 transition-all flex-shrink-0 ${
                      (imagenActiva === imgUrl || (!imagenActiva && idx === 0))
                        ? "border-cyan-400 scale-95" 
                        : "border-[#232a36] opacity-70 hover:opacity-100"
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
                <h1 className="text-3xl font-black text-white tracking-tight">
                  {producto.titulo}
                </h1>
                <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mt-1">
                  {producto.categoria}
                </p>
              </div>
              
              {/* Descripción */}
              <div className="space-y-1">
                <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Descripción
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {producto.descripcion}
                </p>
              </div>

              {/* ─── Especificaciones Técnicas justo bajo la descripción ─── */}
              {producto.especific && (
                <div className="pt-4 border-t border-[#232a36] space-y-2">
                  <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Especificaciones
                  </h4>
                  <div className="bg-[#12161f] p-4 rounded-xl border border-[#232a36] text-xs text-slate-300 whitespace-pre-line leading-relaxed font-medium shadow-inner">
                    {producto.especific}
                  </div>
                </div>
              )}
            </div>

            {/* Subcolumna 2: Caja de Precio y Botón de Compra */}
            <div className="bg-[#12161f] p-6 rounded-2xl border border-[#232a36] text-center space-y-4 shadow-sm md:sticky md:top-6">
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Precio del producto
                </span>
                <div className="text-4xl font-black text-cyan-400 tracking-tight">
                  {producto.precio}
                </div>
              </div>

              <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-[#0b0f16] font-bold py-6 rounded-xl uppercase tracking-wider text-xs gap-2 shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all">
                <ShoppingCart size={15} />
                Comprar ahora
              </Button>
            </div>

          </div>

        </div>
      </div>
    );
  }

  // ─── VISTA EN TARJETA (CATÁLOGO) ───
  return (
    <Card className="flex flex-col h-full bg-[#12161f] border-[#232a36] hover:border-slate-500/50 transition-all duration-300 overflow-hidden group shadow-lg shadow-black/20 rounded-2xl relative">
      {producto.recomend && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-[10px] font-mono tracking-wide px-2.5 py-1.5 rounded-full backdrop-blur-sm">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_5px_rgba(52,211,153,0.8)]"></span>
          {producto.recomend}
        </div>
      )}

      <div className="relative h-56 overflow-hidden bg-[#0b0f16] border-b border-[#232a36]">
        <img 
          src={fotoPrincipal} 
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
          alt={producto.titulo}
        />
      </div>

      <CardHeader className="space-y-1 p-5 flex-grow flex flex-col items-center justify-center text-center">
        <CardTitle className="text-lg font-bold text-white line-clamp-1">
          {producto.titulo}
        </CardTitle>
        <CardDescription className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          {producto.categoria}
        </CardDescription>
      </CardHeader>

      <CardFooter className="bg-blue p-5 pt-0 flex flex-col items-center gap-4 mt-auto">
        <div className="text-2xl font-black text-cyan-400">
          {producto.precio}
        </div>
        <Button 
          variant="outline" 
          className="w-full bg-[#1a202c] hover:bg-[#232a36] text-slate-300 border-[#2d3544] hover:border-cyan-900/80 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 rounded-xl text-xs font-bold uppercase tracking-wider py-5"
        >
          Ver detalles
          <ArrowRight size={14} />
        </Button>
      </CardFooter>
    </Card>
  );
};