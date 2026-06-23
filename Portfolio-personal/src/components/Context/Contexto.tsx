import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { supabase } from "@/model/utils/Supabase";

// Tus interfaces importadas exactamente con tus rutas y nombres reales
import type { ICursos } from "@/model/interface/ICursos";
import type { IServicio } from "@/model/interface/IServicios";
import type { ITrabajos } from "@/model/interface/ITrabajos";
import type { IProductos } from "@/model/interface/IProductos";
import type { ISociales } from "@/model/interface/ISociales";

interface Store {
  cursos: ICursos[];
  servicios: IServicio[];
  trabajos: ITrabajos[];
  productos: IProductos[];
  sociales: ISociales[];
  loading: boolean;
  error: string | null;
  addCurso: (curso: Omit<ICursos, "id">) => Promise<void>;
  addServicio: (servicio: Omit<IServicio, "id">) => Promise<void>;
  addTrabajo: (trabajo: Omit<ITrabajos, "id">) => Promise<void>;
  addProducto: (producto: Omit<IProductos, "id">) => Promise<void>;
  addSociales: (item: Omit<ISociales, "id">) => Promise<void>;
  deleteCurso: (id: number) => Promise<void>;
  deleteServicio: (id: number) => Promise<void>;
  deleteTrabajo: (id: number) => Promise<void>;
  deleteProducto: (id: number) => Promise<void>;
  deleteSociales: (id: number) => Promise<void>;
}

