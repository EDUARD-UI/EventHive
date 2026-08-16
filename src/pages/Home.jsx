import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import CategoryChips from '../components/CategoryChips.jsx';
import FeaturedEventCard from '../components/FeaturedEventCard.jsx';
import EventCard from '../components/EventCard.jsx';
import PlaceCard from '../components/PlaceCard.jsx';
import Footer from '../components/Footer.jsx';
import { CATEGORIES } from '../constants/homeData.js';
import { getFeaturedEvents, getUpcomingEvents, getPopularPlaces } from '../services/eventService.js';

export default function Home() {
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getFeaturedEvents().then(setFeaturedEvents);
    getUpcomingEvents().then(setUpcomingEvents);
    getPopularPlaces().then(setPlaces);
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto bg-surface shadow-lg overflow-hidden">
      <Navbar />
      <Hero />
      <CategoryChips categories={CATEGORIES} onChange={(id) => console.log('categoría seleccionada:', id)} />

      <section className="px-6 sm:px-10 py-8 sm:py-11">
        <div className="flex items-baseline justify-between mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-display">Eventos destacados</h2>
            <p className="text-[13.5px] text-muted mt-1">Los más populares de la semana</p>
          </div>
          <a href="#" className="text-[13.5px] font-semibold text-brand">Ver todos →</a>
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          {featuredEvents.map((event) => (
            <FeaturedEventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="bg-bg px-6 sm:px-10 py-8 sm:py-11">
        <div className="flex items-baseline justify-between mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-display">Próximos eventos</h2>
            <p className="text-[13.5px] text-muted mt-1">Basados en tu ubicación</p>
          </div>
          <a href="#" className="text-[13.5px] font-semibold text-brand">Ver todos →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-10 py-8 sm:py-11">
        <div className="mb-5">
          <h2 className="text-xl sm:text-2xl font-display">Lugares populares</h2>
          <p className="text-[13.5px] text-muted mt-1">Dónde suceden los mejores eventos</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
