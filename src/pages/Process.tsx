import { Search, PenTool, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

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

const TimelineStep = ({ icon, title, desc, isLast }: { icon: React.ReactNode, title: string, desc: string, isLast?: boolean }) => {
  return (
    <motion.div className="timeline-item" variants={fadeInUp}>
      <div className="timeline-marker">
        <div className="timeline-icon">{icon}</div>
        {!isLast && <div className="timeline-line"></div>}
      </div>
      <div className="timeline-content">
        <h3 className="timeline-title"><span className="step-num">{title.split(':')[0]}:</span> {title.split(':')[1]}</h3>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
};

export default function Process() {
  const { t } = useLanguage();
  const processData = t('process.items') as unknown as { title: string, desc: string }[];
  
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '100vh', maxWidth: '800px', margin: '0 auto', padding: 'var(--space-xl) 2rem var(--space-xl)' }}>
      <motion.div 
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>{t('process.title')}</h2>
        <p>{t('process.desc')}</p>
      </motion.div>
      
      <motion.div 
        className="timeline-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <TimelineStep 
          icon={<Search size={28} />}
          title={`${t('process.step')} 1:${processData[0].title}`}
          desc={processData[0].desc}
        />
        <TimelineStep 
          icon={<PenTool size={28} />}
          title={`${t('process.step')} 2:${processData[1].title}`}
          desc={processData[1].desc}
        />
        <TimelineStep 
          icon={<Code size={28} />}
          title={`${t('process.step')} 3:${processData[2].title}`}
          desc={processData[2].desc}
        />
        <TimelineStep 
          icon={<Rocket size={28} />}
          title={`${t('process.step')} 4:${processData[3].title}`}
          desc={processData[3].desc}
          isLast
        />
      </motion.div>
    </div>
  );
}
