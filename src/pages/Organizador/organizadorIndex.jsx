import { useState } from 'react';
import SideBar from '../../components/usersComponets/SideBar.jsx';
import OrganizerEventCard from './OrganizerEventCard.jsx';
import CreateEventWizard from './CreateEventWizard.jsx';
import {
    FiBell, FiCalendar, FiChevronDown, FiCreditCard, FiFilter, FiGrid,
    FiPlus, FiSearch, FiTrendingUp, FiUser, FiUsers, FiX,
} from 'react-icons/fi';

const menuItems = [
    { id: 'resumen', label: 'Resumen', icon: FiGrid },
    { id: 'eventos', label: 'Mis eventos', icon: FiCalendar },
    { id: 'asistentes', label: 'Asistentes', icon: FiUsers },
    { id: 'entradas', label: 'Entradas', icon: FiCreditCard },
    { id: 'perfil', label: 'Mi perfil', icon: FiUser },
    { id: 'actividades', label: 'Actividades Recientes', icon: FiTrendingUp },
];

const chartData = [
    { label: 'Jazz', value: 70 }, { label: 'Sabores', value: 100 },
    { label: 'Feria', value: 52 }, { label: 'Ritmo', value: 84 },
    { label: 'Cine', value: 38 }, { label: 'Cátedra', value: 60 },
];

const events = [
    { name: 'Festival Cartagena Jazz', date: '23 ago', status: 'Activo', tone: 'active', sold: '1.204', capacity: '1.500', action: 'Editar' },
    { name: 'Noche de Sabores', date: '29 ago', status: 'Activo', tone: 'active', sold: '800', capacity: '900', action: 'Editar' },
    { name: 'Cátedra de Historia', date: '9 sep', status: 'Borrador', tone: 'draft', sold: '—', capacity: '', action: 'Editar' },
    { name: 'Concierto de Verano', date: '2 jul', status: 'Finalizado', tone: 'finished', sold: '2.100', capacity: '2.100', action: 'Ver' },
];

const organizerEvents = [
    { id: 1, category: 'Deportivo', title: 'Vóley Playa Bocagrande', date: '7 sep', time: '8:00 AM', location: 'Playas de Bocagrande', price: 0, color: 'green' },
    { id: 2, category: 'Entretenimiento', title: 'Cine bajo las estrellas', date: '4 sep', time: '7:30 PM', location: 'Parque del Centenario', price: '$15.000', color: 'red' },
    { id: 3, category: 'Académico', title: 'Cátedra Historia Colonial', date: '9 sep', time: '5:00 PM', location: 'U. de Cartagena', price: 0, color: 'blue' },
    { id: 4, category: 'Entretenimiento', title: 'Cine bajo las estrellas', date: '4 sep', time: '7:30 PM', location: 'Parque del Centenario', price: '$15.000', color: 'red' },
    { id: 5, category: 'Deportivo', title: 'Vóley Playa Bocagrande', date: '7 sep', time: '8:00 AM', location: 'Playas de Bocagrande', price: 0, color: 'green' },
    { id: 6, category: 'Entretenimiento', title: 'Cine bajo las estrellas', date: '4 sep', time: '7:30 PM', location: 'Parque del Centenario', price: '$15.000', color: 'red' },
    { id: 7, category: 'Académico', title: 'Cátedra Historia Colonial', date: '9 sep', time: '5:00 PM', location: 'U. de Cartagena', price: 0, color: 'blue' },
    { id: 8, category: 'Entretenimiento', title: 'Cine bajo las estrellas', date: '4 sep', time: '7:30 PM', location: 'Parque del Centenario', price: '$15.000', color: 'red' },
];

