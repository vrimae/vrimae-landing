import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Layout() {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
            <Link to="/">{t('navbar.home')}</Link>
            <Link to="/services">{t('navbar.services')}</Link>
            <Link to="/process">{t('navbar.process')}</Link>
            <Link to="/contact">{t('navbar.contact')}</Link>
          </div>
          <div className="nav-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {/* Language Switcher */}
            <button 
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              className="btn btn-outline"
              style={{ padding: '0.4rem 0.8rem', minWidth: '40px', fontWeight: 'bold' }}
            >
              {language.toUpperCase()}
            </button>
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setIsContactOpen(!isContactOpen)} 
                className="btn"
                style={{ background: 'var(--color-primary)', color: '#ffffff', border: 'none', padding: '0.5rem 1rem' }}
              >
                {t('navbar.contact_btn')}
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
                      background: 'var(--color-surface)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid var(--color-border)',
                      boxShadow: 'var(--glass-shadow)',
                      zIndex: 200
                    }}
                  >
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vrimae23@gmail.com&su=Halo%20Vrimae,%20Saya%20tertarik%20dengan%20layanan%20Anda" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-start', padding: '0.75rem 1rem' }}>
                      <Mail size={18}/> 
                      Email
                    </a>
                    <a href="https://wa.me/85545832075" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-start', padding: '0.75rem 1rem' }}>
                      <MessageCircle size={18}/> 
                      WhatsApp
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="https://matcha-saas-demo.vercel.app" className="btn btn-outline hide-on-mobile" target="_blank" rel="noreferrer">{t('navbar.demo_btn')}</a>
            <button 
              className="mobile-menu-btn" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mobile-nav-dropdown"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'var(--color-surface)',
                padding: '1.5rem',
                borderBottom: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                boxShadow: 'var(--glass-shadow)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                zIndex: 100
              }}
            >
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 500, fontSize: '1.1rem' }}>{t('navbar.home')}</Link>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 500, fontSize: '1.1rem' }}>{t('navbar.services')}</Link>
              <Link to="/process" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 500, fontSize: '1.1rem' }}>{t('navbar.process')}</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 500, fontSize: '1.1rem' }}>{t('navbar.contact')}</Link>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                <span style={{ fontWeight: 500, color: 'var(--color-text)' }}>Bahasa / Language</span>
                <button 
                  onClick={() => {
                    setLanguage(language === 'id' ? 'en' : 'id');
                    setIsMobileMenuOpen(false);
                  }}
                  className="btn btn-outline"
                  style={{ padding: '0.4rem 1rem', fontWeight: 'bold' }}
                >
                  {language === 'id' ? 'ID 🇮🇩' : 'EN 🇬🇧'}
                </button>
              </div>
              <a href="https://matcha-saas-demo.vercel.app" className="btn btn-outline" target="_blank" rel="noreferrer" onClick={() => setIsMobileMenuOpen(false)} style={{ textAlign: 'center', marginTop: '1rem' }}>{t('navbar.demo_pos_btn')}</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>

      {/* Dark Footer */}
      <footer className="footer-dark">
        <div className="footer-dark-content">
          
          <div className="footer-dark-brand">
            <div className="nav-logo" style={{ marginBottom: '1.5rem' }}>
              <Logo width={28} height={24} />
              <span className="logo-text">Vrimae</span>
            </div>
            <p className="footer-dark-desc">
              {t('footer.desc')}
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com/vrimae.id" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://wa.me/85545832075" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>

          <div className="footer-dark-links">
            <div className="f-dark-column">
              <h4>{t('footer.solutions')}</h4>
              <Link to="/services">{t('footer.web_dev')}</Link>
              <Link to="/services">{t('footer.pos')}</Link>
              <Link to="/services">{t('footer.inventory')}</Link>
              <Link to="/services">{t('footer.ecommerce')}</Link>
              <Link to="/services">{t('footer.mobile')}</Link>
            </div>
            <div className="f-dark-column">
              <h4>{t('footer.company')}</h4>
              <Link to="/about">{t('footer.about')}</Link>
              <Link to="/careers">{t('footer.careers')}</Link>
              <Link to="/blog">{t('footer.blog')}</Link>
              <Link to="/case-studies">{t('footer.cases')}</Link>
              <Link to="/contact">{t('footer.contact')}</Link>
            </div>
            <div className="f-dark-column">
              <h4>{t('footer.resources')}</h4>
              <Link to="/docs">{t('footer.docs')}</Link>
              <Link to="/help">{t('footer.help')}</Link>
              <Link to="/api">{t('footer.api')}</Link>
              <Link to="/status">{t('footer.status')}</Link>
              <Link to="/changelog">{t('footer.changelog')}</Link>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
