import Head from 'next/head'
import BackgroundSVG from '../components/BackgroundSVG'
import HeroHeader from '../components/HeroHeader'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className={styles.container} dir="rtl">
                <BackgroundSVG />
                <NavBar />
                <main className={styles.mainContent}>
                    <HeroHeader />
                    <section className={styles.introSection}>
                        <p className={styles.paragraph}>
                            مرحبًا بك في كحكه، منصة تسلط الضوء على قصص الأسرة والمنزل والدور المتداخل للأم في حياة المنزل اليومية.
                        </p>
                        <p className={styles.paragraph}>
                            يمكنك التنقل بين صفحات المشروع للاطلاع على تحقيقات ومقالات حول علاقة الأم بمنزلها، واجباتها، وتأثير التنظيف الروتيني على الصحة النفسية والتماسك الأسري.
                        </p>
                    </section>
                </main>
                {/* <Footer /> */}
            </div>
        </>
    )
}
