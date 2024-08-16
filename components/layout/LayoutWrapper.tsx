'use client';
import { Toaster } from 'react-hot-toast';
import Navbar from './Navbar';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <Navbar />
      {children}
    </>
  );
}
