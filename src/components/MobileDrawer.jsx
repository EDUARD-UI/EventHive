import { FiX } from 'react-icons/fi';
import { NAV_LINKS } from '../constants/navigation.js';

export default function MobileDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-ink/50 z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute top-0 right-0 bottom-0 w-[78%] max-w-[300px] bg-white p-5 flex flex-col gap-1">
        <button
          onClick={onClose}
          aria-label="Cerrar menú"
          className="self-end mb-2.5 w-9 h-9 rounded-full border border-borderc flex items-center justify-center"
        >
          <FiX />
        </button>

        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} className="py-3 px-2 text-[15px] font-semibold border-b border-borderc">
            {link.label}
          </a>
        ))}

        <div className="mt-4 flex flex-col gap-2.5">
          <button className="w-full py-2.5 rounded-lg text-sm font-semibold border border-borderc">
            Iniciar sesión
          </button>
          <button className="w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-brand">
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}
