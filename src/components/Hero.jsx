import SearchCard from './SearchCard.jsx';

export default function Hero() {
  return (
    <section className="relative px-6 sm:px-10 pt-12 sm:pt-16 pb-20 sm:pb-24 text-white overflow-hidden bg-[radial-gradient(120%_140%_at_15%_-10%,#2b9dff_0%,#007BFF_45%,#0047a8_100%)]">
      <div className="mx-auto max-w-5xl flex flex-col items-center text-center">
        <h1 className="font-display text-3xl sm:text-[44px] leading-[1.08] max-w-xl mb-3.5">
          Vive Cartagena,
          <br />
          evento a evento.
        </h1>
        <p className="text-sm sm:text-base text-sky-100 max-w-lg mb-7">
          Descubre música, cultura, gastronomía y deporte en la ciudad amurallada — y más allá.
        </p>

        <div className="w-full max-w-[920px]">
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
