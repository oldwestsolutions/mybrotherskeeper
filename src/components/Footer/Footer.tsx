import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h4>Products</h4>
          <ul>
            <li>
              <Link href="/products/shoes">Shoes</Link>
            </li>
            <li>
              <Link href="/products/clothing">Clothing</Link>
            </li>
            <li>
              <Link href="/products/accessories">Accessories</Link>
            </li>
            <li>
              <Link href="/products/new-releases">New Releases</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Help</h4>
          <ul>
            <li>
              <Link href="/help/order-status">Order Status</Link>
            </li>
            <li>
              <Link href="/help/shipping">Shipping & Delivery</Link>
            </li>
            <li>
              <Link href="/help/returns">Returns</Link>
            </li>
            <li>
              <Link href="/help/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>About MBK</h4>
          <ul>
            <li>
              <Link href="/about/news">News</Link>
            </li>
            <li>
              <Link href="/about/careers">Careers</Link>
            </li>
            <li>
              <Link href="/about/investors">Investors</Link>
            </li>
            <li>
              <Link href="/about/sustainability">Sustainability</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Join Us</h4>
          <div className={styles.socialLinks}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
          <div className={styles.newsletter}>
            <p>Sign up for updates</p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Email address" />
              <button type="submit">→</button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.terms}>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} MBK, Inc. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}; 