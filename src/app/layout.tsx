import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './../../styles/globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-center gap-4 py-4  border-b border-b-white">
          <Link href="/">Home</Link>
          <Link href="/test">Test</Link>
        </nav>

        <main className="flex min-h-screen justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
