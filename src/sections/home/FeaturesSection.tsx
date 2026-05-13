import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AirplaneTilt, ForkKnife, PawPrint, ArrowRight } from 'phosphor-react';
import SectionTitle from '@/components/SectionTitle';
import { slideUpStagger, slideUpItem } from '@/lib/animations';

const features = [
  {
    icon: AirplaneTilt,
    image: '/images/feature-travel.jpg',
    title: '旅遊景點',
    description: '從繁華都市到山林秘境，帶你探索台灣與世界各地的迷人風景與獨特文化。',
    link: '/travel',
    linkText: '開始探索',
  },
  {
    icon: ForkKnife,
    image: '/images/feature-food.jpg',
    title: '美食餐廳',
    description: '從街頭小吃到米其林餐廳，用味蕾感受每一道料理背後的故事與溫度。',
    link: '/food',
    linkText: '尋找美食',
  },
  {
    icon: PawPrint,
    image: '/images/feature-pets.jpg',
    title: '寵物日記',
    description: '記錄我家娜冏與烏娜的調皮日常，那些讓人又氣又笑的毛孩生活點滴。',
    link: '/pets',
    linkText: '看毛孩日常',
  },
];

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        <SectionTitle label="探索更多" title="一起發現生活的美好" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
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
              >
                <Link
                  to={feature.link}
                  className="block bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="h-48 md:h-52 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <Icon size={32} weight="regular" className="text-coral mb-3" />
                    <h3 className="text-xl md:text-2xl font-medium text-coffee mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-base text-warmgray leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-coral group-hover:text-sunset transition-colors">
                      {feature.linkText}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
