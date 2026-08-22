import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import EventDetailPage from '../pages/EventDetailPage.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos/:id" element={<EventDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
