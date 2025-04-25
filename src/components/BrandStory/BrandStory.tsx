import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BrandStory.module.css';
import { useInView } from 'react-intersection-observer';

export const BrandStory: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className={styles.brandStory}>
      <div className={styles.storyContent}>
        <h2>THE DARK COLLECTIVE</h2>
        <p>
          Forged in the shadow of Soviet brutalist architecture, MBK represents 
          strength through unity and uncompromising design. Our footwear embraces 
          the raw power of concrete, steel, and the unyielding spirit of Eastern Europe.
        </p>
        <Link href="/about">
          <button className={styles.secondaryBtn}>Explore Legacy</button>
        </Link>
      </div>
      <div className={styles.storyImageContainer}>
        <Image
          src="https://via.placeholder.com/600x400/151515/333333"
          alt="Brutalist Architecture"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 992px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}; 