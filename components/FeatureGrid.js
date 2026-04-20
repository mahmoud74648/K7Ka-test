import FeatureCard from './FeatureCard'
import styles from '../styles/Home.module.css'

export default function FeatureGrid({ features }) {
    return (
        <section className={styles.cardsGrid}>
            {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
            ))}
        </section>
    )
}
