import { useState } from 'react';
import { MessageCircle, Mail, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

export default function Contact() {
  const { t } = useLanguage();
  const [waMessage, setWaMessage] = useState('');
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!waMessage.trim()) return;
    
    setIsSendingEmail(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/vrimae23@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Pesan: waMessage,
          _subject: t('contact.email_subject')
        })
      });
      const data = await res.json();
      if (data.success) {
        setIsSuccess(true);
        setWaMessage('');
      } else {
        alert(t('contact.err_send'));
      }
    } catch (e) {
      alert(t('contact.err_conn'));
    } finally {
      setIsSendingEmail(false);
    }
  };

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <section className="pricing features" style={{ width: '100%', maxWidth: '1200px' }}>
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.desc')}</p>
        </motion.div>
        
        <motion.div 
          className="pricing-card" 
          style={{ maxWidth: '600px', margin: '0 auto' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="pricing-header">
            <h3>{t('contact.card_title')}</h3>
            <div className="price" style={{ fontSize: '2rem' }}>
              <span className="amount">{t('contact.price')}</span>
            </div>
            <p style={{ marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>{t('contact.price_desc')}</p>
          </div>
          
          <div className="pricing-features">
            {((t('contact.features') as unknown) as string[]).map((feature: string, idx: number) => (
              <div className="p-feature" key={idx}>
                <span className="check-icon">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          {isSuccess ? (
            <div className="success-feedback fade-in" style={{ marginTop: '2rem', textAlign: 'center', padding: '2rem', background: 'rgba(37, 211, 102, 0.1)', borderRadius: '12px', border: '1px solid rgba(37, 211, 102, 0.3)' }}>
              <CheckCircle2 size={48} color="#25D366" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>{t('contact.success_title')}</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>{t('contact.success_desc')}</p>
              <button onClick={() => setIsSuccess(false)} className="btn btn-outline" style={{ marginTop: '1.5rem' }}>{t('contact.btn_another')}</button>
            </div>
          ) : (
            <form onSubmit={sendEmail} style={{ marginTop: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <textarea 
                  placeholder={t('contact.placeholder')} 
                  value={waMessage}
                  onChange={(e) => setWaMessage(e.target.value)}
                  className="contact-input-modern"
                  required
                  style={{ width: '100%', minHeight: '120px', padding: '1rem', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text)', fontFamily: 'inherit', resize: 'vertical' }}
                />
              </div>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                {t('contact.contact_info')} <strong>vrimae23@gmail.com</strong>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                <a 
                  href={`https://wa.me/85545832075?text=${encodeURIComponent(waMessage || t('contact.default_msg'))}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-primary" 
                  style={{width: '100%', justifyContent: 'center'}}
                >
                  <MessageCircle style={{marginRight: '0.5rem'}} />
                  {t('contact.btn_wa')}
                </a>
                <button 
                  type="submit"
                  disabled={isSendingEmail || !waMessage.trim()}
                  className="btn" 
                  style={{
                    width: '100%', 
                    justifyContent: 'center', 
                    backgroundColor: 'transparent', 
                    color: 'var(--color-text)', 
                    border: '1px solid var(--color-border)',
                    cursor: (isSendingEmail || !waMessage.trim()) ? 'not-allowed' : 'pointer',
                    opacity: (isSendingEmail || !waMessage.trim()) ? 0.5 : 1
                  }}
                >
                  <Mail style={{marginRight: '0.5rem'}} />
                  {isSendingEmail ? t('contact.btn_email_sending') : t('contact.btn_email')}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
}
