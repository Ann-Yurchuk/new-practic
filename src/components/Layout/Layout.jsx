import { Outlet } from "react-router-dom"
import { NavBar } from "components/NavBar/NavBar"

export const Layout = () => {

    return (
        <>
        <header>
          <NavBar/>
        </header>
            <main>
                <Outlet/>
            </main>
            </>
    )
}