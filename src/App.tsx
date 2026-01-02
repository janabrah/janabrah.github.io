import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import {
  Home,
  Contact,
  Projects,
  Publications,
  EuropaShape,
  LunarDynamo,
  Ferrovolcanism,
  PlanetaryRotation,
  PlanetesimalFormation,
  EMCoupling,
} from './pages';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/europa-shape" element={<EuropaShape />} />
          <Route path="projects/lunar-dynamo" element={<LunarDynamo />} />
          <Route path="projects/ferrovolcanism" element={<Ferrovolcanism />} />
          <Route path="projects/planetary-rotation" element={<PlanetaryRotation />} />
          <Route path="projects/planetesimal-formation" element={<PlanetesimalFormation />} />
          <Route path="projects/em-coupling" element={<EMCoupling />} />
          <Route path="publications" element={<Publications />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
