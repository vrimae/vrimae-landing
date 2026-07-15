import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, User, MessageCircle } from 'lucide-react';

import { useLanguage } from '../contexts/LanguageContext';

interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  created_at?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ReviewSection() {
  const { t } = useLanguage();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newText, setNewText] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    // Gunakan data dummy agar website tidak crash jika Supabase belum disetting
    const dummyReviews = [
      { id: 1, name: 'Budi Santoso', role: 'CEO PT Jaya', text: 'Pelayanan sangat cepat dan memuaskan. Website kami jadi jauh lebih bagus!', rating: 5 },
      { id: 2, name: 'Siti Aminah', role: 'Pemilik Toko Online', text: 'Sangat direkomendasikan. Timnya ramah dan responsif.', rating: 5 },
    ];
    setReviews(dummyReviews);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newText) return;
    
    setIsSubmitting(true);
    
    const newReview = {
      name: newName,
      role: newRole || t('reviews.default_role'),
      text: newText,
      rating: newRating
    };

    const savedReview = {
      id: Date.now(),
      ...newReview
    };

    setReviews([savedReview, ...reviews]);
    setNewName('');
    setNewRole('');
    setNewText('');
    setNewRating(5);
    
    setIsSubmitting(false);
  };

  return (
    <motion.section 
      className="features"
      style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
    >
      <div className="section-header">
        <h2>{t('reviews.title')}</h2>
        <p>{t('reviews.desc')}</p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', padding: '0 1rem' }}>
        
        {/* Form Add Review */}
        <motion.div 
          style={{
            background: 'var(--color-surface)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--color-border)',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: 'var(--glass-shadow)',
          }}
          variants={fadeInUp}
        >
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MessageCircle size={24} className="text-gradient" />
            {t('reviews.form_title')}
          </h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="text" 
              placeholder={t('reviews.name_placeholder')} 
              value={newName} 
              onChange={(e) => setNewName(e.target.value)} 
              required
              style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }}
            />
            <input 
              type="text" 
              placeholder={t('reviews.role_placeholder')} 
              value={newRole} 
              onChange={(e) => setNewRole(e.target.value)} 
              style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }}
            />
            
            <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center', margin: '0.5rem 0' }}>
              <span style={{ marginRight: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{t('reviews.rating_label')}</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  size={20} 
                  onClick={() => setNewRating(star)}
                  style={{ cursor: 'pointer', color: star <= newRating ? 'var(--color-accent)' : 'var(--color-border)', fill: star <= newRating ? 'var(--color-accent)' : 'none' }}
                />
              ))}
            </div>

            <textarea 
              placeholder={t('reviews.text_placeholder')} 
              value={newText} 
              onChange={(e) => setNewText(e.target.value)} 
              required
              rows={4}
              style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', resize: 'vertical' }}
            />
            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={isSubmitting}
              style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}
            >
              {isSubmitting ? t('reviews.submitting') : <>{t('reviews.submit')} <Send size={18} /></>}
            </button>
          </form>
        </motion.div>

        {/* List Reviews */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '500px', overflowY: 'auto', paddingRight: '0.5rem' }} className="review-list-container">
          <AnimatePresence>
            {reviews.map((r) => (
              <motion.div 
                key={r.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: 'var(--color-surface)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                      <User size={20} />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--color-text)' }}>{r.name}</h4>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{r.role}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.1rem' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} color={i < r.rating ? '#eab308' : '#52525b'} fill={i < r.rating ? '#eab308' : 'none'} />
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', margin: 0, color: 'var(--color-text-muted)' }}>"{r.text}"</p>
              </motion.div>
            ))}
          </AnimatePresence>
          {reviews.length === 0 && (
            <div style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginTop: '2rem' }}>
              {t('reviews.empty')}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
