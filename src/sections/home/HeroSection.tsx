import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CaretDown } from 'phosphor-react';
import WatercolorDot from '@/components/WatercolorDot';
import { heroTextStagger, heroTextItem } from '@/lib/animations';

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] h-[calc(100vh-72px)] max-h-[900px] flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F4D35E 0%, #F4A261 100%)' }}
    >
      <WatercolorDot color="#F4D35E" size={200} opacity={0.2} className="top-10 right-10" />
      <WatercolorDot color="#F4A261" size={300} opacity={0.15} className="bottom-10 left-10" />
      <WatercolorDot color="#E07A5F" size={150} opacity={0.1} className="top-1/3 right-1/3" />

      <motion.div
        className="relative z-10 text-center px-4"
        variants={heroTextStagger}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="font-caveat text-2xl md:text-[32px] text-white/90 mb-4"
          variants={heroTextItem}
        >
          Sunny's Blog
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-white leading-tight mb-5"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
          variants={heroTextItem}
        >
          Sunny 美食/旅遊日記
        </motion.h1>

        <motion.p
          className="text-lg md:text-[22px] text-white/95 font-light mb-10 leading-relaxed"
          variants={heroTextItem}
        >
          記錄美好生活，分享每一個感動瞬間
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={heroTextItem}
        >
          <Link
            to="/travel"
            className="inline-block bg-white text-coral font-normal text-lg px-7 py-3.5 rounded-xl hover:bg-apricot transition-colors duration-300"
          >
            探索旅遊
          </Link>
          <Link
            to="/food"
            className="inline-block bg-transparent text-white font-normal text-lg px-7 py-3.5 rounded-xl border-2 border-white hover:bg-white hover:text-coral transition-all duration-300"
          >
            尋找美食
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white/70"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <span className="text-sm block mb-1">向下滾動</span>
        <CaretDown size={20} className="mx-auto" />
      </motion.div>
    </section>
  );
}
