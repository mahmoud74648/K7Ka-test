import Head from 'next/head'
import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function GowaAlkahkaPage() {
    return (
        <>
            <Head>
                <title>كحكه | جوه الكحكة</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="نقاشات حول الضغوط النفسية والمشاعر والصراعات الداخلية." />
            </Head>
            <div className="relative min-h-screen overflow-hidden bg-brand-offwhite bg-hero-radial" dir="rtl">
                <BackgroundSVG />
                <NavBar />
                <main className="relative z-10 mx-auto w-full  px-4 pb-16 sm:px-8">
                    <article className="rounded-3xl border border-brand-brown/10 bg-white/85 p-6 shadow-card backdrop-blur sm:p-10">
                        <h1 className="mb-5 text-center text-4xl font-extrabold text-brand-brown sm:text-5xl">جوه الكحكة</h1>
                        <p className="text-lg leading-9 text-brand-textSecondary">
                            هذا القسم مخصص للحديث عن الحالة النفسية للمرأة: القلق، الإرهاق، الصراع الداخلي، والبحث
                            عن توازن صحي. محتوى داعم وواقعي بعيدًا عن الأحكام.
                        </p>
                    </article>
                </main>
                <Footer />
            </div>
        </>
    )
}
