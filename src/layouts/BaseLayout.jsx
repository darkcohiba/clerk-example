import { NavLink, Outlet } from "react-router-dom";
import styles from '../style/NavBar.module.css';


export default function RootLayout() {
    return (
        <div>
            <header>
                <nav className={styles.navMenu}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Protected">Welcome</NavLink>
                </nav>
            </header>
            <main >
                <Outlet />
            </main>
        </div>
    )
}