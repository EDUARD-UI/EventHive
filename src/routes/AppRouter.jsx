import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Próximas rutas: /explorar, /eventos/:id, /panel, /perfil */}
      </Routes>
    </BrowserRouter>
  );
}
