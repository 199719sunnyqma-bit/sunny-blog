import { motion } from 'framer-motion';
import { heroTextStagger, heroTextItem } from '@/lib/animations';

export default function FoodHero() {
  return (
    <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/food-hero-bg.jpg)' }}
      />
      <div className="absolute inset-0 bg-coffee/45" />

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
          美食餐廳
        </motion.span>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          variants={heroTextItem}
        >
          用味蕾感受世界
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white/90 font-light"
          variants={heroTextItem}
        >
          每一口，都是一次幸福的冒險
        </motion.p>
      </motion.div>
    </section>
  );
}
