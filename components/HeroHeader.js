export default function HeroHeader() {
    return (
        <header className="mb-10 flex flex-col items-center text-center sm:mb-14">
            <span className="mb-4 rounded-full bg-brand-gold/35 px-4 py-1.5 text-xs font-bold tracking-wide text-brand-brown sm:text-sm">
                منصة تحقيقية
            </span>
            <h1 className="mb-4 text-5xl font-extrabold leading-tight text-brand-brown sm:text-6xl">كحكه</h1>
            <p className="max-w-2xl text-lg leading-8 text-brand-blue sm:text-xl">
                منصة تحقيقية حول علاقة الأم بالمنزل وأبعاد التنظيف النفسي والاجتماعي للأسرة
            </p>
        </header>
    )
}
