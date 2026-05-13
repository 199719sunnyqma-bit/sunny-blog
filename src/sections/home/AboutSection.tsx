import { motion } from 'framer-motion';
import WatercolorDot from '@/components/WatercolorDot';
import { scaleIn, slideRight } from '@/lib/animations';

const tags = [
  { icon: '🍴', label: '美食探索' },
  { icon: '✈️', label: '旅行足跡' },
  { icon: '🐾', label: '毛孩日常' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-cream relative overflow-hidden">
      <WatercolorDot color="#F4A261" size={250} opacity={0.08} className="-top-20 -right-20" />

      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-2 flex justify-center"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-coral/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{ width: 'calc(100% + 24px)', height: 'calc(100% + 24px)', top: '-12px', left: '-12px' }}
              />
              <img
                src="/images/sunny-avatar.jpg"
                alt="Sunny 本人照片 - 戴著圓框眼鏡、黑色短髮的美食旅遊部落客"
                className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] rounded-full object-cover border-[6px] border-coral"
                loading="lazy"
              />
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
            <div className="mt-6 space-y-5 text-coffee">
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
                  className="inline-flex items-center gap-2 bg-ivory rounded-xl px-5 py-3 text-coffee text-base"
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
