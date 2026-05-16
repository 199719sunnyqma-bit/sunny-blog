import { motion } from 'framer-motion';
import { gentleSway, gentleSwayReverse, fadeIn } from '@/lib/animations';

export default function IllustrationBanner() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F4D35E 0%, #F4A261 100%)' }}
    >
      {/* Watercolor art background */}
      <div className="absolute inset-0 opacity-15">
        <img
          src="/images/art-deco-2.jpg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-[15%] left-[8%] w-12 h-12 rounded-full border-2 border-white/20"
        animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[20%] right-[12%] w-8 h-8"
        style={{
          background: 'rgba(255,255,255,0.15)',
          clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
        }}
        animate={{ y: [0, 10, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[15%] w-10 h-10"
        style={{
          background: 'rgba(255,255,255,0.1)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        }}
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-[25%] right-[8%] w-6 h-6 rounded-full bg-white/15"
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Decorative quote marks */}
      <div className="absolute top-8 left-8 md:top-12 md:left-16 text-white/10 font-caveat text-8xl md:text-[120px] leading-none select-none">
        &ldquo;
      </div>
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-16 text-white/10 font-caveat text-8xl md:text-[120px] leading-none select-none rotate-180">
        &ldquo;
      </div>

      <div className="container-main relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20">
          {/* 娜冏 photo */}
          <motion.div
            className="flex flex-col items-center"
            animate={gentleSway}
          >
            <div className="art-frame bg-white/20 shadow-lg">
              <img
                src="/images/dog-real-4.jpg"
                alt="娜冏的燦爛笑容"
                className="w-[130px] h-[130px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] rounded-sm object-cover"
                loading="lazy"
              />
            </div>
            <span className="text-white text-sm mt-4 font-medium tracking-wide">娜冏</span>
          </motion.div>

          {/* Quote */}
          <motion.div
            className="text-center max-w-lg relative"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Decorative line above */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-px bg-white/40" />
              <motion.div
                className="w-2 h-2 rounded-full bg-white/50"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="w-8 h-px bg-white/40" />
            </div>

            <p className="font-caveat text-2xl md:text-[28px] text-white leading-relaxed mb-4">
              生活就像一場美食與旅行的冒險，而毛小孩是最好的旅伴。
            </p>
            <p className="text-white/80 text-lg">— Sunny</p>

            {/* Decorative line below */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-8 h-px bg-white/40" />
              <motion.div
                className="w-2 h-2 rotate-45 border border-white/40"
                animate={{ rotate: [45, 90, 45] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <div className="w-8 h-px bg-white/40" />
            </div>
          </motion.div>

          {/* 烏娜 photo */}
          <motion.div
            className="flex flex-col items-center"
            animate={gentleSwayReverse}
          >
            <div className="art-frame bg-white/20 shadow-lg">
              <img
                src="/images/cat-una-1.jpg"
                alt="烏娜吐舌頭的可愛模樣"
                className="w-[130px] h-[130px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] rounded-sm object-cover"
                loading="lazy"
              />
            </div>
            <span className="text-white text-sm mt-4 font-medium tracking-wide">烏娜</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
