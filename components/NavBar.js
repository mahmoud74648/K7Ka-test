import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function NavBar() {
    return (
        <nav className={styles.navBar}>
            <Link href="/" legacyBehavior>
                <a className={styles.navLink}>الرئيسية</a>
            </Link>
            <Link href="/alaaqa" legacyBehavior>
                <a className={styles.navLink}>علاقة الأم بالمنزل</a>
            </Link>
        </nav>
    )
}
