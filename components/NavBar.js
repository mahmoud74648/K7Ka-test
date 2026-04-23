import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavBar() {
    const router = useRouter()

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
        >
            <div className="mx-auto w-full px-4 py-3 sm:px-8">
                <div className="flex items-center justify-between gap-3">
                    <Link href="/" className="inline-flex items-center rounded-md transition hover:opacity-90">
                        <div className="relative h-12 w-52 overflow-hidden ">
                            <Image src="/imgs/logo-edited.png" alt="شعار كحكه" fill className="object-contain" priority />
                        </div>
                    </Link>

                    <div className="no-scrollbar -mx-1 flex flex-nowrap items-center gap-1.5 overflow-x-auto px-1 pb-1">
                        {links.map((link) => {
                            const isActive = router.pathname === link.href

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`whitespace-nowrap rounded-full px-3 py-2 text-sm font-bold transition ${
                                        isActive
                                            ? ' text-brand-brown underline underline-offset-4 decoration-brand-brown'
                                            : 'text-brand-brown  hover:text-brand-orange'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}
