import React, { useEffect } from 'react';
import Head from 'next/head';
import { Header } from '@/components/Header/Header';
import { ImmersiveHero } from '@/components/ImmersiveHero/ImmersiveHero';
import { FitnessPlatformSections } from '@/components/FitnessPlatformSections/FitnessPlatformSections';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.body.style.background = '#000000';
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.background = '';
    };
  }, []);
  
  return (
    <>
      <Head>
        <title>Modern Fitness - My Brothers Keeper</title>
        <meta name="description" content="Modern Fitness - Transform your fitness journey with immersive 3D workouts, Snapchat integration, and IoT health device connectivity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Header />
      <main>
        <ImmersiveHero />
        <FitnessPlatformSections />
      </main>
      <Footer />
    </>
  );
} 