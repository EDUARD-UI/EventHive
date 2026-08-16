import { useEffect, useState } from 'react';
import { CircleMarker, MapContainer, Popup, TileLayer } from 'react-leaflet';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import FeaturedEventCard from '../components/FeaturedEventCard.jsx';
import EventCard from '../components/EventCard.jsx';
import Footer from '../components/Footer.jsx';
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

      <section className="px-6 sm:px-10 py-8 sm:py-11">
        <div className="flex items-baseline justify-between mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-display">Próximos eventos</h2>
            <p className="text-[13.5px] text-muted mt-1">Eventos cercanos a la fecha actual</p>
          </div>
          <a href="#" className="text-[13.5px] font-semibold text-brand">Ver todos →</a>
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          {featuredEvents.slice(0, 2).map((event) => (
            <FeaturedEventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="bg-bg px-6 sm:px-10 py-8 sm:py-11">
        <div className="flex items-baseline justify-between mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-display">Más eventos</h2>
            <p className="text-[13.5px] text-muted mt-1">Aún tienes opciones para esta semana</p>
          </div>
          <a href="#" className="text-[13.5px] font-semibold text-brand">Ver todos →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {upcomingEvents.slice(0, 4).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-10 py-8 sm:py-11">
        <div className="mb-5">
          <h2 className="text-xl sm:text-2xl font-display">Mapa de eventos</h2>
          <p className="text-[13.5px] text-muted mt-1">Zonas con mayor actividad en Cartagena</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-borderc shadow-sm h-[360px]">
          <MapContainer center={[10.3928, -75.4833]} zoom={12} scrollWheelZoom className="h-full w-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {places.map((place) => (
              <CircleMarker
                key={place.id}
                center={[place.lat, place.lng]}
                radius={10}
                pathOptions={{ color: '#007BFF', fillColor: '#007BFF', fillOpacity: 0.8 }}
              >
                <Popup>
                  <div className="space-y-1">
                    <p className="font-semibold text-ink">{place.name}</p>
                    <p className="text-sm text-muted">{place.activeEvents} eventos activos</p>
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
}
