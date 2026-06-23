import { useState } from "react";
import { Trash2, Plus, List } from "lucide-react";
import { useStore } from "@/components/Context/Contexto";

const EMPTY = {
  nombre: "",
  url: "",
  imagen: "",
};

export const AdminSociales = () => {
  // NOTA: Asegúrate de que en tu Contexto las funciones se llamen exactamente así.
  // Si tu contexto usa nombres genéricos, cámbialos aquí (ej: addSociales o addSocial)
  const { sociales = [], addSociales, deleteSociales, loading } = useStore();

  const [vista, setVista] = useState<"lista" | "nuevo">("lista");
  const [form, setForm] = useState(EMPTY);
  const [ok, setOk] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [saving, setSaving] = useState(false);

  if (loading) return <div className="apage"><p className="aempty">Cargando redes sociales...</p></div>;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmit = async () => {
    if (!form.nombre.trim() || !form.url.trim()) {
      setErrMsg("El nombre y la URL son obligatorios");
      return;
    }
    try {
      setSaving(true);
      setErrMsg("");
      
      if (addSociales) {
        await addSociales({ ...form });
      }
      
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
          <h1 className="apage__titulo">Redes Sociales</h1>
          <p className="apage__sub">{(sociales || []).length} enlaces activos</p>
        </div>
        <div className="apage__btns">
          <button className={`apage__tab ${vista === "lista" ? "apage__tab--on" : ""}`} onClick={() => setVista("lista")}><List size={13} /> Listado</button>
          <button className={`apage__tab ${vista === "nuevo" ? "apage__tab--on" : ""}`} onClick={() => setVista("nuevo")}><Plus size={13} /> Nuevo</button>
        </div>
      </div>

      {vista === "lista" && (
        <div className="atable-wrap">
          {(sociales || []).length === 0 ? (
            <p className="aempty">No hay redes guardadas aún</p>
          ) : (
            <table className="atable">
              <thead>
                <tr>
                  <th>Red Social</th>
                  <th>Enlace (URL)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {(sociales || []).map((s) => (
                  <tr key={s.id}>
                    <td><strong>{s.nombre}</strong></td>
                    <td><a href={s.url} target="_blank" rel="noreferrer" style={{ color: '#6366f1', textDecoration: 'underline' }}>{s.url}</a></td>
                    <td>
                      <button className="adel" onClick={() => deleteSociales && deleteSociales(s.id)}><Trash2 size={13} /></button>
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
            <h2 className="aform__titulo">Vincular Red Social</h2>
            <div className="aform__grid">
              <input name="nombre" placeholder="Nombre de la red (Ej: Instagram, GitHub)" value={form.nombre} onChange={onChange} />
              <input name="url" placeholder="URL del perfil" value={form.url} onChange={onChange} />
              <input name="imagen" placeholder="URL del icono o imagen" value={form.imagen} onChange={onChange} />
            </div>
            {errMsg && <div className="aform__err">✗ {errMsg}</div>}
            {ok && <div className="aform__ok">✓ Guardado con éxito</div>}
            <button onClick={onSubmit} disabled={saving} className="aform__submit">{saving ? "Guardando..." : "Añadir enlace"}</button>
          </div>
        </div>
      )}
    </div>
  );
}