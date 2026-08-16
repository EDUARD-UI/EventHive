import { FiSearch, FiCalendar } from 'react-icons/fi';
import Swal from 'sweetalert2';

const fields = [
  { icon: FiSearch, label: 'Buscar', value: 'Festivales, conciertos...' },
  { icon: FiCalendar, label: 'Cuándo', value: 'Este fin de semana' },
];

export default function SearchCard() {
  const handleSearch = () => {
    Swal.fire({
      title: 'Buscando eventos…',
      text: 'Función de búsqueda pendiente de conectar al backend.',
      icon: 'info',
      confirmButtonColor: '#007BFF',
    });
  };

  return (
    <div className="relative z-[5] w-full bg-white rounded-2xl shadow-lg p-2.5 flex flex-col sm:flex-row gap-1.5 mt-2 mx-auto">
      {fields.map(({ icon: Icon, label, value }, i) => (
        <div
          key={label}
          className={`flex-1 flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg
            ${i < fields.length - 1 ? 'sm:border-r border-b sm:border-b-0 border-borderc' : ''}`}
        >
          <Icon className="text-brand shrink-0" />
          <div>
            <div className="text-[10.5px] uppercase tracking-wide font-semibold text-muted">{label}</div>
            <div className="text-sm font-semibold text-ink">{value}</div>
          </div>
        </div>
      ))}
      <button
        onClick={handleSearch}
        className="self-center sm:self-auto justify-center px-5 py-3.5 rounded-lg text-sm font-semibold text-white bg-brand hover:bg-brand-dark transition-colors"
      >
        Buscar eventos
      </button>
    </div>
  );
}
