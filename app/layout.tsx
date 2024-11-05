import LayoutWrapper from '@/components/layout/LayoutWrapper';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const font = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hy Nguyen - Portfolio',
  description: 'Hy Nguyen - Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-main-300 text-white`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
