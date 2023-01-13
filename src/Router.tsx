import { Route, Routes } from 'react-router-dom';
import { Catalogue } from './pages/catalogue';
import { Fashion } from './pages/fashion';
import { Favourite } from './pages/favourite';
import { Landing } from './pages/landing';
import { LifeStyle } from './pages/lifestyle';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/lifestyle" element={<LifeStyle />} />
    </Routes>
  );
}
