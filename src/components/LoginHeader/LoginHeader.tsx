import React from 'react';
import Link from 'next/link';
import styles from './LoginHeader.module.css';

export const LoginHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link href="/">MBK</Link>
        </div>
      </div>
    </header>
  );
}; 