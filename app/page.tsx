import Image from 'next/image';
import Hero from '@/components/Hero/Hero';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Hero />
    </main>
  );
}
