import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function NavBar() {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        setIsMenuOpen(false)
    }, [router.pathname])

    const links = [
        { href: '/', label: 'الرئيسية' },
        { href: '/alaaqa', label: 'علاقة الأم بالمنزل' },
        { href: '/sawtoha-masmoua', label: 'صوتها مسموع' },
        { href: '/bayn-albayt-walshoghl', label: 'بين البيت والشغل' },
        { href: '/kalam-qanun', label: 'كلام قانون' },
        { href: '/hikayat-settat', label: 'حكايات ستات' },
        { href: '/gowa-alkahka', label: 'جوه الكحكة' },
        { href: '/bara-alkahka', label: 'بره الكحكة' },
        { href: '/ala-alhamesh', label: 'على الهامش' },
    ]

    return (
        <nav
            className="sticky top-0 z-50 mb-8 w-full border-b border-brand-brown/15 bg-brand-offwhite/95 shadow-[0_10px_30px_rgba(59,42,30,0.1)] backdrop-blur-md"
            dir="rtl"
            aria-label="التنقل الرئيسي"
        >
            <div className="mx-auto w-full px-4 py-3 sm:px-8">
                <div className="flex items-center justify-between gap-3">
                    <Link href="/" className="group inline-flex items-center rounded-md transition hover:opacity-90">
                        <div className="relative h-12 w-44 overflow-hidden sm:w-52">
                            <Image src="/imgs/logo-edited.png" alt="شعار كحكه" fill className="object-contain" priority />
                        </div>
                    </Link>
                    <div className="hidden sm:block">
                        <h1 className="text-sm font-extrabold tracking-wide text-brand-brown">كحكة</h1>
                        <p className="text-xs text-brand-brown/70">مساحة للحكاية والصوت</p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-brown/20 bg-white/70 text-brand-brown transition hover:border-brand-orange hover:text-brand-orange md:hidden"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-nav-menu"
                        aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
                    >
                        {isMenuOpen ? (
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                            </svg>
                        )}
                    </button>
                </div>

                <div className="mt-3 hidden flex-wrap items-center justify-center gap-2 md:flex">
                    {links.map((link) => {
                        const isActive = router.pathname === link.href

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={isActive ? 'page' : undefined}
                                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                                    isActive
                                        ? 'bg-brand-brown text-brand-offwhite shadow-[0_6px_16px_rgba(90,56,37,0.28)]'
                                        : 'text-brand-brown hover:bg-brand-beige hover:text-brand-orange'
                                }`}
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                </div>

                {isMenuOpen ? (
                    <div
                        id="mobile-nav-menu"
                        className="no-scrollbar mt-3 -mx-1 flex flex-col gap-1 overflow-y-auto rounded-2xl border border-brand-brown/15 bg-white/70 p-2 md:hidden"
                    >
                        {links.map((link) => {
                            const isActive = router.pathname === link.href

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`rounded-xl px-3 py-2.5 text-sm font-bold transition ${
                                        isActive
                                            ? 'bg-brand-brown text-brand-offwhite'
                                            : 'text-brand-brown hover:bg-brand-beige hover:text-brand-orange'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            )
                        })}
                    </div>
                ) : null}
            </div>
        </nav>
    )
}
