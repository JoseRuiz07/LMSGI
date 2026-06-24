import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "../layouts/MainLayout"
import { Inicio } from "@/scroll/Inicio"
import { Sobremi } from "@/scroll/Sobremi"
import { Cursos } from "@/pages/Cursos/Cursos"
import { CursoDetalle } from "@/pages/Cursos/CursoDetalle"
import { Servicios } from "@/pages/servicios/Servicios"
import { ServicioDetalle } from "@/pages/servicios/ServicioDetalle"
import { Trabajos } from "../pages/Trabajos/Trabajos"
import { TrabajoDetalle } from "@/pages/Trabajos/TrabajoDetalle"
import { Productos } from "@/pages/Productos/Productos"
import { ProductoDetalle } from "@/pages/Productos/ProductoDetalle"
import { Sociales } from "@/scroll/Sociales"
import { ContactoDirecto } from "@/pages/ContactoDirecto"

// Admin e Imports de Seguridad
import { StoreProvider } from "@/components/Context/Contexto"
import { BackLayout } from "@/layouts/BackLayout"
import { AdminInicio } from "@/pages/AdminPages/AdminInicio"
import { AdminCursos } from "@/pages/AdminPages/AdminCursos"
import { AdminProductos } from "@/pages/AdminPages/AdminProductos"
import { AdminServicios } from "@/pages/AdminPages/AdminServicios"
import { AdminSociales } from "@/pages/AdminPages/AdminSociales"
import { AdminTrabajos } from "@/pages/AdminPages/AdminTrabajos"
import { Login } from "@/pages/AdminPages/Login"
import { ProtectedRoute } from "@/components/Seguro" 

export const AppRouter = () => {
    return (
        <BrowserRouter>
          <StoreProvider>
            <Routes>
                {/* Rutas Públicas */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/sobremi" element={<Sobremi />} />
                    <Route path="/cursos" element={<Cursos />} />
                    <Route path="/cursos/:id" element={<CursoDetalle />} />
                    <Route path="/servicios/" element={<Servicios />} />
                    <Route path="/servicios/:id" element={<ServicioDetalle />} />
                    <Route path="/trabajos" element={<Trabajos />} />
                    <Route path="/trabajos/:id" element={<TrabajoDetalle />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/productos/:id" element={<ProductoDetalle />} />
                    <Route path="/sociales" element={<Sociales />} />
                    <Route path="/contacto-directo" element={<ContactoDirecto />} />
                </Route>

                {/* Rutas de Admin */}
                <Route path="/admin/login" element={<Login />} />
                <Route path="/admin" element={
                    <ProtectedRoute>
                        <BackLayout />
                    </ProtectedRoute>
                }>
                    <Route index element={<AdminInicio />} />
                    <Route path="servicios" element={<AdminServicios />} />
                    <Route path="trabajos" element={<AdminTrabajos />} />
                    <Route path="cursos" element={<AdminCursos />} />
                    <Route path="productos" element={<AdminProductos />} />
                    <Route path="sociales" element={<AdminSociales />} />
                </Route>
            </Routes>
          </StoreProvider>
        </BrowserRouter>
    )
}