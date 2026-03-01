import React, { useEffect, useState } from 'react';
import Hero from "../components/Hero"; 
import SkillCard from "../components/SkillCard"; 
export default function Home() { 
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem('theme') || 'light';
        } catch {
            return 'light';
        }
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem('theme', theme); } catch {}
    }, [theme]);

    useEffect(() => {
        const interval = setInterval(() => {
            const warnaAcak = '#' + Math.floor(Math.random()*16777215).toString(16);
            document.body.style.backgroundColor = warnaAcak;
            document.body.style.transition = "background-color 1s ease"; 
        }, 1000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <>
            <Hero />
            {/* Elegant theme toggle (moved lower so it doesn't block Home/About/Contact) */}
            <div
                style={{
                    position: 'fixed',
                    top: 80, // moved down from 16 to avoid overlapping page headings
                    right: 16,
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                    padding: '6px',
                    borderRadius: 999,
                    background: theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                    backdropFilter: 'blur(6px)',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                    zIndex: 1000
                }}
                aria-hidden={false}
            >
                <button
                    onClick={() => setTheme('light')}
                    aria-pressed={theme === 'light'}
                    style={{
                        padding: '8px 14px',
                        cursor: 'pointer',
                        borderRadius: 999,
                        border: 'none',
                        background: theme === 'light' ? 'linear-gradient(180deg,#ffffff,#f2f2f2)' : 'transparent',
                        color: theme === 'light' ? '#0091ff' : '#666',
                        boxShadow: theme === 'light' ? '0 4px 10px rgba(0, 0, 0, 0.06)' : 'none',
                        fontWeight: 600,
                        transition: 'all .18s ease'
                    }}
                >
                    Light
                </button>
                <div style={{ width: 1, height: 28, background: 'rgba(0,0,0,0.06)', borderRadius: 1 }} />
                <button
                    onClick={() => setTheme('dark')}
                    aria-pressed={theme === 'dark'}
                    style={{
                        padding: '8px 14px',
                        cursor: 'pointer',
                        borderRadius: 999,
                        border: 'none',
                        background: theme === 'dark' ? 'linear-gradient(180deg,#111,#000)' : 'transparent',
                        color: theme === 'dark' ? '#e12a2a' : '#999',
                        boxShadow: theme === 'dark' ? '0 6px 14px rgba(0, 0, 0, 0.6)' : 'none',
                        fontWeight: 600,
                        transition: 'all .18s ease'
                    }}
                >
                    Dark
                </button>
            </div>

            <section id="skill" className="section">
                <header className="skill-header">
                    <h2>🛠️ KEAHLIAN SAYA DALAM PEMOGRAMAN</h2>
                    <p className="skill-sub">Klik kartu di bawah untuk melihat detail dan contoh proyek ✨</p>
                </header>
                <div className="grid">
                    <div
                        className="card-link"
                        role="link"
                        tabIndex={0}
                        onClick={() => window.open("https://www.google.com/search?q=html+dan+css&sca_esv=71ffffd766b5380a&sxsrf=ANbL-n5umqaYilyHHH6gAG-bCDt2Ny_njA%3A1772305221836&ei=RTujaZ7mMtGHjuMP2_2AgA8&biw=1707&bih=813&ved=0ahUKEwjenLm57_ySAxXRg2MGHds-APAQ4dUDCBE&uact=5&oq=html+dan+css&gs_lp=Egxnd3Mtd2l6LXNlcnAiDGh0bWwgZGFuIGNzczIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSOwVUABYtRRwAXgBkAEAmAFcoAGWBqoBAjEyuAEDyAEA-AEBmAINoALjBqgCEMICBxAjGCcY6gLCAg0QIxjwBRgnGMkCGOoCwgIXEAAYgAQYkQIYtAIY5wYYigUY6gLYAQHCAhkQABiABBiRAhi0AhjnBhiKBRjqAhgK2AEBwgIKECMY8AUYJxieBsICEBAjGPAFGIAEGCcYyQIYigXCAgsQABiABBiRAhiKBcICChAAGIAEGEMYigXCAhAQLhiABBjRAxhDGMcBGIoFwgIIEAAYgAQYsQPCAgsQABiABBixAxiKBcICCxAAGIAEGLEDGIMBwgINEAAYgAQYsQMYQxiKBcICChAAGIAEGBQYhwKYAwjxBXxiksJdYaCNugYGCAEQARgBkgcCMTOgB-hNsgcCMTK4B9oGwgcIMC4xLjEwLjLIBzuACAA&sclient=gws-wiz-serp", "_blank", "noopener,noreferrer")}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') window.open("https://www.google.com/search?q=html+dan+css&sca_esv=71ffffd766b5380a&sxsrf=ANbL-n5umqaYilyHHH6gAG-bCDt2Ny_njA%3A1772305221836&ei=RTujaZ7mMtGHjuMP2_2AgA8&biw=1707&bih=813&ved=0ahUKEwjenLm57_ySAxXRg2MGHds-APAQ4dUDCBE&uact=5&oq=html+dan+css&gs_lp=Egxnd3Mtd2l6LXNlcnAiDGh0bWwgZGFuIGNzczIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSOwVUABYtRRwAXgBkAEAmAFcoAGWBqoBAjEyuAEDyAEA-AEBmAINoALjBqgCEMICBxAjGCcY6gLCAg0QIxjwBRgnGMkCGOoCwgIXEAAYgAQYkQIYtAIY5wYYigUY6gLYAQHCAhkQABiABBiRAhi0AhjnBhiKBRjqAhgK2AEBwgIKECMY8AUYJxieBsICEBAjGPAFGIAEGCcYyQIYigXCAgsQABiABBiRAhiKBcICChAAGIAEGEMYigXCAhAQLhiABBjRAxhDGMcBGIoFwgIIEAAYgAQYsQPCAgsQABiABBixAxiKBcICCxAAGIAEGLEDGIMBwgINEAAYgAQYsQMYQxiKBcICChAAGIAEGBQYhwKYAwjxBXxiksJdYaCNugYGCAEQARgBkgcCMTOgB-hNsgcCMTK4B9oGwgcIMC4xLjEwLjLIBzuACAA&sclient=gws-wiz-serp", "_blank", "noopener,noreferrer"); }}
                    >
                        <SkillCard title="HTML & CSS" desc="Membuat tampilan website modern" icon="🏛" />
                    </div>

                    <div
                        className="card-link"
                        role="link"
                        tabIndex={0}
                        onClick={() => window.open("https://www.google.com/search?q=javascript+adalah&sca_esv=71ffffd766b5380a&biw=1707&bih=813&sxsrf=ANbL-n49hJE4kfTF3SxJOFWE0D5hS1Seyw%3A1772305379089&ei=4zujaeWaBa674-EPhY3igQ0&oq=javas&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWphdmFzKgIIADIKECMYgAQYJxiKBTIOEAAYgAQYkQIYsQMYigUyCxAAGIAEGJECGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFSOAjUMcHWOIVcAN4AZABAZgBgQWgAfwPqgELMy4wLjEuMS4wLjK4AQHIAQD4AQGYAgmgAoIMqAIQwgIHECMYJxjqAsICDRAjGPAFGCcYyQIY6gLCAhYQABiABBhDGLQCGOcGGIoFGOoC2AEBwgIQEAAYAxi0AhjqAhiPAdgBAcICEBAuGAMYtAIY6gIYjwHYAQHCAgoQIxjwBRgnGJ4GwgIKECMY8AUYJxjJAsICCBAAGIAEGLEDwgITEC4YgAQYsQMY0QMYQxjHARiKBcICDhAAGIAEGLEDGIMBGIoFwgIFEAAYgATCAgoQLhiABBhDGIoFwgIWEC4YgAQYsQMY0QMYQxjHARjJAxiKBcICDRAuGIAEGLEDGEMYigXCAgsQABiABBiSAxiKBcICCBAuGIAEGLEDwgIZEC4YgAQYQxiKBRiXBRjcBBjeBBjfBNgBAcICBxAjGLECGCfCAgwQABiABBixAxgKGAvCAgkQABiABBgKGAvCAg0QABiABBixAxhDGIoFmAMP8QWCXz0KpKh8p7oGBggBEAEYAZIHCTYuMC4xLjAuMqAHo2WyBwkzLjAuMS4wLjK4B-ELwgcJMi02LjIuMC4xyAd7gAgA&sclient=gws-wiz-serp", "_blank", "noopener,noreferrer")}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') window.open("https://www.google.com/search?q=javascript+adalah&sca_esv=71ffffd766b5380a&biw=1707&bih=813&sxsrf=ANbL-n49hJE4kfTF3SxJOFWE0D5hS1Seyw%3A1772305379089&ei=4zujaeWaBa674-EPhY3igQ0&oq=javas&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWphdmFzKgIIADIKECMYgAQYJxiKBTIOEAAYgAQYkQIYsQMYigUyCxAAGIAEGJECGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFSOAjUMcHWOIVcAN4AZABAZgBgQWgAfwPqgELMy4wLjEuMS4wLjK4AQHIAQD4AQGYAgmgAoIMqAIQwgIHECMYJxjqAsICDRAjGPAFGCcYyQIY6gLCAhYQABiABBhDGLQCGOcGGIoFGOoC2AEBwgIQEAAYAxi0AhjqAhiPAdgBAcICEBAuGAMYtAIY6gIYjwHYAQHCAgoQIxjwBRgnGJ4GwgIKECMY8AUYJxjJAsICCBAAGIAEGLEDwgITEC4YgAQYsQMY0QMYQxjHARiKBcICDhAAGIAEGLEDGIMBGIoFwgIFEAAYgATCAgoQLhiABBhDGIoFwgIWEC4YgAQYsQMY0QMYQxjHARjJAxiKBcICDRAuGIAEGLEDGEMYigXCAgsQABiABBiSAxiKBcICCBAuGIAEGLEDwgIZEC4YgAQYQxiKBRiXBRjcBBjeBBjfBNgBAcICBxAjGLECGCfCAgwQABiABBixAxgKGAvCAgkQABiABBgKGAvCAg0QABiABBixAxhDGIoFmAMP8QWCXz0KpKh8p7oGBggBEAEYAZIHCTYuMC4xLjAuMqAHo2WyBwkzLjAuMS4wLjK4B-ELwgcJMi02LjIuMC4xyAd7gAgA&sclient=gws-wiz-serp", "_blank", "noopener,noreferrer"); }}
                    >
                        <SkillCard title="JavaScript" desc="Logika dan interaksi web" icon="🎓" />
                    </div>

                    <div
                        className="card-link"
                        role="link"
                        tabIndex={0}
                        onClick={() => window.open("https://www.google.com/search?q=react+adalah&sca_esv=71ffffd766b5380a&biw=1707&bih=813&sxsrf=ANbL-n7fNGWp1PBpnBJReOhskkIooNEclw%3A1772305318396&ei=pjujadT3F-DH4-EPrNqb0Qw&ved=0ahUKEwjU4r7n7_ySAxXg4zgGHSztJsoQ4dUDCBE&uact=5&oq=react+adalah&gs_lp=Egxnd3Mtd2l6LXNlcnAiDHJlYWN0IGFkYWxhaDIFEAAYgAQyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSLYcUPkFWKETcAF4AZABAJgBVaABiQaqAQIxMrgBA8gBAPgBAZgCDaAC1waoAhHCAgcQIxgnGOoCwgINECMY8AUYJxjJAhjqAsICFhAAGIAEGEMYtAIY5wYYigUY6gLYAQHCAhAQABgDGLQCGOoCGI8B2AEBwgIKECMYgAQYJxiKBcICBxAjGPAFGCfCAgsQABiABBiRAhiKBcICCBAAGIAEGLEDwgILEC4YgAQYsQMYgwHCAgoQIxjwBRgnGJ4GwgIQEC4YgAQY0QMYQxjHARiKBcICChAAGIAEGEMYigXCAg4QABiABBiRAhixAxiKBcICDRAAGIAEGLEDGEMYigXCAg0QLhiABBixAxhDGIoFwgIIEAAYgAQYywHCAgUQLhiABJgDCfEFIfvO2hb6z9-6BgYIARABGAGSBwIxM6AHzlSyBwIxMrgHzgbCBwQyLTEzyAc9gAgA&sclient=gws-wiz-serp", "_blank", "noopener,noreferrer")}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') window.open("https://www.google.com/search?q=react+adalah&sca_esv=71ffffd766b5380a&biw=1707&bih=813&sxsrf=ANbL-n7fNGWp1PBpnBJReOhskkIooNEclw%3A1772305318396&ei=pjujadT3F-DH4-EPrNqb0Qw&ved=0ahUKEwjU4r7n7_ySAxXg4zgGHSztJsoQ4dUDCBE&uact=5&oq=react+adalah&gs_lp=Egxnd3Mtd2l6LXNlcnAiDHJlYWN0IGFkYWxhaDIFEAAYgAQyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSLYcUPkFWKETcAF4AZABAJgBVaABiQaqAQIxMrgBA8gBAPgBAZgCDaAC1waoAhHCAgcQIxgnGOoCwgINECMY8AUYJxjJAhjqAsICFhAAGIAEGEMYtAIY5wYYigUY6gLYAQHCAhAQABgDGLQCGOoCGI8B2AEBwgIKECMYgAQYJxiKBcICBxAjGPAFGCfCAgsQABiABBiRAhiKBcICCBAAGIAEGLEDwgILEC4YgAQYsQMYgwHCAgoQIxjwBRgnGJ4GwgIQEC4YgAQY0QMYQxjHARiKBcICChAAGIAEGEMYigXCAg4QABiABBiRAhixAxiKBcICDRAAGIAEGLEDGEMYigXCAg0QLhiABBixAxhDGIoFwgIIEAAYgAQYywHCAgUQLhiABJgDCfEFIfvO2hb6z9-6BgYIARABGAGSBwIxM6AHzlSyBwIxMrgHzgbCBwQyLTEzyAc9gAgA&sclient=gws-wiz-serp", "_blank", "noopener,noreferrer"); }}
                    >
                        <SkillCard title="React" desc="Single Page Application" icon="🎨" />
                    </div>

                    <div
                        className="card-link"
                        role="link"
                        tabIndex={0}
                        onClick={() => window.open("https://www.google.com/search?q=laravel+adalah&biw=1707&bih=813&sca_esv=71ffffd766b5380a&sxsrf=ANbL-n7owRIWNHsqcxj01gmJM3peEmw5SQ%3A1772307590344&ei=hkSjaf7ZFMey4-EPiaTOqQU&oq=laravel+adalah&gs_lp=Egxnd3Mtd2l6LXNlcnAiDmxhcmF2ZWwgYWRhbGFoKgIIADIFEAAYgAQyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSNwiUPAGWPAXcAF4AZABA5gB-QegAaMcqgEPNC4zLjIuMi4wLjEuMC4xuAEByAEA-AEBmAILoALDE6gCEcICBxAjGCcY6gLCAg0QIxjwBRgnGMkCGOoCwgIWEAAYgAQYQxi0AhjnBhiKBRjqAtgBAcICEBAAGAMYtAIY6gIYjwHYAQHCAgoQIxiABBgnGIoFwgIKECMY8AUYJxieBsICExAuGIAEGLEDGNEDGEMYxwEYigXCAgsQLhiABBixAxiDAcICCxAAGIAEGLEDGIMBwgIOEAAYgAQYsQMYgwEYigXCAgsQABiABBiRAhiKBcICChAAGIAEGEMYigXCAg4QABiABBiRAhixAxiKBcICCBAAGIAEGLEDwgIIEAAYgAQYywGYAwvxBfKvWMsa8sjSugYGCAEQARgBkgcNNS4yLjIuMC4xLjAuMaAH-GSyBw00LjIuMi4wLjEuMC4xuAe4E8IHBTItOC4zyAc9gAgA&sclient=gws-wiz-serp", "_blank", "noopener,noreferrer")}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') window.open("https://www.google.com/search?q=laravel+adalah&biw=1707&bih=813&sca_esv=71ffffd766b5380a&sxsrf=ANbL-n7owRIWNHsqcxj01gmJM3peEmw5SQ%3A1772307590344&ei=hkSjaf7ZFMey4-EPiaTOqQU&oq=laravel+adalah&gs_lp=Egxnd3Mtd2l6LXNlcnAiDmxhcmF2ZWwgYWRhbGFoKgIIADIFEAAYgAQyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSNwiUPAGWPAXcAF4AZABA5gB-QegAaMcqgEPNC4zLjIuMi4wLjEuMC4xuAEByAEA-AEBmAILoALDE6gCEcICBxAjGCcY6gLCAg0QIxjwBRgnGMkCGOoCwgIWEAAYgAQYQxi0AhjnBhiKBRjqAtgBAcICEBAAGAMYtAIY6gIYjwHYAQHCAgoQIxiABBgnGIoFwgIKECMY8AUYJxieBsICExAuGIAEGLEDGNEDGEMYxwEYigXCAgsQLhiABBixAxiDAcICCxAAGIAEGLEDGIMBwgIOEAAYgAQYsQMYgwEYigXCAgsQABiABBiRAhiKBcICChAAGIAEGEMYigXCAg4QABiABBiRAhixAxiKBcICCBAAGIAEGLEDwgIIEAAYgAQYywGYAwvxBfKvWMsa8sjSugYGCAEQARgBkgcNNS4yLjIuMC4xLjAuMaAH-GSyBw00LjIuMi4wLjEuMC4xuAe4E8IHBTItOC4zyAc9gAgA&sclient=gws-wiz-serp", "_blank", "noopener,noreferrer"); }}
                    >
                        <SkillCard title="Laravel" desc="Backend & API" icon="🧿" />
                    </div>
                </div>
            </section>
            {/* Minimal theme CSS (you can move to a stylesheet) */}
            <style>{`
                :root { color-scheme: light; --bg: #fff; --text: #ffffff; }
                [data-theme="dark"] { color-scheme: dark; --bg: #0b0b0d; --text: #000000; }
                body { background: var(--bg); color: var(--text); transition: background .3s ease, color .3s ease; }
                .card-link { outline: none; }
                .card-link:focus { box-shadow: 0 0 0 3px rgba(100,150,250,0.4); }
            `}</style>
        </>
    );
}
