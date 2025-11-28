import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import Head from 'next/head';
import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MBK - My Brothers Keeper</title>
      </Head>
      <AuthProvider>
        <div className={roboto.className}>
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </>
  );
} 