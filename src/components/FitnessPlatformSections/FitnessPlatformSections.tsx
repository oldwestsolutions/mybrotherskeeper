'use client';

import React from 'react';

export const FitnessPlatformSections: React.FC = () => {
  return (
    <div className="py-5" style={{ 
      background: 'linear-gradient(135deg, #050505 0%, #000000 50%, #0F3520 100%)',
      position: 'relative'
    }}>
      {/* Section 1: 3D Workout Experience */}
      <section className="mb-5">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6 p-4" style={{ 
              background: 'rgba(26, 26, 26, 0.8)', 
              borderRight: '1px solid rgba(15, 53, 32, 0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              <h2 className="text-white fw-bold mb-3" style={{ fontSize: '2.5rem' }}>3D Workout Experience</h2>
              <p className="text-white-50 mb-4">
                Immersive 3D fitness platform with real-time motion tracking and interactive workout environments
              </p>
              <div className="text-center mb-4">
                <div className="d-inline-block position-relative" style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'conic-gradient(#0F3520 0deg 270deg, rgba(255, 255, 255, 0.1) 270deg 360deg)',
                  padding: '8px',
                  boxShadow: '0 0 30px rgba(15, 53, 32, 0.5)'
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'rgba(10, 10, 10, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(15, 53, 32, 0.5)'
                  }}>
                    <span className="text-white fw-bold" style={{ fontSize: '3rem', color: '#0F3520', textShadow: '0 0 20px rgba(15, 53, 32, 0.8)' }}>225</span>
                  </div>
                </div>
                <p className="text-white fw-semibold mt-3">Workout Intensity Score</p>
                <span className="badge bg-success px-3 py-2 mb-3">EXCELLENT RATING</span>
                <div className="position-relative" style={{ height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px' }}>
                  <div style={{ position: 'absolute', left: '75%', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', background: '#0F3520', borderRadius: '50%', border: '3px solid rgba(10, 10, 10, 0.9)', boxShadow: '0 0 15px rgba(15, 53, 32, 0.8)' }}></div>
                </div>
                <div className="d-flex justify-content-between mt-1">
                  <small className="text-white-50">1</small>
                  <small className="text-white-50">300</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3 text-white">
                  <i className="bi bi-star-fill text-success"></i>
                  <span>Real-time 3D motion tracking</span>
                </div>
                <div className="d-flex align-items-center gap-3 text-white">
                  <i className="bi bi-people-fill text-success"></i>
                  <span>Interactive workout environments</span>
                </div>
                <div className="d-flex align-items-center gap-3 text-white">
                  <i className="bi bi-chat-dots-fill text-success"></i>
                  <span>AI-powered form correction</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-4" style={{ 
              background: 'rgba(15, 15, 15, 0.6)',
              borderLeft: '1px solid rgba(15, 53, 32, 0.3)'
            }}>
              <h3 className="text-white fw-bold mb-3" style={{ fontSize: '3rem' }}>3D Workout Experience</h3>
              <p className="text-white-50 mb-4">
                Experience fitness like never before with our cutting-edge 3D workout platform. 
                Track your movements in real-time, train in immersive virtual environments, and 
                receive instant feedback on your form and technique.
              </p>
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-bullseye text-success"></i>
                    <span>Precision tracking</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-star-fill text-success"></i>
                    <span>Immersive environments</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-robot text-success"></i>
                    <span>AI form analysis</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-graph-up text-success"></i>
                    <span>Performance metrics</span>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-success flex-fill px-4 py-2 fw-bold">Start Workout</button>
                <button className="btn btn-outline-light flex-fill px-4 py-2 fw-bold">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Snapchat Integration */}
      <section className="mb-5">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6 p-4" style={{ 
              background: 'rgba(26, 26, 26, 0.8)', 
              borderRight: '1px solid rgba(15, 53, 32, 0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              <h2 className="text-white fw-bold mb-3" style={{ fontSize: '2.5rem' }}>Snapchat Integration</h2>
              <p className="text-white-50 mb-4">
                Seamlessly share your fitness journey with friends through Snapchat integration
              </p>
              <div className="text-center mb-4">
                <div className="d-inline-block position-relative" style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'conic-gradient(#0F3520 0deg 352deg, rgba(255, 255, 255, 0.1) 352deg 360deg)',
                  padding: '8px',
                  boxShadow: '0 0 30px rgba(15, 53, 32, 0.5)'
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'rgba(10, 10, 10, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(15, 53, 32, 0.5)'
                  }}>
                    <span className="text-white fw-bold" style={{ fontSize: '3rem', color: '#0F3520', textShadow: '0 0 20px rgba(15, 53, 32, 0.8)' }}>98%</span>
                  </div>
                </div>
                <p className="text-white fw-semibold mt-3">Social Engagement Rate</p>
                <span className="badge bg-success px-3 py-2 mb-3">HIGH CONNECTION</span>
                <div className="position-relative" style={{ height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px' }}>
                  <div style={{ position: 'absolute', left: '98%', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', background: '#0F3520', borderRadius: '50%', border: '3px solid rgba(10, 10, 10, 0.9)', boxShadow: '0 0 15px rgba(15, 53, 32, 0.8)' }}></div>
                </div>
                <div className="d-flex justify-content-between mt-1">
                  <small className="text-white-50">0%</small>
                  <small className="text-white-50">100%</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3 text-white">
                  <i className="bi bi-share-fill text-success"></i>
                  <span>Share workouts instantly</span>
                </div>
                <div className="d-flex align-items-center gap-3 text-white">
                  <i className="bi bi-camera-fill text-success"></i>
                  <span>Snap fitness achievements</span>
                </div>
                <div className="d-flex align-items-center gap-3 text-white">
                  <i className="bi bi-people-fill text-success"></i>
                  <span>Connect with fitness community</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-4" style={{ 
              background: 'rgba(15, 15, 15, 0.6)',
              borderLeft: '1px solid rgba(15, 53, 32, 0.3)'
            }}>
              <h3 className="text-white fw-bold mb-3" style={{ fontSize: '3rem' }}>Snapchat Integration</h3>
              <p className="text-white-50 mb-4">
                Stay connected with your fitness community through seamless Snapchat integration. 
                Share your workout achievements, progress photos, and fitness milestones with friends. 
                Our platform makes it easy to document and celebrate your fitness journey.
              </p>
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-share-fill text-success"></i>
                    <span>Instant sharing</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-camera-fill text-success"></i>
                    <span>Photo & video support</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-lock-fill text-success"></i>
                    <span>Privacy controls</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-trophy-fill text-success"></i>
                    <span>Achievement badges</span>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-success flex-fill px-4 py-2 fw-bold">Connect Snapchat</button>
                <button className="btn btn-outline-light flex-fill px-4 py-2 fw-bold">View Features</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: IoT Health Device Sync */}
      <section className="mb-5">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6 p-4" style={{ 
              background: 'rgba(26, 26, 26, 0.8)', 
              borderRight: '1px solid rgba(15, 53, 32, 0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              <h2 className="text-white fw-bold mb-3" style={{ fontSize: '2.5rem' }}>IoT Health Device Sync</h2>
              <p className="text-white-50 mb-4">
                Connect your fitness trackers and smart devices for comprehensive health monitoring
              </p>
              <div className="text-center mb-4">
                <div className="d-inline-block position-relative" style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'conic-gradient(#0F3520 0deg 288deg, rgba(255, 255, 255, 0.1) 288deg 360deg)',
                  padding: '8px',
                  boxShadow: '0 0 30px rgba(15, 53, 32, 0.5)'
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'rgba(10, 10, 10, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(15, 53, 32, 0.5)'
                  }}>
                    <span className="text-white fw-bold" style={{ fontSize: '3rem', color: '#0F3520', textShadow: '0 0 20px rgba(15, 53, 32, 0.8)' }}>12</span>
                  </div>
                </div>
                <p className="text-white fw-semibold mt-3">Connected Devices</p>
                <span className="badge bg-success px-3 py-2 mb-3">FULLY SYNCED</span>
                <div className="position-relative" style={{ height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px' }}>
                  <div style={{ position: 'absolute', left: '80%', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', background: '#0F3520', borderRadius: '50%', border: '3px solid rgba(10, 10, 10, 0.9)', boxShadow: '0 0 15px rgba(15, 53, 32, 0.8)' }}></div>
                </div>
                <div className="d-flex justify-content-between mt-1">
                  <small className="text-white-50">0</small>
                  <small className="text-white-50">15</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3 text-white">
                  <i className="bi bi-smartwatch text-success"></i>
                  <span>Fitness tracker support</span>
                </div>
                <div className="d-flex align-items-center gap-3 text-white">
                  <i className="bi bi-phone text-success"></i>
                  <span>Smartwatch integration</span>
                </div>
                <div className="d-flex align-items-center gap-3 text-white">
                  <i className="bi bi-graph-up text-success"></i>
                  <span>Real-time data sync</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-4" style={{ 
              background: 'rgba(15, 15, 15, 0.6)',
              borderLeft: '1px solid rgba(15, 53, 32, 0.3)'
            }}>
              <h3 className="text-white fw-bold mb-3" style={{ fontSize: '3rem' }}>IoT Health Device Sync</h3>
              <p className="text-white-50 mb-4">
                Sync all your health and fitness devices in one place. From smartwatches to fitness 
                trackers, our platform integrates seamlessly with leading IoT health devices to provide 
                you with comprehensive insights into your wellness journey.
              </p>
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-smartwatch text-success"></i>
                    <span>Multi-device support</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-graph-up text-success"></i>
                    <span>Unified dashboard</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-arrow-repeat text-success"></i>
                    <span>Auto-sync enabled</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-database text-success"></i>
                    <span>Data history tracking</span>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-success flex-fill px-4 py-2 fw-bold">Connect Device</button>
                <button className="btn btn-outline-light flex-fill px-4 py-2 fw-bold">View Compatible Devices</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Personalized Training Plans */}
      <section className="mb-5">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6 p-4" style={{ 
              background: 'rgba(26, 26, 26, 0.8)', 
              borderRight: '1px solid rgba(15, 53, 32, 0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              <h2 className="text-white fw-bold mb-3" style={{ fontSize: '2.5rem' }}>Personalized Training Plans</h2>
              <p className="text-white-50 mb-4">
                AI-powered training programs tailored to your fitness goals and progress
              </p>
              <div className="text-center mb-4">
                <div className="d-inline-block position-relative" style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'conic-gradient(#0F3520 0deg 313deg, rgba(255, 255, 255, 0.1) 313deg 360deg)',
                  padding: '8px',
                  boxShadow: '0 0 30px rgba(15, 53, 32, 0.5)'
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'rgba(10, 10, 10, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(15, 53, 32, 0.5)'
                  }}>
                    <span className="text-white fw-bold" style={{ fontSize: '3rem', color: '#0F3520', textShadow: '0 0 20px rgba(15, 53, 32, 0.8)' }}>87%</span>
                  </div>
                </div>
                <p className="text-white fw-semibold mt-3">Plan Completion Rate</p>
                <span className="badge bg-success px-3 py-2 mb-3">ON TRACK</span>
                <div className="position-relative" style={{ height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px' }}>
                  <div style={{ position: 'absolute', left: '87%', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', background: '#0F3520', borderRadius: '50%', border: '3px solid rgba(10, 10, 10, 0.9)', boxShadow: '0 0 15px rgba(15, 53, 32, 0.8)' }}></div>
                </div>
                <div className="d-flex justify-content-between mt-1">
                  <small className="text-white-50">0%</small>
                  <small className="text-white-50">100%</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3 text-white">
                  <i className="bi bi-robot text-success"></i>
                  <span>AI-powered recommendations</span>
                </div>
                <div className="d-flex align-items-center gap-3 text-white">
                  <i className="bi bi-bullseye text-success"></i>
                  <span>Goal-based planning</span>
                </div>
                <div className="d-flex align-items-center gap-3 text-white">
                  <i className="bi bi-graph-up-arrow text-success"></i>
                  <span>Progress adaptation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-4" style={{ 
              background: 'rgba(15, 15, 15, 0.6)',
              borderLeft: '1px solid rgba(15, 53, 32, 0.3)'
            }}>
              <h3 className="text-white fw-bold mb-3" style={{ fontSize: '3rem' }}>Personalized Training Plans</h3>
              <p className="text-white-50 mb-4">
                Get personalized workout plans designed specifically for your fitness level, goals, and 
                preferences. Our AI analyzes your progress and adapts your training program in real-time 
                to ensure optimal results.
              </p>
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-bullseye text-success"></i>
                    <span>Customized workouts</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-graph-up text-success"></i>
                    <span>Progress tracking</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-arrow-repeat text-success"></i>
                    <span>Auto-adjustment</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-trophy-fill text-success"></i>
                    <span>Goal achievement</span>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-success flex-fill px-4 py-2 fw-bold">Create Plan</button>
                <button className="btn btn-outline-light flex-fill px-4 py-2 fw-bold">View Plans</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Community & Social Features */}
      <section className="mb-5">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6 p-4" style={{ 
              background: 'rgba(26, 26, 26, 0.8)', 
              borderRight: '1px solid rgba(15, 53, 32, 0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              <h2 className="text-white fw-bold mb-3" style={{ fontSize: '2.5rem' }}>Community & Social Features</h2>
              <p className="text-white-50 mb-4">
                Connect with like-minded fitness enthusiasts and build your support network
              </p>
              <div className="text-center mb-4">
                <div className="d-inline-block position-relative" style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'conic-gradient(#0F3520 0deg 216deg, rgba(255, 255, 255, 0.1) 216deg 360deg)',
                  padding: '8px',
                  boxShadow: '0 0 30px rgba(15, 53, 32, 0.5)'
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'rgba(10, 10, 10, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(15, 53, 32, 0.5)'
                  }}>
                    <span className="text-white fw-bold" style={{ fontSize: '2.5rem', color: '#0F3520', textShadow: '0 0 20px rgba(15, 53, 32, 0.8)' }}>1.2K</span>
                  </div>
                </div>
                <p className="text-white fw-semibold mt-3">Active Community Members</p>
                <span className="badge bg-success px-3 py-2 mb-3">GROWING</span>
                <div className="position-relative" style={{ height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px' }}>
                  <div style={{ position: 'absolute', left: '60%', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', background: '#0F3520', borderRadius: '50%', border: '3px solid rgba(10, 10, 10, 0.9)', boxShadow: '0 0 15px rgba(15, 53, 32, 0.8)' }}></div>
                </div>
                <div className="d-flex justify-content-between mt-1">
                  <small className="text-white-50">0</small>
                  <small className="text-white-50">2K</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3 text-white">
                  <i className="bi bi-people-fill text-success"></i>
                  <span>Fitness communities</span>
                </div>
                <div className="d-flex align-items-center gap-3 text-white">
                  <i className="bi bi-chat-dots-fill text-success"></i>
                  <span>Group challenges</span>
                </div>
                <div className="d-flex align-items-center gap-3 text-white">
                  <i className="bi bi-trophy-fill text-success"></i>
                  <span>Leaderboards & rankings</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-4" style={{ 
              background: 'rgba(15, 15, 15, 0.6)',
              borderLeft: '1px solid rgba(15, 53, 32, 0.3)'
            }}>
              <h3 className="text-white fw-bold mb-3" style={{ fontSize: '3rem' }}>Community & Social Features</h3>
              <p className="text-white-50 mb-4">
                Join a vibrant community of fitness enthusiasts. Participate in group challenges, 
                share your progress, and get motivated by others on similar fitness journeys. 
                Build lasting connections and achieve your goals together.
              </p>
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-people-fill text-success"></i>
                    <span>Active communities</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-trophy-fill text-success"></i>
                    <span>Group challenges</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-chat-dots-fill text-success"></i>
                    <span>Social messaging</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <i className="bi bi-graph-up text-success"></i>
                    <span>Progress sharing</span>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-success flex-fill px-4 py-2 fw-bold">Join Community</button>
                <button className="btn btn-outline-light flex-fill px-4 py-2 fw-bold">Explore Groups</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
