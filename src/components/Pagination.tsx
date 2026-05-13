import { CaretRight } from 'phosphor-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getPages = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-10 md:mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-full flex items-center justify-center text-coffee hover:bg-sand disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <CaretRight size={20} className="rotate-180" />
      </button>
      {getPages().map((page, i) =>
        typeof page === 'string' ? (
          <span key={`dots-${i}`} className="w-10 h-10 flex items-center justify-center text-warmgray">
            {page}
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              currentPage === page
                ? 'bg-coral text-white'
                : 'text-coffee hover:bg-sand'
            }`}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-full flex items-center justify-center text-coffee hover:bg-sand disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <CaretRight size={20} />
      </button>
    </div>
  );
}
