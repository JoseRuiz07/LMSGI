import { supabase } from "@/model/utils/Supabase";
import type { IServicio } from "@/model/interface/IServicios";

// 1. Función para traer TODOS los cursos
export const getServicio = async (): Promise<IServicio[]> => {
  const { data, error } = await supabase
    .from('servicios')
    .select('*');

  if (error) {
    console.error("Error en el modelo getServicio:", error);
    return [];
  }
  return data as IServicio[];
};

// 2. NUEVA: Función para traer UN SOLO curso por su ID
export const getServicioById = async (id: number): Promise<IServicio | undefined> => {
  const { data, error } = await supabase
    .from('servicios')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error en el modelo getServicioById:`, error);
    return undefined;
  }
  return data as IServicio;
};