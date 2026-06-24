import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Wrench, Briefcase, BookOpen,
  Plus, Mail, ShoppingBag, ArrowLeft,  LogOut, 
} from "lucide-react";
import { supabase } from "@/model/utils/Supabase"; // Asegúrate de que esta sea tu ruta

const NAV = [
  { label: "Servicios", to: "/admin/servicios", icon: Wrench },
  { label: "Trabajos",   to: "/admin/trabajos",  icon: Briefcase },
  { label: "Cursos",     to: "/admin/cursos",    icon: BookOpen },
  { label: "Productos", to: "/admin/productos", icon: ShoppingBag },
  { label: "Contacto",  to: "/admin/sociales",  icon: Mail },
];

export const SidebarAdmin = () => {
  const { pathname } = useLocation();
  const nav = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    // Reemplazamos la ruta para que no puedan volver atrás con el botón del navegador
    nav("/admin/login", { replace: true });
  };

  return (
    <aside className="asb">
      {/* Logo */}
      <div className="asb__logo">
        <div className="asb__logo-icon"><LayoutDashboard size={13}/></div>
        <span className="asb__logo-text">Panel</span>
      </div>

      {/* Quick Create */}
      <button className="asb__quick" onClick={() => nav("/admin")}>
        <Plus size={13}/><span>Panel general</span>
        <Mail size={13} className="asb__mail"/>
      </button>

      {/* Nav principal */}
      <nav className="asb__nav">
        {NAV.map(({ label, to, icon: Icon }) => (
          <Link 
            key={to} 
            to={to}
            className={`asb__link ${pathname === to ? "asb__link--active" : ""}`}
          >
            <Icon size={14}/><span>{label}</span>
          </Link>
        ))}
      </nav>

      {/* Espaciador que empuja todo al fondo */}
      <div style={{ flexGrow: 1 }} />

      {/* Bloque inferior */}
      <div className="asb__bottom">
        {/* Volver al sitio */}
        <Link to="/" className="asb__link asb__link--back" style={{ borderTop: "1px solid #334155", padding: "10px 0" }}>
           <ArrowLeft size={14}/><span>Volver al sitio</span>
        </Link>
        
        {/* Botón Salir con lógica de cierre de sesión */}
        <button onClick={handleLogout} className="asb__link asb__link--muted text-red-400 hover:text-red-300">
          <LogOut size={14}/><span>Salir</span>
        </button>
      </div>
    </aside>
  );
}