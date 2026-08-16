export const CATEGORIES = [
  { id: 'all', label: 'Todas' },
  { id: 'musica', label: '🎵 Música' },
  { id: 'cultural', label: '🎭 Cultural' },
  { id: 'deportivo', label: '⚽ Deportivo' },
  { id: 'gastronomico', label: '🍽️ Gastronómico' },
  { id: 'academico', label: '🎓 Académico' },
  { id: 'entretenimiento', label: '🎉 Entretenimiento' },
];

export const FEATURED_EVENTS = [
  {
    id: 'jazz-fest',
    category: 'Música',
    title: 'Festival Cartagena Jazz',
    date: 'Sáb 23 ago · 7:00 PM',
    location: 'Plaza de la Aduana, Centro Histórico',
    price: 85000,
    gradient: 'from-brand to-sky-300',
  },
  {
    id: 'sabores-getsemani',
    category: 'Gastronómico',
    title: 'Noche de Sabores de Getsemaní',
    date: 'Vie 29 ago · 6:30 PM',
    location: 'Calle del Guerrero, Getsemaní',
    price: 60000,
    gradient: 'from-orange-400 to-accent',
  },
];

export const UPCOMING_EVENTS = [
  {
    id: 'feria-libro',
    category: 'Cultural',
    title: 'Feria del Libro de Cartagena',
    date: '12 – 20 sep',
    location: 'Centro de Convenciones',
    price: 0,
    gradient: 'from-violet-500 to-sky-400',
    favorite: true,
  },
  {
    id: 'voley-bocagrande',
    category: 'Deportivo',
    title: 'Torneo de Vóley Playa · Bocagrande',
    date: 'Dom 7 sep · 9:00 AM',
    location: 'Playa de Bocagrande',
    price: 25000,
    gradient: 'from-emerald-500 to-green-300',
    favorite: false,
  },
  {
    id: 'cine-baluarte',
    category: 'Entretenimiento',
    title: 'Cine bajo las estrellas · Baluarte',
    date: 'Jue 4 sep · 7:30 PM',
    location: 'Baluarte de Sn. Francisco',
    price: 18000,
    gradient: 'from-pink-500 to-orange-300',
    favorite: false,
  },
  {
    id: 'catedra-historia',
    category: 'Académico',
    title: 'Cátedra de Historia Colonial',
    date: 'Mar 9 sep · 5:00 PM',
    location: 'Universidad de Cartagena',
    price: 0,
    gradient: 'from-brand to-sky-300',
    favorite: false,
  },
];

export const POPULAR_PLACES = [
  { id: 'centro-historico', name: 'Centro Histórico', activeEvents: 128, gradient: 'from-brand-dark to-sky-300' },
  { id: 'getsemani', name: 'Getsemaní', activeEvents: 76, gradient: 'from-violet-500 to-sky-400' },
  { id: 'bocagrande', name: 'Bocagrande', activeEvents: 54, gradient: 'from-orange-400 to-accent' },
];
