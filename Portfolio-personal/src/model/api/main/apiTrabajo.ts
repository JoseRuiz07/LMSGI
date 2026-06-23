import { supabase } from "@/model/utils/Supabase";
import type { ITrabajos } from "@/model/interface/ITrabajos"; 

// 1. Función para traer TODOS los cursos
export const getTrabajo = async (): Promise<ITrabajos[]> => {
  const { data, error } = await supabase
    .from('trabajos')
    .select('*');

  if (error) {
    console.error("Error en el modelo getTrabajo:", error);
    return [];
  }
  return data as ITrabajos[];
};

// 2. NUEVA: Función para traer UN SOLO curso por su ID
export const getTrabajoById = async (id: number): Promise<ITrabajos | undefined> => {
  const { data, error } = await supabase
    .from('trabajos') // <-- ¡Ojo aquí! Debe ser 'Cursos' con C mayúscula, no 'cursos'
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error en el modelo getTrabajoById:`, error);
    return undefined;
  }
  return data as ITrabajos;
};