import Hero from '@/features/Hero/components/Hero';
import Projects from '@/features/Projects/components/Projects';
import ContactForm from '@/features/ContactForm/components/ContactForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Hero />
      <Projects />
      <ContactForm />
      <footer className="flex w-full flex-col items-center justify-center gap-4 bg-main-800 p-4">
        <p className="text-center text-sm font-medium text-main-200">
          &copy; {new Date().getFullYear()} Hy Nguyen. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
