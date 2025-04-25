import React from 'react';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
      </div>
      <div className={styles.heroContent}>
        <h1>Darkness With <span>Divine Elegance</span></h1>
        <p>
          Embrace the shadows with our refined collection that balances dark aesthetics
          with heavenly craftsmanship and uncompromising quality
        </p>
        <button className={styles.primaryBtn}>Explore Collection</button>
      </div>
    </section>
  );
}; 