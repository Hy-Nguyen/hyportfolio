import { motion } from 'framer-motion';

export default function HeroDescription() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5, staggerChildren: 3 }}
      className="flex w-full flex-col items-start justify-start gap-4 *:text-xl *:font-medium lg:flex-row lg:gap-8"
    >
      <p className="w-full lg:w-1/2">
        I am a passionate front end engineer with a focus on building user-friendly and responsive web applications,
        utilizing modern technologies, such as Next.JS, TailwindCSS, and Framer Motion, while maintaining best
        practices.
      </p>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full lg:w-1/2"
      >
        With just two years of experience, I have worked with start ups all around the world, from the US to Spain and
        Dubai. I am proud to say that I have been a critical part in building applications from the ground up, and have a
        proven track record of delivering high-quality code.
      </motion.p>
    </motion.div>
  );
}
