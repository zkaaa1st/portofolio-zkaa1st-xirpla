import { useEffect, useState } from "react";

export default function Hero() {
  const lines = [
    "Selamat Datang di Portofolio Saya 👋",
    "Siswa Kelas XI Rekayasa Perangkat Lunak",
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  // typing effect
  useEffect(() => {
    if (index === lines.length) return;
    if (subIndex === lines[index].length + 1) {
      const timeout = setTimeout(() => setIndex(i => i + 1), 800);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => setSubIndex(s => s + 1), 80);
    return () => clearTimeout(timeout);
  }, [subIndex, index]);

  // cursor blink
  useEffect(() => {
    const iv = setInterval(() => setBlink(b => !b), 500);
    return () => clearInterval(iv);
  }, []);

  return (
    <section
      className="hero"
      style={{
        padding: "5rem 2rem",
        textAlign: "center",
        color: "#ffffff",
        background: "radial-gradient(circle at 30% 30%, #1a1a2e, #16213e, #0f0f1f)",
        borderRadius: "32px",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05) inset",
        margin: "2rem auto",
        maxWidth: 1100,
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Animated gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(100,108,255,0.3) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          animation: "floatOrb 12s infinite alternate",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255,100,200,0.25) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "floatOrb2 15s infinite alternate",
          zIndex: -1,
        }}
      />

      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          zIndex: -1,
        }}
      />

      {/* Floating particles (small circles) */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            background: `rgba(${100 + Math.random() * 155}, ${100 + Math.random() * 155}, 255, ${0.2 + Math.random() * 0.3})`,
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: "blur(1px)",
            animation: `floatParticle ${10 + Math.random() * 20}s infinite linear`,
            zIndex: -1,
          }}
        />
      ))}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Playfair+Display:wght@400;700&display=swap');

        .hero {
          font-family: 'Playfair Display', serif;
        }
        .hero p {
          font-family: 'Inter', sans-serif;
        }

        @keyframes floatOrb {
          0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          100% { transform: translate(30px, 30px) scale(1.2); opacity: 0.8; }
        }
        @keyframes floatOrb2 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          100% { transform: translate(-40px, -40px) scale(1.3); opacity: 0.7; }
        }
        @keyframes floatParticle {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(-100vh) translateX(20px); }
        }
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 10px rgba(255,255,255,0.3), 0 0 20px #4f46e5; }
          50% { text-shadow: 0 0 20px rgba(255,255,255,0.6), 0 0 40px #6366f1; }
        }
      `}</style>

      <h1
        style={{
          margin: 0,
          fontSize: "clamp(2.2rem, 6vw, 3.8rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
          animation: "glowPulse 4s infinite ease-in-out",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        {lines.slice(0, index).join(" ")}
        <span>{lines[index] ? " " + lines[index].slice(0, subIndex) : ""}</span>
        <span
          style={{
            opacity: blink ? 1 : 0,
            marginLeft: 6,
            color: "#818cf8",
            textShadow: "0 0 10px #818cf8",
          }}
        >
          |
        </span>
      </h1>

      <p
        style={{
          marginTop: "1.5rem",
          fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
          fontWeight: 300,
          color: "#e2e8f0",
          maxWidth: 750,
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.7,
          letterSpacing: "0.3px",
          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          background: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(4px)",
          padding: "1.5rem 2.2rem",
          borderRadius: "60px",
          border: "1px solid rgba(255,255,255,0.1)",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        Saya seorang siswa kelas XI Rekayasa Perangkat Lunak yang gemar membuat antarmuka web menarik dan membangun aplikasi fungsional. Saya tertarik pada desain, pengalaman pengguna, dan pengembangan front-end.
      </p>

      <div style={{ marginTop: "2.5rem", display: "flex", gap: 16, justifyContent: "center" }}>
        <a
          href="#skill"
          className="btn"
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            color: "#ffffff",
            padding: "14px 32px",
            borderRadius: "50px",
            fontWeight: 500,
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 10px 20px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1) inset",
            transition: "all 0.3s ease",
            letterSpacing: "0.5px",
            fontSize: "1rem",
            fontFamily: "'Inter', sans-serif",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#4f46e5";
            e.currentTarget.style.borderColor = "transparent";
            e.currentTarget.style.boxShadow = "0 20px 30px -10px #4f46e5, 0 0 0 1px #818cf8 inset";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.boxShadow = "0 10px 20px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1) inset";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Lihat Skill
        </a>
      </div>
    </section>
  );
}