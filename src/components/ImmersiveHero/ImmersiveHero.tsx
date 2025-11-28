'use client';

import React from 'react';
import { Fitness3D } from '../Fitness3D/Fitness3D';
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
            
            <div className={styles.snapchatSection}>
              <div className={styles.snapchatContent}>
                <h3 className={styles.snapchatTitle}>Connect with Snapchat</h3>
                <p className={styles.snapchatDescription}>
                  Share your fitness achievements, workout progress, and milestones with your Snapchat community. 
                  Our seamless integration lets you document your journey, celebrate victories, and inspire others 
                  with real-time workout shares and achievement highlights.
                </p>
                <div className={styles.snapchatFeatures}>
                  <div className={styles.snapchatFeature}>
                    <i className="bi bi-lightning-charge-fill"></i>
                    <span>Instant Sharing</span>
                  </div>
                  <div className={styles.snapchatFeature}>
                    <i className="bi bi-camera-reels-fill"></i>
                    <span>Rich Media</span>
                  </div>
                  <div className={styles.snapchatFeature}>
                    <i className="bi bi-shield-lock-fill"></i>
                    <span>Privacy Controls</span>
                  </div>
                </div>
                <button className={styles.snapchatButton}>
                  Connect Snapchat
                </button>
              </div>
            </div>
          </div>
          
          <div className={styles.sideContent}>
            <div className={styles.fitnessImage}>
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop" 
                alt="Fitness Training"
                className={styles.contextualImage}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.imageBadge}>PREMIUM TRAINING</div>
              </div>
            </div>
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

