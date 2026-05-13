import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar } from 'phosphor-react';
import SectionTitle from '@/components/SectionTitle';
import { slideUpStagger, slideUpItem } from '@/lib/animations';

const posts = [
  {
    image: '/images/post-1.jpg',
    tag: '旅遊',
    title: '九份老街的夜晚，燈籠下的懷舊時光',
    date: '2025/12/15',
    link: '/travel',
  },
  {
    image: '/images/post-2.jpg',
    tag: '美食',
    title: '隱藏在巷弄裡的米其林牛肉麵，湯頭讓人回味無窮',
    date: '2025/12/10',
    link: '/food',
  },
  {
    image: '/images/post-3.jpg',
    tag: '寵物',
    title: '娜冏的週末公園冒險，遇見了新朋友！',
    date: '2025/12/05',
    link: '/pets',
  },
  {
    image: '/images/post-4.jpg',
    tag: '寵物',
    title: '橘貓的午後時光：曬太陽、打盹、耍傲嬌',
    date: '2025/11/28',
    link: '/pets',
  },
];

export default function LatestPostsSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-main">
        <SectionTitle label="最新文章" title="最近的分享" />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8"
          variants={slideUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {posts.map((post) => (
            <motion.div key={post.title} variants={slideUpItem}>
              <Link
                to={post.link}
                className="block bg-ivory rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-48 md:h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block text-xs text-coral bg-sunny/20 rounded-full px-3 py-1 mb-3">
                    {post.tag}
                  </span>
                  <h3 className="text-lg md:text-xl font-medium text-coffee line-clamp-2 mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-warmgray">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link
            to="/travel"
            className="inline-block bg-coral text-white font-normal text-base px-7 py-3.5 rounded-xl hover:bg-sunset hover:scale-[1.02] transition-all duration-300"
          >
            查看所有文章
          </Link>
        </div>
      </div>
    </section>
  );
}
