import { supabase } from "@/model/utils/Supabase";
import type { IProductos } from "@/model/interface/IProductos";

// 1. Función para traer TODOS los productos
export const getProductos = async (): Promise<IProductos[]> => {
  const { data, error } = await supabase
    .from('productos') // <-- Si en tu base de datos está en mayúsculas, cámbialo a 'Productos'
    .select('*');

  if (error) {
    console.error("Error en el modelo getProductos:", error);
    return [];
  }
  return data as IProductos[];
};

// 2. Función para traer UN SOLO producto por su ID
export const getProductoById = async (id: number): Promise<IProductos | undefined> => {
  const { data, error } = await supabase
    .from('productos')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error en el modelo getProductoById para el ID ${id}:`, error);
    return undefined;
  }
  return data as IProductos;
};