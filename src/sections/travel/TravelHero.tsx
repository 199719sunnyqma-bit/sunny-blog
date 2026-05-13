import { motion } from 'framer-motion';
import { heroTextStagger, heroTextItem } from '@/lib/animations';

export default function TravelHero() {
  return (
    <section
      className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/travel-hero-bg.jpg)' }}
      />
      <div className="absolute inset-0 bg-coffee/40" />

      <motion.div
        className="relative z-10 text-center px-4"
        variants={heroTextStagger}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="inline-block text-sm text-sunny tracking-[0.05em] mb-3"
          variants={heroTextItem}
        >
          旅遊景點
        </motion.span>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          variants={heroTextItem}
        >
          用雙腳丈量世界
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white/90 font-light"
          variants={heroTextItem}
        >
          每一次旅行，都是一場與自己的對話
        </motion.p>
      </motion.div>
    </section>
  );
}
