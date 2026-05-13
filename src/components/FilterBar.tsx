interface FilterBarProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  label?: string;
}

export default function FilterBar({ filters, activeFilter, onFilterChange, label }: FilterBarProps) {
  return (
    <div className="mb-6">
      {label && <span className="text-sm text-warmgray mr-3 hidden md:inline">{label}</span>}
      <div className="flex flex-wrap gap-2 md:gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 cursor-pointer ${
              activeFilter === filter
                ? 'bg-coral text-white border border-coral'
                : 'bg-transparent text-warmgray border border-lightbrown hover:bg-apricot/20'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
