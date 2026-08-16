import { FEATURED_EVENTS, UPCOMING_EVENTS, POPULAR_PLACES } from '../constants/homeData.js';

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
  return Promise.resolve(sortByNearestDate(FEATURED_EVENTS));
}

export async function getUpcomingEvents() {
  return Promise.resolve(sortByNearestDate(UPCOMING_EVENTS));
}

export async function getPopularPlaces() {
  return Promise.resolve(POPULAR_PLACES);
}
