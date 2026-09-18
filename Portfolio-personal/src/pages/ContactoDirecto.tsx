import { useState } from "react";
import emailjs from "emailjs-com";
import { Send, CheckCircle2, Mail, User, MessageSquare, Terminal } from "lucide-react";

export const ContactoDirecto = () => {
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);

  const enviarEmail = (e: any) => {
    e.preventDefault();
    setCargando(true);

    emailjs
      .sendForm('service_zk38m24', 'template_539sv7n', e.target, 'pXRkHBwWkIC8viCut')
      .then(
        () => {
          setCargando(false);
          setEnviado(true);
        },
        (error) => {
          setCargando(false);
          console.log(error.text);
        }
      );
  };

  return (
    <section className="min-h-screen bg-[#0b0f17] text-slate-200 px-4 py-12 flex flex-col items-center justify-center font-sans">
      <div className="max-w-2xl w-full space-y-8">
        
        {/* Encabezado con punto brillante estilo la imagen */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Canal Técnico Directo
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contacto Directo
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Envía una consulta directa para proyectos de infraestructura, administración de sistemas, redes telemáticas o propuestas laborales.
          </p>
        </div>

        {/* Tarjeta principal con fondo estilo contenedor #131926 */}
        <div className="bg-[#131926] border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400" />

          {enviado ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
              <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-2xl font-bold text-white">¡Mensaje enviado con éxito!</h3>
              <p className="text-slate-400 text-sm max-w-md">
                Gracias por ponerte en contacto. El mensaje ha sido entregado correctamente.
              </p>
              <button
                onClick={() => setEnviado(false)}
                className="mt-4 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-cyan-400 border border-slate-700 transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={enviarEmail} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-2 uppercase tracking-wider">
                  <User size={14} className="text-cyan-400" />
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Tu Nombre"
                  required
                  className="w-full bg-[#0b0f17] border border-slate-800 rounded-xl p-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-2 uppercase tracking-wider">
                  <Mail size={14} className="text-cyan-400" />
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="tuemail@ejemplo.com"
                  required
                  className="w-full bg-[#0b0f17] border border-slate-800 rounded-xl p-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-2 uppercase tracking-wider">
                  <MessageSquare size={14} className="text-cyan-400" />
                  Mensaje
                </label>
                <textarea
                  name="message"
                  placeholder="Escribe tu mensaje o detalle de tu consulta aquí..."
                  required
                  className="w-full bg-[#0b0f17] border border-slate-800 rounded-xl p-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all h-36 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                  <Terminal size={14} className="text-slate-600" />
                  EmailJS API
                </span>

                <button
                  type="submit"
                  disabled={cargando}
                  className="bg-cyan-400 hover:bg-cyan-300 text-[#0b0f17] font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-200 shadow-lg shadow-cyan-500/20 active:scale-95 disabled:opacity-50"
                >
                  {cargando ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};