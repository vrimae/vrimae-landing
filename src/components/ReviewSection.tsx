import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, User, MessageCircle } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

const initialReviews: Review[] = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "CEO TechNova",
    text: "Sangat puas dengan sistem kasir (POS) yang dibuat oleh Vrimae! Desainnya benar-benar sesuai ekspektasi dan sangat membantu efisiensi toko kami.",
    rating: 5
  },
  {
    id: 2,
    name: "Sinta Maharani",
    role: "Founder Sinta Corp",
    text: "Proses diskusi dari awal sangat transparan. Aplikasi ERP kami selesai tepat waktu dan timnya sangat suportif saat maintenance.",
    rating: 5
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newText, setNewText] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newText) return;
    
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      const newReview: Review = {
        id: Date.now(),
        name: newName,
        role: newRole || "Klien",
        text: newText,
        rating: newRating
      };
      setReviews([newReview, ...reviews]);
      setNewName('');
      setNewRole('');
      setNewText('');
      setNewRating(5);
      setIsSubmitting(false);
    }, 600);
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
        <h2>Ulasan Klien Kami</h2>
        <p>Lihat apa kata mereka tentang pengalaman bekerja sama dengan Vrimae, atau bagikan pengalaman Anda!</p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '0 2rem' }}>
        
        {/* Form Add Review */}
        <motion.div 
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: 'var(--glass-shadow)',
          }}
          variants={fadeInUp}
        >
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MessageCircle size={24} className="text-gradient" />
            Tulis Ulasan Anda
          </h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="text" 
              placeholder="Nama Anda" 
              value={newName} 
              onChange={(e) => setNewName(e.target.value)} 
              required
              style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', background: 'rgba(0,0,0,0.2)', color: 'white' }}
            />
            <input 
              type="text" 
              placeholder="Perusahaan / Jabatan (Opsional)" 
              value={newRole} 
              onChange={(e) => setNewRole(e.target.value)} 
              style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', background: 'rgba(0,0,0,0.2)', color: 'white' }}
            />
            
            <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center', margin: '0.5rem 0' }}>
              <span style={{ marginRight: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Rating:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  size={20} 
                  onClick={() => setNewRating(star)}
                  style={{ cursor: 'pointer', color: star <= newRating ? '#eab308' : '#52525b', fill: star <= newRating ? '#eab308' : 'none' }}
                />
              ))}
            </div>

            <textarea 
              placeholder="Bagaimana pengalaman Anda bersama Vrimae?" 
              value={newText} 
              onChange={(e) => setNewText(e.target.value)} 
              required
              rows={4}
              style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', background: 'rgba(0,0,0,0.2)', color: 'white', resize: 'vertical' }}
            />
            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={isSubmitting}
              style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}
            >
              {isSubmitting ? 'Mengirim...' : <>Kirim Ulasan <Send size={18} /></>}
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
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }}>
                      <User size={20} />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '1rem', color: '#fff' }}>{r.name}</h4>
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
        </div>
      </div>
    </motion.section>
  );
}
