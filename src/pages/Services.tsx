import { ChevronDown, Code, ShoppingCart, Layout } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

// -- DATA VISUALIZATION COMPONENTS --

function WorkflowGraph() {
  return (
    <div className="viz-container">
      <div className="workflow-viz">
        <div className="wf-node">Data</div>
        <div className="wf-line">
          <div className="wf-pulse"></div>
        </div>
        <div className="wf-node wf-core">API</div>
        <div className="wf-line">
          <div className="wf-pulse"></div>
        </div>
        <div className="wf-node">UI</div>
      </div>
    </div>
  );
}

function SpeedGauge() {
  return (
    <div className="viz-container">
      <div className="gauge-viz">
        <svg viewBox="0 0 100 50" className="gauge-svg">
          <path className="gauge-bg" d="M 10 50 A 40 40 0 0 1 90 50" />
          <path className="gauge-fill" d="M 10 50 A 40 40 0 0 1 90 50" />
        </svg>
        <div className="gauge-score">99<span>ms</span></div>
        <div className="gauge-label">Load Time</div>
      </div>
    </div>
  );
}

function BarChart() {
  return (
    <div className="viz-container">
      <div className="bar-viz">
        <div className="bar-col">
          <div className="bar-fill h-40"></div>
          <div className="bar-label">Q1</div>
        </div>
        <div className="bar-col">
          <div className="bar-fill h-70"></div>
          <div className="bar-label">Q2</div>
        </div>
        <div className="bar-col">
          <div className="bar-fill h-100 highlight"></div>
          <div className="bar-label">Q3</div>
        </div>
      </div>
    </div>
  );
}

// Animation variants — lightweight
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

export default function Services() {
  const { t } = useLanguage();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const servicesData = t('services.items') as unknown as { title: string, front: string, tech: string, eff: string }[];

  const services = [
    {
      icon: <Code size={28} />,
      title: servicesData[0].title,
      frontDesc: servicesData[0].front,
      techText: servicesData[0].tech,
      efficiencyText: servicesData[0].eff,
      Viz: WorkflowGraph
    },
    {
      icon: <ShoppingCart size={28} />,
      title: servicesData[1].title,
      frontDesc: servicesData[1].front,
      techText: servicesData[1].tech,
      efficiencyText: servicesData[1].eff,
      Viz: SpeedGauge
    },
    {
      icon: <Layout size={28} />,
      title: servicesData[2].title,
      frontDesc: servicesData[2].front,
      techText: servicesData[2].tech,
      efficiencyText: servicesData[2].eff,
      Viz: BarChart
    }
  ];

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh', maxWidth: '1000px', margin: '0 auto', padding: 'var(--space-xl) 2rem var(--space-xl)' }}>
      
      {/* Services Header */}
      <motion.section 
        className="features" 
        style={{ paddingBottom: 'var(--space-md)' }}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="section-header">
          <h1>{t('services.title')}</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: 'var(--text-lead)' }}>
            {t('services.desc')}
          </p>
        </div>
      </motion.section>

      {/* Progressive Disclosure Services (Accordion) */}
      <section className="features" style={{ paddingTop: '0' }}>
        <motion.div 
          className="accordion-list"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {services.map((svc, idx) => (
            <motion.div 
              key={idx} 
              className={`accordion-item ${activeAccordion === idx ? 'active' : ''}`}
              variants={fadeInUp}
            >
              {/* Header (Front-facing) */}
              <div 
                className="accordion-header" 
                onClick={() => toggleAccordion(idx)}
              >
                <div className="acc-title-group">
                  <div className="acc-icon">{svc.icon}</div>
                  <h3>{svc.title}</h3>
                </div>
                <div className={`acc-arrow ${activeAccordion === idx ? 'rotated' : ''}`}>
                  <ChevronDown size={24} />
                </div>
              </div>

              <div className="accordion-front-facing" onClick={() => toggleAccordion(idx)} style={{cursor: 'pointer'}}>
                <p>{svc.frontDesc}</p>
              </div>

              {/* Body (Hidden Details) */}
              <AnimatePresence>
                {activeAccordion === idx && (
                  <motion.div 
                    className="accordion-body"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ overflow: 'hidden' }}
                  >
                    {/* Left: Text Detail */}
                    <div className="acc-text-detail">
                      <div className="detail-block">
                        <h4>{t('services.tech_title')}</h4>
                        <p>{svc.techText}</p>
                      </div>
                      <div className="detail-block">
                        <h4>{t('services.eff_title')}</h4>
                        <p>{svc.efficiencyText}</p>
                      </div>
                    </div>
                    {/* Right: Data Viz */}
                    <div className="acc-viz-detail">
                      <svc.Viz />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}
