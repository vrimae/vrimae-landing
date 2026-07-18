import { CheckCircle2, Layout } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function HeroMockup() {
  const { t } = useLanguage();

  return (
    <div style={{ maxWidth: '800px', margin: '10rem auto 4rem', textAlign: 'center' }}>
      
      <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', lineHeight: 1.2 }}>
        {t('mockup.title')}
      </h2>
      
      <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
        {t('mockup.subtitle')}
      </p>
      
      <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '3rem', maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto' }} 
         dangerouslySetInnerHTML={{ __html: t('mockup.desc').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }} 
      />
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ffffff', padding: '0.6rem 1.2rem', borderRadius: '30px', color: 'var(--color-text)', fontSize: '0.95rem', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <CheckCircle2 size={16} color="#2563eb" />
          <span>{t('mockup.badge_1')}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ffffff', padding: '0.6rem 1.2rem', borderRadius: '30px', color: 'var(--color-text)', fontSize: '0.95rem', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <CheckCircle2 size={16} color="#2563eb" />
          <span>{t('mockup.badge_2')}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ffffff', padding: '0.6rem 1.2rem', borderRadius: '30px', color: 'var(--color-text)', fontSize: '0.95rem', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <CheckCircle2 size={16} color="#2563eb" />
          <span>{t('mockup.badge_3')}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(37, 99, 235, 0.05)', padding: '0.6rem 1.2rem', borderRadius: '30px', color: '#2563eb', fontSize: '0.95rem', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
          <Layout size={16} color="#2563eb" />
          <span style={{ fontWeight: 500 }}>{t('mockup.badge_4')}</span>
        </div>
      </div>
      
    </div>
  );
}
