import type { ICursos } from "@/model/interface/ICursos";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  curso: ICursos;
  isDetail?: boolean;
}

export const CursoCard = ({ curso, isDetail = false }: Props) => {
  
  // =========================================================
  // VISTA DE DETALLE (Modificada al Dark Mode para coherencia)
  // =========================================================
  if (isDetail) {
    return (
      <Card className="w-full max-w-4xl bg-[#12161f] border-[#232a36] shadow-2xl shadow-black/40 animate-in fade-in zoom-in duration-300">
        <CardHeader className="text-center pt-10">
          <CardDescription className="text-xs font-mono text-cyan-500 uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-2">
             <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,211,238,1)]"></span>
            {curso.categoria}
          </CardDescription>
          <CardTitle className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2">
            {curso.titulo}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <div className="px-8 pb-8 flex justify-center">
            <div className="relative overflow-hidden rounded-xl border border-[#2d3544] shadow-inner aspect-[21/9] w-full max-w-3xl bg-[#0b0f16]">
              {/* Degradado sutil para integrar la imagen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/10 to-transparent z-10"></div>
              <img 
                src={curso.imagen} 
                alt={curso.titulo} 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className="bg-blue flex flex-col items-center gap-6 px-12 pb-12">
          <div className="w-full max-w-2xl text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Descripción del módulo</h3>
            <p className="text-base leading-relaxed text-slate-400">
              {curso.descripcion}
            </p>
          </div>

          <Link to="/cursos" className="mt-4">
            <Button variant="outline" className="bg-[#1a202c] hover:bg-[#232a36] text-slate-300 border-[#2d3544] hover:text-cyan-400 transition-colors flex items-center gap-2">
              <ArrowLeft size={16} />
              Volver a la lista de cursos
            </Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }

  // =========================================================
  // VISTA DE LISTA (La tarjeta que aparece en tu captura)
  // =========================================================
  return (
    <Card className="flex flex-col h-full bg-[#12161f] border-[#232a36] hover:border-slate-500/50 transition-all duration-300 overflow-hidden group shadow-lg shadow-black/20 rounded-2xl">
      
      {/* Contenedor de la Imagen con Degradado Dark */}
      <div className="relative h-48 w-full overflow-hidden bg-[#0b0f16]">
        {/* Degradado inferior para fundirse con la tarjeta */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#12161f] to-transparent z-10" />
        
        <img 
          src={curso.imagen || "https://via.placeholder.com/400x200"} 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
          alt={curso.titulo}
        />
        
        {/* Badge superior derecho estilo "Tech" */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-[10px] font-mono tracking-wide px-2.5 py-1.5 rounded-full backdrop-blur-sm">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_5px_rgba(34,211,238,0.8)]"></span>
          {curso.categoria}
        </div>
      </div>

      {/* Contenido (Título y Descripción) */}
      <CardHeader className="flex-grow space-y-3 pt-2 pb-6 px-7 z-20 ">
        <CardTitle className="text-xl font-bold text-white leading-tight">
          {curso.titulo}
        </CardTitle>
        <CardDescription className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
          {curso.descripcion}
        </CardDescription>
      </CardHeader>

      {/* Footer (Botón) */}
      <CardFooter className="pt-0 pb-7 px-7 bg-blue">
        {/* Si tienes ruta dinámica, idealmente esto iría envuelto en un <Link to={`/cursos/${curso.id}`}> */}
        <Button 
          variant="outline" 
          className="bg-[#1a202c] hover:bg-[#232a36] text-slate-300 border-[#2d3544] hover:border-cyan-900/80 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 rounded-xl text-xs font-semibold px-4 py-5"
        >
          Ver detalles
          <ArrowRight size={14} />
        </Button>
      </CardFooter>
      
    </Card>
  );
};