function Header() {
    return <header className="flex h-[71px] shrink-0 items-center justify-between border-b border-[#e3e8ef] bg-white px-10"><h1 className="font-display text-[18px] font-bold text-[#172033]">Hola, Fundación Cultural Caribe</h1><div className="flex items-center gap-7"><button type="button" aria-label="Notificaciones" className="relative text-[#222936] hover:text-[#087fea]"><FiBell size={16} /><span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-[#168bf3]" /></button><button type="button" aria-label="Abrir perfil" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#087fea] text-xs font-semibold text-white">FC</button></div></header>;
}

function StatCard({ label, value, change }) {
    return <div className="rounded-[11px] border border-[#e0e6ed] bg-white px-[14px] py-[13px]"><p className="text-[10px] font-medium text-[#6e819b]">{label}</p><p className="mt-1 font-display text-[21px] font-bold leading-6 text-[#172033]">{value}</p><p className="mt-1 text-[9px] font-semibold text-[#16bd63]"><span className="mr-1">↑</span>{change}</p></div>;
}

function SalesChart() {
    const [period, setPeriod] = useState('Este mes');
    return <section className="rounded-[13px] border border-[#e0e6ed] bg-white px-4 pb-3 pt-4"><div className="flex items-center justify-between"><h2 className="font-display text-[12px] font-bold text-[#172033]">Ventas por evento (últimos 30 días)</h2><label className="relative"><span className="sr-only">Periodo del gráfico</span><select value={period} onChange={(event) => setPeriod(event.target.value)} className="appearance-none rounded-[8px] border border-[#e0e6ed] bg-white py-1 pl-3 pr-7 text-[10px] text-[#667892] outline-none focus:border-[#087fea]"><option>Este mes</option><option>Últimos 7 días</option><option>Este año</option></select><FiChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#68809d]" size={11} /></label></div><div className="mt-5 flex h-[135px] items-end justify-between gap-8 px-1 sm:px-3">{chartData.map(({ label, value }) => <div key={label} className="flex h-full flex-1 flex-col items-center justify-end gap-2"><div className="w-full max-w-[71px] rounded-t-[6px] bg-gradient-to-br from-[#0b82ee] to-[#39b9e9]" style={{ height: `${value}%` }} /><span className="text-[9px] text-[#657993]">{label}</span></div>)}</div></section>;
}

function EventsTable() {
    return <section className="rounded-[13px] border border-[#e0e6ed] bg-white px-4 pb-4 pt-4"><div className="mb-3 flex items-center justify-between"><h2 className="font-display text-[12px] font-bold text-[#172033]">Mis eventos</h2><button type="button" className="text-[10px] font-semibold text-[#087fea] hover:text-[#0066c9]">Ver todos</button></div><div className="overflow-x-auto"><table className="w-full min-w-[650px] border-collapse text-left"><thead><tr className="border-b border-[#e7ebf0] text-[9px] font-semibold uppercase text-[#71839c]"><th className="pb-2 font-semibold">Evento</th><th className="pb-2 font-semibold">Fecha</th><th className="pb-2 font-semibold">Estado</th><th className="pb-2 font-semibold">Vendidas</th><th className="pb-2 text-right font-semibold">Acción</th></tr></thead><tbody>{events.map((event) => <tr key={event.name} className="border-b border-[#e7ebf0] last:border-0"><td className="py-[11px] text-[10px] font-semibold text-[#273348]">{event.name}</td><td className="py-[11px] text-[10px] text-[#657993]">{event.date}</td><td className="py-[11px]"><span className={`rounded-[5px] px-2 py-1 text-[9px] font-semibold ${event.tone === 'active' ? 'bg-[#d9fbe8] text-[#13b962]' : event.tone === 'draft' ? 'bg-[#fff0d9] text-[#ed8b27]' : 'bg-[#edf2f7] text-[#8394ab]'}`}>{event.status}</span></td><td className="py-[11px] text-[10px] text-[#657993]"><strong className="text-[#273348]">{event.sold}</strong>{event.capacity && ` / ${event.capacity}`}</td><td className="py-[11px] text-right"><button type="button" className="text-[10px] font-semibold text-[#087fea] hover:text-[#0066c9]">{event.action}</button></td></tr>)}</tbody></table></div></section>;
}

function OrganizerEventsView({ onCreate }) {
    const [category, setCategory] = useState('Todos');
    const [year, setYear] = useState('Todos');
    const [search, setSearch] = useState('');
    const filteredEvents = organizerEvents.filter((event) => {
        const matchesCategory = category === 'Todos' || event.category === category;
        const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase()) || event.location.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return <div>
        <div className="flex flex-wrap items-start justify-between gap-4">
            <div><h2 className="font-display text-[18px] font-bold text-[#172033]">Mis Eventos</h2><p className="mt-0.5 text-[13px] text-[#71839c]">Gestión de tus eventos aquí.</p></div>
            <button type="button" onClick={onCreate} className="flex items-center gap-2 rounded-[8px] bg-[#087fea] px-4 py-2 text-[12px] font-semibold text-white shadow-sm transition-colors hover:bg-[#006ed8]"><FiPlus size={14} /> Crear evento</button>
        </div>
        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
            <OrganizerStat value="9" label="Activos" color="bg-[#efff62]" />
            <OrganizerStat value="3" label="Borradores" color="bg-[#c8defd]" />
            <OrganizerStat value="0" label="Finalizados" color="bg-[#12b981]" />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3 rounded-[11px] border border-[#e0e6ed] bg-white px-5 py-3">
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="rounded-[6px] border border-[#e0e6ed] bg-white px-2 py-1.5 text-[10px] text-[#41536c] outline-none"><option value="Todos">Categorías: Todos</option><option value="Deportivo">Deportivo</option><option value="Entretenimiento">Entretenimiento</option><option value="Académico">Académico</option></select>
            <select value={year} onChange={(event) => setYear(event.target.value)} className="rounded-[6px] border border-[#e0e6ed] bg-white px-2 py-1.5 text-[10px] text-[#41536c] outline-none"><option value="Todos">Año: Todos</option><option value="2026">2026</option><option value="2025">2025</option></select>
            <button type="button" className="flex items-center gap-1.5 rounded-[6px] border border-[#e0e6ed] px-2.5 py-1.5 text-[10px] text-[#41536c] hover:border-[#087fea]"><FiFilter size={11} /> Filtrar</button>
            <label className="relative min-w-[190px] flex-1"><span className="sr-only">Buscar eventos</span><FiSearch size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa9bb]" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar..." className="w-full rounded-full border border-[#dce3ea] bg-[#f2f5f8] py-1.5 pl-9 pr-3 text-[10px] outline-none focus:border-[#087fea]" /></label>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{filteredEvents.map((event) => <OrganizerEventCard key={event.id} event={event} />)}</div>
    </div>;
}

function OrganizerStat({ value, label, color }) {
    return <div className="flex h-[75px] items-center gap-5 rounded-[11px] border border-[#e0e6ed] bg-white px-2"><span className={`h-9 w-9 rounded-[10px] ${color}`} /><div><p className="font-display text-[21px] font-bold leading-5 text-[#172033]">{value}</p><p className="mt-1 text-[10px] text-[#172033]">{label}</p></div></div>;
}

export default function OrganizadorIndex() {
    const [activeItem, setActiveItem] = useState('resumen');
    const [creationView, setCreationView] = useState(null);
    const [notification, setNotification] = useState(false);
    const showSuccess = () => { setCreationView(null); setActiveItem('eventos'); setNotification(true); };
    const returnToEvents = () => { setCreationView(null); setActiveItem('eventos'); setNotification(false); };
    return <div className="flex min-h-screen bg-[#f6f8fb] font-body text-[#172033]"><SideBar role="Organizador" items={menuItems} activeItem={activeItem} onSelect={(item) => { setActiveItem(item); setCreationView(null); setNotification(false); }} /><div className="relative flex min-w-0 flex-1 flex-col"><Header />{notification && <div className="absolute right-8 top-[88px] z-30 flex w-[285px] items-start gap-3 rounded-[8px] border border-[#b7e9d2] bg-white px-4 py-3 shadow-[0_5px_16px_rgba(15,23,42,.12)]"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#079f72] text-white"><FiCheck size={14} /></span><div className="flex-1"><p className="text-[12px] font-bold text-[#172033]">Evento creado exitosamente</p><p className="mt-0.5 text-[10px] text-[#71839c]">Tu evento fue guardado correctamente.</p></div><button type="button" aria-label="Cerrar notificación" onClick={() => setNotification(false)} className="text-[#8a98a8] hover:text-[#172033]"><FiX size={14} /></button></div>}<main className="mx-auto w-full max-w-[1100px] flex-1 px-8 pb-10 pt-11">{creationView === 'wizard' ? <CreateEventWizard onBack={returnToEvents} onSave={showSuccess} /> : activeItem === 'resumen' ? <><div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 xl:grid-cols-4"><StatCard label="Eventos activos" value="8" change="2 este mes" /><StatCard label="Entradas vendidas" value="3.412" change="12.4%" /><StatCard label="Ingresos" value="$187M" change="8.1%" /><StatCard label="Asistentes registrados" value="5.098" change="5.6%" /></div><div className="mt-6"><SalesChart /></div><div className="mt-6"><EventsTable /></div></> : activeItem === 'eventos' ? <OrganizerEventsView onCreate={() => setCreationView('wizard')} /> : <section className="flex min-h-[400px] flex-col items-center justify-center rounded-[13px] border border-[#e0e6ed] bg-white text-center"><div className="mb-4 rounded-full bg-[#e8f2ff] p-4 text-[#087fea]"><FiPlus size={22} /></div><h2 className="font-display text-xl font-bold">{menuItems.find((item) => item.id === activeItem)?.label}</h2><p className="mt-2 text-sm text-[#71839c]">Esta sección estará disponible próximamente.</p></section>}</main></div></div>;
}
