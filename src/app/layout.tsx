import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Salomé Lavine - Portfolio',
  description: 'Personal portfolio website of Salomé Lavine, showcasing projects, skills, and experience.',
  keywords: ['Salomé Lavine', 'Portfolio', 'Energy and technologie Engineer'],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
} 