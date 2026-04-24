import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import BackgroundSVG from '../components/BackgroundSVG'
import HeroHeader from '../components/HeroHeader'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const topicCards = [
    {
        title: 'علاقة الأم بالمنزل',
        href: '/alaaqa',
        text: 'تحقيق شامل عن حمل الرعاية اليومية داخل البيت وتأثيرها على الصحة النفسية للأسرة.',
    },
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

const carouselCards = [
    {
        title: 'دليل البداية السريعة',
        text: 'ابدئي من المسار الذي يناسبك: قانوني، نفسي، أو اجتماعي في خطوات واضحة.',
        href: '/kalam-qanun',
    },
    {
        title: 'أكثر الملفات قراءة',
        text: 'مجموعة مختارة من التحقيقات التي لاقت تفاعلًا واسعًا من القراء.',
        href: '/sawtoha-masmoua',
    },
    {
        title: 'قصص من الواقع',
        text: 'حكايات من نساء يواجهن نفس الأسئلة يوميًا بين البيت والعمل.',
        href: '/hikayat-settat',
    },
    {
        title: 'مساحة للتأمل',
        text: 'مقالات تساعدك على فهم الضغوط الداخلية بدون لوم أو أحكام قاسية.',
        href: '/gowa-alkahka',
    },
    {
        title: 'حضور في المجتمع',
        text: 'قراءات عن تأثير الظهور العام والعمل المجتمعي على هوية المرأة.',
        href: '/bara-alkahka',
    },
]

const faqItems = [
    {
        question: 'ما الهدف الأساسي من منصة كحكه؟',
        answer: 'المنصة تركز على تقديم محتوى اجتماعي وإنساني يساعد في فهم أدوار المرأة داخل البيت وخارجه، مع أسلوب واضح وقريب من الواقع.',
    },
    {
        question: 'كيف أختار القسم المناسب لي؟',
        answer: 'يمكنك البدء من عناوين الأقسام أو من مسارات المحتوى المقترحة. كل صفحة لها وصف مختصر يساعدك على الوصول السريع لما تحتاجينه.',
    },
    {
        question: 'هل المحتوى قانوني موثوق؟',
        answer: 'قسم كلام قانون يقدم تبسيطًا للمفاهيم والحقوق بلغة سهلة، مع الحرص على الوضوح والدقة في الطرح.',
    },
    {
        question: 'هل يمكن قراءة المحتوى من الهاتف بسهولة؟',
        answer: 'نعم، الصفحة مصممة بشكل متجاوب بالكامل لتعمل بسلاسة على الموبايل والتابلت وأجهزة الكمبيوتر.',
    },
    {
        question: 'ما الفرق بين جوه الكحكة وبره الكحكة؟',
        answer: 'جوه الكحكة يركز على المشاعر والصراعات الداخلية، بينما بره الكحكة يهتم بالحضور في المجتمع والعمل العام وتأثيره على الهوية.',
    },
]

export default function Home() {
    const [openFaqIndex, setOpenFaqIndex] = useState(0)
    const [emblaRef, emblaApi] = useEmblaCarousel({
        direction: 'rtl',
        align: 'start',
        containScroll: 'trimSnaps',
    })

    const scrollCarousel = (direction) => {
        if (!emblaApi) return

        if (direction === 'next') {
            emblaApi.scrollNext()
            return
        }

        emblaApi.scrollPrev()
    }

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
                <main className="relative z-10 mx-auto w-full px-4 pb-16 sm:px-8">
                    <HeroHeader />

                    <section className="rounded-3xl border border-brand-brown/10 bg-white/90 p-6 text-center backdrop-blur sm:p-10">
                        <h2 className="mb-4 text-3xl font-extrabold text-brand-brown sm:text-4xl">منصة أقرب لحياة النساء اليومية</h2>
                        <p className="mx-auto mb-4 max-w-3xl text-lg leading-9 text-brand-textSecondary">
                            كحكه مساحة تحريرية تجمع التحقيقات، القصص، والمعرفة العملية في تصميم حديث يساعد القارئة على الوصول للمعلومة بسرعة ووضوح.
                        </p>
                        <p className="mx-auto mb-8 max-w-3xl text-lg leading-9 text-brand-textSecondary">
                            استعرضي الملفات حسب احتياجك: من الحقوق والقانون إلى ضغوط الداخل والحضور في المجتمع، مع محتوى قابل للتطبيق في الحياة اليومية.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <Link
                                href="/alaaqa"
                                className="rounded-full bg-brand-orange px-7 py-3 text-sm font-bold text-white transition hover:bg-brand-orangeHover"
                            >
                                ابدئي من الملف الرئيسي
                            </Link>
                            <Link
                                href="/hikayat-settat"
                                className="rounded-full border border-brand-brown px-7 py-3 text-sm font-bold text-brand-brown transition hover:bg-brand-brown hover:text-white"
                            >
                                اكتشفي الحكايات
                            </Link>
                        </div>
                    </section>

                    <section className="mt-10 overflow-hidden rounded-3xl border border-brand-brown/10 bg-white">
                        <div className="grid items-stretch md:grid-cols-2">
                            <div className="p-6 sm:p-10">
                                <h3 className="mt-4 text-3xl font-extrabold text-brand-brown sm:text-4xl">تجربة مرئية توضح الفكرة بسرعة</h3>
                                <p className="mt-4 text-base leading-8 text-brand-textSecondary sm:text-lg">
                                    كل ملف في كحكه يقدم سردًا واضحًا مدعومًا بصور رمزية وتفاصيل عملية، حتى تتمكن القارئة من فهم الفكرة الأساسية خلال دقائق.
                                </p>
                                <ul className="mt-6 grid gap-2 text-sm text-brand-textSecondary sm:grid-cols-2">
                                    <li className="rounded-xl border border-brand-brown/10 bg-brand-offwhite px-3 py-2">واجهة واضحة وسهلة</li>
                                    <li className="rounded-xl border border-brand-brown/10 bg-brand-offwhite px-3 py-2">لغة إنسانية وقريبة</li>
                                    <li className="rounded-xl border border-brand-brown/10 bg-brand-offwhite px-3 py-2">محتوى عملي قابل للتطبيق</li>
                                    <li className="rounded-xl border border-brand-brown/10 bg-brand-offwhite px-3 py-2">تنقل سريع بين الأقسام</li>
                                </ul>
                            </div>
                            <div className="relative min-h-[290px] bg-gradient-to-br from-brand-gold/45 via-brand-beige to-brand-offwhite p-8">
                                <div className="absolute inset-0">
                                    <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-brand-blue/15 blur-xl" />
                                    <div className="absolute bottom-6 right-6 h-28 w-28 rounded-full bg-brand-orange/20 blur-xl" />
                                </div>
                                <div className="relative flex h-full items-center justify-center">
                                    <div className="relative h-52 w-52 rounded-3xl border border-brand-brown/10 bg-white/85 p-4 backdrop-blur">
                                        <Image src="/imgs/logo-edited.png" alt="صورة تمثيلية لمنصة كحكه" fill className="object-contain p-4" priority />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mt-10 overflow-hidden rounded-3xl border border-brand-brown/10 bg-brand-blue/10">
                        <div className="grid items-stretch md:grid-cols-2">
                            <div className="relative min-h-[300px] overflow-hidden p-4 sm:p-6">
                                <div className="h-full w-full overflow-hidden rounded-2xl border border-brand-brown/10 bg-black/80">
                                    <iframe
                                        className="h-full min-h-[280px] w-full"
                                        src="https://www.youtube.com/embed/Zftx68K-1D4"
                                        title="فيديو تعريفي عن المنصة"
                                        loading="lazy"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                            <div className="p-6 sm:p-10">
                                <h3 className="mt-4 text-3xl font-extrabold text-brand-brown">شاهدي القصة قبل قراءتها</h3>
                                <p className="mt-4 text-base leading-8 text-brand-textSecondary sm:text-lg">
                                    أضفنا مساحة فيديو تفاعلية لتقديم مقدمة سريعة عن أهداف المشروع، ثم الانتقال مباشرة إلى الملفات ذات الصلة عبر أزرار واضحة.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <Link
                                        href="/sawtoha-masmoua"
                                        className="rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-brown"
                                    >
                                        متابعة الملف
                                    </Link>
                                    <Link
                                        href="/bayn-albayt-walshoghl"
                                        className="rounded-full border border-brand-blue px-6 py-3 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
                                    >
                                        قراءة المزيد
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mt-10 rounded-3xl border border-brand-brown/10 bg-white p-6 sm:p-10">
                         <h3 className="mt-4 text-3xl font-extrabold text-brand-brown sm:text-4xl">لماذا هذا المشروع مختلف؟</h3>
                        <p className="mt-4 max-w-4xl text-lg leading-9 text-brand-textSecondary">
                            كحكه لا يقدم محتوى عامًا فقط، بل يربط بين التجربة الشخصية والخلفية الاجتماعية والقانونية. الفكرة الأساسية أن تشعر القارئة أن ما تمر به مفهوم ومُعترف به، وأن هناك لغة تساعدها على ترتيب الأسئلة بدلًا من حملها وحدها.
                        </p>
                        <div className="mt-7 grid gap-4 md:grid-cols-3">
                            <div className="rounded-2xl border border-brand-brown/10 bg-brand-beige/40 p-5">
                                <h4 className="text-xl font-extrabold text-brand-brown">وضوح</h4>
                                <p className="mt-2 text-sm leading-7 text-brand-textSecondary">عرض المعلومات بأسلوب سهل بدون تعقيد.</p>
                            </div>
                            <div className="rounded-2xl border border-brand-brown/10 bg-brand-beige/40 p-5">
                                <h4 className="text-xl font-extrabold text-brand-brown">تعاطف</h4>
                                <p className="mt-2 text-sm leading-7 text-brand-textSecondary">اللغة تراعي المشاعر والضغوط اليومية.</p>
                            </div>
                            <div className="rounded-2xl border border-brand-brown/10 bg-brand-beige/40 p-5">
                                <h4 className="text-xl font-extrabold text-brand-brown">أثر</h4>
                                <p className="mt-2 text-sm leading-7 text-brand-textSecondary">كل محتوى يقود إلى خطوة عملية ملموسة.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-10 rounded-3xl border border-brand-brown/10 bg-brand-beige/45 p-5 sm:p-8">
                        <div className="mb-6 text-center">
                            <h3 className="mt-3 text-3xl font-extrabold text-brand-brown sm:text-4xl">استكشفي الصفحات</h3>
                            <p className="mt-2 text-base text-brand-textSecondary sm:text-lg">
                                كل بطاقة تمثل صفحة مستقلة بمحتوى متخصص ومفيد
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                            {topicCards.map((card) => (
                                <Link
                                    key={card.title}
                                    href={card.href}
                                    className="block rounded-2xl border border-brand-brown/10 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-orange/40"
                                >
                                    <h4 className="mb-2 text-xl font-extrabold text-brand-brown">{card.title}</h4>
                                    <p className="text-sm leading-7 text-brand-textSecondary">{card.text}</p>
                                    <span className="mt-4 inline-flex text-sm font-bold text-brand-orange">اقرئي المزيد</span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section className="mt-10 rounded-3xl border border-brand-brown/10 bg-white p-5 sm:p-8">
                        <div className="mb-5 text-center">
                            <h3 className="mt-3 text-3xl font-extrabold text-brand-brown">مسارات مقترحة</h3>
                        </div>

                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => scrollCarousel('prev')}
                                className="absolute right-1 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-brown/20 bg-white/95 text-brand-brown transition hover:border-brand-orange hover:text-brand-orange rotate-180"
                                aria-label="التحرك إلى البطاقات السابقة"
                            >
                                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                type="button"
                                onClick={() => scrollCarousel('next')}
                                className="absolute left-1 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-brown/20 bg-white/95 text-brand-brown transition hover:border-brand-orange hover:text-brand-orange rotate-180"
                                aria-label="التحرك إلى البطاقات التالية"
                            >
                                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            <div className="overflow-hidden px-8 sm:px-10" ref={emblaRef} aria-label="مسارات محتوى أفقية">
                                <div className="flex gap-4">
                                    {carouselCards.map((card) => (
                                        <article
                                            key={card.title}
                                            className="min-w-0 flex-[0_0_86%] rounded-2xl border border-brand-brown/10 bg-gradient-to-br from-white via-brand-offwhite to-brand-beige/45 p-5 sm:flex-[0_0_48%] lg:flex-[0_0_32%]"
                                        >
                                            <h4 className="text-2xl font-extrabold text-brand-brown">{card.title}</h4>
                                            <p className="mt-3 text-sm leading-7 text-brand-textSecondary">{card.text}</p>
                                            <Link
                                                href={card.href}
                                                className="mt-5 inline-flex rounded-full bg-brand-brown px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-orange"
                                            >
                                                افتحي المسار
                                            </Link>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mt-10 rounded-3xl border border-brand-brown/10 bg-white p-5 sm:p-8">
                        <div className="mb-6 text-center">
                            <h3 className="mt-3 text-3xl font-extrabold text-brand-brown sm:text-4xl">سؤال وجواب</h3>
                            <p className="mt-2 text-base text-brand-textSecondary sm:text-lg">
                                افتحي كل سؤال لعرض الإجابة بشكل مختصر وواضح
                            </p>
                        </div>

                        <div className="space-y-3">
                            {faqItems.map((item, index) => (
                                <article
                                    key={item.question}
                                    className="group overflow-hidden rounded-2xl border border-brand-brown/10 bg-brand-offwhite/60"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaqIndex((current) => (current === index ? -1 : index))}
                                        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-right text-base font-bold text-brand-brown sm:text-lg"
                                        aria-expanded={openFaqIndex === index}
                                    >
                                        <span>{item.question}</span>
                                        <span
                                            className={`inline-flex h-7 w-7 items-center justify-center rounded-full border border-brand-brown/20 text-brand-brown transition ${
                                                openFaqIndex === index ? 'rotate-45' : ''
                                            }`}
                                        >
                                            +
                                        </span>
                                    </button>
                                    {openFaqIndex === index ? (
                                        <div className="border-t border-brand-brown/10 bg-white/85 px-5 py-4">
                                            <p className="text-sm leading-8 text-brand-textSecondary sm:text-base">{item.answer}</p>
                                        </div>
                                    ) : null}
                                </article>
                            ))}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}
