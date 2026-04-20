import styles from '../styles/Home.module.css'

export default function BackgroundSVG() {
    return (
        <svg className={styles.backgroundSvg} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#FF69B4', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#87CEEB', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#87CEEB', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#FF69B4', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <circle cx="120" cy="150" r="80" fill="none" stroke="#FF69B4" strokeWidth="2" />
            <circle cx="1320" cy="200" r="100" fill="none" stroke="#87CEEB" strokeWidth="2" />
            <circle cx="200" cy="800" r="60" fill="none" stroke="#87CEEB" strokeWidth="2" />
            <circle cx="1280" cy="850" r="90" fill="none" stroke="#FF69B4" strokeWidth="2" />
            <circle cx="720" cy="100" r="50" fill="none" stroke="#FF69B4" strokeWidth="2" />
            <circle cx="400" cy="400" r="70" fill="none" stroke="#87CEEB" strokeWidth="2" />
            <circle cx="1100" cy="500" r="65" fill="none" stroke="#FF69B4" strokeWidth="2" />
            <circle cx="600" cy="900" r="55" fill="none" stroke="#87CEEB" strokeWidth="2" />
            <line x1="100" y1="100" x2="300" y2="250" stroke="url(#grad1)" strokeWidth="2" />
            <line x1="1140" y1="150" x2="1340" y2="300" stroke="url(#grad1)" strokeWidth="2" />
            <line x1="150" y1="700" x2="350" y2="900" stroke="url(#grad1)" strokeWidth="2" />
            <line x1="1090" y1="750" x2="1290" y2="950" stroke="url(#grad1)" strokeWidth="2" />
            <line x1="400" y1="200" x2="600" y2="300" stroke="url(#grad2)" strokeWidth="2" />
            <line x1="800" y1="250" x2="1000" y2="150" stroke="url(#grad1)" strokeWidth="2" />
            <line x1="300" y1="500" x2="500" y2="600" stroke="url(#grad2)" strokeWidth="2" />
            <line x1="900" y1="700" x2="1100" y2="800" stroke="url(#grad1)" strokeWidth="2" />
            <line x1="200" y1="300" x2="400" y2="200" stroke="#FF69B4" strokeWidth="2" />
            <line x1="1000" y1="400" x2="1200" y2="500" stroke="#87CEEB" strokeWidth="2" />
            <line x1="500" y1="750" x2="700" y2="850" stroke="#FF69B4" strokeWidth="2" />
            <line x1="1150" y1="650" x2="1350" y2="750" stroke="#87CEEB" strokeWidth="2" />
            <path d="M 50 400 Q 150 350 250 400 T 450 400" fill="none" stroke="#FF69B4" strokeWidth="2" />
            <path d="M 990 600 Q 1090 550 1190 600 T 1390 600" fill="none" stroke="#87CEEB" strokeWidth="2" />
            <path d="M 600 200 Q 700 150 800 200 T 1000 200" fill="none" stroke="#87CEEB" strokeWidth="2" />
            <path d="M 300 650 Q 400 600 500 650 T 700 650" fill="none" stroke="#FF69B4" strokeWidth="2" />
            <path d="M 50 550 Q 100 500 150 550" fill="none" stroke="#87CEEB" strokeWidth="2" />
            <path d="M 1290 350 Q 1340 300 1390 350" fill="none" stroke="#FF69B4" strokeWidth="2" />
            <rect x="80" y="500" width="100" height="100" fill="none" stroke="#87CEEB" strokeWidth="2" transform="rotate(15 130 550)" />
            <rect x="1260" y="450" width="120" height="120" fill="none" stroke="#FF69B4" strokeWidth="2" transform="rotate(-20 1320 510)" />
            <rect x="500" y="100" width="80" height="80" fill="none" stroke="#FF69B4" strokeWidth="2" transform="rotate(25 540 140)" />
            <rect x="850" y="800" width="90" height="90" fill="none" stroke="#87CEEB" strokeWidth="2" transform="rotate(-15 895 845)" />
            <polygon points="700,50 750,120 650,120" fill="none" stroke="#FF69B4" strokeWidth="2" />
            <polygon points="720,900 780,980 660,980" fill="none" stroke="#87CEEB" strokeWidth="2" />
            <polygon points="350,150 400,220 300,220" fill="none" stroke="#87CEEB" strokeWidth="2" />
            <polygon points="1050,300 1100,370 1000,370" fill="none" stroke="#FF69B4" strokeWidth="2" />
            <polyline points="100,250 150,280 200,250 250,280" fill="none" stroke="#FF69B4" strokeWidth="2" />
            <polyline points="1200,200 1250,230 1300,200 1350,230" fill="none" stroke="#87CEEB" strokeWidth="2" />
            <polyline points="400,850 450,880 500,850 550,880" fill="none" stroke="#87CEEB" strokeWidth="2" />
            <polyline points="950,550 1000,580 1050,550 1100,580" fill="none" stroke="#FF69B4" strokeWidth="2" />
            <circle cx="280" cy="600" r="45" fill="none" stroke="#FF69B4" strokeWidth="2" />
            <circle cx="1180" cy="100" r="55" fill="none" stroke="#87CEEB" strokeWidth="2" />
            <circle cx="800" cy="450" r="40" fill="none" stroke="#FF69B4" strokeWidth="2" />
            <line x1="50" y1="200" x2="150" y2="300" stroke="#87CEEB" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="1300" y1="550" x2="1400" y2="650" stroke="#FF69B4" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="650" y1="350" x2="750" y2="450" stroke="#87CEEB" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="200" y1="950" x2="300" y2="1050" stroke="#FF69B4" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
    )
}
