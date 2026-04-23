export default function FeatureCard({ title, text, variant }) {
    const isWarm = variant === 'pink'

    return (
        <article
            className={`rounded-2xl border bg-white p-6 shadow-card transition hover:-translate-y-1 ${
                isWarm ? 'border-brand-orange/40' : 'border-brand-blue/40'
            }`}
        >
            <h2 className={`mb-3 text-2xl font-bold ${isWarm ? 'text-brand-orange' : 'text-brand-blue'}`}>
                {title}
            </h2>
            <p className="text-base leading-8 text-brand-textSecondary">{text}</p>
        </article>
    )
}
