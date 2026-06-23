import type { IServicio } from "@/model/interface/IServicios";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card"
 //servicio: parametro de entrada del componente ServicioCard, que es un objeto con la información de un servicio concreto
 interface Props {
    servicio: IServicio;
    isDetail?: boolean;
  }
  
export const ServicioCard = ({ servicio, isDetail = false }: Props) => {
  if (isDetail) {
    return (
      <Card className="w-full max-w-4xl shadow-xl border-border animate-in fade-in zoom-in duration-300">
        <CardHeader className="text-center">
          <CardDescription className="text-sm font-medium text-blue-600 uppercase tracking-widest">
            {servicio.categoria}
          </CardDescription>
          <CardTitle className="text-4xl font-extrabold tracking-tight mt-2">
            {servicio.titulo}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <div className="px-8 pb-8 flex justify-center">
            <div className="overflow-hidden rounded-xl border border-border shadow-inner aspect-[21/9] w-full max-w-3xl bg-muted">
              <img 
                src={servicio.imagen} 
                alt={servicio.titulo} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-center gap-6 px-12 pb-12">
          <div className="w-full max-w-2xl text-center">
            <h3 className="text-lg font-semibold mb-2">Descripción del servicio</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {servicio.descripcion}
            </p>
          </div>

          <Link to="/servicios">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Volver a la lista de servicios
            </Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }
  return (
    
    <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
  
  {/* Imagen con un degradado encima */}
  <div className="relative h-48 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
    <img 
      src={servicio.imagen || "https://via.placeholder.com/400x200"} 
      className="w-full h-full object-cover"
      alt={servicio.titulo}
    />
    <Badge className="absolute top-4 right-4 z-20 bg-blue-600 hover:bg-blue-700">
      {servicio.categoria}
    </Badge>
  </div>

  <CardHeader className="space-y-1">
    <CardTitle className="text-xl font-bold text-gray-800">
      {servicio.titulo}
    </CardTitle>
    <CardDescription className="line-clamp-2">
      {servicio.descripcion}
    </CardDescription>
  </CardHeader>

  <CardFooter className="pt-0">
    <Button className="w-full bg-slate-900 hover:bg-blue-600 transition-colors">
      Ver detalles
    </Button>
  </CardFooter>
</Card>
  )
}