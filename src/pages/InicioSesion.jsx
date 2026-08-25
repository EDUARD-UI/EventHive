import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FiMail, FiLock } from 'react-icons/fi';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Completá correo y contraseña.');
      return;
    }

    // TODO: conectar con Firebase/Supabase (signInWithEmailAndPassword)
    console.log({ email, password, remember });
  }

  function handleGoogleLogin() {
    // TODO: conectar con signInWithPopup(auth, new GoogleAuthProvider())
  }

  return (
    <div className="min-h-screen flex bg-bg">
      {/* Panel de marca */}
      <div className="hidden lg:flex lg:w-[42%] relative flex-col justify-between p-10 text-white overflow-hidden bg-[radial-gradient(120%_140%_at_15%_-10%,#2b9dff_0%,#007BFF_45%,#0047a8_100%)]">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl">
          <span
            className="w-[22px] h-[22px] bg-accent relative inline-block"
            style={{ clipPath: 'polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0% 50%)' }}
          >
            <span
              className="absolute inset-[3px] bg-white"
              style={{ clipPath: 'polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0% 50%)' }}
            />
          </span>
          event<span className="text-accent">hive</span>
        </Link>

        <div>
          <h1 className="font-display text-3xl leading-[1.15] mb-3.5 max-w-xs">
            Vive Cartagena,
            <br />
            evento a evento.
          </h1>
          <p className="text-sm text-sky-100 max-w-xs">
            Iniciá sesión para guardar tus eventos favoritos, seguir organizadores y no perderte nada.
          </p>
        </div>

        <p className="text-[11px] text-sky-100/80">
          © 2026 EventHive · Cartagena, Colombia
        </p>

        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -bottom-16 w-64 h-64 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, transparent 20%, rgba(255,255,255,.4) 21%, rgba(255,255,255,.4) 22%, transparent 23%)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      {/* Formulario */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold bg-white border border-borderc text-slate-700 hover:border-brand hover:text-brand transition-colors"
        >
          ← Regresar
        </button>


        <div className="w-full max-w-[400px]">
          <p className="text-brand text-xs font-bold tracking-wide mb-1.5">
            BIENVENIDO DE NUEVO
          </p>
          <h2 className="font-display font-bold text-[28px] mb-8">
            Inicia sesión
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-muted mb-1.5">
                Correo electrónico
              </label>
              <div className="relative">
                <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-borderc text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-shadow"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-muted mb-1.5">
                Contraseña
              </label>
              <div className="relative">
                <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-borderc text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-shadow"
                />
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-1.5 text-muted">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="accent-brand"
                />
                Recordarme
              </label>
              <a href="#" className="text-brand font-semibold hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-sm font-bold text-white bg-brand shadow-[0_8px_20px_-6px_rgba(0,123,255,.55)] hover:bg-brand-dark transition-colors"
            >
              Iniciar sesión
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <span className="flex-1 h-px bg-borderc" />
            <span className="text-[11px] text-muted">o continuá con</span>
            <span className="flex-1 h-px bg-borderc" />
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2.5 py-2.5 rounded-lg text-sm font-semibold border border-borderc hover:border-brand hover:shadow-sm transition-all"
          >
            <FcGoogle size={18} />
            Continuar con Google
          </button>

          <p className="text-center text-xs text-muted mt-7">
            ¿No tienes cuenta?{' '}
            <Link to="/registro" className="text-brand font-semibold hover:underline">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}