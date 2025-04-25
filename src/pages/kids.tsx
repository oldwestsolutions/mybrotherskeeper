import React from 'react';
import styles from './pages.module.css';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { motion } from 'framer-motion';

const kidsProducts = [
  {
    id: 1,
    name: 'Shadow Mini Hoodie',
    price: '$89.99',
    image: '/images/products/kids1.jpg',
    category: 'Shadows'
  },
  {
    id: 2,
    name: 'Divine Play Set',
    price: '$79.99',
    image: '/images/products/kids2.jpg',
    category: 'Divinity'
  },
  {
    id: 3,
    name: 'Twilight Training Shoes',
    price: '$99.99',
    image: '/images/products/kids3.jpg',
    category: 'Purgatory'
  },
  {
    id: 4,
    name: 'Little Abyss Joggers',
    price: '$69.99',
    image: '/images/products/kids4.jpg',
    category: 'Shadows'
  },
  {
    id: 5,
    name: 'Celestial Youth Jacket',
    price: '$109.99',
    image: '/images/products/kids5.jpg',
    category: 'Divinity'
  },
  {
    id: 6,
    name: 'Shadow Crawler Sneakers',
    price: '$79.99',
    image: '/images/products/kids6.jpg',
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

const KidsPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <div className={styles.pageHero}>
        <div className={styles.pageHeroContent}>
          <h1>Kids <span>Collection</span></h1>
          <p>Miniature darkness for the youngest souls with comfort and quality</p>
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
          {kidsProducts.map(product => (
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

export default KidsPage; 