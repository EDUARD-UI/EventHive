import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCalendar, FiMapPin, FiSearch } from 'react-icons/fi';

export default function SearchCard() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();

    const params = new URLSearchParams();
    if (titulo.trim()) params.set('titulo', titulo.trim());
    if (fecha) params.set('fecha', fecha);

    navigate(`/buscar${params.toString() ? `?${params.toString()}` : ''}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative z-[5] mx-auto mt-2 flex w-full flex-col gap-1.5 rounded-2xl bg-white p-2.5 shadow-lg sm:flex-row"
    >
      <label className="min-w-0 flex-1 flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg sm:border-r border-b sm:border-b-0 border-borderc cursor-text">
        <FiSearch className="text-brand shrink-0" />
        <div className="min-w-0 flex-1 text-left">
          <div className="text-[10.5px] uppercase tracking-wide font-semibold text-muted">Buscar</div>
          <input
            type="text"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
            placeholder="Festivales, conciertos..."
            className="w-full bg-transparent text-sm font-semibold text-ink outline-none placeholder:font-normal placeholder:text-slate-400"
          />
        </div>
      </label>

      <label className="min-w-0 flex-1 flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg sm:border-r border-b sm:border-b-0 border-borderc cursor-text">
        <FiMapPin className="text-red-500 shrink-0" />
        <div className="min-w-0 flex-1 text-left">
          <div className="text-[10.5px] uppercase tracking-wide font-semibold text-muted">Dónde</div>
          <input
            type="text"
            defaultValue="Centro Histórico"
            aria-label="Ubicación"
            className="w-full bg-transparent text-sm font-semibold text-ink outline-none"
          />
        </div>
      </label>

      <label className="min-w-0 flex-1 flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg cursor-text">
        <FiCalendar className="text-brand shrink-0" />
        <div className="min-w-0 flex-1 text-left">
          <div className="text-[10.5px] uppercase tracking-wide font-semibold text-muted">Cuándo</div>
          <input
            type="date"
            value={fecha}
            onChange={(event) => setFecha(event.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-ink outline-none"
          />
        </div>
      </label>

      <button
        type="submit"
        className="self-center sm:self-auto justify-center px-5 py-3.5 rounded-lg text-sm font-semibold text-white bg-brand hover:bg-brand-dark transition-colors"
      >
        Buscar eventos
      </button>
    </form>
  );
}
