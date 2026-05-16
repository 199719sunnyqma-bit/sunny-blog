import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CaretDown } from 'phosphor-react';
import { heroTextStagger, heroTextItem } from '@/lib/animations';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[600px] h-[calc(100vh-72px)] max-h-[900px] flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F4D35E 0%, #F4A261 100%)' }}
    >
      {/* Watercolor art background */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/art-deco-1.jpg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Geometric floating shapes */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white/20"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[25%] right-[15%] w-10 h-10 md:w-16 md:h-16"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
          clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
        }}
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[20%] w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[10%] w-12 h-12 md:w-20 md:h-20 border border-white/15 rotate-45"
        animate={{ rotate: [45, 55, 45], y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        className="absolute top-[60%] left-[5%] w-6 h-6 md:w-10 md:h-10"
        style={{
          background: 'rgba(255,255,255,0.12)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        }}
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Sun art decoration */}
      <motion.div
        className="absolute top-[10%] right-[8%] w-20 h-20 md:w-32 md:h-32 opacity-25"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <img src="/images/art-sun.jpg" alt="" className="w-full h-full object-contain" aria-hidden="true" />
      </motion.div>

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
