import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

export default function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState('usuario'); // 'usuario' | 'organizador'
  const [name, setName] = useState('');
  const [orgName, setOrgName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const isOrganizer = role === 'organizador';

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Completá todos los campos.');
      return;
    }

    if (isOrganizer && (!orgName || !phone)) {
      setError('Completá los datos del organizador.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // TODO: conectar con Firebase/Supabase (createUserWithEmailAndPassword)
    console.log(
      isOrganizer
        ? { role, name, orgName, phone, email, password }
        : { role, name, email, password }
    );
  }

  function handleGoogleRegister() {
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
            Sumate a la
            <br />
            colmena.
          </h1>
          <p className="text-sm text-sky-100 max-w-xs">
            Creá tu cuenta como asistente para descubrir eventos, o como organizador para publicar los tuyos.
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

        <Link to="/" className="lg:hidden font-display font-bold text-lg mb-6">
          event<span className="text-brand">hive</span>
        </Link>

        <div className="w-full max-w-[400px]">
          <p className="text-brand text-xs font-bold tracking-wide mb-1.5">
            ÚNETE A EVENTHIVE
          </p>
          <h2 className="font-display font-bold text-[28px] mb-6">
            Crea tu cuenta
          </h2>

          <div className="flex mb-6 rounded-lg border border-borderc overflow-hidden">
            <button
              type="button"
              onClick={() => setRole('usuario')}
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                role === 'usuario'
                  ? 'bg-brand text-white'
                  : 'bg-white text-muted hover:text-brand'
              }`}
            >
              Usuario
            </button>
            <button
              type="button"
              onClick={() => setRole('organizador')}
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                role === 'organizador'
                  ? 'bg-brand text-white'
                  : 'bg-white text-muted hover:text-brand'
              }`}
            >
              Organizador
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-muted mb-1.5">
                {isOrganizer ? 'Nombre del responsable' : 'Nombre completo'}
              </label>
              <div className="relative">
                <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-borderc text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-shadow"
                />
              </div>
            </div>

            {isOrganizer && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-muted mb-1.5">
                    Organización
                  </label>
                  <input
                    type="text"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-borderc text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted mb-1.5">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-borderc text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-shadow"
                  />
                </div>
              </div>
            )}

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
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-borderc text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-shadow"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
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
                    className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-borderc text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-shadow"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted mb-1.5">
                  Confirmar
                </label>
                <div className="relative">
                  <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-borderc text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-shadow"
                  />
                </div>
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-sm font-bold text-white bg-brand shadow-[0_8px_20px_-6px_rgba(0,123,255,.55)] hover:bg-brand-dark transition-colors"
            >
              Registrarse
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <span className="flex-1 h-px bg-borderc" />
            <span className="text-[11px] text-muted">o continuá con</span>
            <span className="flex-1 h-px bg-borderc" />
          </div>

          <button
            onClick={handleGoogleRegister}
            className="w-full flex items-center justify-center gap-2.5 py-2.5 rounded-lg text-sm font-semibold border border-borderc hover:border-brand hover:shadow-sm transition-all"
          >
            <FcGoogle size={18} />
            Continuar con Google
          </button>

          <p className="text-center text-xs text-muted mt-7">
            ¿Ya tienes cuenta?{' '}
            <Link to="/inicioSesion" className="text-brand font-semibold hover:underline">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}