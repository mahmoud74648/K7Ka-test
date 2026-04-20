import styles from '../styles/Home.module.css'

const sections = [
    {
        title: 'Women Empowerment',
        content: 'Together we rise, together we thrive. Empowering women to create a better future for all.',
    },
    {
        title: 'Quick Links',
        links: ['About Us', 'Our Mission', 'Get Involved', 'Resources'],
    },
    {
        title: 'Connect With Us',
        links: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'],
    },
    {
        title: 'Contact',
        contactLines: [
            'info@womenempowerment.org',
            '+1 (555) 123-4567',
            '123 Empowerment Ave',
            'Suite 100, City, State 12345',
        ],
    },
]

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerMain}>
                    {sections.map((section) => (
                        <div key={section.title} className={styles.footerSection}>
                            <h4 className={styles.footerSubtitle}>{section.title}</h4>
                            {section.content && <p className={styles.footerText}>{section.content}</p>}
                            {section.links && (
                                <div className={styles.footerLinks}>
                                    {section.links.map((link) => (
                                        <a key={link} href="#" className={styles.footerLink}>
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            )}
                            {section.contactLines && (
                                <div className={styles.footerLinks}>
                                    {section.contactLines.map((line) => (
                                        <p key={line} className={styles.footerText}>
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className={styles.footerBottom}>
                    <p className={styles.footerCopyright}>
                        © 2024 Women Empowerment. All rights reserved. | Privacy Policy | Terms of Service
                    </p>
                </div>
            </div>
        </footer>
    )
}
