import { useState } from "react";
import { supabase } from "@/model/utils/Supabase";
import { useNavigate, Link } from "react-router-dom"; // Importamos Link
import { ArrowLeft } from "lucide-react"; // Opcional: para un icono bonito

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("Credenciales incorrectas o acceso denegado.");
    } else {
      navigate("/admin"); 
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <form onSubmit={handleLogin} className="p-8 bg-white rounded-xl shadow-lg w-96">
        <h2 className="mb-6 text-2xl font-bold text-center">Acceso Admin</h2>
        
        {error && <p className="mb-4 text-red-500 text-sm text-center">{error}</p>}
        
        <input 
          type="email" placeholder="Correo" className="w-full mb-4 p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" placeholder="Contraseña" className="w-full mb-4 p-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button className="w-full py-2 bg-blue-600 text-white rounded font-bold mb-4">
          Entrar
        </button>

        {/* --- AQUÍ ESTÁ EL CAMBIO --- */}
        <Link 
          to="/" 
          className="flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={16} /> Volver a la página principal
        </Link>
      </form>
    </div>
  );
};