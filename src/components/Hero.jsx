import SearchCard from './SearchCard.jsx';

export default function Hero() {
  return (
    <section className="relative px-6 sm:px-10 pt-16 sm:pt-24 pb-28 sm:pb-36 text-white overflow-hidden bg-[radial-gradient(120%_140%_at_15%_-10%,#2b9dff_0%,#007BFF_45%,#0047a8_100%)]">
      <div className="mx-auto flex max-w-[1500px] flex-col items-start text-left">
        <div className="mb-3 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-[#ffc107]">
          <span className="h-2 w-2 rounded-full bg-[#ffc107]" />
          En vivo ahora — 12 eventos esta semana
        </div>
        <h1 className="max-w-[900px] font-display text-[42px] font-bold leading-[1.05] sm:text-[60px]">
          Vive la Magia de Cartagena :
          <br />
          Tus Eventos Favoritos te
          <br />
          Esperan
        </h1>
        <p className="mb-6 mt-4 max-w-3xl text-sm text-white sm:text-base">
          Descubre música, cultura, gastronomía y deporte en la ciudad amurallada — y más allá.
        </p>

        <div className="w-full max-w-[920px] self-center">
          <SearchCard />
        </div>
      </div>

      <div className="absolute left-0 right-0 -bottom-0.5 leading-[0]">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-[70px] block">
          <path
            d="M0,40 C240,80 480,0 720,30 C960,60 1200,10 1440,40 L1440,70 L0,70 Z"
            fill="#f5f7fa"
          />
        </svg>
      </div>

    </section>
  );
}
