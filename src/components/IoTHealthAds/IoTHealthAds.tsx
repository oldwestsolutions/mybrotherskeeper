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
    if ('bluetooth' in navigator) {
      try {
        // In production, this would scan for and connect to devices
        console.log('Bluetooth API available');
      } catch (error) {
        console.log('Bluetooth not available or permission denied');
      }
    }

    // Check for Web USB API
    if ('usb' in navigator) {
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
      <div className="py-5" style={{ background: 'linear-gradient(135deg, #050505 0%, #000000 50%, #0F3520 100%)' }}>
        <div className="container">
          <div className="card mx-auto" style={{ maxWidth: '500px', background: 'rgba(26, 26, 26, 0.8)', border: '1px solid rgba(15, 53, 32, 0.3)' }}>
            <div className="card-body text-center p-5">
              <i className="bi bi-smartwatch text-success" style={{ fontSize: '4rem' }}></i>
              <h3 className="text-white fw-bold mt-3 mb-3">Connect Your Health Device</h3>
              <p className="text-white-50 mb-4">Link your fitness tracker or smartwatch to unlock exclusive offers and personalized content</p>
              <button className="btn btn-success px-4 py-2 fw-bold" onClick={checkForIoTDevices}>
                Connect Device
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-5" style={{ background: 'linear-gradient(135deg, #050505 0%, #000000 50%, #0F3520 100%)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-white fw-bold mb-3">Exclusive Offers for Your Device</h2>
          <p className="text-white-50">Special discounts for eligible IoT health device users</p>
        </div>
        <div className="row g-4">
          {devices
            .filter(device => device.eligible)
            .map((device) => (
              <div key={device.id} className="col-md-4">
                <div className="card h-100 position-relative" style={{ background: 'rgba(26, 26, 26, 0.8)', border: '1px solid rgba(15, 53, 32, 0.3)' }}>
                  <span className="badge bg-success position-absolute top-0 end-0 m-3">{device.discount}% OFF</span>
                  <div className="card-body text-center p-4">
                    <div className="mb-3" style={{ height: '200px', background: 'rgba(15, 53, 32, 0.2)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className={`bi ${device.type === 'fitness_tracker' || device.type === 'smart_watch' ? 'bi-smartwatch' : device.type === 'smart_scale' ? 'bi-speedometer' : 'bi-heart-pulse'} text-success`} style={{ fontSize: '5rem', opacity: 0.6 }}></i>
                    </div>
                    <h3 className="text-white fw-bold mb-2">{device.name}</h3>
                    <p className="text-white-50 text-uppercase small mb-2">{device.brand}</p>
                    <p className="text-white-50 mb-4">{device.description}</p>
                    <button
                      className="btn btn-success w-100 fw-bold"
                      onClick={() => handleShareAd(device)}
                    >
                      Share Offer
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

