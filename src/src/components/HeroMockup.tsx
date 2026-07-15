import { CheckCircle2, Layout } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function HeroMockup() {
  const [isIframe, setIsIframe] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window !== window.parent) {
        setIsIframe(true);
      }
      
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  if (isIframe) return <div style={{padding: '2rem', color: 'transparent'}}>Mockup Placeholder</div>;

  return (
    <div className="bento-container fade-in-up" style={{ marginTop: '2rem' }}>
      
      {/* Top Large Card */}
      <div className="bento-card bento-top">
        <div className="bento-content">
          <h2 className="bento-title">{t('mockup.title')}</h2>
          <p className="bento-subtitle" style={{marginBottom: '1rem'}}>{t('mockup.subtitle')}</p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }} dangerouslySetInnerHTML={{ __html: t('mockup.desc').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
          
          <div className="bento-features">
            <div className="bento-badge">
              <CheckCircle2 size={16} color="#10b981" />
              <span>{t('mockup.badge_1')}</span>
            </div>
            <div className="bento-badge">
              <CheckCircle2 size={16} color="#10b981" />
              <span>{t('mockup.badge_2')}</span>
            </div>
            <div className="bento-badge">
              <CheckCircle2 size={16} color="#10b981" />
              <span>{t('mockup.badge_3')}</span>
            </div>
            <div className="bento-badge" style={{ marginTop: '0.5rem', borderColor: '#38bdf8' }}>
              <Layout size={16} color="#38bdf8" />
              <span style={{ color: '#38bdf8' }}>{t('mockup.badge_4')}</span>
            </div>
          </div>
        </div>

        {/* 3D Dual Mac Mockup */}
        <div className="mac-scene">
          
          {/* Mac 1 (Website) - Left */}
          <div className="laptop-3d left">
            <div className="laptop-base">
              <div className="laptop-keyboard"></div>
              <div className="laptop-trackpad"></div>
            </div>
            <div className="laptop-lid">
              <div className="laptop-screen-inner">
                {!isMobile ? (
                  <iframe 
                    className="mockup-iframe"
                    src="/" 
                    scrolling="no"
                    style={{ background: '#f8fafc' }}
                  />
                ) : (
                  <div className="mini-website-mockup" style={{ width: '100%', height: '100%', transform: 'scale(0.8)', transformOrigin: 'top left' }}>
                    <div className="mw-header">
                      <div className="mw-dot" style={{background: '#ef4444'}}></div>
                      <div className="mw-dot" style={{background: '#f59e0b'}}></div>
                      <div className="mw-dot" style={{background: '#10b981'}}></div>
                    </div>
                    <div className="mw-hero" style={{background: 'linear-gradient(135deg, #1e1b4b, #312e81)'}}>
                      <div className="mw-title"></div>
                      <div className="mw-sub"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mac 2 (POS Dashboard) - Right */}
          <div className="laptop-3d right">
            <div className="laptop-base">
              <div className="laptop-keyboard"></div>
              <div className="laptop-trackpad"></div>
            </div>
            <div className="laptop-lid">
              <div className="laptop-screen-inner">
                {!isMobile ? (
                  <iframe 
                    className="mockup-iframe"
                    src="https://matcha-saas-demo.vercel.app/" 
                    scrolling="no"
                    style={{ background: '#030014' }}
                  />
                ) : (
                  <div className="mini-pos-mockup" style={{ width: '100%', height: '100%', transform: 'scale(0.8)', transformOrigin: 'top right' }}>
                    <div className="mw-header">
                      <div className="mw-dot" style={{background: '#ef4444'}}></div>
                      <div className="mw-dot" style={{background: '#f59e0b'}}></div>
                      <div className="mw-dot" style={{background: '#10b981'}}></div>
                    </div>
                    <div className="mp-layout">
                        <div className="mp-sidebar" style={{width: '30%'}}>
                           <div className="mp-sb-item active"></div>
                           <div className="mp-sb-item"></div>
                        </div>
                        <div className="mp-main">
                           <div className="mp-grid" style={{gridTemplateColumns: '1fr'}}>
                              <div className="mp-card" style={{height: '20px'}}></div>
                              <div className="mp-card" style={{height: '20px'}}></div>
                           </div>
                        </div>
                      </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Cards */}
      <div className="bento-bottom">
        <div className="bento-card bento-small-card">
          <h3>{t('mockup.badge_1')}</h3>
          <p>Desain khusus yang disesuaikan dengan identitas brand Anda, cepat dan memukau.</p>
          <div className="bento-small-graphic">
             <div className="mini-website-mockup" style={{ transform: 'scale(1.2) translateY(20px)', transformOrigin: 'top left' }}>
                <div className="mw-header">
                  <div className="mw-dot" style={{background: '#ef4444'}}></div>
                  <div className="mw-dot" style={{background: '#f59e0b'}}></div>
                  <div className="mw-dot" style={{background: '#10b981'}}></div>
                </div>
                <div className="mw-hero" style={{background: 'linear-gradient(135deg, #1e1b4b, #312e81)'}}>
                  <div className="mw-title"></div>
                  <div className="mw-sub"></div>
                </div>
             </div>
          </div>
        </div>
        
        <div className="bento-card bento-small-card">
          <h3>{t('mockup.badge_2')}</h3>
          <p>Kelola transaksi, inventori, dan analitik dalam satu dashboard terpadu.</p>
          <div className="bento-small-graphic">
             <div className="mini-pos-mockup" style={{ transform: 'scale(1.2) translateY(20px)', transformOrigin: 'top right' }}>
                <div className="mw-header">
                  <div className="mw-dot" style={{background: '#ef4444'}}></div>
                  <div className="mw-dot" style={{background: '#f59e0b'}}></div>
                  <div className="mw-dot" style={{background: '#10b981'}}></div>
                </div>
                <div className="mp-layout">
                    <div className="mp-sidebar" style={{width: '30%'}}>
                       <div className="mp-sb-item active"></div>
                       <div className="mp-sb-item"></div>
                    </div>
                    <div className="mp-main">
                       <div className="mp-grid" style={{gridTemplateColumns: '1fr'}}>
                          <div className="mp-card" style={{height: '20px'}}></div>
                          <div className="mp-card" style={{height: '20px'}}></div>
                       </div>
                    </div>
                  </div>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
}
