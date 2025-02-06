'use client';

import { motion } from 'framer-motion';
import HeroHeader from './HeroHeader';
import HeroDescription from './HeroDescription';
import HeroButtons from './HeroButtons';
import HeroImageSection from './HeroImageSection';

export default function Hero() {
  return (
    <section
      id="about"
      className="flex min-h-screen w-screen flex-col items-center justify-center bg-main-300 pb-10 pt-36 text-zinc-800 lg:py-0"
    >
      <div className="container flex h-fit w-full flex-col items-center justify-center gap-10 lg:flex-row xl:max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, staggerChildren: 0.1 }}
          className="flex h-full w-full flex-col items-start justify-center gap-4 lg:w-2/3 lg:gap-8"
        >
          <HeroHeader />
          <HeroDescription />
          <HeroButtons />
        </motion.div>
        <HeroImageSection />
      </div>
    </section>
  );
}
