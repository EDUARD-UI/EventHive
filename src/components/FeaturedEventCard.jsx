import { Link } from 'react-router-dom';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { formatPrice } from '../utils/formatters.js';

export default function FeaturedEventCard({ event }) {
  const { id, category, title, date, location, price, gradient, photo } = event;

  return (
    <article className="flex flex-col sm:flex-row flex-1 bg-white border border-slate-200 rounded-card overflow-hidden shadow-sm">
      <div className="relative w-full sm:w-2/5 aspect-video sm:aspect-auto overflow-hidden">
        <img src={photo} alt={title} className="h-full w-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0`} />
        <span className="absolute left-3 top-3 text-[11px] font-bold bg-accent text-amber-950 px-2.5 py-1 rounded-md z-10">
          ★ Destacado
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col bg-white">
        <p className="text-[11px] font-bold uppercase tracking-wide text-brand mb-1.5">{category}</p>
        <h3 className="font-display text-lg font-semibold mb-2.5 text-slate-900">{title}</h3>

        <div className="flex items-center gap-1.5 text-[12.5px] text-slate-600 mb-1">
          <FiCalendar className="text-brand shrink-0" /> {date}
        </div>
        <div className="flex items-center gap-1.5 text-[12.5px] text-slate-600 mb-3">
          <FiMapPin className="text-brand shrink-0" /> {location}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="font-bold text-sm text-slate-900">Desde {formatPrice(price)}</span>
          <Link
            to={`/eventos/${id}`}
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[#2563eb] shadow-[0_4px_12px_-4px_rgba(37,99,235,.55)] hover:bg-[#1d4ed8] transition-colors"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </article>
  );
}
