'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { diagonalLineWidth } from '@/lib/utils';

export default function ProjectLinks({ link, icon, label }: { link: string; icon: React.ReactNode; label: string }) {
  const lineVariants: Variants = {
    initial: { width: 0, rotate: -45, translateY: 1 },
    hover: { width: diagonalLineWidth({ sides: 16 }), transition: { delay: 0, duration: 0.3 } },
    exit: { width: 0, transition: { delay: 0, duration: 0.3 } },
  };

  const arrowVariants = {
    initial: { width: 0 },
    hover: { width: 10, transition: { delay: 0.2, duration: 0.3 } },
    exit: { width: 0, transition: { delay: 0, duration: 0.3 } },
  };
  return (
    <motion.div initial="initial" whileHover="hover" animate="initial" exit="exit">
      <Link href={link} target="_blank" className="group relative flex items-center justify-center gap-2">
        <h1>{label}</h1>
        {icon}
        <div className="relative size-4">
          <motion.div className="absolute bottom-0 left-0 h-[1.5px] origin-left bg-black" variants={lineVariants} />
          <motion.div
            className="absolute right-0 top-0 h-[1.5px] origin-right -translate-y-[.5px] translate-x-[.5px] bg-black"
            variants={arrowVariants}
          />
          <motion.div
            className="absolute right-0 top-0 h-[1.5px] origin-right -translate-y-[1.25px] -rotate-90 bg-black"
            variants={arrowVariants}
          />
        </div>
      </Link>
    </motion.div>
  );
}
