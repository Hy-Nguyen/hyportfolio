'use client';

import { motion, useMotionValueEvent, useScroll, type Variants } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  const navLinks = [
    {
      name: 'About',
      section: '#about',
    },
    {
      name: 'Projects',
      section: '#projects',
    },
    {
      name: 'Contact',
      section: '#contact',
    },
  ];

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
      <div className="container flex w-full flex-col items-center justify-between gap-6 bg-main-300 py-4 lg:flex-row xl:max-w-screen-xl">
        <h1 className="text-4xl font-semibold">Hy Nguyen</h1>
        <div className="flex w-fit flex-row gap-4 text-lg font-bold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.section}
              className="text-xl font-medium transition-colors duration-300 ease-in-out hover:text-main-700 lg:text-base"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
