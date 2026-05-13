import { motion } from 'framer-motion';
import { gentleSway, gentleSwayReverse, fadeIn } from '@/lib/animations';

export default function IllustrationBanner() {
  return (
    <section
      className="relative py-20 md:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F4D35E 0%, #F4A261 100%)' }}
    >
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20">
          <motion.div
            className="flex flex-col items-center"
            animate={gentleSway}
          >
            <img
              src="/images/dog-real-4.jpg"
              alt="娜冏的燦爛笑容"
              className="w-[150px] md:w-[180px] lg:w-[200px] h-[150px] md:h-[180px] lg:h-[200px] rounded-full object-cover border-4 border-white/40 shadow-lg"
              loading="lazy"
            />
            <span className="text-white text-sm mt-3 font-medium">娜冏</span>
          </motion.div>

          <motion.div
            className="text-center max-w-lg"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-caveat text-2xl md:text-[28px] text-white leading-relaxed mb-4">
              生活就像一場美食與旅行的冒險，而毛小孩是最好的旅伴。
            </p>
            <p className="text-white/80 text-lg">— Sunny</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            animate={gentleSwayReverse}
          >
            <img
              src="/images/cat-una-1.jpg"
              alt="烏娜吐舌頭的可愛模樣"
              className="w-[150px] md:w-[180px] lg:w-[200px] h-[150px] md:h-[180px] lg:h-[200px] rounded-full object-cover border-4 border-white/40 shadow-lg"
              loading="lazy"
            />
            <span className="text-white text-sm mt-3 font-medium">烏娜</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
