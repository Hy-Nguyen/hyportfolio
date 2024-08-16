'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div
      id="container"
      className="flex h-screen w-screen flex-col items-center justify-center bg-main-300 text-zinc-800"
    >
      {/* body */}

      <div className="flex h-fit w-full items-center justify-start gap-10 xl:max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, staggerChildren: 0.1 }}
          className="flex h-full w-2/3 flex-col items-start justify-center gap-8"
        >
          <div className="flex w-full flex-col gap-2">
            <h1 className="w-full text-6xl font-bold">Hi! I&apos;m Hy Nguyen,</h1>
            <h1 className="w-full text-6xl font-bold">
              pronounced <span className="font-extrabold text-main-600">&apos;he&apos;</span>.
            </h1>
            <h1 className="flex w-full flex-col pt-8 text-3xl font-bold">Jr. Front End Engineer</h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, staggerChildren: 3 }}
            className="flex w-11/12 flex-row items-start justify-start gap-8 *:text-xl *:font-medium"
          >
            <p>
              I am a passionate front end engineer with a focus on building user-friendly and responsive web
              applications, utilizing modern technologies, such as Next.JS, TailwindCSS, and Framer Motion, while
              maintaining best practices.
            </p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              With just two years of experience, I have worked with start ups all around the world, from the US to Spain
              and Latvia. I am proud to say that I have been a critical part in building applications from the group up,
              and have a proven track record of delivering high-quality code.
            </motion.p>
          </motion.div>
          <div className="flex w-fit flex-col gap-6">
            <button className="h-fit w-fit rounded-xl bg-main-500 px-10 py-2 text-white transition-all duration-500 ease-in-out hover:scale-110 hover:bg-main-400">
              Connect with me on LinkedIn
            </button>
            <button className="h-fit w-fit rounded-xl bg-main-500 px-10 py-2 text-white transition-all duration-500 ease-in-out hover:scale-110 hover:bg-main-400">
              Contact me via email
            </button>
          </div>
        </motion.div>
        <div className="flex h-full w-1/3 rounded-xl bg-main-700 transition-all duration-500 ease-in-out hover:scale-110 hover:bg-main-600"></div>
      </div>
    </div>
  );
}
