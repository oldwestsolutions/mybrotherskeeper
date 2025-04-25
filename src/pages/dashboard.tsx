import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DashboardHeader } from '../components/DashboardHeader/DashboardHeader';
import { useAuth } from '../contexts/AuthContext';
import styles from './dashboard.module.css';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();
  
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);
  
  // Mock data for the dashboard
  const activityData = {
    dailySteps: 8742,
    dailyDistance: 5.3,
    caloriesBurned: 423,
    activeMinutes: 47,
    heartRate: {
      current: 72,
      resting: 62,
      min: 58,
      max: 142
    },
    sleep: {
      hours: 7.2,
      deep: 2.1,
      light: 4.2,
      rem: 0.9
    },
    recentWorkouts: [
      { id: 1, type: 'Running', duration: '32 min', distance: '4.1 km', date: 'Today' },
      { id: 2, type: 'Weight Training', duration: '45 min', calories: '280', date: 'Yesterday' },
      { id: 3, type: 'HIIT', duration: '25 min', calories: '320', date: '3 days ago' }
    ],
    heartRateZones: [
      { name: 'Fat Burn', minutes: 28, percent: 59 },
      { name: 'Cardio', minutes: 14, percent: 30 },
      { name: 'Peak', minutes: 5, percent: 11 }
    ]
  };

  // If not authenticated, don't render dashboard contents
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className={styles.dashboardContainer}>
      <DashboardHeader />
      
      <div className={styles.dashboardMain}>
        <div className={styles.sidebar}>
          <div className={styles.userProfile}>
            <div className={styles.userAvatar}>
              <span>{user?.avatarInitials || 'JS'}</span>
            </div>
            <div className={styles.userInfo}>
              <h3>{user?.name || 'John Smith'}</h3>
              <p>{user?.membershipType || 'Premium Member'}</p>
            </div>
          </div>
          
          <nav className={styles.sidebarNav}>
            <ul>
              <li className={activeTab === 'overview' ? styles.active : ''}>
                <button onClick={() => setActiveTab('overview')}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33333 2.5H2.5V8.33333H8.33333V2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 2.5H11.6667V8.33333H17.5V2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 11.6667H11.6667V17.5H17.5V11.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.33333 11.6667H2.5V17.5H8.33333V11.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Overview
                </button>
              </li>
              <li className={activeTab === 'activity' ? styles.active : ''}>
                <button onClick={() => setActiveTab('activity')}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 5V10L13.3333 11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Activity
                </button>
              </li>
              <li className={activeTab === 'workouts' ? styles.active : ''}>
                <button onClick={() => setActiveTab('workouts')}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 10L5.83333 1.66667L9.16667 10L10.8333 3.33333L12.5 10L15.8333 5L17.5 10L18.3333 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.66669 10H18.3334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.5 13.3333H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 16.6667H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Workouts
                </button>
              </li>
              <li className={activeTab === 'progress' ? styles.active : ''}>
                <button onClick={() => setActiveTab('progress')}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3334 16.6667V6.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 16.6667V3.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.66669 16.6667V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Progress
                </button>
              </li>
              <li className={activeTab === 'nutrition' ? styles.active : ''}>
                <button onClick={() => setActiveTab('nutrition')}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.00002 12.5C6.38073 12.5 7.50002 11.3807 7.50002 10C7.50002 8.61929 6.38073 7.5 5.00002 7.5C3.61931 7.5 2.50002 8.61929 2.50002 10C2.50002 11.3807 3.61931 12.5 5.00002 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 7.5C16.3807 7.5 17.5 6.38071 17.5 5C17.5 3.61929 16.3807 2.5 15 2.5C13.6193 2.5 12.5 3.61929 12.5 5C12.5 6.38071 13.6193 7.5 15 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 17.5C16.3807 17.5 17.5 16.3807 17.5 15C17.5 13.6193 16.3807 12.5 15 12.5C13.6193 12.5 12.5 13.6193 12.5 15C12.5 16.3807 13.6193 17.5 15 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.33334 8.83334L12.6667 6.16667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.33334 11.1667L12.6667 13.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Nutrition
                </button>
              </li>
            </ul>
          </nav>
          
          <div className={styles.storeCard}>
            <div className={styles.storeCardContent}>
              <h3>Shop Gear</h3>
              <p>Explore our latest fitness products</p>
              <a href="/cart" className={styles.storeButton}>Visit Store</a>
            </div>
          </div>
        </div>
        
        <div className={styles.dashboardContent}>
          <div className={styles.dashboardHeader}>
            <h1>Dashboard</h1>
            <div className={styles.dateSelector}>
              <button className={styles.activeDate}>Today</button>
              <button>Week</button>
              <button>Month</button>
              <button>Year</button>
            </div>
          </div>
          
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon} style={{ backgroundColor: 'rgba(15, 53, 32, 0.2)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C13.9331 5 15.6824 5.77618 16.9497 7.04348" stroke="#0F3520" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 8V12H15" stroke="#0F3520" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.statInfo}>
                <h3>{activityData.activeMinutes} min</h3>
                <p>Active Minutes</p>
              </div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon} style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.9997 19C17.209 19 18.9997 17.2091 18.9997 15C18.9997 12.7909 17.209 11 14.9997 11C12.7905 11 10.9997 12.7909 10.9997 15C10.9997 17.2091 12.7905 19 14.9997 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 7V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 13C8.65685 13 10 11.6569 10 10C10 8.34315 8.65685 7 7 7C5.34315 7 4 8.34315 4 10C4 11.6569 5.34315 13 7 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7V4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 13V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 19V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.statInfo}>
                <h3>{activityData.dailySteps.toLocaleString()}</h3>
                <p>Steps</p>
              </div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon} style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.25 3.56C16.83 3.14 16.33 2.81 15.78 2.58C15.23 2.35 14.63 2.23 14.03 2.23C13.43 2.23 12.83 2.35 12.28 2.58C11.73 2.81 11.23 3.14 10.82 3.56L10 4.38L9.18 3.56C8.33 2.71 7.17 2.23 6 2.23C4.83 2.23 3.67 2.71 2.82 3.56C1.97 4.41 1.5 5.58 1.5 6.76C1.5 7.94 1.97 9.11 2.82 9.96L10 17.14L17.18 9.96C17.6 9.54 17.93 9.04 18.16 8.49C18.4 7.94 18.52 7.34 18.52 6.74C18.52 6.14 18.4 5.54 18.16 4.99C17.93 4.44 17.6 3.98 17.25 3.56Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.statInfo}>
                <h3>{activityData.heartRate.current} <span>bpm</span></h3>
                <p>Heart Rate</p>
              </div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon} style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 20V4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 20V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.statInfo}>
                <h3>{activityData.caloriesBurned}</h3>
                <p>Calories</p>
              </div>
            </div>
          </div>
          
          <div className={styles.chartsRow}>
            <div className={styles.fullWidthCard}>
              <div className={styles.cardHeader}>
                <h3>Weekly Activity</h3>
                <div className={styles.cardControls}>
                  <button className={styles.activeControl}>Steps</button>
                  <button>Distance</button>
                  <button>Heart Rate</button>
                </div>
              </div>
              <div className={styles.chartPlaceholder}>
                <div className={styles.chartBars}>
                  <div className={styles.chartBar} style={{ height: '60%' }}><span>M</span></div>
                  <div className={styles.chartBar} style={{ height: '45%' }}><span>T</span></div>
                  <div className={styles.chartBar} style={{ height: '80%' }}><span>W</span></div>
                  <div className={styles.chartBar} style={{ height: '70%' }}><span>T</span></div>
                  <div className={styles.chartBar} style={{ height: '50%' }}><span>F</span></div>
                  <div className={styles.chartBar} style={{ height: '65%' }}><span>S</span></div>
                  <div className={styles.chartBar} style={{ height: '40%' }}><span>S</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 