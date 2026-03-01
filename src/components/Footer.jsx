export default function Footer() {
    const year = new Date().getFullYear();

    // Base styles
    const styles = {
        footer: {
            position: 'relative',
            padding: '24px 16px',
            backgroundColor: '#0f172a',
            // Subtle circuit‑board pattern (barely visible, adds texture)
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 8px)',
            color: '#94a3b8',
            textAlign: 'center',
            fontFamily: '"Fira Code", "Roboto Mono", monospace',
            fontSize: '13px',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
        },
        gradientLine: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #ec4899, #8b5cf6, #06b6d4)',
            boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)',
            zIndex: 1,
        },
        bottomGlow: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899)',
            opacity: 0.3,
            boxShadow: '0 0 8px #8b5cf6',
            animation: 'pulseGlow 3s infinite ease-in-out',
            zIndex: 1,
        },
        container: {
            maxWidth: 980,
            margin: '0 auto',
            display: 'flex',
            gap: 16,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 2,
        },
        left: { display: 'flex', gap: 16, alignItems: 'center' },
        brand: {
            fontWeight: 700,
            color: '#f1f5f9',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            fontSize: '14px',
            transition: 'text-shadow 0.3s ease',
        },
        cursor: {
            display: 'inline-block',
            width: '2px',
            height: '18px',
            background: '#22d3ee',
            animation: 'blink 1.2s infinite steps(1)',
            borderRadius: 1,
            boxShadow: '0 0 8px #22d3ee, 0 0 16px rgba(34, 211, 238, 0.3)', // softer, layered glow
        },
        social: { display: 'flex', gap: 12, alignItems: 'center' },
        iconLink: {
            display: 'inline-flex',
            width: 36,
            height: 36,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            color: '#cbd5e1',
            textDecoration: 'none',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)', // smoother, more elegant curve
        },
        small: {
            color: '#64748b',
            fontWeight: 500,
            fontSize: '12px',
        },
    };

    // Elegant hover handler: softer glow, less tilt, smooth background
    const handleHover = (e, isEntering) => {
        const style = e.currentTarget.style;
        if (isEntering) {
            style.background = '#8b5cf6';
            style.color = '#ffffff';
            style.borderColor = '#8b5cf6';
            style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.4), 0 0 30px rgba(139, 92, 246, 0.2)'; // softer spread
            style.transform = 'translateY(-2px) rotate(3deg)'; // gentler movement
        } else {
            style.background = 'rgba(255,255,255,0.03)';
            style.color = '#cbd5e1';
            style.borderColor = 'rgba(255,255,255,0.08)';
            style.boxShadow = 'none';
            style.transform = 'translateY(0) rotate(0deg)';
        }
    };

    return (
        <>
            <style>
                {`
                    @keyframes blink {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0; }
                    }
                    @keyframes pulseGlow {
                        0%, 100% { opacity: 0.2; box-shadow: 0 0 5px #8b5cf6; }
                        50% { opacity: 0.5; box-shadow: 0 0 15px #8b5cf6, 0 0 30px #06b6d4; }
                    }
                    .footer-brand:hover {
                        text-shadow: 0 0 6px #8b5cf6, 0 0 15px #ec4899;
                        cursor: default;
                    }
                `}
            </style>

            <footer style={styles.footer} aria-label="Footer">
                <div style={styles.gradientLine} aria-hidden="true" />
                <div style={styles.bottomGlow} aria-hidden="true" />

                <div style={styles.container}>
                    <div style={styles.left}>
                        <div className="footer-brand" style={styles.brand}>
                            Portofolio Siswa XI RPL
                        </div>
                        <span style={styles.cursor} aria-hidden="true" />
                        <div style={styles.small}>© {year}</div>
                    </div>

                    <div style={styles.social}>
                        {/* GitHub */}
                        <a
                            href="#"
                            style={styles.iconLink}
                            onMouseEnter={(e) => handleHover(e, true)}
                            onMouseLeave={(e) => handleHover(e, false)}
                            onFocus={(e) => handleHover(e, true)}
                            onBlur={(e) => handleHover(e, false)}
                            aria-label="GitHub"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 .5C5.7.5.7 5.5.7 11.8c0 5 3.2 9.2 7.6 10.7.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.5-3.8-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.6 2.9 1.1 0-.9.4-1.6.8-1.9-2.5-.3-5.2-1.2-5.2-5.5 0-1.2.4-2.2 1-3-.1-.3-.4-1.4.1-2.9 0 0 .8-.2 2.8 1 .8-.2 1.6-.3 2.4-.3.8 0 1.6.1 2.4.3 1.9-1.2 2.8-1 2.8-1 .5 1.5.2 2.6.1 2.9.6.8 1 1.8 1 3 0 4.3-2.7 5.2-5.3 5.5.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.4-1.5 7.6-5.7 7.6-10.7C23.3 5.5 18.3.5 12 .5z" />
                            </svg>
                        </a>

                        {/* Email */}
                        <a
                            href="#"
                            style={styles.iconLink}
                            onMouseEnter={(e) => handleHover(e, true)}
                            onMouseLeave={(e) => handleHover(e, false)}
                            onFocus={(e) => handleHover(e, true)}
                            onBlur={(e) => handleHover(e, false)}
                            aria-label="Email"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="#"
                            style={styles.iconLink}
                            onMouseEnter={(e) => handleHover(e, true)}
                            onMouseLeave={(e) => handleHover(e, false)}
                            onFocus={(e) => handleHover(e, true)}
                            onBlur={(e) => handleHover(e, false)}
                            aria-label="Instagram"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>

                        {/* Google – new elegant icon */}
                        <a
                            href="#"
                            style={styles.iconLink}
                            onMouseEnter={(e) => handleHover(e, true)}
                            onMouseLeave={(e) => handleHover(e, false)}
                            onFocus={(e) => handleHover(e, true)}
                            onBlur={(e) => handleHover(e, false)}
                            aria-label="Google"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.1-1.8 4.02-1.2 1.2-3 2.02-5.96 2.02-4.8 0-8.68-3.88-8.68-8.68S7.68 2.88 12.48 2.88c2.5 0 4.38 1.02 5.74 2.36L21 3.02C19.1 1.18 16.34 0 12.48 0 5.62 0 .18 5.38.18 12s5.44 12 12.3 12c3.56 0 6.54-1.18 8.72-3.36 2.2-2.18 2.9-5.22 2.9-7.7 0-.76-.06-1.48-.18-2.18H12.48z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}