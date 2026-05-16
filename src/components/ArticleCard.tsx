import { motion } from 'framer-motion';
import { Calendar, Heart, Star } from 'phosphor-react';

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
      className="block bg-ivory rounded-2xl overflow-hidden art-card group"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Image with art frame */}
      <div className="relative h-52 md:h-56 overflow-hidden m-3 mb-0 rounded-xl">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-coffee/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {rating !== undefined && (
          <div className="absolute top-3 right-3 bg-coral text-white text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
            <Star size={14} weight="fill" />
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
        <h3 className="text-lg md:text-xl font-medium text-coffee line-clamp-2 mb-2 leading-snug group-hover:text-coral transition-colors duration-300">
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
            {price && <span className="text-coral/70">{price}</span>}
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
