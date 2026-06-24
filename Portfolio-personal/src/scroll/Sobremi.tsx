import miImagen from "@/assets/miImagen.png"; 

// 2. La usas dentro del JSX
<img src={miImagen} alt="Descripción" className="w-full rounded-lg" />
export const Sobremi = () => {
    return (
    // 1. Contenedor principal que usa Flexbox para poner las dos columnas
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-8 md:p-16 min-h-[calc(100vh-80px)] bg-background">
      
      {/* --- COLUMNA IZQUIERDA (Texto y Datos) --- */}
      <div className="flex-1 flex flex-col gap-8 w-full max-w-2xl">
        
        {/* Cuadro de 'JOSE' (Título/Nombre) */}
        <div className="p-6 border border-border rounded-xl bg-card shadow-sm">
          <h1 className="text-5xl font-extrabold tracking-tight text-card-foreground">
            JOSÉ LUIS RUIZ GENNELL
          </h1>
        </div>

        {/* Cuadro de 'INFO' (Descripción/Bio) */}
        <div className="p-8 border border-border rounded-xl bg-card shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-primary">Información</h2>
          <p className="text-muted-foreground leading-relaxed">
            Soy un estudiane de grado superior ASIR y este es mi portfolio personal en el que se encuentra mi informacion, mis cursos, los servicios que ofrezco, trabajos y mis contactos
          </p>
        </div>
      
      </div>

      {/* --- COLUMNA DERECHA (Imagen) --- */}
      <div className="flex-1 flex justify-center items-center w-full max-w-md">
        
        {/* Cuadro contenedor de la imagen */}
        <div className="aspect-square w-full max-w-sm overflow-hidden border-2 border-border rounded-2xl bg-muted shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            // Pon aquí la ruta real de tu imagen:
            src={miImagen}
            alt="Logo de Jose"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

      </div>

    </div>
  );
}