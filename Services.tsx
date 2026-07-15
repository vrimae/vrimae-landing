import { useState } from 'react';
import { MessageCircle, Mail, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

export default function Contact() {
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
          _subject: "Prospek Baru: Konsultasi Proyek Custom dari Halaman Contact"
        })
      });
      const data = await res.json();
      if (data.success) {
        setIsSuccess(true);
        setWaMessage('');
      } else {
        alert("Gagal mengirim pesan. Silakan gunakan WhatsApp.");
      }
    } catch (e) {
      alert("Terjadi kesalahan koneksi. Silakan gunakan WhatsApp.");
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
          <h2>Mulai Proyek Anda Bersama Kami</h2>
          <p>Diskusikan ide brilian Anda, dan kami akan merancangkan solusi teknologinya dengan penawaran harga yang transparan.</p>
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
            <h3>Konsultasi & Penawaran</h3>
            <div className="price" style={{ fontSize: '2rem' }}>
              <span className="amount">Sesuai Kebutuhan</span>
            </div>
            <p style={{ marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>Investasi sistem bergantung pada tingkat kompleksitas fitur yang Anda inginkan.</p>
          </div>
          
          <div className="pricing-features">
            <div className="p-feature">
              <span className="check-icon">✓</span>
              <span>Sesi konsultasi awal sepenuhnya gratis</span>
            </div>
            <div className="p-feature">
              <span className="check-icon">✓</span>
              <span>Pembuatan proposal penawaran (Quotation) terperinci</span>
            </div>
            <div className="p-feature">
              <span className="check-icon">✓</span>
              <span>Estimasi pengerjaan yang jelas dan terukur</span>
            </div>
            <div className="p-feature">
              <span className="check-icon">✓</span>
              <span>Garansi masa pemeliharaan setelah peluncuran</span>
            </div>
          </div>
          
          {isSuccess ? (
            <div className="success-feedback fade-in" style={{ marginTop: '2rem', textAlign: 'center', padding: '2rem', background: 'rgba(37, 211, 102, 0.1)', borderRadius: '12px', border: '1px solid rgba(37, 211, 102, 0.3)' }}>
              <CheckCircle2 size={48} color="#25D366" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>Pesan Berhasil Terkirim!</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Terima kasih telah menghubungi kami. Tim kami akan segera menindaklanjuti pesan Anda melalui email yang Anda berikan (jika ada) atau kami akan segera mengecek inbox kami.</p>
              <button onClick={() => setIsSuccess(false)} className="btn btn-outline" style={{ marginTop: '1.5rem' }}>Kirim Pesan Lain</button>
            </div>
          ) : (
            <form onSubmit={sendEmail} style={{ marginTop: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <textarea 
                  placeholder="Ceritakan singkat ide atau kebutuhan sistem Anda di sini..." 
                  value={waMessage}
                  onChange={(e) => setWaMessage(e.target.value)}
                  className="contact-input-modern"
                  required
                  style={{ width: '100%', minHeight: '120px', padding: '1rem', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text)', fontFamily: 'inherit', resize: 'vertical' }}
                />
              </div>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                Hubungi kami via WhatsApp atau Email: <strong>vrimae23@gmail.com</strong>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                <a 
                  href={`https://wa.me/6285656808305?text=${encodeURIComponent(waMessage || 'Halo Vrimae, saya tertarik untuk membuat website/sistem custom untuk bisnis saya.')}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-primary" 
                  style={{width: '100%', justifyContent: 'center'}}
                >
                  <MessageCircle style={{marginRight: '0.5rem'}} />
                  Kirim via WhatsApp
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
                  {isSendingEmail ? 'Mengirim pesan...' : 'Kirim Langsung ke Email'}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
}
