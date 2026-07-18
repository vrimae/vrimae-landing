import React from 'react';
import { motion } from 'framer-motion';
import './Hero3DShowcase.css';

export default function Hero3DShowcase() {
  return (
    <div className="showcase-3d-container">
      <div className="showcase-3d-wrapper">
        
        {/* Left Card: E-Commerce */}
        <div className="card-wrapper card-left">
          <motion.div 
            className="showcase-card"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mini-ui ecommerce">
              <div className="mini-header">
                <div className="mini-logo"></div>
                <div className="mini-nav">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div className="mini-hero"></div>
              <div className="mini-grid">
                <div className="mini-item"></div>
                <div className="mini-item"></div>
                <div className="mini-item"></div>
                <div className="mini-item"></div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Center Card: SaaS Dashboard */}
        <div className="card-wrapper card-center">
          <motion.div 
            className="showcase-card"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="mini-ui dashboard">
              <div className="mini-sidebar">
                <div className="mini-logo"></div>
                <div className="mini-menu">
                  <span></span><span></span><span></span><span></span>
                </div>
              </div>
              <div className="mini-main">
                <div className="mini-topbar">
                  <div className="mini-search"></div>
                  <div className="mini-avatar"></div>
                </div>
                <div className="mini-stats">
                  <div className="mini-stat"></div>
                  <div className="mini-stat"></div>
                  <div className="mini-stat"></div>
                </div>
                <div className="mini-chart-container">
                  <div className="mini-chart-bar" style={{ height: '40%' }}></div>
                  <div className="mini-chart-bar" style={{ height: '70%' }}></div>
                  <div className="mini-chart-bar" style={{ height: '50%' }}></div>
                  <div className="mini-chart-bar" style={{ height: '90%' }}></div>
                  <div className="mini-chart-bar" style={{ height: '60%' }}></div>
                  <div className="mini-chart-bar" style={{ height: '80%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Card: Portfolio/Blog */}
        <div className="card-wrapper card-right">
          <motion.div 
            className="showcase-card"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <div className="mini-ui portfolio">
              <div className="mini-header">
                <div className="mini-nav-center">
                  <span></span><span></span><span></span><span></span>
                </div>
              </div>
              <div className="mini-hero-text">
                <div className="mini-line"></div>
                <div className="mini-line short"></div>
              </div>
              <div className="mini-masonry">
                <div className="mini-masonry-col">
                  <div className="mini-masonry-item tall"></div>
                  <div className="mini-masonry-item short"></div>
                </div>
                <div className="mini-masonry-col">
                  <div className="mini-masonry-item short"></div>
                  <div className="mini-masonry-item tall"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
