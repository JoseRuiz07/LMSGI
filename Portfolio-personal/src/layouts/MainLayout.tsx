import { Outlet } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { Footer} from "@/components/Footer"


export const MainLayout = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}   