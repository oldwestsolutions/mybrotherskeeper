'use client';

import React, { useEffect, useState } from 'react';
import styles from './SnapchatIntegration.module.css';

declare global {
  interface Window {
    snapKitInit: () => void;
    snap: any;
  }
}

export const SnapchatIntegration: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    // Load Snapchat Kit SDK
    const script = document.createElement('script');
    script.src = 'https://sdk.snapkit.com/js/v1/create.js';
    script.async = true;
    script.onload = () => {
      if (window.snap) {
        window.snap.init({
          clientId: process.env.NEXT_PUBLIC_SNAPCHAT_CLIENT_ID || 'YOUR_SNAPCHAT_CLIENT_ID',
          redirectURI: typeof window !== 'undefined' ? window.location.origin : '',
          scopeList: ['user.display_name', 'user.bitmoji.avatar'],
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSnapchatLogin = async () => {
    try {
      if (window.snap) {
        await window.snap.login();
        setIsConnected(true);
        // Fetch user info
        const response = await window.snap.getUserInfo();
        setUserInfo(response);
      }
    } catch (error) {
      console.error('Snapchat login error:', error);
    }
  };

  const handleShareWorkout = async () => {
    try {
      if (window.snap && isConnected) {
        // Share workout to Snapchat
        await window.snap.share({
          content: {
            type: 'url',
            url: window.location.origin,
            title: 'Check out my workout on My Brothers Keeper!',
            description: 'Join me in this fitness journey',
          },
        });
      }
    } catch (error) {
      console.error('Share error:', error);
    }
  };

  return (
    <div className={styles.snapchatContainer}>
      <div className={styles.snapchatCard}>
        <div className={styles.snapchatIcon}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.15c-.012.75-.023 1.486-.012 2.25.006.5.011 1.008.011 1.516 0 .315-.002.63.003.945.002.15.005.3.005.45 0 2.966-2.226 5.384-5.04 5.384-2.816 0-5.04-2.418-5.04-5.384 0-.15.003-.3.005-.45.005-.315.003-.63.003-.945 0-.508.005-1.016.011-1.516.011-.764 0-1.5-.012-2.25l-.003-.15c-.104-1.628-.23-3.654.299-4.847C7.859 1.069 11.216.793 12.206.793zm5.43 15.652c-.853.853-1.988 1.324-3.23 1.324-1.24 0-2.375-.47-3.228-1.324-.853-.854-1.323-1.99-1.323-3.23 0-.413.003-.824.01-1.23.003-.203.006-.406.006-.61 0-.51-.003-1.02-.01-1.52-.008-.52-.015-1.03-.01-1.54.002-.18.006-.36.006-.54 0-1.24.47-2.376 1.323-3.23.853-.853 1.988-1.324 3.228-1.324 1.242 0 2.377.47 3.23 1.324.853.854 1.324 1.99 1.324 3.23 0 .18-.004.36-.006.54.005.51-.002 1.02.01 1.54.007.5.01 1.01.01 1.52 0 .204-.003.407-.006.61-.007.406-.01.817-.01 1.23 0 1.24-.47 2.376-1.323 3.23z"/>
          </svg>
        </div>
        <h3>Connect with Snapchat</h3>
        <p>Share your fitness journey and connect with friends</p>
        {!isConnected ? (
          <button 
            className={styles.snapchatButton}
            onClick={handleSnapchatLogin}
          >
            <span className={styles.snapchatButtonIcon}>👻</span>
            Connect Snapchat
          </button>
        ) : (
          <div className={styles.connectedState}>
            <div className={styles.userInfo}>
              {userInfo?.bitmoji?.avatar && (
                <img 
                  src={userInfo.bitmoji.avatar} 
                  alt="Bitmoji" 
                  className={styles.bitmoji}
                />
              )}
              <p>Connected as {userInfo?.displayName || 'User'}</p>
            </div>
            <button 
              className={styles.shareButton}
              onClick={handleShareWorkout}
            >
              Share Workout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

