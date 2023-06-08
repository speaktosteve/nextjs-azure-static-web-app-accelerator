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
          <Link href="/tabular-ssr">Tabular SSR</Link>
          <Link href="/tabular-ssr-sortable">Tabular SSR (with sorting)</Link>
        </nav>

        <main className="flex justify-center pt-5 w-3/4 mx-auto text-center">
          {children}
        </main>
      </body>
    </html>
  );
}
