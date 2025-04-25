import React from 'react';
import styles from './pages.module.css';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { motion } from 'framer-motion';

const clothing = [
  {
    id: 1,
    name: 'Shadow Cloak',
    price: '$129.99',
    image: '/images/products/clothing1.jpg',
    category: 'Shadows'
  },
  {
    id: 2,
    name: 'Divine Attire',
    price: '$149.99',
    image: '/images/products/clothing2.jpg',
    category: 'Divinity'
  },
  {
    id: 3,
    name: 'Limbo Vest',
    price: '$99.99',
    image: '/images/products/clothing3.jpg',
    category: 'Purgatory'
  },
  {
    id: 4,
    name: 'Obsidian Garment',
    price: '$159.99',
    image: '/images/products/clothing4.jpg',
    category: 'Shadows'
  },
  {
    id: 5,
    name: 'Celestial Robe',
    price: '$179.99',
    image: '/images/products/clothing5.jpg',
    category: 'Divinity'
  },
  {
    id: 6,
    name: 'Twilight Ensemble',
    price: '$199.99',
    image: '/images/products/clothing6.jpg',
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

const ClothingPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <div className={styles.pageHero}>
        <div className={styles.pageHeroContent}>
          <h1>Ethereal <span>Apparel</span></h1>
          <p>Adorn yourself in garments that blend darkness with divine craftsmanship</p>
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
          {clothing.map(item => (
            <motion.div 
              key={item.id} 
              className={styles.productCard}
              variants={itemVariants}
            >
              <div className={styles.productImage}>
                <img src={item.image} alt={item.name} />
                <div className={styles.productActions}>
                  <button className={styles.actionBtn}>Quick View</button>
                  <button className={styles.actionBtn}>Add to Cart</button>
                </div>
              </div>
              <div className={styles.productInfo}>
                <span className={styles.productCategory}>{item.category}</span>
                <h3>{item.name}</h3>
                <p className={styles.productPrice}>{item.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ClothingPage; 