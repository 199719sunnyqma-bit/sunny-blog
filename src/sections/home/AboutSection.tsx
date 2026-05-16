import { motion } from 'framer-motion';
import { scaleIn, slideRight } from '@/lib/animations';

const tags = [
  { icon: '🍴', label: '美食探索' },
  { icon: '✈️', label: '旅行足跡' },
  { icon: '🐾', label: '毛孩日常' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-cream relative overflow-hidden">
      {/* Geometric decorative shapes */}
      <motion.div
        className="absolute -top-10 -right-10 w-40 h-40 md:w-64 md:h-64 rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #F4A261 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-[5%] w-8 h-8 opacity-10"
        style={{ background: '#F4D35E', clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
        animate={{ rotate: [0, 15, 0], y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="absolute top-1/3 right-[8%] w-6 h-6 opacity-10 rotate-45 border border-coral"
      />
      <motion.div
        className="absolute bottom-[15%] right-[15%] w-12 h-12 rounded-full border border-sunny/30 opacity-30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-2 flex justify-center"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Rotating dashed ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-coral/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{ width: 'calc(100% + 24px)', height: 'calc(100% + 24px)', top: '-12px', left: '-12px' }}
              />
              {/* Art frame */}
              <div className="art-frame">
                <img
                  src="/images/sunny-avatar.jpg"
                  alt="Sunny 本人照片"
                  className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-sm object-cover"
                  loading="lazy"
                />
              </div>
              {/* Small art sun decoration */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-16 h-16 md:w-20 md:h-20"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <img src="/images/art-sun.jpg" alt="" className="w-full h-full object-contain opacity-40" aria-hidden="true" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-sm text-coral tracking-[0.05em]">關於我</span>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-medium text-coffee leading-tight mt-3">
              哈囉，我是 Sunny！
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-coral to-sunny rounded-full mt-4 mb-6" />
            <div className="space-y-5 text-coffee">
              <p className="text-base md:text-lg leading-relaxed">
                熱愛美食、旅行與毛小孩的生活探險家。這裡是我分享美好體驗的小天地，從巷弄裡的隱藏美食到山海間的壯麗風景，從調皮搗蛋的毛孩日常到每一次的感動瞬間。
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                希望透過我的分享，能帶給你一些靈感與歡笑。如果你也喜歡探索生活中的小確幸，歡迎跟我一起踏上這趟美好的旅程！
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-2 bg-ivory rounded-xl px-5 py-3 text-coffee text-base shadow-sm"
                >
                  <span>{tag.icon}</span>
                  {tag.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
