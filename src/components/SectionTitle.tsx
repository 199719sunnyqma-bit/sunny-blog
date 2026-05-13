import { motion } from 'framer-motion';
import { slideUp } from '@/lib/animations';

interface SectionTitleProps {
  label: string;
  title: string;
  light?: boolean;
  className?: string;
}

export default function SectionTitle({ label, title, light = false, className = '' }: SectionTitleProps) {
  return (
    <motion.div
      className={`text-center mb-12 md:mb-16 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={slideUp}
    >
      <span
        className={`inline-block text-sm tracking-[0.05em] mb-3 ${
          light ? 'text-[#F4D35E]' : 'text-coral'
        }`}
      >
        {label}
      </span>
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium leading-tight ${
          light ? 'text-white' : 'text-coffee'
        }`}
      >
        {title}
      </h2>
      <div className={`mx-auto mt-4 w-16 h-1 rounded-full ${light ? 'bg-white/50' : 'bg-coral'}`} />
    </motion.div>
  );
}
