'use client';

import React, { useState, useEffect } from 'react';
import styles from './IoTHealthAds.module.css';

interface IoTDevice {
  id: string;
  name: string;
  type: 'fitness_tracker' | 'smart_scale' | 'heart_rate_monitor' | 'smart_watch';
  brand: string;
  image: string;
  description: string;
  discount: number;
  eligible: boolean;
}

export const IoTHealthAds: React.FC = () => {
  const [devices, setDevices] = useState<IoTDevice[]>([]);
  const [hasEligibleDevice, setHasEligibleDevice] = useState(false);

  useEffect(() => {
    // Check for connected IoT devices
    checkForIoTDevices();
    
    // Mock device data - in production, this would come from device APIs
    const mockDevices: IoTDevice[] = [
      {
        id: '1',
        name: 'Fitbit Charge 6',
        type: 'fitness_tracker',
        brand: 'Fitbit',
        image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=400',
        description: 'Track your workouts and share your progress',
        discount: 20,
        eligible: true,
      },
      {
        id: '2',
        name: 'Apple Watch Series 9',
        type: 'smart_watch',
        brand: 'Apple',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
        description: 'Sync your health data seamlessly',
        discount: 15,
        eligible: true,
      },
      {
        id: '3',
        name: 'Garmin Forerunner 955',
        type: 'fitness_tracker',
        brand: 'Garmin',
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400',
        description: 'Advanced metrics for serious athletes',
        discount: 25,
        eligible: false,
      },
    ];

    setDevices(mockDevices);
    setHasEligibleDevice(mockDevices.some(d => d.eligible));
  }, []);

  const checkForIoTDevices = async () => {
    // Check for Web Bluetooth API
    if (navigator.bluetooth) {
      try {
        // In production, this would scan for and connect to devices
        console.log('Bluetooth API available');
      } catch (error) {
        console.log('Bluetooth not available or permission denied');
      }
    }

    // Check for Web USB API
    if (navigator.usb) {
      try {
        console.log('Web USB API available');
      } catch (error) {
        console.log('Web USB not available');
      }
    }
  };

  const handleShareAd = (device: IoTDevice) => {
    if (navigator.share) {
      navigator.share({
        title: `Get ${device.discount}% off ${device.name}`,
        text: `Check out this exclusive offer for ${device.name} users on My Brothers Keeper!`,
        url: window.location.origin,
      }).catch((error) => {
        console.log('Error sharing:', error);
      });
    } else {
      // Fallback: copy to clipboard
      const text = `Get ${device.discount}% off ${device.name} - ${window.location.origin}`;
      navigator.clipboard.writeText(text);
      alert('Link copied to clipboard!');
    }
  };

  if (!hasEligibleDevice) {
    return (
      <div className={styles.container}>
        <div className={styles.noDeviceCard}>
          <div className={styles.icon}>⌚</div>
          <h3>Connect Your Health Device</h3>
          <p>Link your fitness tracker or smartwatch to unlock exclusive offers and personalized content</p>
          <button className={styles.connectButton} onClick={checkForIoTDevices}>
            Connect Device
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Exclusive Offers for Your Device</h2>
        <p>Special discounts for eligible IoT health device users</p>
      </div>
      <div className={styles.devicesGrid}>
        {devices
          .filter(device => device.eligible)
          .map((device) => (
            <div key={device.id} className={styles.deviceCard}>
              <div className={styles.discountBadge}>{device.discount}% OFF</div>
              <div className={styles.deviceImage}>
                <div className={styles.imagePlaceholder}>
                  {device.type === 'fitness_tracker' && '⌚'}
                  {device.type === 'smart_watch' && '⌚'}
                  {device.type === 'smart_scale' && '⚖️'}
                  {device.type === 'heart_rate_monitor' && '❤️'}
                </div>
              </div>
              <div className={styles.deviceInfo}>
                <h3>{device.name}</h3>
                <p className={styles.brand}>{device.brand}</p>
                <p className={styles.description}>{device.description}</p>
                <button
                  className={styles.shareAdButton}
                  onClick={() => handleShareAd(device)}
                >
                  Share Offer
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

