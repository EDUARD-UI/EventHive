import { useState } from 'react';

export default function CategoryChips({ categories, onChange }) {
  const [active, setActive] = useState(categories[0]?.id);

  const handleSelect = (id) => {
    setActive(id);
    onChange?.(id);
  };

  return (
    <div className="flex gap-2.5 flex-wrap px-6 sm:px-10 py-5 sm:py-6.5 bg-surface border-b border-borderc">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => handleSelect(cat.id)}
          className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors
            ${active === cat.id
              ? 'bg-brand-light border-brand text-brand'
              : 'bg-bg border-transparent text-ink hover:border-borderc'}`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
