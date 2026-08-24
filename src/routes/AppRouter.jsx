import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import EventDetailPage from '../pages/EventDetailPage.jsx';
import BuscarEventosPage from '../pages/BuscarEventosPage.jsx';
import AdminPanel from '../pages/AdminPanel.jsx';
import ModeradorPanel from '../pages/ModeradorPanel.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos/:id" element={<EventDetailPage />} />
        <Route path="/buscar" element={<BuscarEventosPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/moderador" element={<ModeradorPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

