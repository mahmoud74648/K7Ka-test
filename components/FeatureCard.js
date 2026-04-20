import styles from '../styles/Home.module.css'

export default function FeatureCard({ title, text, variant }) {
    return (
        <article className={`${styles.card} ${variant === 'pink' ? styles.cardPink : styles.cardSky}`}>
            <h2 className={`${styles.cardTitle} ${variant === 'pink' ? styles.cardTitlePink : styles.cardTitleSky}`}>
                {title}
            </h2>
            <p className={styles.cardText}>{text}</p>
        </article>
    )
}
