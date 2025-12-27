import { Link } from "react-router-dom"
import styles from './NavBar.module.css'
import Container from "./Container"
import logo from '../../../../img/costs_logo.png'

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'><img src={logo} alt="costs" className={styles.itens} /></Link>
                <ul className={styles.item}>
                    <li>
                        <Link to='/' className={styles.itens}>Home</Link>
                    </li>

                    <li>
                        <Link to='/projects' className={styles.itens}>Projetos</Link>
                    </li>

                    <li>
                        <Link to='/contact' className={styles.itens}>Contato</Link>
                    </li>
                    <li>
                        <Link to='/company' className={styles.itens}>Empresa</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar