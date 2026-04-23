import Head from 'next/head'
import Link from 'next/link'
import BackgroundSVG from '../components/BackgroundSVG'
import HeroHeader from '../components/HeroHeader'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const topicCards = [
    {
        title: 'صوتها مسموع',
        href: '/sawtoha-masmoua',
        text: 'ملفات واقعية توثّق كيف تُبنى مساحات آمنة لتعبير المرأة عن رأيها.',
    },
    {
        title: 'بين البيت والشغل',
        href: '/bayn-albayt-walshoghl',
        text: 'قصص يومية عن توازن الأدوار بين مسؤوليات المنزل والعمل.',
    },
    {
        title: 'كلام قانون',
        href: '/kalam-qanun',
        text: 'تبسيط حقوق المرأة القانونية بلغة واضحة وموثوقة.',
    },
    {
        title: 'حكايات ستات',
        href: '/hikayat-settat',
        text: 'شهادات وتجارب من واقع نساء مصريات وعربيات.',
    },
    {
        title: 'جوه الكحكة',
        href: '/gowa-alkahka',
        text: 'الضغوط النفسية، المشاعر، والصراعات الداخلية خلف الصورة الهادئة.',
    },
    {
        title: 'بره الكحكة',
        href: '/bara-alkahka',
        text: 'الحضور في الشارع والمجتمع والعمل العام وتأثيره على الهوية.',
    },
    {
        title: 'على الهامش',
        href: '/ala-alhamesh',
        text: 'أصوات نساء غير مرئيات وقصص لا تصل عادة إلى المنصات.',
    },
]

export default function Home() {
    return (
        <>
            <Head>
                <title>كحكه</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content="كحكه - منصة تحقيقية تتناول قصة الأم وعلاقتها بالتنظيف وصحة الأسرة."
                />
            </Head>
            <div className="relative min-h-screen overflow-hidden bg-brand-offwhite bg-hero-radial" dir="rtl">
                <BackgroundSVG />
                <NavBar />
                <main className="relative z-10 mx-auto w-full  px-4 pb-16 sm:px-8">
                    <HeroHeader />
                    <section className="rounded-3xl border border-brand-brown/10 bg-white/85 p-6 text-center shadow-card backdrop-blur sm:p-10">
                        <p className="mb-4 text-lg leading-9 text-brand-textSecondary">
                            مرحبًا بك في كحكه، منصة تسلط الضوء على قصص الأسرة والمنزل والدور المتداخل للأم في حياة المنزل اليومية.
                        </p>
                        <p className="mb-8 text-lg leading-9 text-brand-textSecondary">
                            يمكنك التنقل بين صفحات المشروع للاطلاع على تحقيقات ومقالات حول علاقة الأم بمنزلها، واجباتها، وتأثير التنظيف الروتيني على الصحة النفسية والتماسك الأسري.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <Link
                                href="/alaaqa"
                                className="rounded-full bg-brand-orange px-7 py-3 text-sm font-bold text-white transition hover:bg-brand-orangeHover"
                            >
                                اقرأ التحقيق
                            </Link>
                            <a
                                href="#"
                                className="rounded-full border border-brand-brown px-7 py-3 text-sm font-bold text-brand-brown transition hover:bg-brand-brown hover:text-white"
                            >
                                تواصل معنا
                            </a>
                        </div>
                    </section>

                    <section className="mt-10 rounded-3xl border border-brand-brown/10 bg-brand-beige/45 p-5 shadow-card sm:p-8">
                        <div className="mb-6 text-center">
                            <h2 className="text-3xl font-extrabold text-brand-brown sm:text-4xl">التبويب</h2>
                            <p className="mt-2 text-base text-brand-textSecondary sm:text-lg">
                                كل قسم يمثل زاوية مختلفة من حياة المرأة داخل المجتمع
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {topicCards.map((card) => (
                                <Link
                                    key={card.title}
                                    href={card.href}
                                    className="block rounded-2xl border border-brand-brown/10 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-orange/40"
                                >
                                    <h3 className="mb-2 text-xl font-extrabold text-brand-brown">{card.title}</h3>
                                    <p className="text-sm leading-7 text-brand-textSecondary">{card.text}</p>
                                </Link>
                            ))}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}
