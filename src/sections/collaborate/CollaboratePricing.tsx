import { motion } from 'framer-motion';
import { Check, X, Sparkle } from 'phosphor-react';
import SectionTitle from '@/components/SectionTitle';
import { slideUpStagger, slideUpItem } from '@/lib/animations';

const plans = [
  {
    name: '首波合作',
    badge: '最推薦',
    price: 'NT$500',
    unit: '/篇',
    desc: '初次合作試試看',
    features: [
      { text: '餐廳介紹文章（800-1200 字）', included: true },
      { text: 'SEO 標題與關鍵字規劃', included: true },
      { text: '官網發布（個人網站）', included: true },
      { text: '餐點照片拍攝/編輯', included: true },
      { text: '基本店家資訊整理', included: true },
      { text: '進階關鍵字分析', included: false },
      { text: 'FAQ 規劃', included: false },
    ],
    highlight: true,
  },
  {
    name: '進階 SEO',
    badge: null,
    price: 'NT$1,200',
    unit: '/篇',
    desc: '認真做 SEO 的店家',
    features: [
      { text: '所有基礎方案內容', included: true },
      { text: '進階關鍵字分析', included: true },
      { text: 'FAQ 規劃（3-5 題）', included: true },
      { text: '圖片 alt 文字優化', included: true },
      { text: '店家賣點整理', included: true },
      { text: '內部連結架構', included: true },
      { text: '30 天數據追蹤建議', included: false },
    ],
    highlight: false,
  },
  {
    name: '店家 SEO 小包',
    badge: null,
    price: 'NT$2,500',
    unit: '起',
    desc: '全方位 SEO 的店家',
    features: [
      { text: '進階 SEO 文章 1 篇', included: true },
      { text: 'Google 商家文案優化', included: true },
      { text: '服務介紹頁面整理', included: true },
      { text: '社交媒體貼文文案 3 篇', included: true },
      { text: '30 天內容行銷建議', included: true },
      { text: '數據分析與調整建議', included: true },
      { text: '持續 3 個月內容諮詢', included: false },
    ],
    highlight: false,
  },
];

export default function CollaboratePricing() {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <motion.div
        className="absolute top-[10%] left-[5%] w-10 h-10 opacity-10"
        style={{ background: '#F4D35E', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        animate={{ rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-main relative z-10">
        <SectionTitle label="合作方案" title="目前是首波案例合作價" />
        <p className="text-center text-warmgray text-lg max-w-2xl mx-auto -mt-8 mb-12">
          網站初期累積案例階段，開放少量首波合作名額
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
          variants={slideUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={slideUpItem}
              className={`relative rounded-2xl p-6 md:p-8 ${
                plan.highlight
                  ? 'bg-white border-2 border-coral shadow-lg scale-105 md:scale-105'
                  : 'bg-white border border-sand/50 shadow-sm'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral text-white text-sm font-medium px-4 py-1 rounded-full flex items-center gap-1">
                  <Sparkle size={14} weight="fill" />
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-medium text-coffee mb-1">{plan.name}</h3>
                <p className="text-sm text-warmgray mb-4">{plan.desc}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-3xl md:text-4xl font-bold ${plan.highlight ? 'text-coral' : 'text-coffee'}`}>
                    {plan.price}
                  </span>
                  <span className="text-warmgray">{plan.unit}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check size={18} weight="bold" className="text-mint flex-shrink-0 mt-0.5" />
                    ) : (
                      <X size={18} weight="bold" className="text-lightbrown flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-coffee text-sm' : 'text-lightbrown text-sm'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-sm text-warmgray mt-10 max-w-2xl mx-auto">
          前 5 篇首波價 NT$500，第 6-15 篇 NT$800-1000，累積案例後 NT$1,200-1,800
        </p>
      </div>
    </section>
  );
}
