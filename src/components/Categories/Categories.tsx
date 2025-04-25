import React from 'react';
import styles from './Categories.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const categories = [
  {
    id: 1,
    title: 'Shadows',
    image: '/images/categories/performance.jpg',
    link: '/categories/shadows',
    tagline: 'Embrace the darkness'
  },
  {
    id: 2,
    title: 'Divinity',
    image: '/images/categories/lifestyle.jpg',
    link: '/categories/divinity',
    tagline: 'Ethereal elegance'
  },
  {
    id: 3,
    title: 'Purgatory',
    image: '/images/categories/innovation.jpg',
    link: '/categories/purgatory',
    tagline: 'Between darkness and light'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const Categories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className={styles.featuredCategories}>
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Sacred Collections
      </motion.h2>
      
      <motion.div 
        className={styles.categoryContainer}
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {categories.map((category) => (
          <motion.div 
            key={category.id} 
            className={styles.categoryCard}
            variants={cardVariants}
          >
            <img src={category.image} alt={category.title} />
            <div className={styles.categoryOverlay}>
              <h3>{category.title}</h3>
              <p>{category.tagline}</p>
              <a href={category.link} className={styles.categoryLink}>
                Explore
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Categories; 