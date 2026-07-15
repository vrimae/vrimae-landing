import { ArrowRight, Star, MessageCircle, Zap, HeartHandshake, Shield } from 'lucide-react';
import HeroMockup from '../components/HeroMockup';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReviewSection from '../components/ReviewSection';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-lg)' }}>
        <div className="hero-background">
          <div className="glow glow-1"></div>
          <div className="glow glow-2"></div>
        </div>
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="badge" variants={fadeInUp}>
            <Star className="icon-small" />
            <span>Software House & Custom Web Development</span>
          </motion.div>
          <motion.h1 className="hero-title" variants={fadeInUp}>
            Wujudkan Sistem & Website <br />
            <span className="text-gradient">Impian Bisnis Anda.</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeInUp}>
            Di Vrimae, kami tidak sekadar membuat website; kami merancang ekosistem perangkat lunak yang disesuaikan sepenuhnya dengan alur kerja unik perusahaan Anda. Dengan memadukan teknologi modern-stack yang cepat dan estetika desain yang minimalis, kami memastikan bisnis Anda tidak hanya tampil profesional, tetapi juga mampu beroperasi dengan efisiensi maksimal. Mari diskusikan ide Anda dan bangun masa depan digital bisnis Anda bersama kami hari ini.
          </motion.p>
          <motion.div className="hero-cta" variants={fadeInUp}>
            <Link to="/contact" className="btn btn-primary btn-large group">
              <MessageCircle className="icon-medium" />
              Konsultasi Gratis Sekarang
              <ArrowRight className="icon-arrow group-hover" />
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Dashboard Mockup / Illustration */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroMockup />
        </motion.div>
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
          <h2>Mengenal Vrimae</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: 'var(--text-body)', lineHeight: '1.8' }}>
            Di Vrimae, kami tidak sekadar membuat website. Kami merancang <strong>ekosistem digital presisi</strong> yang disesuaikan khusus dengan alur kerja bisnis Anda. Dengan arsitektur teknologi modern yang cepat dan desain minimalis nan elegan, kami bantu mengubah ide perusahaan Anda menjadi solusi perangkat lunak yang tampil memukau dan beroperasi dengan efisiensi maksimal.
          </p>
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
          <h2>Mulai Ekosistem Digital Anda</h2>
          <p>Pelajari lebih dalam mengenai solusi yang bisa kami tawarkan untuk bisnis Anda.</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-block' }}>
            <Link to="/services" className="btn btn-outline btn-large">Lihat Layanan Utama Kami →</Link>
          </motion.div>
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
          <h2>Mengapa Memilih Vrimae?</h2>
          <p>Teknologi yang kami bangun bukan template, melainkan solusi yang benar-benar milik Anda dan bisa dikembangkan sesuai skala bisnis Anda.</p>
        </motion.div>
        
        <motion.div 
          className="reasons-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div className="reason-card" variants={fadeInUp} whileHover={{ scale: 1.02 }}>
            <div className="reason-icon"><Zap size={28} /></div>
            <div className="reason-content">
              <h3>Bukan Sekadar Template</h3>
              <p>Sistem dirancang secara eksklusif dari nol, memastikan seluruh fitur dan tata letak selaras 100% dengan kebutuhan spesifik operasi bisnis Anda.</p>
            </div>
          </motion.div>
          <motion.div className="reason-card" variants={fadeInUp} whileHover={{ scale: 1.02 }}>
            <div className="reason-icon"><HeartHandshake size={28} /></div>
            <div className="reason-content">
              <h3>Pendampingan Intensif</h3>
              <p>Mulai dari diskusi ide awal, perancangan, hingga aplikasi siap digunakan, tim kami selalu ada untuk mendampingi Anda.</p>
            </div>
          </motion.div>
          <motion.div className="reason-card" variants={fadeInUp} whileHover={{ scale: 1.02 }}>
            <div className="reason-icon"><Shield size={28} /></div>
            <div className="reason-content">
              <h3>Infrastruktur Aman</h3>
              <p>Menggunakan arsitektur komputasi awan (cloud) modern dengan enkripsi tingkat lanjut untuk perlindungan data klien.</p>
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
        <div className="trial-glow" />
        <div className="trial-inner">
          <motion.div className="trial-text" variants={fadeInUp}>
            <span className="trial-badge">🎮 Portfolio Interaktif</span>
            <h2 className="trial-title">
              Lihat Kualitas <span className="text-gradient">Karya Kami</span><br />
              Secara Langsung
            </h2>
            <p className="trial-desc">
              Sebagai salah satu contoh kemampuan kami, silakan coba demo aplikasi <strong>Sistem POS & Analitik</strong> yang telah kami kembangkan.
            </p>
            <ul className="trial-benefits">
              <li><span className="check">✓</span> Antarmuka responsif dan modern</li>
              <li><span className="check">✓</span> Simulasi transaksi kasir sungguhan</li>
              <li><span className="check">✓</span> Dashboard analitik data interaktif</li>
              <li><span className="check">✓</span> Contoh fitur yang bisa Anda pesan kustom</li>
            </ul>
            <motion.a
              href="https://matcha-saas-demo.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-large trial-cta"
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
            >
              Jelajahi Demo POS Kami →
            </motion.a>
            <p className="trial-note">Ini hanyalah fondasi awal. Kami bisa menambahkan fitur apa pun yang Anda mau! 🚀</p>
          </motion.div>

          <motion.div className="trial-card" variants={fadeInUp} whileHover={{ y: -5 }}>
            <div className="trial-card-header">
              <span className="trial-free-label">CONTOH SISTEM</span>
              <div className="trial-days" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span className="trial-days-num" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>POS</span>
                <span className="trial-days-unit" style={{ fontSize: '1.2rem' }}>& Retail</span>
              </div>
              <p>Demo Siap Pakai</p>
            </div>
            <div className="trial-card-divider" />
            <div className="trial-card-features">
              {[
                '✦ Antarmuka Kasir & Keranjang',
                '✦ Laporan Keuangan Real-Time',
                '✦ Manajemen Inventori Barang',
                '✦ Analitik Pro & Grafik',
                '✦ Sistem Manajemen Karyawan',
                '✦ Export Data Penjualan',
              ].map((f) => (
                <div key={f} className="trial-card-feature">{f}</div>
              ))}
            </div>
            <motion.a
              href="https://matcha-saas-demo.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '1.5rem', textAlign: 'center' }}
              whileHover={{ scale: 1.02 }}
            >
              Buka Demo Aplikasi
            </motion.a>
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
          <h2>Investasi yang Fleksibel</h2>
          <p>Penawaran harga kami disesuaikan 100% dengan tingkat kompleksitas fitur yang Anda butuhkan.</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-block' }}>
            <Link to="/contact" className="btn btn-outline btn-large">Mulai Konsultasi Gratis →</Link>
          </motion.div>
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
          <h2>Tanya Jawab (FAQ)</h2>
          <p>Beberapa hal yang sering ditanyakan klien kepada kami.</p>
        </motion.div>
        <div className="faq-container">
          {[
            { q: "Berapa lama proses pembuatan aplikasi custom?", a: "Waktu pengerjaan sangat bervariasi bergantung pada jumlah dan kompleksitas fitur. Untuk website company profile standar biasanya 1-2 minggu, sementara sistem ERP/POS custom bisa memakan waktu 1-3 bulan. Kami akan memberikan estimasi waktu (timeline) yang pasti di dalam proposal." },
            { q: "Apakah saya akan mendapatkan hak milik atas aplikasinya?", a: "Ya, setelah seluruh pembayaran diselesaikan sesuai kontrak kerja sama, Anda memiliki hak penuh atas penggunaan aplikasi tersebut untuk kepentingan bisnis Anda." },
            { q: "Bagaimana jika terjadi error setelah aplikasi diserahkan?", a: "Kami memberikan garansi masa pemeliharaan (maintenance) gratis selama periode tertentu setelah peluncuran. Jika ada error (bug) dari sistem, tim support kami akan langsung memperbaikinya." }
          ].map((faq, idx) => (
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
