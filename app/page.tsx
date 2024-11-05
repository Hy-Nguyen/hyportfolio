import Hero from '@/features/Hero/components/Hero';
import Projects from '@/features/Projects/components/Projects';
import ContactForm from '@/features/ContactForm/components/ContactForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Hero />
      <Projects />
      <ContactForm />
    </main>
  );
}
