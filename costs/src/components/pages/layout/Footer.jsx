import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.social}>
                    <span className={styles.item}>
                        <FaFacebook />
                    </span>
                    <span className={styles.item}>
                        <FaInstagram />
                    </span>
                    <span className={styles.item}>
                        <FaLinkedin />
                    </span>
                </div>
                <div className={styles.copyright}>
                    <p>Costs &copy; 2025</p>
                </div>
            </div>
        </footer >
    )
}

export default Footer