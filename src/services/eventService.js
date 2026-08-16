import { FEATURED_EVENTS, UPCOMING_EVENTS, POPULAR_PLACES } from '../constants/homeData.js';

export async function getFeaturedEvents() {
  // TODO: reemplazar por fetch/axios a la API real
  return Promise.resolve(FEATURED_EVENTS);
}

export async function getUpcomingEvents() {
  return Promise.resolve(UPCOMING_EVENTS);
}

export async function getPopularPlaces() {
  return Promise.resolve(POPULAR_PLACES);
}
