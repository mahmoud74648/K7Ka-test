import styles from '../styles/Home.module.css'

export default function HeroHeader() {
    return (
        <header className={styles.header}>
            <h1 className={styles.mainTitle}>كحكه</h1>
            <p className={styles.mainSubtitle}>
                منصة تحقيقية حول علاقة الأم بالمنزل وأبعاد التنظيف النفسي والاجتماعي للأسرة
            </p>
        </header>
    )
}
