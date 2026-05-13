import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FilterBar from '@/components/FilterBar';
import ArticleCard from '@/components/ArticleCard';
import Pagination from '@/components/Pagination';
import { petsPosts, petsFilters } from '@/data/petsPosts';

const POSTS_PER_PAGE = 9;

export default function PetsPosts() {
  const [activeFilter, setActiveFilter] = useState('全部');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    if (activeFilter === '全部') return petsPosts;
    return petsPosts.filter(
      (p) => p.subject.includes(activeFilter) || p.category === activeFilter
    );
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <section className="bg-cream py-10 md:py-16 pb-20 md:pb-28">
      <div className="container-main">
        <div className="mb-8 md:mb-12">
          <FilterBar
            filters={petsFilters}
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${currentPage}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {paginatedPosts.map((post) => (
              <ArticleCard
                key={post.id}
                image={post.image}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                tags={[post.subject, post.category]}
                likes={post.likes}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}
