import { FiCalendar, FiMapPin } from 'react-icons/fi';
import FavoriteButton from './FavoriteButton.jsx';
import { formatPrice } from '../utils/formatters.js';

export default function EventCard({ event }) {
  const { category, title, date, location, price, gradient, favorite, photo } = event;

  return (
    <article className="bg-white border border-slate-200 rounded-card overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={photo} alt={title} className="h-full w-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60`} />
        <span className="absolute left-3 top-3 text-[11px] font-bold bg-white/90 text-ink px-2.5 py-1 rounded-md z-10">
          {category}
        </span>
        <FavoriteButton initialActive={favorite} />
      </div>

      <div className="p-4 bg-white">
        <p className="text-[11px] font-bold uppercase tracking-wide text-brand mb-1.5">{category}</p>
        <h3 className="text-[15.5px] font-semibold leading-snug mb-2 text-slate-900">{title}</h3>

        <div className="flex items-center gap-1.5 text-[12.5px] text-slate-600 mb-1">
          <FiCalendar className="text-brand shrink-0" /> {date}
        </div>
        <div className="flex items-center gap-1.5 text-[12.5px] text-slate-600 mb-3">
          <FiMapPin className="text-brand shrink-0" /> {location}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <span className={`font-bold text-sm ${price === 0 ? 'text-emerald-500' : 'text-slate-900'}`}>
            {formatPrice(price)}
          </span>
        </div>
      </div>
    </article>
  );
}
