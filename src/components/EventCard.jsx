import { FiCalendar, FiMapPin } from 'react-icons/fi';
import FavoriteButton from './FavoriteButton.jsx';
import { formatPrice } from '../utils/formatters.js';

export default function EventCard({ event }) {
  const { category, title, date, location, price, gradient, favorite } = event;

  return (
    <article className="bg-surface border border-borderc rounded-card overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
      <div className={`relative aspect-[4/3] flex items-end p-3 bg-gradient-to-br ${gradient}`}>
        <span className="text-[11px] font-bold bg-white/90 text-ink px-2.5 py-1 rounded-md">
          {category}
        </span>
        <FavoriteButton initialActive={favorite} />
      </div>

      <div className="p-4">
        <p className="text-[11px] font-bold uppercase tracking-wide text-brand mb-1.5">{category}</p>
        <h3 className="text-[15.5px] font-semibold leading-snug mb-2">{title}</h3>

        <div className="flex items-center gap-1.5 text-[12.5px] text-muted mb-1">
          <FiCalendar className="text-brand shrink-0" /> {date}
        </div>
        <div className="flex items-center gap-1.5 text-[12.5px] text-muted mb-3">
          <FiMapPin className="text-brand shrink-0" /> {location}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-borderc">
          <span className={`font-bold text-sm ${price === 0 ? 'text-emerald-500' : 'text-ink'}`}>
            {formatPrice(price)}
          </span>
        </div>
      </div>
    </article>
  );
}
