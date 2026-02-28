
import React, { useEffect } from 'react';
import Hero from "../components/Hero"; 
import SkillCard from "../components/SkillCard"; 
export default function Home() { 
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
                        <SkillCard title="HTML & CSS" desc="Membuat tampilan website modern" icon="🕹" />
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
        </>
    );
} 

