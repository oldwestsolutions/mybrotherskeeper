import React, { useEffect } from 'react';
import Head from 'next/head';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { Categories } from '@/components/Categories/Categories';
import { Products } from '@/components/Products/Products';
import { BrandStory } from '@/components/BrandStory/BrandStory';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  // Add concrete texture to the body
  useEffect(() => {
    document.body.classList.add('concrete-texture');
    
    return () => {
      document.body.classList.remove('concrete-texture');
    };
  }, []);
  
  return (
    <>
      <Head>
        <title>MBK - My Brothers Keeper | Brutalist Design</title>
        <meta name="description" content="My Brothers Keeper - Eastern European inspired athletic wear with brutalist design elements" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#121212" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Categories />
        <Products />
        <BrandStory />
      </main>
      <Footer />
    </>
  );
} 