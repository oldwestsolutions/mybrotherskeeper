import React, { useEffect, useRef } from 'react';
import styles from './SearchModal.module.css';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const recentSearches = ['running shoes', 'black hoodie', 'training gear'];
  const suggestedCategories = ['Workout', 'Running', 'Training', 'Recovery'];

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} ref={modalRef}>
        <div className={styles.searchHeader}>
          <div className={styles.searchInputWrapper}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="currentColor"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search products..." 
              ref={searchInputRef}
              className={styles.searchInput}
            />
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.1 0.9L16.2 0L9 7.2L1.8 0L0.9 0.9L8.1 8.1L0.9 15.3L1.8 16.2L9 9L16.2 16.2L17.1 15.3L9.9 8.1L17.1 0.9Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
        
        <div className={styles.searchContent}>
          <div className={styles.recentSearches}>
            <h3>Recent Searches</h3>
            <ul>
              {recentSearches.map((search, index) => (
                <li key={index} className={styles.recentSearchItem}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4ZM11.2 8.8H8.8V11.2C8.8 11.64 8.44 12 8 12C7.56 12 7.2 11.64 7.2 11.2V8.8H4.8C4.36 8.8 4 8.44 4 8C4 7.56 4.36 7.2 4.8 7.2H7.2V4.8C7.2 4.36 7.56 4 8 4C8.44 4 8.8 4.36 8.8 4.8V7.2H11.2C11.64 7.2 12 7.56 12 8C12 8.44 11.64 8.8 11.2 8.8Z" fill="#AAAAAA"/>
                  </svg>
                  {search}
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.suggestedCategories}>
            <h3>Suggested Categories</h3>
            <div className={styles.categoryGrid}>
              {suggestedCategories.map((category, index) => (
                <div key={index} className={styles.categoryItem}>
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 