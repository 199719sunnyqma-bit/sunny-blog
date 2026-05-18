import { motion } from 'framer-motion';
import { BookOpen } from 'phosphor-react';
import { heroTextStagger, heroTextItem } from '@/lib/animations';

export default function SeoHero() {
  return (
    <section
      className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/art-deco-1.jpg)' }}
      />
      <div className="absolute inset-0 bg-coffee/55" />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-14 h-14 rounded-full border-2 border-white/15"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[12%] w-10 h-10 bg-white/10 rotate-45"
        animate={{ rotate: [45, 60, 45] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[25%] right-[20%] w-8 h-8"
        style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)', background: 'rgba(255,255,255,0.1)' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <motion.div
        className="relative z-10 text-center px-4 max-w-3xl"
        variants={heroTextStagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm mb-6"
          variants={heroTextItem}
        >
          <BookOpen size={32} weight="regular" className="text-white" />
        </motion.div>

        <motion.span
          className="inline-block text-sm text-sunny tracking-[0.05em] mb-3"
          variants={heroTextItem}
        >
          SEO 知識庫
        </motion.span>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          variants={heroTextItem}
        >
          讓你的文章被搜尋到
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white/90 font-light mb-6"
          variants={heroTextItem}
        >
          部落格經營者必備的 SEO 基礎知識，從關鍵字到頁面優化
        </motion.p>
        <motion.div
          className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 text-sm text-white/80"
          variants={heroTextItem}
        >
          <span>最後更新：2025 年 5 月</span>
          <span>·</span>
          <span>8 大主題</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
