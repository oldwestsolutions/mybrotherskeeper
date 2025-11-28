'use client';

import React from 'react';
import styles from './FitnessPlatformSections.module.css';

export const FitnessPlatformSections: React.FC = () => {
  return (
    <div className={styles.sectionsContainer}>
      {/* Section 1: 3D Workout Experience */}
      <section className={styles.section}>
        <div className={styles.sectionCard}>
          <div className={styles.leftPanel}>
            <h2 className={styles.sectionTitle}>3D Workout Experience</h2>
            <p className={styles.sectionDescription}>
              Immersive 3D fitness platform with real-time motion tracking and interactive workout environments
            </p>
            <div className={styles.scoreVisual}>
              <div className={styles.circularGauge}>
                <div className={styles.gaugeInner}>
                  <span className={styles.scoreNumber}>225</span>
                </div>
              </div>
              <p className={styles.scoreLabel}>Workout Intensity Score</p>
              <div className={styles.ratingBadge}>EXCELLENT RATING</div>
              <div className={styles.scaleBar}>
                <div className={styles.scaleDot} style={{ left: '75%' }}></div>
                <span className={styles.scaleStart}>1</span>
                <span className={styles.scaleEnd}>300</span>
              </div>
            </div>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>⭐</span>
                <span>Real-time 3D motion tracking</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>👥</span>
                <span>Interactive workout environments</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>💬</span>
                <span>AI-powered form correction</span>
              </div>
            </div>
          </div>
          <div className={styles.rightPanel}>
            <h3 className={styles.panelTitle}>3D Workout Experience</h3>
            <p className={styles.panelDescription}>
              Experience fitness like never before with our cutting-edge 3D workout platform. 
              Track your movements in real-time, train in immersive virtual environments, and 
              receive instant feedback on your form and technique.
            </p>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>🎯</span>
                <span>Precision tracking</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>🌟</span>
                <span>Immersive environments</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>🤖</span>
                <span>AI form analysis</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>📊</span>
                <span>Performance metrics</span>
              </div>
            </div>
            <div className={styles.actionButtons}>
              <button className={styles.primaryButton}>Start Workout</button>
              <button className={styles.secondaryButton}>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Snapchat Integration */}
      <section className={styles.section}>
        <div className={styles.sectionCard}>
          <div className={styles.leftPanel}>
            <h2 className={styles.sectionTitle}>Snapchat Integration</h2>
            <p className={styles.sectionDescription}>
              Seamlessly share your fitness journey with friends through Snapchat integration
            </p>
            <div className={styles.scoreVisual}>
              <div className={styles.circularGauge}>
                <div className={styles.gaugeInner}>
                  <span className={styles.scoreNumber}>98%</span>
                </div>
              </div>
              <p className={styles.scoreLabel}>Social Engagement Rate</p>
              <div className={styles.ratingBadge}>HIGH CONNECTION</div>
              <div className={styles.scaleBar}>
                <div className={styles.scaleDot} style={{ left: '98%' }}></div>
                <span className={styles.scaleStart}>0%</span>
                <span className={styles.scaleEnd}>100%</span>
              </div>
            </div>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>👻</span>
                <span>Share workouts instantly</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>📸</span>
                <span>Snap fitness achievements</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>👥</span>
                <span>Connect with fitness community</span>
              </div>
            </div>
          </div>
          <div className={styles.rightPanel}>
            <h3 className={styles.panelTitle}>Snapchat Integration</h3>
            <p className={styles.panelDescription}>
              Stay connected with your fitness community through seamless Snapchat integration. 
              Share your workout achievements, progress photos, and fitness milestones with friends. 
              Our platform makes it easy to document and celebrate your fitness journey.
            </p>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>👻</span>
                <span>Instant sharing</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>📸</span>
                <span>Photo & video support</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>🔒</span>
                <span>Privacy controls</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>🏆</span>
                <span>Achievement badges</span>
              </div>
            </div>
            <div className={styles.actionButtons}>
              <button className={styles.primaryButton}>Connect Snapchat</button>
              <button className={styles.secondaryButton}>View Features</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: IoT Health Device Sync */}
      <section className={styles.section}>
        <div className={styles.sectionCard}>
          <div className={styles.leftPanel}>
            <h2 className={styles.sectionTitle}>IoT Health Device Sync</h2>
            <p className={styles.sectionDescription}>
              Connect your fitness trackers and smart devices for comprehensive health monitoring
            </p>
            <div className={styles.scoreVisual}>
              <div className={styles.circularGauge}>
                <div className={styles.gaugeInner}>
                  <span className={styles.scoreNumber}>12</span>
                </div>
              </div>
              <p className={styles.scoreLabel}>Connected Devices</p>
              <div className={styles.ratingBadge}>FULLY SYNCED</div>
              <div className={styles.scaleBar}>
                <div className={styles.scaleDot} style={{ left: '80%' }}></div>
                <span className={styles.scaleStart}>0</span>
                <span className={styles.scaleEnd}>15</span>
              </div>
            </div>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>⌚</span>
                <span>Fitness tracker support</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>📱</span>
                <span>Smartwatch integration</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>📊</span>
                <span>Real-time data sync</span>
              </div>
            </div>
          </div>
          <div className={styles.rightPanel}>
            <h3 className={styles.panelTitle}>IoT Health Device Sync</h3>
            <p className={styles.panelDescription}>
              Sync all your health and fitness devices in one place. From smartwatches to fitness 
              trackers, our platform integrates seamlessly with leading IoT health devices to provide 
              you with comprehensive insights into your wellness journey.
            </p>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>⌚</span>
                <span>Multi-device support</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>📊</span>
                <span>Unified dashboard</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>🔄</span>
                <span>Auto-sync enabled</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>💾</span>
                <span>Data history tracking</span>
              </div>
            </div>
            <div className={styles.actionButtons}>
              <button className={styles.primaryButton}>Connect Device</button>
              <button className={styles.secondaryButton}>View Compatible Devices</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Personalized Training Plans */}
      <section className={styles.section}>
        <div className={styles.sectionCard}>
          <div className={styles.leftPanel}>
            <h2 className={styles.sectionTitle}>Personalized Training Plans</h2>
            <p className={styles.sectionDescription}>
              AI-powered training programs tailored to your fitness goals and progress
            </p>
            <div className={styles.scoreVisual}>
              <div className={styles.circularGauge}>
                <div className={styles.gaugeInner}>
                  <span className={styles.scoreNumber}>87%</span>
                </div>
              </div>
              <p className={styles.scoreLabel}>Plan Completion Rate</p>
              <div className={styles.ratingBadge}>ON TRACK</div>
              <div className={styles.scaleBar}>
                <div className={styles.scaleDot} style={{ left: '87%' }}></div>
                <span className={styles.scaleStart}>0%</span>
                <span className={styles.scaleEnd}>100%</span>
              </div>
            </div>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🤖</span>
                <span>AI-powered recommendations</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🎯</span>
                <span>Goal-based planning</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>📈</span>
                <span>Progress adaptation</span>
              </div>
            </div>
          </div>
          <div className={styles.rightPanel}>
            <h3 className={styles.panelTitle}>Personalized Training Plans</h3>
            <p className={styles.panelDescription}>
              Get personalized workout plans designed specifically for your fitness level, goals, and 
              preferences. Our AI analyzes your progress and adapts your training program in real-time 
              to ensure optimal results.
            </p>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>🎯</span>
                <span>Customized workouts</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>📊</span>
                <span>Progress tracking</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>🔄</span>
                <span>Auto-adjustment</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>🏆</span>
                <span>Goal achievement</span>
              </div>
            </div>
            <div className={styles.actionButtons}>
              <button className={styles.primaryButton}>Create Plan</button>
              <button className={styles.secondaryButton}>View Plans</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Community & Social Features */}
      <section className={styles.section}>
        <div className={styles.sectionCard}>
          <div className={styles.leftPanel}>
            <h2 className={styles.sectionTitle}>Community & Social Features</h2>
            <p className={styles.sectionDescription}>
              Connect with like-minded fitness enthusiasts and build your support network
            </p>
            <div className={styles.scoreVisual}>
              <div className={styles.circularGauge}>
                <div className={styles.gaugeInner}>
                  <span className={styles.scoreNumber}>1.2K</span>
                </div>
              </div>
              <p className={styles.scoreLabel}>Active Community Members</p>
              <div className={styles.ratingBadge}>GROWING</div>
              <div className={styles.scaleBar}>
                <div className={styles.scaleDot} style={{ left: '60%' }}></div>
                <span className={styles.scaleStart}>0</span>
                <span className={styles.scaleEnd}>2K</span>
              </div>
            </div>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>👥</span>
                <span>Fitness communities</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>💬</span>
                <span>Group challenges</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🏅</span>
                <span>Leaderboards & rankings</span>
              </div>
            </div>
          </div>
          <div className={styles.rightPanel}>
            <h3 className={styles.panelTitle}>Community & Social Features</h3>
            <p className={styles.panelDescription}>
              Join a vibrant community of fitness enthusiasts. Participate in group challenges, 
              share your progress, and get motivated by others on similar fitness journeys. 
              Build lasting connections and achieve your goals together.
            </p>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>👥</span>
                <span>Active communities</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>🏆</span>
                <span>Group challenges</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>💬</span>
                <span>Social messaging</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>📈</span>
                <span>Progress sharing</span>
              </div>
            </div>
            <div className={styles.actionButtons}>
              <button className={styles.primaryButton}>Join Community</button>
              <button className={styles.secondaryButton}>Explore Groups</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

