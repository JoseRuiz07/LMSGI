import { useState } from "react";
import { Trash2, Plus, List } from "lucide-react";
import { useStore } from "@/components/Context/Contexto";

const EMPTY = {
  titulo: "",
  categoria: "",
  descripcion: "",
  imagen: "",
};

export const AdminCursos = () => {
  // Ajustado: Usamos los nombres correctos para Cursos de tu contexto
  const { cursos = [], addCurso, deleteCurso, loading } = useStore(); 

  const [vista, setVista] = useState<"lista" | "nuevo">("lista");
  const [form, setForm] = useState(EMPTY);
  const [ok, setOk] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [saving, setSaving] = useState(false);

  if (loading) return <div className="apage"><p className="aempty">Cargando cursos...</p></div>;

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
      // Ajustado: llamamos a addCurso
      await addCurso({ ...form }); 
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
          <h1 className="apage__titulo">Cursos</h1>
          <p className="apage__sub">{(cursos || []).length} cursos en Supabase</p>
        </div>
        <div className="apage__btns">
          <button className={`apage__tab ${vista === "lista" ? "apage__tab--on" : ""}`} onClick={() => setVista("lista")}><List size={13} /> Listado</button>
          <button className={`apage__tab ${vista === "nuevo" ? "apage__tab--on" : ""}`} onClick={() => setVista("nuevo")}><Plus size={13} /> Nuevo</button>
        </div>
      </div>

      {vista === "lista" && (
        <div className="atable-wrap">
          {(cursos || []).length === 0 ? (
            <p className="aempty">No hay cursos aún</p>
          ) : (
            <table className="atable">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Categoría</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {(cursos || []).map((c) => (
                  <tr key={c.id}>
                    <td><strong>{c.titulo}</strong></td>
                    <td><span className="abadge">{c.categoria}</span></td>
                    <td>
                      {/* Ajustado: llamamos a deleteCurso */}
                      <button className="adel" onClick={() => deleteCurso(c.id)}><Trash2 size={13} /></button>
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
            <h2 className="aform__titulo">Nuevo Curso</h2>
            <div className="aform__grid">
              <input name="titulo" placeholder="Título del curso" value={form.titulo} onChange={onChange} />
              <input name="categoria" placeholder="Categoría" value={form.categoria} onChange={onChange} />
              <input name="imagen" placeholder="URL de la imagen" value={form.imagen} onChange={onChange} />
              <textarea name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={onChange} className="aform__textarea" />
            </div>
            {errMsg && <div className="aform__err">✗ {errMsg}</div>}
            {ok && <div className="aform__ok">✓ Guardado con éxito</div>}
            <button onClick={onSubmit} disabled={saving} className="aform__submit">{saving ? "Guardando..." : "Crear curso"}</button>
          </div>
        </div>
      )}
    </div>
  );
}