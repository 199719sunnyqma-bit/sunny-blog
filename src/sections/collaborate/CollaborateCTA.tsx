import { motion } from 'framer-motion';
import { Envelope, ChatCircleText } from 'phosphor-react';
import { fadeIn } from '@/lib/animations';

export default function CollaborateCTA() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F4D35E 0%, #F4A261 100%)' }}
    >
      {/* Watercolor art overlay */}
      <div className="absolute inset-0 opacity-15">
        <img src="/images/art-deco-2.jpg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-[20%] left-[8%] w-12 h-12 rounded-full border-2 border-white/20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-8 h-8 bg-white/15"
        style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
        animate={{ y: [0, 8, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <motion.div
        className="relative z-10 container-narrow text-center"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          準備好讓你的餐廳被看見了嗎？
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10">
          歡迎直接聯絡我，討論適合你的合作方案
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="mailto:199719sunnyqma@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-white text-coral font-medium text-lg px-8 py-4 rounded-xl hover:bg-apricot transition-colors duration-300 shadow-lg"
          >
            <Envelope size={22} />
            199719sunnyqma@gmail.com
          </a>
          <a
            href="https://line.me/ti/p/sunnyqma66"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white font-medium text-lg px-8 py-4 rounded-xl border-2 border-white/40 hover:bg-white/30 transition-colors duration-300"
          >
            <ChatCircleText size={22} />
            Line: sunnyqma66
          </a>
        </div>

        <p className="text-white/70 text-sm">
          也可以直接私訊 IG @sunnyqma，我會盡快回覆
        </p>
      </motion.div>
    </section>
  );
}
