export default function BackgroundSVG() {
    return (
        <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <defs>
                <linearGradient id="sand" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#E0A96D', stopOpacity: 0.36 }} />
                    <stop offset="100%" style={{ stopColor: '#C96A3D', stopOpacity: 0.2 }} />
                </linearGradient>
                <linearGradient id="sea" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#2E4A62', stopOpacity: 0.28 }} />
                    <stop offset="100%" style={{ stopColor: '#2E4A62', stopOpacity: 0.05 }} />
                </linearGradient>
            </defs>
            <rect width="1440" height="1024" fill="url(#sand)" opacity="0.35" />
            <ellipse cx="160" cy="120" rx="210" ry="130" fill="#E0A96D" opacity="0.2" />
            <ellipse cx="1300" cy="180" rx="230" ry="140" fill="#2E4A62" opacity="0.14" />
            <ellipse cx="240" cy="880" rx="280" ry="170" fill="#C96A3D" opacity="0.14" />
            <ellipse cx="1180" cy="860" rx="260" ry="160" fill="#5A3825" opacity="0.1" />
            <path d="M 0 240 C 220 180, 450 300, 700 230 C 920 170, 1140 230, 1440 180" stroke="url(#sea)" strokeWidth="3" fill="none" />
            <path d="M 0 620 C 280 560, 470 680, 740 620 C 980 560, 1180 700, 1440 640" stroke="url(#sea)" strokeWidth="3" fill="none" />
            <path d="M 120 420 Q 220 360 320 420 T 520 420" fill="none" stroke="#C96A3D" strokeWidth="2" opacity="0.45" />
            <path d="M 920 450 Q 1020 390 1120 450 T 1320 450" fill="none" stroke="#2E4A62" strokeWidth="2" opacity="0.45" />
            <circle cx="390" cy="240" r="40" fill="none" stroke="#5A3825" strokeWidth="2" opacity="0.2" />
            <circle cx="1050" cy="760" r="50" fill="none" stroke="#2E4A62" strokeWidth="2" opacity="0.2" />
            <circle cx="760" cy="130" r="32" fill="none" stroke="#C96A3D" strokeWidth="2" opacity="0.35" />
        </svg>
    )
}
