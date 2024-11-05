import { motion } from 'framer-motion';
import Image from 'next/image';
import HeroImage from '@/public/imgs/SamplePFP.jpeg';

export default function HeroImageSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 500, backgroundColor: '#74685a' }}
      animate={{ opacity: 1, x: 0, backgroundColor: '#74685a', transition: { duration: 0.7, delay: 1 } }}
      transition={{ duration: 0.5 }}
      whileHover={{ backgroundColor: '#8b7d6b' }}
      className="flex h-fit w-1/3 rounded-xl p-5"
    >
      <Image
        src={HeroImage}
        alt="Hero Image"
        width={800}
        height={800}
        className="h-fit w-full rounded-lg transition-all duration-500 ease-in-out hover:scale-105"
      />
    </motion.div>
  );
} 