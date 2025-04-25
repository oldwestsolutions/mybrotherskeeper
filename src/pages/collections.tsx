import React from 'react';
import styles from './pages.module.css';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { motion } from 'framer-motion';

const collections = [
  {
    id: 1,
    name: 'Abyssal Descent',
    description: 'Embrace the void with our darkest collection',
    price: 'Starting at $89.99',
    image: '/images/products/collection1.jpg',
    category: 'Shadows'
  },
  {
    id: 2,
    name: 'Divine Ascension',
    description: 'Elevate your style with ethereal elegance',
    price: 'Starting at $99.99',
    image: '/images/products/collection2.jpg',
    category: 'Divinity'
  },
  {
    id: 3,
    name: 'Purgatory Chronicles',
    description: 'Balance between worlds with this transitional collection',
    price: 'Starting at $109.99',
    image: '/images/products/collection3.jpg',
    category: 'Purgatory'
  },
  {
    id: 4,
    name: 'Night Wanderer',
    description: 'For those who navigate the darkness with purpose',
    price: 'Starting at $129.99',
    image: '/images/products/collection4.jpg',
    category: 'Shadows'
  },
  {
    id: 5,
    name: 'Celestial Light',
    description: 'Illuminated fashion crafted for divine expression',
    price: 'Starting at $149.99',
    image: '/images/products/collection5.jpg',
    category: 'Divinity'
  },
  {
    id: 6,
    name: 'Liminal Space',
    description: 'Threshold aesthetics for those between realms',
    price: 'Starting at $119.99',
    image: '/images/products/collection6.jpg',
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

const CollectionsPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <div className={styles.pageHero}>
        <div className={styles.pageHeroContent}>
          <h1>Curated <span>Collections</span></h1>
          <p>Explore our specially designed thematic series that embody our dark aesthetic</p>
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
          {collections.map(collection => (
            <motion.div 
              key={collection.id} 
              className={`${styles.productCard} ${styles.collectionCard}`}
              variants={itemVariants}
            >
              <div className={styles.productImage}>
                <img src={collection.image} alt={collection.name} />
                <div className={styles.productActions}>
                  <button className={styles.actionBtn}>View Collection</button>
                </div>
              </div>
              <div className={styles.productInfo}>
                <span className={styles.productCategory}>{collection.category}</span>
                <h3>{collection.name}</h3>
                <p className={styles.collectionDescription}>{collection.description}</p>
                <p className={styles.productPrice}>{collection.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CollectionsPage; 