const StoreContext = createContext<Store>({} as Store);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cursos, setCursos] = useState<ICursos[]>([]);
  const [servicios, setServicios] = useState<IServicio[]>([]);
  const [trabajos, setTrabajos] = useState<ITrabajos[]>([]);
  const [productos, setProductos] = useState<IProductos[]>([]);
  const [sociales, setSociales] = useState<ISociales[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    cargarTodo();

    // Sincronizados con los nombres reales de la BD según la consola
    const channel = supabase
      ?.channel("portfolio-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "Cursos" }, cargarCursos)
      .on("postgres_changes", { event: "*", schema: "public", table: "servicios" }, cargarServicios)
      .on("postgres_changes", { event: "*", schema: "public", table: "trabajos" }, cargarTrabajos)
      .on("postgres_changes", { event: "*", schema: "public", table: "productos" }, cargarProductos)
      .on("postgres_changes", { event: "*", schema: "public", table: "sociales" }, cargarSociales)
      .subscribe();

    return () => {
      if (channel) supabase?.removeChannel(channel);
    };
  }, []);

  async function cargarTodo() {
    setLoading(true);
    await Promise.all([cargarCursos(), cargarServicios(), cargarTrabajos(), cargarProductos(), cargarSociales()]);
    setLoading(false);
  }

  async function cargarCursos() {
    if (!supabase) return;
    const { data, error } = await supabase.from("Cursos").select("*").order("id", { ascending: false });
    console.log("DEBUG CURSOS - Data:", data, "Error:", error);
    if (error) { console.error("Error cargando cursos", error); setError(error.message); return; }
    setCursos(data || []);
  }

  async function cargarServicios() {
    if (!supabase) return;
    const { data, error } = await supabase.from("servicios").select("*").order("id", { ascending: false });
    console.log("DEBUG SERVICIOS - Data:", data, "Error:", error);
    if (error) { console.error("Error cargando servicios", error); setError(error.message); return; }
    setServicios(data || []);
  }

  async function cargarTrabajos() {
    if (!supabase) return;
    const { data, error } = await supabase.from("trabajos").select("*").order("id", { ascending: false });
    console.log("DEBUG TRABAJOS - Data:", data, "Error:", error);
    if (error) { console.error("Error cargando trabajos", error); setError(error.message); return; }
    setTrabajos(data || []);
  }

  async function cargarProductos() {
    if (!supabase) return;
    const { data, error } = await supabase.from("productos").select("*").order("id", { ascending: false });
    console.log("DEBUG PRODUCTOS - Data:", data, "Error:", error);
    if (error) { console.error("Error cargando productos", error); setError(error.message); return; }
    setProductos(data || []);
  }

  async function cargarSociales() {
    if (!supabase) return;
    const { data, error } = await supabase.from("sociales").select("*").order("id", { ascending: false });
    console.log("DEBUG SOCIALES - Data:", data, "Error:", error);
    if (error) { console.error("Error cargando sociales", error); setError(error.message); return; }
    setSociales(data || []);
  }

  async function addCurso(curso: Omit<ICursos, "id">) {
    if (!supabase) throw new Error("Supabase no está configurado");
    const { data, error } = await supabase.from("Cursos").insert({
      titulo: curso.titulo,
      categoria: curso.categoria,
      descripcion: curso.descripcion,
      imagen: curso.imagen,
    }).select().single();
    if (error) throw error;
    if (data) setCursos((prev) => [data, ...prev]);
  }

  async function addServicio(servicio: Omit<IServicio, "id">) {
    if (!supabase) throw new Error("Supabase no está configurado");
    const { data, error } = await supabase.from("servicios").insert({
      titulo: servicio.titulo,
      categoria: servicio.categoria,
      descripcion: servicio.descripcion,
      imagen: servicio.imagen,
    }).select().single();
    if (error) throw error;
    if (data) setServicios((prev) => [data, ...prev]);
  }

  async function addTrabajo(trabajo: Omit<ITrabajos, "id">) {
    if (!supabase) throw new Error("Supabase no está configurado");
    const { data, error } = await supabase.from("trabajos").insert({
      titulo: trabajo.titulo,
      categoria: trabajo.categoria,
      descripcion: trabajo.descripcion,
      link: trabajo.link,
      imagen: trabajo.imagen,
    }).select().single();
    if (error) throw error;
    if (data) setTrabajos((prev) => [data, ...prev]);
  }

  async function addProducto(producto: Omit<IProductos, "id">) {
    if (!supabase) throw new Error("Supabase no está configurado");
    const { data, error } = await supabase.from("productos").insert({
      titulo: producto.titulo,
      categoria: producto.categoria,
      recomend: producto.recomend,
      descripcion: producto.descripcion,
      imagen: producto.imagen,
      precio: producto.precio,
      especific: producto.especific,
    }).select().single();
    if (error) throw error;
    if (data) setProductos((prev) => [data, ...prev]);
  }

  async function addSociales(item: Omit<ISociales, "id">) {
    if (!supabase) throw new Error("Supabase no está configurado");
    const { data, error } = await supabase.from("sociales").insert({
      nombre: item.nombre,
      url: item.url,
      imagen: item.imagen,
    }).select().single();
    if (error) throw error;
    if (data) setSociales((prev) => [data, ...prev]);
  }

  async function deleteCurso(id: number) {
    if (!supabase) return;
    const { error } = await supabase.from("Cursos").delete().eq("id", id);
    if (error) { console.error("Error borrando curso", error); return; }
    setCursos((prev) => prev.filter((c) => c.id !== id));
  }

  async function deleteServicio(id: number) {
    if (!supabase) return;
    const { error } = await supabase.from("servicios").delete().eq("id", id);
    if (error) { console.error("Error borrando servicio", error); return; }
    setServicios((prev) => prev.filter((s) => s.id !== id));
  }

  async function deleteTrabajo(id: number) {
    if (!supabase) return;
    const { error } = await supabase.from("trabajos").delete().eq("id", id);
    if (error) { console.error("Error borrando trabajo", error); return; }
    setTrabajos((prev) => prev.filter((t) => t.id !== id));
  }

  async function deleteProducto(id: number) {
    if (!supabase) return;
    const { error } = await supabase.from("productos").delete().eq("id", id);
    if (error) { console.error("Error borrando producto", error); return; }
    setProductos((prev) => prev.filter((p) => p.id !== id));
  }

  async function deleteSociales(id: number) {
    if (!supabase) return;
    const { error } = await supabase.from("sociales").delete().eq("id", id);
    if (error) { console.error("Error borrando red social", error); return; }
    setSociales((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <StoreContext.Provider value={{
      cursos, servicios, trabajos, productos, sociales, loading, error,
      addCurso, addServicio, addTrabajo, addProducto, addSociales,
      deleteCurso, deleteServicio, deleteTrabajo, deleteProducto, deleteSociales,
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);