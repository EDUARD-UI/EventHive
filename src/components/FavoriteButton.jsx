import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function FavoriteButton({ initialActive = false, className = '' }) {
  const [active, setActive] = useState(initialActive);

  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={active ? 'Quitar de favoritos' : 'Guardar en favoritos'}
      onClick={(e) => {
        e.stopPropagation();
        setActive((prev) => !prev);
      }}
      className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center
        backdrop-blur-sm transition-colors
        ${active ? 'bg-white/90 text-pink-500' : 'bg-ink/35 text-white hover:bg-ink/50'} ${className}`}
    >
      {active ? <FaHeart size={14} /> : <FaRegHeart size={14} />}
    </button>
  );
}
