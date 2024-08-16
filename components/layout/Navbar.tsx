'use client';

import { motion, useMotionValueEvent, useScroll, type Variants } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious();
    //@ts-expect-error framer-motion types are not correct
    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const hideNav: Variants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -100,
    },
  };

  return (
    <motion.nav
      variants={hideNav}
      animate={hidden ? 'hidden' : 'visible'}
      className="fixed top-0 z-50 flex w-full justify-center bg-main-300 text-zinc-800"
    >
      <div className="flex w-full items-center justify-between bg-main-300 py-4 xl:max-w-screen-2xl">
        <h1 className="text-4xl font-semibold">Hy Nguyen</h1>
        <div className='w-fit flex flex-row gap-4 font-bold text-lg'>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </div>
      </div>
    </motion.nav>
  );
}
