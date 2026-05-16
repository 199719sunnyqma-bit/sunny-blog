import { motion } from 'framer-motion';
import { MagnifyingGlass, Archive, ShieldCheck } from 'phosphor-react';
import SectionTitle from '@/components/SectionTitle';
import { slideUpStagger, slideUpItem } from '@/lib/animations';

const features = [
  {
    icon: MagnifyingGlass,
    title: 'SEO 關鍵字規劃',
    description: '不只是寫心得，我會為你的餐廳規劃搜尋關鍵字、標題、段落架構，讓文章更容易被 Google 理解和收錄。',
  },
  {
    icon: Archive,
    title: '永久留存在官網',
    description: '文章發佈在我個人網站，不會像平台部落格可能被關站、搬家或刪文，長期存在、長期曝光。',
  },
  {
    icon: ShieldCheck,
    title: '合法透明揭露',
    description: '合作文章會標示「合作邀約」，符合公平會薦證廣告規範；外部連結使用 rel="sponsored" 標記。',
  },
];

export default function CollaborateFeatures() {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <motion.div
        className="absolute top-[15%] right-[5%] w-12 h-12 rounded-full border border-coral/15"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="absolute bottom-[20%] left-[3%] w-8 h-8 opacity-10 rotate-12"
        style={{ background: '#F4A261', clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
      />

      <div className="container-main relative z-10">
        <SectionTitle label="服務特色" title="我不只是寫文章，而是做 SEO" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={slideUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={slideUpItem}
                className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-coral/10 flex items-center justify-center group-hover:bg-coral/20 transition-colors">
                  <Icon size={32} weight="regular" className="text-coral" />
                </div>
                <h3 className="text-xl font-medium text-coffee mb-3">{feature.title}</h3>
                <p className="text-warmgray leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
