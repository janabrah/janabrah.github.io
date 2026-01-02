import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import {
  Home,
  Contact,
  Projects,
  Publications,
  Career,
  PlanetaryScience,
  Forward,
  Meter,
  EuropaShape,
  LunarDynamo,
  Ferrovolcanism,
  PlanetaryRotation,
  PlanetesimalFormation,
  EMCoupling,
} from './pages';
import './App.css';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="career" element={<Career />} />
          <Route path="career/planetary-science" element={<PlanetaryScience />} />
          <Route path="career/planetary-science/projects" element={<Projects />} />
          <Route path="career/planetary-science/publications" element={<Publications />} />
          <Route path="career/planetary-science/projects/europa-shape" element={<EuropaShape />} />
          <Route path="career/planetary-science/projects/lunar-dynamo" element={<LunarDynamo />} />
          <Route path="career/planetary-science/projects/ferrovolcanism" element={<Ferrovolcanism />} />
          <Route path="career/planetary-science/projects/planetary-rotation" element={<PlanetaryRotation />} />
          <Route path="career/planetary-science/projects/planetesimal-formation" element={<PlanetesimalFormation />} />
          <Route path="career/planetary-science/projects/em-coupling" element={<EMCoupling />} />
          <Route path="career/forward" element={<Forward />} />
          <Route path="career/meter" element={<Meter />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
