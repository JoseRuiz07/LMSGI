import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, FolderOpen, Mail, Handshake } from "lucide-react";
import miImagen from "@/assets/FotoJose.jpeg";


export const Sobremi = () => {
  return (
    <section className="relative min-h-screen bg-[#0b0f16] text-slate-300 overflow-hidden">
      {/* Fondo de puntos decorativo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(148,163,184,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24">

        {/* --- BLOQUE PRINCIPAL (Imagen + Texto) --- */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* --- COLUMNA IZQUIERDA (Imagen) --- */}
          <div className="w-full md:w-[380px] flex-shrink-0 flex flex-col items-center">
            <div className="w-full aspect-square overflow-hidden rounded-2xl border border-[#232a36] shadow-2xl shadow-black/40">
              <img 
                src={miImagen} 
                alt="José Luis Ruiz Gennell" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Barra decorativa inferior */}
            <div className="mt-6 h-3 w-4/5 rounded-full bg-[#1a202c] blur-sm" />
          </div>

          {/* --- COLUMNA DERECHA (Texto) --- */}
          <div className="flex-1 w-full max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Sobre mí
            </h1>

            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                Estudiante de segundo curso del Ciclo Formativo de Grado Superior en{" "}
                <span className="font-semibold text-white">
                  Administración de Sistemas Informáticos en Red (ASIR)
                </span>
                . Apasionado de la infraestructura de redes empresariales, la virtualización de servidores en alta disponibilidad y la seguridad informática.
              </p>
              <p>
                Cuento con mentalidad analítica orientada al{" "}
                <span className="font-mono text-cyan-400">troubleshooting</span>{" "}
                exhaustivo, diagnóstico por capas OSI y una filosofía constante de automatización mediante scripts y documentación detallada. En búsqueda activa de empresa colaboradora para realizar las prácticas de{" "}
                <span className="font-semibold text-white">FCT</span> o incorporación como perfil Junior.
              </p>
            </div>

            {/* --- BOTONES PRINCIPALES --- */}
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4">
              <a href="/cv-jose-luis-ruiz-gennell.pdf" download>
                <Button className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-[#0b0f16] font-mono text-sm font-semibold px-6 py-6 rounded-xl gap-2 shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all">
                  <Download size={18} />
                  Descargar CV Técnico (PDF)
                </Button>
              </a>

              <Link to="/trabajos" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto bg-[#1a202c] hover:bg-[#232a36] text-slate-300 border-[#2d3544] hover:text-cyan-400 font-mono text-sm font-semibold px-6 py-6 rounded-xl gap-2 transition-all"
                >
                  <FolderOpen size={18} />
                  Ver Trabajos & Proyectos
                </Button>
              </Link>
            </div>

            {/* --- BOTÓN SECUNDARIO --- */}
            <div className="mt-4">
              <Link to="/contacto-directo">
                <Button 
                  variant="outline" 
                  className="bg-transparent hover:bg-[#1a202c] text-slate-400 border-[#232a36] hover:text-cyan-400 font-mono text-xs font-medium px-4 py-5 rounded-xl gap-2 transition-all"
                >
                  <Mail size={14} />
                  Contacto Directo
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* --- SECCIÓN CTA --- */}
        <div className="mt-28 md:mt-36 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#12161f] border border-[#232a36] flex items-center justify-center mb-6 shadow-lg shadow-black/30">
            <Handshake size={28} className="text-cyan-400" />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-3xl leading-tight">
            ¿Buscando un Administrador de Sistemas Junior para tu equipo?
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl leading-relaxed">
            Estoy disponible para entrevistas inmediatas de cara al periodo de Formación en Centros de Trabajo (FCT) o vacantes de soporte técnico L1/L2 y administración junior.
          </p>
        </div>

      </div>
    </section>
  );
};