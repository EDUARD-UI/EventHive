export default function PlaceCard({ place }) {
  const { name, activeEvents, gradient } = place;

  return (
    <div
      className={`relative rounded-card overflow-hidden aspect-[3/3.6] flex items-end p-4 text-white bg-gradient-to-br ${gradient}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
      <div className="relative z-[1]">
        <h4 className="text-[15.5px] font-semibold">{name}</h4>
        <span className="text-xs opacity-85">{activeEvents} eventos activos</span>
      </div>
    </div>
  );
}
