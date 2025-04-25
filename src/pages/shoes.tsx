import React from 'react';
import styles from './pages.module.css';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { motion } from 'framer-motion';

const shoes = [
  {
    id: 1,
    name: 'Abyssal Stride',
    price: '$189.99',
    image: '/images/products/shoe1.jpg',
    category: 'Shadows'
  },
  {
    id: 2,
    name: 'Seraph Walker',
    price: '$209.99',
    image: '/images/products/shoe2.jpg',
    category: 'Divinity'
  },
  {
    id: 3,
    name: 'Limbo Tracers',
    price: '$179.99',
    image: '/images/products/shoe3.jpg',
    category: 'Purgatory'
  },
  {
    id: 4,
    name: 'Fallen Grace',
    price: '$229.99',
    image: '/images/products/shoe4.jpg',
    category: 'Shadows'
  },
  {
    id: 5,
    name: 'Divine Step',
    price: '$199.99',
    image: '/images/products/shoe5.jpg',
    category: 'Divinity'
  },
  {
    id: 6,
    name: 'Ethereal Runner',
    price: '$249.99',
    image: '/images/products/shoe6.jpg',
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

const ShoesPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <div className={styles.pageHero}>
        <div className={styles.pageHeroContent}>
          <h1>Sacred <span>Footwear</span></h1>
          <p>Walk between worlds with our meticulously crafted footwear collection</p>
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
          {shoes.map(shoe => (
            <motion.div 
              key={shoe.id} 
              className={styles.productCard}
              variants={itemVariants}
            >
              <div className={styles.productImage}>
                <img src={shoe.image} alt={shoe.name} />
                <div className={styles.productActions}>
                  <button className={styles.actionBtn}>Quick View</button>
                  <button className={styles.actionBtn}>Add to Cart</button>
                </div>
              </div>
              <div className={styles.productInfo}>
                <span className={styles.productCategory}>{shoe.category}</span>
                <h3>{shoe.name}</h3>
                <p className={styles.productPrice}>{shoe.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ShoesPage; 