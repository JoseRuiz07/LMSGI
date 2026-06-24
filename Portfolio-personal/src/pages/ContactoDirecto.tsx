import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactoDirecto = () => {
  const [enviado, setEnviado] = useState(false);

  const enviarEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_zk38m24', 'template_539sv7n', e.target, 'pXRkHBwWkIC8viCut')
      .then(() => {
        setEnviado(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    // min-h-[60vh] asegura que la sección siempre tenga una altura mínima 
    // y flex flex-col items-center centra el contenido.
    <section className="min-h-[60vh] flex flex-col items-center pt-10">
      <div className="max-w-xl w-full p-10 bg-white shadow-sm border border-gray-200 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">Contacto Directo</h2>
        
        {enviado ? (
          <p className="text-green-600 font-bold">¡Mensaje enviado con éxito!</p>
        ) : (
          <form onSubmit={enviarEmail} className="space-y-4">
            <input type="text" name="user_name" placeholder="Tu Nombre" required className="w-full p-3 border rounded-lg" />
            <input type="email" name="user_email" placeholder="Tu Email" required className="w-full p-3 border rounded-lg" />
            <textarea name="message" placeholder="Tu mensaje" required className="w-full p-3 border rounded-lg h-32" />
            <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
              Enviar Mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
};