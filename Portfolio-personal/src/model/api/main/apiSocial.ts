import { supabase } from "@/model/utils/Supabase";
import type { ISociales } from "@/model/interface/ISociales";

// 1. Función para traer TODOS los cursos
export const getSociales = async (): Promise<ISociales[]> => {
  const { data, error } = await supabase
    .from('sociales')
    .select('*');

  if (error) {
    console.error("Error en el modelo getSociales:", error);
    return [];
  }
  return data as ISociales[];
};

// 2. NUEVA: Función para traer UN SOLO curso por su ID
export const getSocialById = async (id: number): Promise<ISociales | undefined> => {
  const { data, error } = await supabase
    .from('sociales') // <-- ¡Ojo aquí! Debe ser 'Cursos' con C mayúscula, no 'cursos'
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error en el modelo getSocialesById:`, error);
    return undefined;
  }
  return data as ISociales;
};