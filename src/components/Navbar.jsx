import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(10, 15, 30, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 20px -6px rgba(0, 0, 0, 0.5);
          z-index: 1000;
          font-family: 'Inter', sans-serif;
          transition: background 0.3s ease;
        }

        .navbar-container {
          width: 100%;               /* 👈 full width, no max-width constraint */
          margin: 0;
          padding: 0.6rem 4rem;      /* keep comfortable side padding */
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
        }

        .logo {
          font-size: 1.4rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ec4899, #8b5cf6, #06b6d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: 0.08em;
          word-spacing: 0.1em;
          cursor: default;
          animation: softGlow 3s infinite alternate;
        }

        .menu {
          display: flex;
          gap: 3rem;
        }

        .nav-link {
          color: #e2e8f0;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.4rem 0;
          position: relative;
          transition: color 0.2s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #ec4899, #8b5cf6, #06b6d4);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
          border-radius: 2px;
        }

        .nav-link:hover {
          color: #ffffff;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .nav-link.active {
          color: #ffffff;
          font-weight: 600;
        }

        .nav-link.active::after {
          transform: scaleX(1);
          transform-origin: left;
          box-shadow: 0 0 10px #8b5cf6;
        }

        @keyframes softGlow {
          0% { text-shadow: 0 0 8px rgba(139, 92, 246, 0.3); }
          100% { text-shadow: 0 0 16px rgba(139, 92, 246, 0.6); }
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .navbar-container {
            padding: 0.6rem 1rem;
          }
          .logo {
            font-size: 1.2rem;
            letter-spacing: 0.05em;
          }
          .menu {
            gap: 1.5rem;
          }
          .nav-link {
            font-size: 0.85rem;
          }
        }
      `}</style>

      <header className="navbar">
        <div className="navbar-container">
          <h1 className="logo">Portofolio XI RPL</h1>
          <nav className="menu">
            <Link
              to="/"
              className={`nav-link ${pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link ${pathname === "/about" ? "active" : ""}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}