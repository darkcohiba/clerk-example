import { Outlet } from "react-router-dom";
import Header from '../Components/Header'


export default function RootLayout() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main >
                <Outlet />
            </main>
        </div>
    )
}