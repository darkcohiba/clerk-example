import { Outlet } from "react-router-dom";
import Header from '../Components/Header'


export default function RootLayout() {
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <header>
                <Header />
            </header>
            <main style={{ flexGrow: 1 }}>
                <Outlet />
            </main>
        </div>
    )
}