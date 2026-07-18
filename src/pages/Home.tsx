import { ArrowRight, Star, MessageCircle, Zap, HeartHandshake, Shield } from 'lucide-react';
import HeroMockup from '../components/HeroMockup';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReviewSection from '../components/ReviewSection';
import { useLanguage } from '../contexts/LanguageContext';

// Animation variants — lightweight, no blur
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-content text-glow-wrapper"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >

          <motion.h1 className="hero-title" variants={fadeInUp}>
            {t('hero.title_1')} <br />
            <span className="text-gradient">{t('hero.title_2')}</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeInUp} dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }} />
          <motion.div className="hero-cta" variants={fadeInUp}>
            <Link to="/contact" className="btn btn-primary btn-large group">
              {t('hero.consultation')}
              <ArrowRight className="icon-arrow group-hover" />
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Dashboard Mockup / Illustration */}
        <div>
          <HeroMockup />
        </div>
      </section>

      {/* About / Introduction Section */}
      <motion.section 
        className="features" 
        style={{ paddingTop: 'var(--space-lg)', paddingBottom: 'var(--space-md)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        <div className="section-header">
          <h2>{t('home.about_title')}</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: 'var(--text-body)', lineHeight: '1.8' }} dangerouslySetInnerHTML={{ __html: t('home.about_desc').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        </div>
      </motion.section>

      {/* Snapshot of Services */}
      <motion.section 
        className="features" 
        style={{ paddingTop: 'var(--space-md)', paddingBottom: 'var(--space-md)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        <div className="section-header">
          <h2>{t('home.start_title')}</h2>
          <p>{t('home.start_desc')}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block' }}>
            <Link to="/services" className="btn btn-outline btn-large">{t('home.start_btn')}</Link>
          </div>
        </div>
      </motion.section>

      {/* Why Us Section */}
      <section id="why-us" className="features" style={{paddingTop: 'var(--space-lg)'}}>
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2>{t('home.why_title')}</h2>
          <p>{t('home.why_desc')}</p>
        </motion.div>
        
        <motion.div 
          className="reasons-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div className="reason-card" variants={fadeInUp}>
            <div className="reason-icon"><Zap size={28} /></div>
            <div className="reason-content">
              <h3>{t('home.why_1_title')}</h3>
              <p>{t('home.why_1_desc')}</p>
            </div>
          </motion.div>
          <motion.div className="reason-card" variants={fadeInUp} whileHover={{ scale: 1.02 }}>
            <div className="reason-icon"><HeartHandshake size={28} /></div>
            <div className="reason-content">
              <h3>{t('home.why_2_title')}</h3>
              <p>{t('home.why_2_desc')}</p>
            </div>
          </motion.div>
          <motion.div className="reason-card" variants={fadeInUp} whileHover={{ scale: 1.02 }}>
            <div className="reason-icon"><Shield size={28} /></div>
            <div className="reason-content">
              <h3>{t('home.why_3_title')}</h3>
              <p>{t('home.why_3_desc')}</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Portfolio / Trial Section */}
      <motion.section 
        id="portfolio" 
        className="trial-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >

        <div className="trial-inner">
          <motion.div className="trial-text" variants={fadeInUp}>

            <h2 className="trial-title">
              {t('home.portfolio_title_1')} <span className="text-gradient">{t('home.portfolio_title_2')}</span><br />
              {t('home.portfolio_title_3')}
            </h2>
            <p className="trial-desc" dangerouslySetInnerHTML={{ __html: t('home.portfolio_desc').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            <ul className="trial-benefits">
              <li><span className="check">✓</span> {t('home.portfolio_list_1')}</li>
              <li><span className="check">✓</span> {t('home.portfolio_list_2')}</li>
              <li><span className="check">✓</span> {t('home.portfolio_list_3')}</li>
              <li><span className="check">✓</span> {t('home.portfolio_list_4')}</li>
            </ul>
            <a
              href="https://matcha-saas-demo.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-large trial-cta"
            >
              {t('home.portfolio_btn')}
            </a>
            <p className="trial-note">{t('home.portfolio_note')}</p>
          </motion.div>

          <motion.div className="trial-card" variants={fadeInUp}>
            <div className="trial-card-header">
              <span className="trial-free-label">{t('home.portfolio_card_label')}</span>
              <div className="trial-days" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span className="trial-days-num" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>AiPOS</span>
                <span className="trial-days-unit" style={{ fontSize: '1.2rem' }}>{t('home.portfolio_card_unit')}</span>
              </div>
              <p>{t('home.portfolio_card_desc')}</p>
            </div>
            <div className="trial-card-divider" />
            <div className="trial-card-features">
              {((t('home.portfolio_card_features') as unknown) as string[]).map((f: string) => (
                <div key={f} className="trial-card-feature">{f}</div>
              ))}
            </div>
            <a
              href="https://matcha-saas-demo.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '1.5rem', textAlign: 'center' }}
            >
              {t('home.portfolio_card_btn')}
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Info Harga Singkat */}
      <motion.section 
        className="features" 
        style={{ paddingTop: 'var(--space-lg)', paddingBottom: 'var(--space-md)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        <div className="section-header">
          <h2>{t('home.pricing_title')}</h2>
          <p>{t('home.pricing_desc')}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block' }}>
            <Link to="/contact" className="btn btn-outline btn-large">{t('home.pricing_btn')}</Link>
          </div>
        </div>
      </motion.section>

      {/* Review Section */}
      <ReviewSection />

      {/* FAQ Section */}
      <motion.section 
        id="faq" 
        className="features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.div className="section-header" variants={fadeInUp}>
          <h2>{t('home.faq_title')}</h2>
          <p>{t('home.faq_desc')}</p>
        </motion.div>
        <div className="faq-container">
          {((t('home.faqs') as unknown) as {q: string, a: string}[]).map((faq, idx) => (
            <motion.details className="faq-item" key={idx} variants={fadeInUp}>
              <summary>{faq.q}</summary>
              <div className="faq-content">{faq.a}</div>
            </motion.details>
          ))}
        </div>
      </motion.section>
    </>
  );
}
