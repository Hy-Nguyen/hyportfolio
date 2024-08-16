import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Hero />
      <Projects />
    </main>
  );
}
