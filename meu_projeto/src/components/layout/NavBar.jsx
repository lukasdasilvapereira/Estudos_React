import { Link } from "react-router-dom";
import styles from './NavBar.module.css'


function NavBar() {
    return (
        <ul className={styles.link}>
            <li className={styles.linkItem}>
                <Link to='/'>Home</Link>
            </li>

            <li className={styles.linkItem}>
                <Link to='/empresa'>Empresa</Link>
            </li>

            <li className={styles.linkItem}>
                <Link to='/contato'>Contato</Link>
            </li>
        </ul>
    )
}

export default NavBar