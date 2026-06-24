import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/model/utils/Supabase";
import React from "react"; 

// Usamos React.ReactNode para evitar el error de namespace JSX
export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return <div>Cargando...</div>;

  if (!session) return <Navigate to="/admin/login" replace />;

  return <>{children}</>;
};