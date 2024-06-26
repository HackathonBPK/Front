import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Biopark - Cursos',
  description: 'Site de cursos online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' relative -z-50'}>{children}</body>
    </html>
  );
}
