'use client';

import React from 'react';
import { useFadeInOnScroll } from '@/utils/animation';

export const FitnessPlatformSections: React.FC = () => {
  const { ref: section1Ref, inView: section1InView } = useFadeInOnScroll(0.2);
  const { ref: section2Ref, inView: section2InView } = useFadeInOnScroll(0.2);
  const { ref: section3Ref, inView: section3InView } = useFadeInOnScroll(0.2);
  const { ref: section4Ref, inView: section4InView } = useFadeInOnScroll(0.2);
  const { ref: section5Ref, inView: section5InView } = useFadeInOnScroll(0.2);

  return (
    <>
      {/* Section 1: 3D Workout Experience */}
      <section 
        ref={section1Ref}
        className="d-flex align-items-center justify-content-center" 
        style={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #050505 0%, #000000 50%, #0F3520 100%)',
          position: 'relative',
          overflow: 'hidden',
          opacity: section1InView ? 1 : 0,
          transform: section1InView ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="position-relative" style={{ height: '500px', borderRadius: '20px', overflow: 'hidden' }}>
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop" 
                  alt="3D Workout Experience"
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', filter: 'brightness(0.7)' }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'rgba(15, 53, 32, 0.3)' }}>
                  <div className="text-center text-white">
                    <i className="bi bi-play-circle-fill" style={{ fontSize: '5rem', opacity: 0.9 }}></i>
                    <p className="mt-3 fw-bold">Watch 3D Workout Demo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="text-white fw-bold mb-4" style={{ fontSize: '4rem', lineHeight: '1.1' }}>
                Immersive 3D<br />Workout Experience
              </h1>
              <p className="text-white-50 mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                Step into the future of fitness with our revolutionary 3D workout platform. Experience real-time motion capture, 
                interactive virtual environments, and AI-powered form analysis that transforms how you train.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-camera-video-fill text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">Motion Tracking</h5>
                      <p className="text-white-50 small mb-0">Real-time 3D body movement analysis</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-vr text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">Virtual Environments</h5>
                      <p className="text-white-50 small mb-0">Train in immersive 3D spaces</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-robot text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">AI Form Analysis</h5>
                      <p className="text-white-50 small mb-0">Instant feedback on technique</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-graph-up-arrow text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">Performance Metrics</h5>
                      <p className="text-white-50 small mb-0">Comprehensive workout analytics</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-success btn-lg px-5 py-3 fw-bold">
                Start Your 3D Workout
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Snapchat Integration */}
      <section 
        ref={section2Ref}
        className="d-flex align-items-center justify-content-center" 
        style={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #000000 0%, #050505 50%, #0F3520 100%)',
          position: 'relative',
          overflow: 'hidden',
          opacity: section2InView ? 1 : 0,
          transform: section2InView ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
              <div className="row g-3">
                <div className="col-6">
                  <div className="position-relative" style={{ height: '250px', borderRadius: '15px', overflow: 'hidden' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop" 
                      alt="Fitness Achievement"
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }}>
                      <div className="text-white">
                        <i className="bi bi-trophy-fill text-warning me-2"></i>
                        <small className="fw-bold">New PR!</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="position-relative" style={{ height: '250px', borderRadius: '15px', overflow: 'hidden' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=500&fit=crop" 
                      alt="Workout Progress"
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }}>
                      <div className="text-white">
                        <i className="bi bi-graph-up text-success me-2"></i>
                        <small className="fw-bold">Week 4 Progress</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="position-relative" style={{ height: '200px', borderRadius: '15px', overflow: 'hidden' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop" 
                      alt="Community Sharing"
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'rgba(15, 53, 32, 0.4)' }}>
                      <div className="text-center text-white">
                        <i className="bi bi-people-fill fs-1 mb-2"></i>
                        <p className="fw-bold mb-0">Share with Community</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <h1 className="text-white fw-bold mb-4" style={{ fontSize: '4rem', lineHeight: '1.1' }}>
                Share Your<br />Fitness Journey
              </h1>
              <p className="text-white-50 mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                Connect your fitness journey with Snapchat integration. Document your progress, celebrate milestones, 
                and inspire your community with real-time workout shares and achievement highlights.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-lightning-charge-fill text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">Instant Sharing</h5>
                      <p className="text-white-50 small mb-0">One-tap workout sharing</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-camera-reels-fill text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">Rich Media</h5>
                      <p className="text-white-50 small mb-0">Photos, videos, and stories</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-shield-lock-fill text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">Privacy First</h5>
                      <p className="text-white-50 small mb-0">Full control over sharing</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-award-fill text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">Achievements</h5>
                      <p className="text-white-50 small mb-0">Celebrate milestones</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-success btn-lg px-5 py-3 fw-bold">
                Connect Snapchat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: IoT Health Device Sync */}
      <section 
        ref={section3Ref}
        className="d-flex align-items-center justify-content-center" 
        style={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0F3520 0%, #000000 50%, #050505 100%)',
          position: 'relative',
          overflow: 'hidden',
          opacity: section3InView ? 1 : 0,
          transform: section3InView ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="position-relative" style={{ height: '500px', borderRadius: '20px', overflow: 'hidden', background: 'rgba(15, 53, 32, 0.2)' }}>
                <div className="d-flex flex-column align-items-center justify-content-center h-100 p-5">
                  <div className="mb-4">
                    <i className="bi bi-smartwatch text-success" style={{ fontSize: '8rem', opacity: 0.3 }}></i>
                  </div>
                  <div className="text-center text-white">
                    <h3 className="fw-bold mb-3">Device Dashboard</h3>
                    <div className="d-flex justify-content-center gap-4 mb-4">
                      <div className="text-center">
                        <div className="fs-2 fw-bold text-success">12</div>
                        <small className="text-white-50">Devices</small>
                      </div>
                      <div className="text-center">
                        <div className="fs-2 fw-bold text-success">98%</div>
                        <small className="text-white-50">Synced</small>
                      </div>
                      <div className="text-center">
                        <div className="fs-2 fw-bold text-success">24/7</div>
                        <small className="text-white-50">Monitoring</small>
                      </div>
                    </div>
                    <div className="row g-2">
                      <div className="col-4">
                        <div className="bg-dark rounded p-2 text-center">
                          <i className="bi bi-heart-pulse text-success"></i>
                          <small className="d-block text-white-50 mt-1">Heart Rate</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="bg-dark rounded p-2 text-center">
                          <i className="bi bi-speedometer text-success"></i>
                          <small className="d-block text-white-50 mt-1">Steps</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="bg-dark rounded p-2 text-center">
                          <i className="bi bi-fire text-success"></i>
                          <small className="d-block text-white-50 mt-1">Calories</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="text-white fw-bold mb-4" style={{ fontSize: '4rem', lineHeight: '1.1' }}>
                Unified Health<br />Device Ecosystem
              </h1>
              <p className="text-white-50 mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                Seamlessly integrate all your health and fitness devices into one comprehensive platform. 
                From smartwatches to fitness trackers, get real-time insights and unified analytics across all your devices.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-devices text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">Multi-Device</h5>
                      <p className="text-white-50 small mb-0">Support for all major brands</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-layout-text-window-reverse text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">Unified Dashboard</h5>
                      <p className="text-white-50 small mb-0">All data in one place</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-arrow-repeat text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">Auto-Sync</h5>
                      <p className="text-white-50 small mb-0">Real-time data synchronization</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-clock-history text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">History Tracking</h5>
                      <p className="text-white-50 small mb-0">Complete activity history</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-success btn-lg px-5 py-3 fw-bold">
                Connect Your Devices
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Personalized Training Plans */}
      <section 
        ref={section4Ref}
        className="d-flex align-items-center justify-content-center" 
        style={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #050505 0%, #0F3520 50%, #000000 100%)',
          position: 'relative',
          overflow: 'hidden',
          opacity: section4InView ? 1 : 0,
          transform: section4InView ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
              <div className="position-relative" style={{ height: '500px', borderRadius: '20px', overflow: 'hidden' }}>
                <img 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop" 
                  alt="Personalized Training"
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', filter: 'brightness(0.6)' }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 p-4" style={{ background: 'linear-gradient(to bottom, rgba(15, 53, 32, 0.7) 0%, transparent 50%, rgba(0,0,0,0.7) 100%)' }}>
                  <div className="d-flex flex-column h-100 justify-content-between">
                    <div>
                      <span className="badge bg-success mb-3">Week 4 of 12</span>
                      <h4 className="text-white fw-bold mb-2">Strength Building Program</h4>
                      <div className="progress mb-2" style={{ height: '8px' }}>
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '87%' }}></div>
                      </div>
                      <small className="text-white-50">87% Complete</small>
                    </div>
                    <div className="row g-2">
                      <div className="col-4">
                        <div className="bg-dark bg-opacity-50 rounded p-2 text-center">
                          <div className="text-success fw-bold">12</div>
                          <small className="text-white-50">Workouts</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="bg-dark bg-opacity-50 rounded p-2 text-center">
                          <div className="text-success fw-bold">8</div>
                          <small className="text-white-50">Remaining</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="bg-dark bg-opacity-50 rounded p-2 text-center">
                          <div className="text-success fw-bold">A+</div>
                          <small className="text-white-50">Grade</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <h1 className="text-white fw-bold mb-4" style={{ fontSize: '4rem', lineHeight: '1.1' }}>
                AI-Powered<br />Training Plans
              </h1>
              <p className="text-white-50 mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                Get personalized workout programs designed by AI to match your fitness level, goals, and preferences. 
                Our intelligent system adapts in real-time based on your progress and performance.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-bullseye text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">Custom Workouts</h5>
                      <p className="text-white-50 small mb-0">Tailored to your goals</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-graph-up text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">Progress Tracking</h5>
                      <p className="text-white-50 small mb-0">Real-time analytics</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-arrow-repeat text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">Auto-Adjustment</h5>
                      <p className="text-white-50 small mb-0">Adapts to your progress</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-trophy-fill text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">Goal Achievement</h5>
                      <p className="text-white-50 small mb-0">Celebrate milestones</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-success btn-lg px-5 py-3 fw-bold">
                Create Your Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Community & Social Features */}
      <section 
        ref={section5Ref}
        className="d-flex align-items-center justify-content-center" 
        style={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #000000 0%, #050505 50%, #0F3520 100%)',
          position: 'relative',
          overflow: 'hidden',
          opacity: section5InView ? 1 : 0,
          transform: section5InView ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="row g-3">
                <div className="col-12">
                  <div className="position-relative" style={{ height: '200px', borderRadius: '15px', overflow: 'hidden' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop" 
                      alt="Fitness Community"
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center p-4" style={{ background: 'linear-gradient(90deg, rgba(15, 53, 32, 0.8) 0%, transparent 100%)' }}>
                      <div className="text-white">
                        <h5 className="fw-bold mb-2">30-Day Challenge</h5>
                        <p className="mb-0 small">1,247 participants active</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="position-relative" style={{ height: '250px', borderRadius: '15px', overflow: 'hidden' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop" 
                      alt="Leaderboard"
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }}>
                      <div className="text-white">
                        <i className="bi bi-trophy-fill text-warning me-2"></i>
                        <small className="fw-bold">Top Performer</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="position-relative" style={{ height: '250px', borderRadius: '15px', overflow: 'hidden' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=500&fit=crop" 
                      alt="Group Workout"
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }}>
                      <div className="text-white">
                        <i className="bi bi-people-fill text-success me-2"></i>
                        <small className="fw-bold">Group Session</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="text-white fw-bold mb-4" style={{ fontSize: '4rem', lineHeight: '1.1' }}>
                Join a Thriving<br />Fitness Community
              </h1>
              <p className="text-white-50 mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                Connect with thousands of fitness enthusiasts. Participate in challenges, share your journey, 
                and get motivated by a supportive community that celebrates every milestone together.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-people-fill text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">Active Groups</h5>
                      <p className="text-white-50 small mb-0">Join specialized communities</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-trophy-fill text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">Challenges</h5>
                      <p className="text-white-50 small mb-0">Compete in group events</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-chat-dots-fill text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">Social Messaging</h5>
                      <p className="text-white-50 small mb-0">Connect with members</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                      <i className="bi bi-share-fill text-white fs-4"></i>
                    </div>
                    <div>
                      <h5 className="text-white fw-bold mb-2">Progress Sharing</h5>
                      <p className="text-white-50 small mb-0">Inspire and get inspired</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-success btn-lg px-5 py-3 fw-bold">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
