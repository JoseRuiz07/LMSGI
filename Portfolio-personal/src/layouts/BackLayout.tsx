import { Outlet } from "react-router-dom";
import { SidebarAdmin } from "@/components/admin/SidebarAdmin";

export const BackLayout =() => {
  return (
    <div className="adm-layout">
      < SidebarAdmin/>
      <main className="adm-main">
        <Outlet />
      </main>
    </div>
  );
}