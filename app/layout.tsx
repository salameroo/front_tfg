import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CarGram',
  description: 'Made by Angel Salamero',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={inter.className} style={{ height: '100%' }}>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </head>
      <body className="text-black bg-gray-200 h-full m-0">
        <div className="flex h-full min-h-screen flex-col md:flex-row md:overflow-hidden bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
          <main className="flex-grow md:overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
