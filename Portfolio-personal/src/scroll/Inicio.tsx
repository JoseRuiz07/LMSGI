import { Link } from "react-router-dom";

export const Inicio = () => {
  // Definimos las secciones para que el código sea más limpio
  const secciones = [
    { titulo: "Sobre mí", desc: "Conoce más sobre mi experiencia, formación, habilidades y los valores que me definen.", to: "/sobremi", btn: "Ir a Sobre mí" },
    { titulo: "Cursos", desc: "Información sobre los cursos, certificaciones y estudios que he realizado.", to: "/cursos", btn: "Ver Cursos" },
    { titulo: "Servicios", desc: "Servicios de administración de sistemas, redes y soporte técnico.", to: "/servicios", btn: "Ver Servicios" },
    { titulo: "Trabajos", desc: "Consulta algunos de los trabajos y proyectos que he realizado.", to: "/trabajos", btn: "Ver Trabajos" },
    { titulo: "Productos", desc: "Equipos informáticos seleccionados para cubrir necesidades tecnológicas.", to: "/productos", btn: "Ver Productos" },
    { titulo: "Contacto", desc: "Accede a mis redes sociales y canales de comunicación.", to: "/sociales", btn: "Ir a Contacto" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bienvenido/a</h1>
        <p className="text-lg text-gray-600">
          Este espacio ha sido creado para que puedas conocer mejor quién soy, qué hago y cómo puedo ayudarte.
        </p>
      </section>

      <div className="flex flex-col gap-6">
        {secciones.map((s, i) => (
          // Esta es la estructura que le da el estilo de tarjeta con borde, sombra y redondeo
          <section key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-2">{s.titulo}</h2>
            <p className="text-gray-600 mb-4">{s.desc}</p>
            <Link 
              to={s.to} 
              className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {s.btn}
            </Link>
          </section>
        ))}
      </div>

      <footer className="mt-12 text-center text-gray-500 border-t pt-6">
        <p>Gracias por visitar este sitio. Te invito a explorar cada sección.</p>
      </footer>
    </div>
  );
};