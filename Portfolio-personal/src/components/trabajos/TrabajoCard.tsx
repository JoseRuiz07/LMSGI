import type { ITrabajos } from "@/model/interface/ITrabajos";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react"; // <-- Importamos un icono premium para el enlace externo
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  trabajo: ITrabajos;
  isDetail?: boolean;
}

export const TrabajoCard = ({ trabajo, isDetail = false }: Props) => {

  if (isDetail) {
    return (
      <Card className="w-full max-w-4xl shadow-xl border-border animate-in fade-in zoom-in duration-300">
        <CardHeader className="text-center">
          <CardDescription className="text-sm font-medium text-blue-600 uppercase tracking-widest">
            {trabajo.categoria}
          </CardDescription>
          <CardTitle className="text-4xl font-extrabold tracking-tight mt-2">
            {trabajo.titulo}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <div className="px-8 pb-8 flex justify-center">
            <div className="overflow-hidden rounded-xl border border-border shadow-inner aspect-[21/9] w-full max-w-3xl bg-muted">
              <img 
                src={trabajo.imagen} 
                alt={trabajo.titulo} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-center gap-6 px-12 pb-12">
          <div className="w-full max-w-2xl text-center">
            <h3 className="text-lg font-semibold mb-2">Descripción del trabajo</h3>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              {trabajo.descripcion}
            </p>

            {/* ─── NUEVO: BOTÓN EXCLUSIVO PARA EL LINK DEL TRABAJO ─── */}
            {trabajo.link && (
              <div className="mb-6">
                <a 
                  href={trabajo.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 gap-2 shadow-md transition-all">
                    <ExternalLink size={16} />
                    Visitar Proyecto / Ver Trabajo
                  </Button>
                </a>
              </div>
            )}
          </div>

          <Link to="/trabajos">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Volver a la lista de trabajos
            </Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img 
          src={trabajo.imagen || "https://via.placeholder.com/400x200"} 
          className="w-full h-full object-cover"
          alt={trabajo.titulo}
        />
        <Badge className="absolute top-4 right-4 z-20 bg-blue-600 hover:bg-blue-700">
          {trabajo.categoria}
        </Badge>
      </div>

      <CardHeader className="space-y-1">
        <CardTitle className="text-xl font-bold text-gray-800">
          {trabajo.titulo}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {trabajo.descripcion}
        </CardDescription>
      </CardHeader>

      <CardFooter className="pt-0">
        <Button className="w-full bg-slate-900 hover:bg-blue-600 transition-colors">
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
};