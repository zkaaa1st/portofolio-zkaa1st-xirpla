import { useState, useRef, useEffect } from 'react';
import azka from './azka.jpeg';

export default function About() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [showModal, setShowModal] = useState(false);
  const timeoutRef = useRef(null);
  const modalRef = useRef(null);

  const handleLike = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
      setNotification({ show: true, message: 'Kamu suka Postingan ini! 💖' });
    } else {
      setLikes(likes - 1);
      setLiked(false);
      setNotification({ show: true, message: 'Kamu tidak suka postingan ini.' });
    }

    timeoutRef.current = setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 2000);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Close modal when clicking outside the image
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showModal]);

  return (
    <section
      className="section about"
      aria-labelledby="about-heading"
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '4.5rem 2rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)',
        position: 'relative',
      }}
    >
      <div
        className="about-card"
        role="region"
        aria-label="About Azka"
        style={{
          display: 'flex',
          gap: 32,
          maxWidth: 1160,
          width: '100%',
          alignItems: 'center',
          background: '#fff',
          padding: '40px 40px 80px 40px',
          borderRadius: 28,
          boxShadow: '0 20px 40px -12px rgba(15,23,42,0.12)',
          transform: 'translateY(0)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          border: '1px solid rgba(255,255,255,0.5)',
          backdropFilter: 'blur(2px)',
          position: 'relative',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-6px)';
          e.currentTarget.style.boxShadow = '0 30px 50px -12px rgba(15,23,42,0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(15,23,42,0.12)';
        }}
      >
        {/* Notification Toast */}
        {notification.show && (
          <div
            role="status"
            aria-live="polite"
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: '#ffffff',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.9)',
              borderRadius: '40px',
              padding: '10px 20px',
              fontSize: '14px',
              fontWeight: 500,
              color: '#0f172a',
              boxShadow: '0 10px 20px -8px rgba(15,23,42,0.15)',
              zIndex: 10,
              animation: 'slideIn 0.3s ease',
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill={notification.message.includes('💖') ? '#ec4899' : 'none'}
              stroke="#ec4899"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span>{notification.message}</span>
          </div>
        )}

        {/* Like Button */}
        <button
          onClick={handleLike}
          aria-label={liked ? 'Unlike this profile' : 'Like this profile'}
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: liked
              ? 'linear-gradient(135deg, #f43f5e, #ec4899)'
              : 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: liked ? 'none' : '1px solid rgba(255,255,255,0.8)',
            borderRadius: '40px',
            padding: '8px 16px',
            fontSize: '14px',
            fontWeight: 500,
            color: liked ? '#fff' : '#1e293b',
            boxShadow: liked
              ? '0 8px 20px -6px rgba(244,63,94,0.5)'
              : '0 4px 12px rgba(0,0,0,0.05)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            border: 'none',
            outline: 'none',
            lineHeight: 1,
            zIndex: 2,
          }}
          onMouseEnter={(e) => {
            if (!liked) {
              e.currentTarget.style.background = 'rgba(255,255,255,0.9)';
              e.currentTarget.style.boxShadow = '0 8px 18px -6px rgba(15,23,42,0.15)';
            }
          }}
          onMouseLeave={(e) => {
            if (!liked) {
              e.currentTarget.style.background = 'rgba(255,255,255,0.7)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
            }
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={liked ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: 'fill 0.2s' }}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span>{likes}</span>
        </button>

        {/* Profile image with aesthetic frame – clickable */}
        <aside
          className="about-photo"
          aria-hidden="false"
          style={{
            flex: '0 0 220px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => setShowModal(true)}
        >
          <div
            className="image-frame"
            style={{
              position: 'relative',
              padding: '6px',
              borderRadius: 32,
              background: 'linear-gradient(135deg, #ec4899, #8b5cf6, #06b6d4)',
              boxShadow: '0 15px 25px -8px rgba(139,92,246,0.3)',
              transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 30px -6px rgba(139,92,246,0.5)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 15px 25px -8px rgba(139,92,246,0.3)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {/* Decorative corner accents */}
            <div style={{
              position: 'absolute',
              top: '-2px',
              left: '-2px',
              width: '12px',
              height: '12px',
              borderTop: '2px solid white',
              borderLeft: '2px solid white',
              borderRadius: '4px 0 0 0',
              opacity: 0.7,
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              width: '12px',
              height: '12px',
              borderTop: '2px solid white',
              borderRight: '2px solid white',
              borderRadius: '0 4px 0 0',
              opacity: 0.7,
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-2px',
              left: '-2px',
              width: '12px',
              height: '12px',
              borderBottom: '2px solid white',
              borderLeft: '2px solid white',
              borderRadius: '0 0 0 4px',
              opacity: 0.7,
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-2px',
              right: '-2px',
              width: '12px',
              height: '12px',
              borderBottom: '2px solid white',
              borderRight: '2px solid white',
              borderRadius: '0 0 4px 0',
              opacity: 0.7,
              pointerEvents: 'none',
            }} />

            <img
              src={azka}
              alt="Azka Airlangga Britianto"
              style={{
                width: 200,
                height: 200,
                objectFit: 'cover',
                borderRadius: 26,
                display: 'block',
                border: '2px solid rgba(255,255,255,0.3)',
              }}
            />
          </div>
        </aside>

        {/* Zoom Modal */}
        {showModal && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.75)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              animation: 'fadeIn 0.2s ease',
            }}
          >
            <div
              ref={modalRef}
              style={{
                position: 'relative',
                display: 'inline-block',
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.03)',
                padding: '6px',
                boxShadow: '0 30px 60px -15px rgba(0,0,0,0.6)',
              }}
            >
              <img
                src={azka}
                alt="Azka Airlangga Britianto (zoomed)"
                onClick={() => setShowModal(false)}
                style={{
                  width: 'min(70vw, 700px)',
                  height: 'auto',
                  maxHeight: '80vh',
                  display: 'block',
                  borderRadius: '14px',
                  border: '2px solid rgba(255,255,255,0.2)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.01)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                aria-label="Close zoom"
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(30,30,40,0.8)',
                  backdropFilter: 'blur(8px)',
                  border: '2px solid rgba(255,255,255,0.5)',
                  color: 'white',
                  fontSize: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.4)',
                  zIndex: 10,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#8b5cf6';
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.borderColor = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(30,30,40,0.8)';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                }}
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* About Content */}
        <div className="about-content" style={{ flex: 1 }}>
          <header style={{ marginBottom: 12 }}>
            <h2
              id="about-heading"
              className="about-title"
              style={{
                margin: 0,
                fontSize: 28,
                color: '#0f172a',
                letterSpacing: '-0.02em',
                fontWeight: 600,
              }}
            >
              Hai, saya Azka Airlangga Britianto
            </h2>
            <p
              className="about-sub"
              style={{
                margin: '12px 0 20px',
                color: '#475569',
                lineHeight: 1.6,
                fontSize: 16,
                maxWidth: 540,
              }}
            >
              Siswa XI RPL — penggemar desain antarmuka dan pengembangan front-end. Saya suka
              menciptakan pengalaman pengguna yang rapi, cepat, dan estetis.
            </p>
          </header>

          <div
            className="biodata"
            style={{
              display: 'flex',
              gap: 28,
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ minWidth: 260 }}>
              <h3
                className="biodata-title"
                style={{
                  margin: '0 0 12px',
                  fontSize: 16,
                  color: '#0f172a',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                }}
              >
                Biodata Singkat
              </h3>
              <ul className="biodata-list" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                <li style={{ marginBottom: 10, color: '#334155' }}>
                  <strong style={{ color: '#0f172a', fontWeight: 500 }}>Nama:</strong>{' '}
                  Azka Airlangga Bristianto
                </li>
                <li style={{ marginBottom: 10, color: '#334155' }}>
                  <strong style={{ color: '#0f172a', fontWeight: 500 }}>Kelas:</strong> XI RPL
                </li>
                <li style={{ color: '#334155' }}>
                  <strong style={{ color: '#0f172a', fontWeight: 500 }}>Sekolah:</strong>{' '}
                  SMK PUSDIKHUBAD CIMAHI
                </li>
              </ul>
            </div>

            <div style={{ flex: 1, minWidth: 260 }}>
              <h3
                style={{
                  margin: '0 0 12px',
                  fontSize: 16,
                  color: '#0f172a',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                }}
              >
                Keahlian & Minat
              </h3>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {['HTML', 'CSS', 'JavaScript', 'React', 'UI Design'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: 'linear-gradient(105deg, #f1f5f9, #f8fafc)',
                      color: '#0f172a',
                      padding: '8px 18px',
                      borderRadius: 40,
                      fontSize: 13,
                      fontWeight: 500,
                      boxShadow: '0 2px 6px rgba(0,0,0,0.02), inset 0 1px 2px #ffffff',
                      border: '1px solid rgba(255,255,255,0.8)',
                      transition: 'all 0.2s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.boxShadow = '0 6px 12px -8px rgba(15,23,42,0.2)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(105deg, #f1f5f9, #f8fafc)';
                      e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.02), inset 0 1px 2px #ffffff';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}