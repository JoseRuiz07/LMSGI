import { useState } from "react";
import { Trash2, Plus, List } from "lucide-react";
import { useStore } from "@/components/Context/Contexto";

const EMPTY = {
  titulo: "",
  categoria: "",
  recomend: "",
  descripcion: "",
  imagenInput: "", // Campo temporal para la URL de texto antes de guardarlo como array
  precio: "",
  especific: "",
};

export const AdminProductos = () => {
  const { productos = [], addProducto, deleteProducto, loading } = useStore();

  const [vista, setVista] = useState<"lista" | "nuevo">("lista");
  const [form, setForm] = useState(EMPTY);
  const [ok, setOk] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [saving, setSaving] = useState(false);

  if (loading) return <div className="apage"><p className="aempty">Cargando productos...</p></div>;

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmit = async () => {
    if (!form.titulo.trim()) {
      setErrMsg("El título es obligatorio");
      return;
    }
    try {
      setSaving(true);
      setErrMsg("");
      
      // Enviamos mapeado correctamente según tu interfaz IProductos
      await addProducto({
        titulo: form.titulo,
        categoria: form.categoria,
        recomend: form.recomend,
        descripcion: form.descripcion,
        imagen: [form.imagenInput], // Lo metemos dentro de un array string[] como pide tu interfaz
        precio: form.precio,
        especific: form.especific,
      });

      setForm(EMPTY);
      setOk(true);
      setTimeout(() => { setOk(false); setVista("lista"); }, 1400);
    } catch (err: any) {
      setErrMsg(err?.message || "Error al guardar");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="apage">
      <div className="apage__header">
        <div>
          <h1 className="apage__titulo">Productos</h1>
          <p className="apage__sub">{(productos || []).length} productos en Supabase</p>
        </div>
        <div className="apage__btns">
          <button className={`apage__tab ${vista === "lista" ? "apage__tab--on" : ""}`} onClick={() => setVista("lista")}><List size={13} /> Listado</button>
          <button className={`apage__tab ${vista === "nuevo" ? "apage__tab--on" : ""}`} onClick={() => setVista("nuevo")}><Plus size={13} /> Nuevo</button>
        </div>
      </div>

      {vista === "lista" && (
        <div className="atable-wrap">
          {(productos || []).length === 0 ? (
            <p className="aempty">No hay productos aún</p>
          ) : (
            <table className="atable">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {(productos || []).map((p) => (
                  <tr key={p.id}>
                    <td><strong>{p.titulo}</strong></td>
                    <td>{p.categoria}</td>
                    <td><span className="abadge">{p.precio}</span></td>
                    <td>
                      <button className="adel" onClick={() => deleteProducto(p.id)}><Trash2 size={13} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {vista === "nuevo" && (
        <div className="aform-wrap">
          <div className="aform">
            <h2 className="aform__titulo">Nuevo Producto</h2>
            <div className="aform__grid">
              <input name="titulo" placeholder="Título del producto" value={form.titulo} onChange={onChange} />
              <input name="categoria" placeholder="Categoría" value={form.categoria} onChange={onChange} />
              <input name="precio" placeholder="Precio" value={form.precio} onChange={onChange} />
              <input name="imagenInput" placeholder="URL de la imagen" value={form.imagenInput} onChange={onChange} />
              <input name="recomend" placeholder="Recomendación / Destacado" value={form.recomend} onChange={onChange} />
              <input name="especific" placeholder="Especificaciones" value={form.especific} onChange={onChange} />
              <textarea name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={onChange} className="aform__textarea" />
            </div>
            {errMsg && <div className="aform__err">✗ {errMsg}</div>}
            {ok && <div className="aform__ok">✓ Guardado con éxito</div>}
            <button onClick={onSubmit} disabled={saving} className="aform__submit">{saving ? "Guardando..." : "Crear producto"}</button>
          </div>
        </div>
      )}
    </div>
  );
}