import React, { useState, useEffect } from 'react';
import styles from './VideoCarousel.module.css';

interface Video {
  id: string;
  src: string;
  poster?: string;
}

export const VideoCarousel: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  // Mock video data - these would typically come from a CMS or API
  const videos: Video[] = [
    { 
      id: '1', 
      src: 'https://static.videezy.com/system/resources/previews/000/044/479/original/F0101_Moment.mp4',
      poster: '/images/video-poster-1.jpg'
    },
    { 
      id: '2', 
      src: 'https://static.videezy.com/system/resources/previews/000/044/603/original/Gym.mp4',
      poster: '/images/video-poster-2.jpg'
    },
    { 
      id: '3', 
      src: 'https://static.videezy.com/system/resources/previews/000/047/122/original/stockfootage0312.mp4',
      poster: '/images/video-poster-3.jpg'
    }
  ];
  
  // Auto rotate videos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 8000); // Change video every 8 seconds
    
    return () => clearInterval(interval);
  }, [videos.length]);
  
  // Handle manual navigation
  const navigateToVideo = (index: number) => {
    setCurrentVideoIndex(index);
  };
  
  return (
    <div className={styles.carousel}>
      <div className={styles.videoWrapper}>
        {videos.map((video, index) => (
          <div 
            key={video.id} 
            className={`${styles.videoItem} ${index === currentVideoIndex ? styles.active : ''}`}
          >
            <video 
              loop 
              muted 
              autoPlay 
              playsInline
              poster={video.poster}
              className={styles.video}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
        ))}
        
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.controls}>
        {videos.map((_, index) => (
          <button 
            key={index} 
            className={`${styles.dot} ${index === currentVideoIndex ? styles.activeDot : ''}`}
            onClick={() => navigateToVideo(index)}
            aria-label={`View video ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}; 