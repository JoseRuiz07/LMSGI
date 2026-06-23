import { supabase } from "@/model/utils/Supabase";
import type { ICursos } from "@/model/interface/ICursos";

// 1. Función para traer TODOS los cursos
export const getCursos = async (): Promise<ICursos[]> => {
  const { data, error } = await supabase
    .from('Cursos')
    .select('*');

  if (error) {
    console.error("Error en el modelo getCursos:", error);
    return [];
  }
  return data as ICursos[];
};

// 2. NUEVA: Función para traer UN SOLO curso por su ID
export const getCursoById = async (id: number): Promise<ICursos | undefined> => {
  const { data, error } = await supabase
    .from('Cursos') // <-- ¡Ojo aquí! Debe ser 'Cursos' con C mayúscula, no 'cursos'
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error en el modelo getCursoById:`, error);
    return undefined;
  }
  return data as ICursos;
};