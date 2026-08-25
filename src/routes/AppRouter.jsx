import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import EventDetailPage from '../pages/EventDetailPage.jsx';
import BuscarEventosPage from '../pages/BuscarEventosPage.jsx';
import AdminPanel from '../pages/Adminisstrador/AdminPanel.jsx';
import ModeradorPanel from '../pages/Moderador/ModeradorPanel.jsx';
import OrganizadorIndex from '../pages/Organizador/organizadorIndex.jsx';
import AdminPanel from '../pages/AdminPanel.jsx';
import ModeradorPanel from '../pages/ModeradorPanel.jsx';
import InicioSesion from '../pages/InicioSesion.jsx';
import Registro from '../pages/Registro.jsx';
import PerfilUsuario from '../pages/PerfilUsuario.jsx';


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos/:id" element={<EventDetailPage />} />
        <Route path="/buscar" element={<BuscarEventosPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/moderador" element={<ModeradorPanel />} />
        <Route path="/organizador" element={<OrganizadorIndex />} />
        <Route path="/iniciosesion" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/perfil" element={<PerfilUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}

