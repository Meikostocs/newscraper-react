import React from 'react';
import '../styles/globals.css';
import Generator from 'next/font/local';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GlobalData } from '../lib/types';

const sans = Generator({
  src: '../fonts/Generator-Variable.ttf',
  variable: '--font-sans',
});


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const siteData : GlobalData =  {
    "metadata":
    {
      "site_title":"NewScraper",
      "site_tag":"By Meikostocs"
    }
  };
  return (
    <html lang="en" className={`${sans.variable} font-sans`}>
      <body className="bg-white dark:bg-zinc-950">
        <Header name={siteData} />
        {children}
        <Footer />
        <Banner />
      </body>
    </html>
  );
}
