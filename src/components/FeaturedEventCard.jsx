import { FiCalendar, FiMapPin } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { formatPrice } from '../utils/formatters.js';

export default function FeaturedEventCard({ event }) {
  const { category, title, date, location, price, gradient } = event;

  const handleViewDetails = () => {
    Swal.fire({
      title,
      text: `${date} · ${location}`,
      icon: 'info',
      confirmButtonColor: '#007BFF',
      confirmButtonText: 'Entendido',
    });
  };

  return (
    <article className="flex flex-col sm:flex-row flex-1 bg-surface border border-borderc rounded-card overflow-hidden shadow-sm">
      <div className={`relative w-full sm:w-2/5 aspect-video sm:aspect-auto flex items-start p-3 bg-gradient-to-br ${gradient}`}>
        <span className="text-[11px] font-bold bg-accent text-amber-950 px-2.5 py-1 rounded-md">
          ★ Destacado
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <p className="text-[11px] font-bold uppercase tracking-wide text-brand mb-1.5">{category}</p>
        <h3 className="font-display text-lg font-semibold mb-2.5">{title}</h3>

        <div className="flex items-center gap-1.5 text-[12.5px] text-muted mb-1">
          <FiCalendar className="text-brand shrink-0" /> {date}
        </div>
        <div className="flex items-center gap-1.5 text-[12.5px] text-muted mb-3">
          <FiMapPin className="text-brand shrink-0" /> {location}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="font-bold text-sm">Desde {formatPrice(price)}</span>
          <button
            onClick={handleViewDetails}
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-brand shadow-[0_4px_12px_-4px_rgba(0,123,255,.5)] hover:bg-brand-dark transition-colors"
          >
            Ver detalles
          </button>
        </div>
      </div>
    </article>
  );
}
