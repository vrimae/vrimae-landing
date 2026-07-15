import { Search, PenTool, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const TimelineStep = ({ icon, title, desc, stepNum, isLast }: { icon: React.ReactNode, title: string, desc: string, stepNum: number, isLast?: boolean }) => {
  return (
    <motion.div className="timeline-item" variants={fadeInUp}>
      <div className="timeline-marker">
        <div className="timeline-icon">{icon}</div>
        {!isLast && <div className="timeline-line"></div>}
      </div>
      <div className="timeline-content">
        <h3 className="timeline-title"><span className="step-num">Langkah {stepNum}:</span> {title}</h3>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
};

export default function Process() {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '100vh', maxWidth: '800px', margin: '0 auto', padding: 'var(--space-xl) 2rem var(--space-xl)' }}>
      <motion.div 
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>Alur Kerja Kami</h2>
        <p>Proses transparan dan terstruktur dari awal hingga akhir untuk memastikan hasil akhir sesuai dengan visi Anda.</p>
      </motion.div>
      
      <motion.div 
        className="timeline-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <TimelineStep 
          stepNum={1}
          icon={<Search size={28} />}
          title="Konsultasi"
          desc="Diskusi kebutuhan, fitur, dan target bisnis secara mendalam tanpa biaya. Kami memastikan pemahaman yang utuh mengenai masalah yang ingin Anda pecahkan."
        />
        <TimelineStep 
          stepNum={2}
          icon={<PenTool size={28} />}
          title="Perancangan (Desain)"
          desc="Pembuatan kerangka dasar (wireframe) dan desain visual antarmuka pengguna (UI). Anda dapat meninjau purwarupa interaktif ini untuk memastikan navigasinya sesuai."
        />
        <TimelineStep 
          stepNum={3}
          icon={<Code size={28} />}
          title="Pengembangan (Development)"
          desc="Penulisan kode oleh barisan programmer kami menggunakan teknologi modern-stack yang telah disepakati. Seluruh fitur fungsional mulai dihidupkan."
        />
        <TimelineStep 
          stepNum={4}
          icon={<Rocket size={28} />}
          title="Peluncuran & Optimasi"
          desc="Uji coba menyeluruh untuk mendeteksi celah error (Quality Assurance). Setelah bebas bug, website/aplikasi Anda resmi mengudara secara live."
          isLast
        />
      </motion.div>
    </div>
  );
}
