import React from 'react';
import styles from './pages.module.css';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { motion } from 'framer-motion';

const womenProducts = [
  {
    id: 1,
    name: 'Shadow Wrap Dress',
    price: '$159.99',
    image: '/images/products/women1.jpg',
    category: 'Shadows'
  },
  {
    id: 2,
    name: 'Divine Elegance Top',
    price: '$119.99',
    image: '/images/products/women2.jpg',
    category: 'Divinity'
  },
  {
    id: 3,
    name: 'Limbo Leggings',
    price: '$99.99',
    image: '/images/products/women3.jpg',
    category: 'Purgatory'
  },
  {
    id: 4,
    name: 'Abyssal Runner',
    price: '$179.99',
    image: '/images/products/women4.jpg',
    category: 'Shadows'
  },
  {
    id: 5,
    name: 'Celestial Drape Jacket',
    price: '$229.99',
    image: '/images/products/women5.jpg',
    category: 'Divinity'
  },
  {
    id: 6,
    name: 'Twilight Flow Skirt',
    price: '$139.99',
    image: '/images/products/women6.jpg',
    category: 'Purgatory'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const WomenPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <div className={styles.pageHero}>
        <div className={styles.pageHeroContent}>
          <h1>Women's <span>Collection</span></h1>
          <p>Ethereal darkness embodied in elegant designs for the modern woman</p>
        </div>
      </div>
      
      <section className={styles.productsSection}>
        <div className={styles.filterBar}>
          <div className={styles.filterOptions}>
            <button className={`${styles.filterBtn} ${styles.active}`}>All</button>
            <button className={styles.filterBtn}>Shadows</button>
            <button className={styles.filterBtn}>Divinity</button>
            <button className={styles.filterBtn}>Purgatory</button>
          </div>
          <div className={styles.sortOption}>
            <select name="sort" id="sort">
              <option value="latest">Latest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
        
        <motion.div 
          className={styles.productsGrid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {womenProducts.map(product => (
            <motion.div 
              key={product.id} 
              className={styles.productCard}
              variants={itemVariants}
            >
              <div className={styles.productImage}>
                <img src={product.image} alt={product.name} />
                <div className={styles.productActions}>
                  <button className={styles.actionBtn}>Quick View</button>
                  <button className={styles.actionBtn}>Add to Cart</button>
                </div>
              </div>
              <div className={styles.productInfo}>
                <span className={styles.productCategory}>{product.category}</span>
                <h3>{product.name}</h3>
                <p className={styles.productPrice}>{product.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WomenPage; 