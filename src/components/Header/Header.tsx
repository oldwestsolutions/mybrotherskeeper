import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { SearchModal } from '../SearchModal/SearchModal';

export const Header: React.FC = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  // Mock cart count - in a real app this would come from context or state management
  const cartItemCount = 3;

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <Link href="/">My Brothers Keeper</Link>
          </div>
          <div className={styles.headerActions}>
            <div className={styles.search} onClick={openSearchModal}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="currentColor"/>
              </svg>
            </div>
            <Link href="/cart" className={styles.cart}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="currentColor"/>
              </svg>
              {cartItemCount > 0 && (
                <span className={styles.cartCount}>{cartItemCount}</span>
              )}
            </Link>
            <Link href="/login" className={styles.loginBtn}>
              Login
            </Link>
          </div>
        </div>
      </header>
      <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
    </>
  );
}; 