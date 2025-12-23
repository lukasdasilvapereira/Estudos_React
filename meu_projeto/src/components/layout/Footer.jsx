import { FaAmazon, FaApple, FaFacebook } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return (
        <div>
           <div className={styles.nav_bar}>
                <li className={styles.nav_link}>
                    <FaApple />
                    <FaFacebook />
                    <FaAmazon />
                </li>
            </div>
        </div>
    )
}

export default Footer