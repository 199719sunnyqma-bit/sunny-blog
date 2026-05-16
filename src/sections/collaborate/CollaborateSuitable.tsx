import { motion } from 'framer-motion';
import { Storefront, Coffee, Cookie, PawPrint, Mountains, Star } from 'phosphor-react';
import SectionTitle from '@/components/SectionTitle';
import { slideUpStagger, slideUpItem } from '@/lib/animations';

const shops = [
  {
    icon: Storefront,
    title: '新開幕餐廳',
    reason: '增加一篇品牌介紹內容，讓搜尋引擎更快認識你',
  },
  {
    icon: Coffee,
    title: '咖啡廳 / 甜點店',
    reason: '適合圖片＋文章的長期經營模式',
  },
  {
    icon: Cookie,
    title: '地方小吃',
    reason: '適合做地區型關鍵字，讓在地人找到你',
  },
  {
    icon: PawPrint,
    title: '寵物友善餐廳',
    reason: '可切入特殊需求關鍵字，吸引特定客群',
  },
  {
    icon: Mountains,
    title: '景觀餐廳',
    reason: '可搭配旅遊、美食搜尋意圖，雙重曝光',
  },
  {
    icon: Star,
    title: '小型餐飲店',
    reason: '低成本累積搜尋曝光素材，不需要大預算',
  },
];

export default function CollaborateSuitable() {
  return (
    <section className="section-padding bg-ivory relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coral/30 via-sunny/50 to-coral/30" />

      <div className="container-main relative z-10">
        <SectionTitle
          label="適合對象"
          title="適合哪些店家？"
        />
        <p className="text-center text-warmgray text-lg max-w-2xl mx-auto -mt-8 mb-12">
          不論規模大小，只要想讓更多人認識你的餐廳，都可以合作
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          variants={slideUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {shops.map((shop) => {
            const Icon = shop.icon;
            return (
              <motion.div
                key={shop.title}
                variants={slideUpItem}
                className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0 group-hover:bg-coral/20 transition-colors">
                  <Icon size={24} weight="regular" className="text-coral" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-coffee mb-1">{shop.title}</h3>
                  <p className="text-sm text-warmgray leading-relaxed">{shop.reason}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
