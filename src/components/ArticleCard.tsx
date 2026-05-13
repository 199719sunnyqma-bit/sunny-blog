import { motion } from 'framer-motion';
import { Calendar, Heart } from 'phosphor-react';

interface ArticleCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  tags?: string[];
  rating?: number;
  price?: string;
  readTime?: string;
  likes?: number;
  href?: string;
}

export default function ArticleCard({
  image,
  title,
  excerpt,
  date,
  tags = [],
  rating,
  price,
  readTime,
  likes,
  href = '#',
}: ArticleCardProps) {
  return (
    <motion.a
      href={href}
      className="block bg-ivory rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="relative h-52 md:h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
        />
        {rating !== undefined && (
          <div className="absolute top-0 right-0 bg-coral text-white text-sm font-semibold px-3 py-1.5 rounded-bl-xl rounded-tr-2xl flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {rating}
          </div>
        )}
      </div>
      <div className="p-5 md:p-6">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block text-xs text-coral bg-sunny/20 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="text-lg md:text-xl font-medium text-coffee line-clamp-2 mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-sm md:text-[15px] text-warmgray line-clamp-3 leading-relaxed mb-4">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-warmgray">
          <div className="flex items-center gap-1">
            <Calendar size={14} weight="regular" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-3">
            {readTime && <span>{readTime}</span>}
            {price && <span>{price}</span>}
            {likes !== undefined && (
              <span className="flex items-center gap-1">
                <Heart size={14} weight="regular" />
                {likes}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.a>
  );
}
