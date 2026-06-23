import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="flex items-center justify-center gap-8 p-6 bg-white border-b border-gray-100 shadow-sm">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Inicio</Link>
            <Link to="/sobremi" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Sobre mi</Link>
            <Link to="/cursos" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Cursos</Link>
            <Link to="/servicios" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Servicios</Link>
            <Link to="/trabajos" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Trabajos</Link>
            <Link to="/productos" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Productos</Link>
            <Link to="/sociales" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contactos</Link>
        </nav>
    )
}
