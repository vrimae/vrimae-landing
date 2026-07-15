import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="landing-page">
      {/* Liquid Glass Animated Background */}
      <div className="liquid-bg">
        <div className="liquid-blob blob-1"></div>
        <div className="liquid-blob blob-2"></div>
        <div className="liquid-blob blob-3"></div>
      </div>

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <Logo width={36} height={32} />
            <span className="logo-text">Vrimae</span>
          </Link>
          <div className="nav-links">
            <Link to="/">Beranda</Link>
            <Link to="/services">Layanan</Link>
            <Link to="/process">Alur Kerja</Link>
            <Link to="/contact">Konsultasi</Link>
          </div>
          <div className="nav-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setIsContactOpen(!isContactOpen)} 
                className="btn"
                style={{ background: 'var(--color-primary)', color: '#030014', border: 'none' }}
              >
                Hubungi Kami
              </button>
              <AnimatePresence>
                {isContactOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    style={{ 
                      position: 'absolute', 
                      top: 'calc(100% + 1rem)', 
                      right: 0, 
                      minWidth: '220px', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '0.5rem', 
                      padding: '1rem', 
                      borderRadius: '1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: 'var(--glass-shadow)',
                      zIndex: 200
                    }}
                  >
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vrimae23@gmail.com&su=Halo%20Vrimae,%20Saya%20tertarik%20dengan%20layanan%20Anda" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-start', padding: '0.75rem 1rem' }}>
                      <Mail size={18}/> 
                      Email
                    </a>
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-start', padding: '0.75rem 1rem' }}>
                      <MessageCircle size={18}/> 
                      WhatsApp
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="https://matcha-saas-demo.vercel.app" className="btn btn-outline" target="_blank" rel="noreferrer">Lihat Demo</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="nav-logo">
              <Logo width={28} height={24} />
              <span className="logo-text">Vrimae</span>
            </div>
            <p>Software House & Mitra Digital Terpercaya untuk Kemajuan Bisnis Anda.</p>
          </div>
          <div className="footer-links">
            <div className="f-column">
              <h4>Layanan</h4>
              <Link to="/services">Custom Web</Link>
              <Link to="/services">Sistem POS</Link>
              <Link to="/services">ERP & Analitik</Link>
            </div>
            <div className="f-column">
              <h4>Perusahaan</h4>
              <Link to="/services">Keunggulan Kami</Link>
              <Link to="/process">Alur Kerja</Link>
              <Link to="/contact">Hubungi Kami</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vrimae Software House. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
