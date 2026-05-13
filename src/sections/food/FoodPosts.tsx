import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FilterBar from '@/components/FilterBar';
import ArticleCard from '@/components/ArticleCard';
import Pagination from '@/components/Pagination';
import { foodPosts, foodRegions, foodTypes } from '@/data/foodPosts';

const POSTS_PER_PAGE = 9;

export default function FoodPosts() {
  const [activeRegion, setActiveRegion] = useState('全部');
  const [activeType, setActiveType] = useState('全部');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    return foodPosts.filter((p) => {
      const regionMatch = activeRegion === '全部' || p.region === activeRegion;
      const typeMatch = activeType === '全部' || p.type === activeType;
      return regionMatch && typeMatch;
    });
  }, [activeRegion, activeType]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleRegionChange = (filter: string) => {
    setActiveRegion(filter);
    setCurrentPage(1);
  };

  const handleTypeChange = (filter: string) => {
    setActiveType(filter);
    setCurrentPage(1);
  };

  return (
    <section className="bg-cream py-10 md:py-16 pb-20 md:pb-28">
      <div className="container-main">
        <div className="mb-8 md:mb-12 space-y-4">
          <FilterBar
            filters={foodRegions}
            activeFilter={activeRegion}
            onFilterChange={handleRegionChange}
            label="地區："
          />
          <FilterBar
            filters={foodTypes}
            activeFilter={activeType}
            onFilterChange={handleTypeChange}
            label="類型："
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeRegion}-${activeType}-${currentPage}`}
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
                tags={[post.region, post.type]}
                rating={post.rating}
                price={post.price}
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
