import { motion } from 'framer-motion';
import { PenNib, BookOpen, Heart } from 'phosphor-react';

export default function ArtsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-[#FFF5EB] to-cream">
      {/* Decorative floating shapes */}
      <motion.div
        className="absolute top-20 right-[10%] w-16 h-16 rounded-full bg-coral/20"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-32 left-[8%] w-12 h-12 bg-[#F4D35E]/30 rotate-45"
        animate={{ y: [0, 15, 0], rotate: [45, 90, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-40 left-[20%] w-8 h-8 rounded-full bg-[#81B29A]/25"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-main relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <PenNib size={32} weight="fill" className="text-coral" />
            <BookOpen size={32} weight="fill" className="text-[#E07A5F]" />
            <Heart size={32} weight="fill" className="text-[#F4D35E]" />
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-coffee mb-6">
            藝文創作
          </h1>

          <p className="text-lg md:text-xl text-stone leading-relaxed max-w-2xl mx-auto">
            文字是我與世界對話的方式。在這裡，我寫小說、寫詩、寫散文，
            記錄那些稍縱即逝的感受與想像。
          </p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {['小說', '詩', '散文'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white/80 rounded-full text-coffee border border-sand text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
