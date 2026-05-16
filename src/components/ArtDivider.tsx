import { motion } from 'framer-motion';

interface ArtDividerProps {
  variant?: 'wave' | 'geometric' | 'paint';
  className?: string;
}

export default function ArtDivider({ variant = 'geometric', className = '' }: ArtDividerProps) {
  if (variant === 'wave') {
    return (
      <div className={`relative h-16 md:h-24 overflow-hidden ${className}`}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <motion.path
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
            fill="rgba(244, 163, 97, 0.08)"
            animate={{ d: [
              'M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z',
              'M0,60 C150,0 350,120 600,60 C850,0 1050,120 1200,60 L1200,120 L0,120 Z',
              'M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z',
            ]}}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M0,80 C200,40 400,100 600,80 C800,60 1000,100 1200,80 L1200,120 L0,120 Z"
            fill="rgba(244, 211, 94, 0.06)"
            animate={{ d: [
              'M0,80 C200,40 400,100 600,80 C800,60 1000,100 1200,80 L1200,120 L0,120 Z',
              'M0,80 C200,100 400,40 600,80 C800,100 1000,40 1200,80 L1200,120 L0,120 Z',
              'M0,80 C200,40 400,100 600,80 C800,60 1000,100 1200,80 L1200,120 L0,120 Z',
            ]}}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'paint') {
    return (
      <div className={`relative h-20 md:h-28 overflow-hidden ${className}`}>
        <div className="absolute inset-0 opacity-15">
          <img
            src="/images/art-deco-1.jpg"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-transparent to-cream" />
      </div>
    );
  }

  // geometric (default)
  return (
    <div className={`relative h-12 md:h-16 overflow-hidden flex items-center justify-center ${className}`}>
      <div className="flex items-center gap-3">
        <motion.div
          className="w-2 h-2 rounded-full bg-coral/30"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="w-12 md:w-20 h-px bg-gradient-to-r from-coral/30 via-sunny/50 to-coral/30" />
        <motion.div
          className="w-3 h-3 rotate-45 border border-coral/25"
          animate={{ rotate: [45, 90, 45] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="w-12 md:w-20 h-px bg-gradient-to-r from-coral/30 via-sunny/50 to-coral/30" />
        <motion.div
          className="w-2 h-2 rounded-full bg-coral/30"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
      </div>
    </div>
  );
}
