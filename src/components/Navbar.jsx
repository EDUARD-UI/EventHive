import { FiMenu } from 'react-icons/fi';
import { NAV_LINKS } from '../constants/navigation.js';
import MobileDrawer from './MobileDrawer.jsx';
import { useDisclosure } from '../hooks/useDisclosure.js';

export default function Navbar() {
  const { isOpen, open, close } = useDisclosure(false);

  return (
    <>
      <header className="flex items-center justify-between px-6 sm:px-10 py-4 border-b border-borderc bg-white relative z-20">
        <div className="flex items-center gap-2 font-display font-bold text-xl">
          <span
            className="w-[22px] h-[22px] bg-accent relative inline-block"
            style={{ clipPath: 'polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0% 50%)' }}
          >
            <span
              className="absolute inset-[3px] bg-brand"
              style={{ clipPath: 'polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0% 50%)' }}
            />
          </span>
          event<span className="text-brand">hive</span>
          <span className="text-[10px] font-bold text-brand bg-brand-light px-1.5 py-0.5 rounded ml-1">CTG</span>
        </div>

        <nav className="hidden md:flex gap-7 text-[14.5px] font-medium">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="opacity-75 hover:opacity-100 hover:text-brand transition">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button className="hidden md:inline-flex px-4 py-2.5 rounded-lg text-sm font-semibold border border-borderc hover:border-brand hover:text-brand transition-colors">
            Iniciar sesión
          </button>
          <button className="hidden md:inline-flex px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-brand hover:bg-brand-dark transition-colors">
            Registrarse
          </button>
          <button onClick={open} aria-label="Abrir menú" className="md:hidden p-1.5">
            <FiMenu size={22} />
          </button>
        </div>
      </header>

      <MobileDrawer isOpen={isOpen} onClose={close} />
    </>
  );
}
