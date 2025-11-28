import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Products.module.css';
import { useInView } from 'react-intersection-observer';

type ProductData = {
  id: string;
  name: string;
  type: string;
  price: string;
  imageUrl: string;
  link: string;
};

const products: ProductData[] = [
  {
    id: 'concrete-runner',
    name: 'Concrete Runner',
    type: 'Men\'s Fitness Shoe',
    price: '$135',
    imageUrl: 'https://via.placeholder.com/300x300/151515/333333',
    link: '/products/concrete-runner',
  },
  {
    id: 'stalinist-force',
    name: 'Stalinist Force',
    type: 'Urban Combat Shoe',
    price: '$145',
    imageUrl: 'https://via.placeholder.com/300x300/0A0A0A/222222',
    link: '/products/stalinist-force',
  },
  {
    id: 'dark-bloc',
    name: 'Dark Bloc',
    type: 'Soviet-inspired Trainer',
    price: '$160',
    imageUrl: 'https://via.placeholder.com/300x300/121212/2A2A2A',
    link: '/products/dark-bloc',
  },
];

export const Products: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className={styles.featuredProducts}>
      <h2>Featured Collection</h2>
      <div className={styles.productSlider}>
        {products.map((product) => (
          <Link href={product.link} key={product.id}>
            <div className={styles.productCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 250px"
                />
              </div>
              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <p>{product.type}</p>
                <p className={styles.price}>{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}; 