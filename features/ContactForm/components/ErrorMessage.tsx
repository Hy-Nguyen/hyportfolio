import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

export default function ErrorMessage({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {children && (
        <motion.p
          key={'error-message-' + children}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className={cn('text-red-500', className)}
        >
          {children}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
