'use client';

import React from 'react';
import { Fitness3D } from '../Fitness3D/Fitness3D';
import { SnapchatIntegration } from '../SnapchatIntegration/SnapchatIntegration';
import styles from './ImmersiveHero.module.css';

export const ImmersiveHero: React.FC = () => {
  return (
    <section className={styles.immersiveHero}>
      <div className={styles.hero3D}>
        <Fitness3D />
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.mainContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine1}>Transform Your</span>
              <span className={styles.titleLine2}>Fitness Journey</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Experience the future of fitness with immersive 3D workouts, 
              social sharing, and intelligent health device integration
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryCTA}>
                Start Your Journey
              </button>
              <button className={styles.secondaryCTA}>
                Explore Features
              </button>
            </div>
          </div>
          
          <div className={styles.sideContent}>
            <SnapchatIntegration />
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine}></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

