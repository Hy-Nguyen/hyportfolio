'use client';

import { motion } from 'framer-motion';
import HeroHeader from './HeroHeader';
import HeroDescription from './HeroDescription';
import HeroButtons from './HeroButtons';
import HeroImageSection from './HeroImageSection';

export default function Hero() {
  return (
    <div
      id="container"
      className="flex h-screen w-screen flex-col items-center justify-center bg-main-300 text-zinc-800"
    >
      <div className="flex h-fit w-full items-center justify-center gap-10 xl:max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, staggerChildren: 0.1 }}
          className="flex h-full w-2/3 flex-col items-start justify-center gap-8"
        >
          <HeroHeader />
          <HeroDescription />
          <HeroButtons />
        </motion.div>
        <HeroImageSection />
      </div>
    </div>
  );
}
