import demoEvents from '../data/eventosDemo.json';
import { FEATURED_EVENTS, UPCOMING_EVENTS, POPULAR_PLACES } from '../constants/homeData.js';

const formatDisplayDate = (dateString, timeString) => {
  const date = new Date(`${dateString}T${timeString}`);

  if (Number.isNaN(date.getTime())) return dateString;

  const weekday = date.toLocaleDateString('es-ES', { weekday: 'short' }).replace('.', '');
  const day = date.getDate();
  const month = date.toLocaleDateString('es-ES', { month: 'short' }).replace('.', '');
  const hour = date.toLocaleTimeString('es-ES', { hour: 'numeric', minute: '2-digit', hour12: true });

  return `${weekday.charAt(0).toUpperCase()}${weekday.slice(1)} ${day} ${month} · ${hour}`;
};

const normalizeEvent = (event) => ({
  ...event,
  id: String(event.id),
  title: event.titulo,
  description: event.descripcion,
  category: event.categoria?.nombre || 'Evento',
  location: event.lugar,
  date: formatDisplayDate(event.fecha, event.hora),
  startsAt: `${event.fecha}T${event.hora}`,
  lat: event.latitud,
  lng: event.longitud,
  price: event.localidades?.[0]?.precio ?? 0,
  gradient: 'from-brand to-sky-300',
  favorite: false,
  photo: event.foto,
  organizer: event.organizador,
  localidades: event.localidades || [],
});

const sortByNearestDate = (events) => {
  const now = Date.now();

  return [...events].sort((a, b) => {
    const aTime = new Date(a.startsAt || a.date).getTime();
    const bTime = new Date(b.startsAt || b.date).getTime();

    const diffA = Math.abs(aTime - now);
    const diffB = Math.abs(bTime - now);

    return diffA - diffB;
  });
};

export async function getFeaturedEvents() {
  const normalized = demoEvents.map(normalizeEvent);
  return Promise.resolve(sortByNearestDate(normalized).slice(0, 2));
}

export async function getUpcomingEvents() {
  const normalized = demoEvents.map(normalizeEvent);
  return Promise.resolve(sortByNearestDate(normalized).slice(0, 4));
}

export async function getMapEvents() {
  return Promise.resolve(demoEvents.map(normalizeEvent));
}

export async function getEventById(eventId) {
  const event = demoEvents.find((item) => String(item.id) === String(eventId));
  return Promise.resolve(event ? normalizeEvent(event) : null);
}

export async function getPopularPlaces() {
  return Promise.resolve(POPULAR_PLACES);
}
