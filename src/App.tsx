import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import HomePage from '@/pages/HomePage';
import TravelPage from '@/pages/TravelPage';
import FoodPage from '@/pages/FoodPage';
import PetsPage from '@/pages/PetsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/pets" element={<PetsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
