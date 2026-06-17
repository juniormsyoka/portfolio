import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'John Musyoka | Software Engineer',
  description: 'Full-stack developer specializing in React, Node.js, ASP.NET, and React Native',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-[#0D0C0B] text-[#F0EDE8] font-inter">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}