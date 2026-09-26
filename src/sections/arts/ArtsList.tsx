import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Quotes, Article, Clock, Tag, X } from 'phosphor-react';
import { artsPosts, type ArtWork } from '@/data/artsPosts';
import SEO from '@/components/SEO';

const typeConfig = {
  novel: { icon: BookOpen, label: '小說', color: 'bg-[#E07A5F]/15 text-[#E07A5F]' },
  poem: { icon: Quotes, label: '詩', color: 'bg-[#81B29A]/15 text-[#81B29A]' },
  essay: { icon: Article, label: '散文', color: 'bg-[#F4D35E]/15 text-[#D4A017]' },
};

function ArtCard({ work, index, onClick }: { work: ArtWork; index: number; onClick: () => void }) {
  const config = typeConfig[work.type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="bg-ivory rounded-2xl overflow-hidden art-card group cursor-pointer"
    >
      <div className="p-6 md:p-8">
        {/* Type Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
            <Icon size={16} weight="fill" />
            {config.label}
          </span>
          <span className="text-sm text-stone flex items-center gap-1">
            <Clock size={14} />
            {work.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-coffee mb-3 group-hover:text-coral transition-colors">
          {work.title}
        </h3>

        {/* Excerpt */}
        <p className="text-stone leading-relaxed mb-4 line-clamp-3">
          {work.excerpt}
        </p>

        {/* Tags & Date */}
        <div className="flex items-center justify-between pt-4 border-t border-sand">
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1 text-xs text-stone">
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
          <span className="text-sm text-stone">{work.date}</span>
        </div>
      </div>
    </motion.div>
  );
}

function ArtModal({ work, onClose }: { work: ArtWork; onClose: () => void }) {
  if (!work) return null;
  const config = typeConfig[work.type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.article
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="bg-ivory rounded-2xl w-full max-w-3xl my-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-cream/90 flex items-center justify-center text-coffee hover:text-coral hover:bg-cream transition-colors shadow-sm"
          aria-label="關閉"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="p-8 pb-4 border-b border-sand">
          <div className="flex items-center gap-3 mb-4">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
              <Icon size={16} weight="fill" />
              {config.label}
            </span>
            <span className="text-sm text-stone flex items-center gap-1">
              <Clock size={14} />
              {work.readTime}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-coffee mb-2">{work.title}</h2>
          <div className="flex items-center gap-4 text-sm text-stone">
            <span>{work.date}</span>
            <div className="flex gap-2">
              {work.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1">
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="prose prose-stone max-w-none">
            {work.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-coffee/90 leading-[1.9] mb-5 text-base md:text-lg whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-sand text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-coral text-white rounded-full hover:bg-[#E07A5F] transition-colors"
          >
            關閉文章
          </button>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function ArtsList() {
  const [selectedWork, setSelectedWork] = useState<ArtWork | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredWorks = filter === 'all'
    ? artsPosts
    : artsPosts.filter((w) => w.type === filter);

  return (
    <>
      <SEO
        title={selectedWork ? `${selectedWork.title}｜藝文創作｜Sunny 美食/旅遊日記` : '藝文創作｜小說、詩、散文｜Sunny 美食/旅遊日記'}
        description="Sunny 的藝文創作空間，收錄小說、詩與散文。用文字記錄生活、感受與想像。"
      />

      <section className="py-16 md:py-24 bg-cream">
        <div className="container-main">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-3 mb-12"
          >
            {[
              { key: 'all', label: '全部' },
              { key: 'novel', label: '小說' },
              { key: 'poem', label: '詩' },
              { key: 'essay', label: '散文' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === tab.key
                    ? 'bg-coral text-white shadow-md'
                    : 'bg-white text-coffee hover:bg-sand border border-sand'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Works Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredWorks.map((work, index) => (
                <ArtCard
                  key={work.id}
                  work={work}
                  index={index}
                  onClick={() => setSelectedWork(work)}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredWorks.length === 0 && (
            <div className="text-center py-20">
              <p className="text-stone text-lg">這個分類還沒有作品</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedWork && (
          <ArtModal work={selectedWork} onClose={() => setSelectedWork(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
