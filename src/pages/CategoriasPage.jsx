import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiActivity,
  FiBookOpen,
  FiCamera,
  FiChevronLeft,
  FiChevronRight,
  FiCoffee,
  FiFilm,
  FiGrid,
  FiMusic,
} from 'react-icons/fi';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { MOCK_EVENTS } from '../constants/mockEvents.js';
// NOTA: mientras el backend no esté disponible, esta vista usa MOCK_EVENTS
// (datos estáticos en src/constants/mockEvents.js). Cuando el backend esté
// listo, se puede volver a usar getMapEvents() de eventService.js.

// Ícono, color y descripción por categoría. Las claves están en minúscula
// para comparar sin importar tildes/mayúsculas que vengan del backend.
const CATEGORY_META = {
  'música': {
    icon: FiMusic,
    gradient: 'from-blue-600 to-indigo-950',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80',
    description: 'Conciertos y festivales frente al mar Caribe',
  },
  'musica': {
    icon: FiMusic,
    gradient: 'from-blue-600 to-indigo-950',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80',
    description: 'Conciertos y festivales frente al mar Caribe',
  },
  'cultural': {
    icon: FiCamera,
    gradient: 'from-purple-600 to-fuchsia-950',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
    description: 'Arte, historia y patrimonio de la ciudad amurallada',
  },
  'cultura': {
    icon: FiCamera,
    gradient: 'from-purple-600 to-fuchsia-950',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
    description: 'Arte, historia y patrimonio de la ciudad amurallada',
  },
  'deportivo': {
    icon: FiActivity,
    gradient: 'from-emerald-600 to-teal-950',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80',
    description: 'Torneos y actividades al aire libre en la playa',
  },
  'deporte': {
    icon: FiActivity,
    gradient: 'from-emerald-600 to-teal-950',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80',
    description: 'Torneos y actividades al aire libre en la playa',
  },
  'gastronómico': {
    icon: FiCoffee,
    gradient: 'from-amber-600 to-orange-950',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    description: 'Ferias y catas con lo mejor de la cocina caribeña',
  },
  'gastronomico': {
    icon: FiCoffee,
    gradient: 'from-amber-600 to-orange-950',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    description: 'Ferias y catas con lo mejor de la cocina caribeña',
  },
  'gastronomía': {
    icon: FiCoffee,
    gradient: 'from-amber-600 to-orange-950',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    description: 'Ferias y catas con lo mejor de la cocina caribeña',
  },
  'académico': {
    icon: FiBookOpen,
    gradient: 'from-sky-600 to-cyan-950',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    description: 'Charlas, cátedras y conversatorios abiertos',
  },
  'academico': {
    icon: FiBookOpen,
    gradient: 'from-sky-600 to-cyan-950',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    description: 'Charlas, cátedras y conversatorios abiertos',
  },
  'entretenimiento': {
    icon: FiFilm,
    gradient: 'from-rose-600 to-red-950',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80',
    description: 'Cine al aire libre, juegos y planes nocturnos',
  },
};

// Categoría sin ficha asignada todavía (por si el backend agrega una nueva).
const DEFAULT_META = {
  icon: FiGrid,
  gradient: 'from-slate-600 to-slate-950',
  image: null,
  description: 'Eventos de esta categoría en Cartagena',
};

// Orden preferido de las categorías conocidas; las nuevas van al final,
// ordenadas por cantidad de eventos.
const PREFERRED_ORDER = [
  'música', 'musica', 'cultural', 'cultura', 'deportivo', 'deporte',
  'gastronómico', 'gastronomico', 'gastronomía', 'académico', 'academico', 'entretenimiento',
];

function getCategoryMeta(name) {
  const key = name?.toLowerCase().trim();
  return CATEGORY_META[key] || DEFAULT_META;
}

// Cuántas tarjetas de categoría se muestran por página.
const PAGE_SIZE = 6;

export default function CategoriasPage() {
  const [page, setPage] = useState(1);

  const categories = useMemo(() => {
    const counts = new Map();

    MOCK_EVENTS.forEach((event) => {
      const name = event.category?.trim();
      if (!name) return;
      counts.set(name, (counts.get(name) || 0) + 1);
    });

    const maxCount = Math.max(0, ...counts.values());

    const list = Array.from(counts.entries()).map(([name, count]) => ({
      name,
      count,
      isPopular: count === maxCount && maxCount > 0,
      ...getCategoryMeta(name),
    }));

    return list.sort((a, b) => {
      const ai = PREFERRED_ORDER.indexOf(a.name.toLowerCase());
      const bi = PREFERRED_ORDER.indexOf(b.name.toLowerCase());
      if (ai === -1 && bi === -1) return b.count - a.count;
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    });
  }, []);

  const totalEvents = MOCK_EVENTS.length;
  const totalPages = Math.max(1, Math.ceil(categories.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visibleCategories = categories.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <div className="w-full min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="mb-5">
          <h1 className="text-xl sm:text-2xl font-display">Categorías</h1>
          <p className="text-[13.5px] text-muted mt-1">
            Explora los eventos de Cartagena organizados por tipo
            {totalEvents > 0 && ` · ${totalEvents} evento${totalEvents === 1 ? '' : 's'} en total`}
          </p>
        </div>

        <div className="mb-6">
          <Link
            to="/buscar"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-borderc text-sm font-semibold text-ink hover:border-brand hover:text-brand transition-colors"
          >
            <FiGrid size={16} />
            Todas las categorías
          </Link>
        </div>

        {categories.length === 0 && (
          <p className="text-[13.5px] text-muted">Aún no hay eventos publicados para mostrar categorías.</p>
        )}

        {categories.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
            {visibleCategories.map(({ name, count, description, isPopular, icon: Icon, gradient, image }) => (
              <Link
                key={name}
                to={`/buscar?categoria=${encodeURIComponent(name)}`}
                className="group relative aspect-[5/4] rounded-card overflow-hidden p-3 flex flex-col justify-between text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                {image && (
                  <img
                    src={image}
                    alt={name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}

                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} ${image ? 'opacity-55 group-hover:opacity-65' : ''} transition-opacity`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                <div className="relative z-[1] flex items-start justify-between">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon size={15} />
                  </div>
                  {isPopular && (
                    <span className="text-[9.5px] font-bold bg-accent text-amber-950 px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                <div className="relative z-[1]">
                  <h3 className="font-display text-[14px] font-semibold mb-0.5">{name}</h3>
                  <p className="text-[10.5px] text-white/85 leading-snug mb-1.5 line-clamp-2">{description}</p>
                  <span className="text-[10.5px] font-semibold text-white/95">
                    {count} evento{count === 1 ? '' : 's'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-7 flex items-center justify-center gap-1.5">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-9 h-9 rounded-lg border border-borderc flex items-center justify-center text-ink hover:border-brand hover:text-brand transition-colors disabled:opacity-40 disabled:pointer-events-none"
              aria-label="Página anterior"
            >
              <FiChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setPage(n)}
                className={`w-9 h-9 rounded-lg text-sm font-semibold border transition-colors
                  ${n === currentPage
                    ? 'bg-brand-light border-brand text-brand'
                    : 'border-borderc text-ink hover:border-brand hover:text-brand'}`}
              >
                {n}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-9 h-9 rounded-lg border border-borderc flex items-center justify-center text-ink hover:border-brand hover:text-brand transition-colors disabled:opacity-40 disabled:pointer-events-none"
              aria-label="Página siguiente"
            >
              <FiChevronRight size={16} />
            </button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
