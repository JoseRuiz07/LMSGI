import { useState } from "react";
import { Trash2, Plus, List } from "lucide-react";
import { useStore } from "@/components/Context/Contexto";

const EMPTY = {
  titulo: "",
  categoria: "",
  descripcion: "",
  link: "",
  imagen: "",
};

export const AdminTrabajos = () => {
  // Extraemos "trabajos", "addTrabajo" y "deleteTrabajo" exactamente como están en tu contexto
  const { trabajos = [], addTrabajo, deleteTrabajo, loading } = useStore();

  const [vista, setVista] = useState<"lista" | "nuevo">("lista");
  const [form, setForm] = useState(EMPTY);
  const [ok, setOk] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [saving, setSaving] = useState(false);

  if (loading) return <div className="apage"><p className="aempty">Cargando trabajos...</p></div>;

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmit = async () => {
    if (!form.titulo.trim() || !form.categoria.trim()) {
      setErrMsg("El título y la categoría son obligatorios");
      return;
    }
    try {
      setSaving(true);
      setErrMsg("");
      await addTrabajo({ ...form });
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
          <h1 className="apage__titulo">Trabajos / Proyectos</h1>
          <p className="apage__sub">{(trabajos || []).length} proyectos en Supabase</p>
        </div>
        <div className="apage__btns">
          <button className={`apage__tab ${vista === "lista" ? "apage__tab--on" : ""}`} onClick={() => setVista("lista")}><List size={13} /> Listado</button>
          <button className={`apage__tab ${vista === "nuevo" ? "apage__tab--on" : ""}`} onClick={() => setVista("nuevo")}><Plus size={13} /> Nuevo</button>
        </div>
      </div>

      {vista === "lista" && (
        <div className="atable-wrap">
          {(trabajos || []).length === 0 ? (
            <p className="aempty">No hay proyectos guardados aún</p>
          ) : (
            <table className="atable">
              <thead>
                <tr>
                  <th>Proyecto</th>
                  <th>Categoría</th>
                  <th>Enlace</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {(trabajos || []).map((t) => (
                  <tr key={t.id}>
                    <td><strong>{t.titulo}</strong></td>
                    <td><span className="abadge">{t.categoria}</span></td>
                    <td>{t.link ? <a href={t.link} target="_blank" rel="noreferrer" className="text-indigo-600 underline">Ver proyecto</a> : "---"}</td>
                    <td>
                      <button className="adel" onClick={() => deleteTrabajo(t.id)}><Trash2 size={13} /></button>
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
            <h2 className="aform__titulo">Nuevo Proyecto</h2>
            <div className="aform__grid">
              <input name="titulo" placeholder="Título del proyecto" value={form.titulo} onChange={onChange} />
              <input name="categoria" placeholder="Categoría (Ej: Desarrollo Web, Diseño)" value={form.categoria} onChange={onChange} />
              <input name="link" placeholder="URL del proyecto (Link)" value={form.link} onChange={onChange} />
              <input name="imagen" placeholder="URL de la imagen" value={form.imagen} onChange={onChange} />
              <textarea name="descripcion" placeholder="Descripción del proyecto" value={form.descripcion} onChange={onChange} className="aform__textarea" />
            </div>
            {errMsg && <div className="aform__err">✗ {errMsg}</div>}
            {ok && <div className="aform__ok">✓ Guardado con éxito</div>}
            <button onClick={onSubmit} disabled={saving} className="aform__submit">{saving ? "Guardando..." : "Crear proyecto"}</button>
          </div>
        </div>
      )}
    </div>
  );
}