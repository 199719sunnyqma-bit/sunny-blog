import { motion } from 'framer-motion';
import { ShieldCheck } from 'phosphor-react';
import { heroTextStagger, heroTextItem } from '@/lib/animations';

export default function CollaborateHero() {
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/collab-hero.jpg)' }}
      />
      <div className="absolute inset-0 bg-coffee/50" />

      {/* Watercolor art overlay */}
      <div className="absolute inset-0 opacity-10">
        <img src="/images/art-deco-1.jpg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-3xl"
        variants={heroTextStagger}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="inline-block text-sm text-sunny tracking-[0.05em] mb-3"
          variants={heroTextItem}
        >
          餐廳合作
        </motion.span>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          variants={heroTextItem}
        >
          讓你的餐廳被看見
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white/90 font-light mb-6"
          variants={heroTextItem}
        >
          SEO 友善的餐廳介紹文章，永久留存在你的官網
        </motion.p>
        <motion.div
          className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white/90"
          variants={heroTextItem}
        >
          <ShieldCheck size={18} />
          <span>商業合作文將標示「合作邀約」標籤，符合公平會規範</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
