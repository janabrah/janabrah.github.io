import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import {
  Home,
  Contact,
  Projects,
  Publications,
  Career,
  NotFound,
  // Planetary Science
  PlanetaryScience,
  EuropaShape,
  LunarDynamo,
  Ferrovolcanism,
  PlanetaryRotation,
  PlanetesimalFormation,
  EMCoupling,
  // Forward
  Forward,
  ForwardOperations,
  ForwardSoftware,
  Scheduling,
  Onboarding,
  Allocations,
  ForwardInventory,
  Infrastructure,
  ITSystems,
  // Meter
  Meter,
  Trident,
  ProjectManagement,
  NetworkDiagnostics,
  Dashboard,
} from './pages';
import './App.css';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='career' element={<Career />} />

          {/* Planetary Science */}
          <Route
            path='career/planetary-science'
            element={<PlanetaryScience />}
          />
          <Route
            path='career/planetary-science/projects'
            element={<Projects />}
          />
          <Route
            path='career/planetary-science/publications'
            element={<Publications />}
          />
          <Route
            path='career/planetary-science/projects/europa-shape'
            element={<EuropaShape />}
          />
          <Route
            path='career/planetary-science/projects/lunar-dynamo'
            element={<LunarDynamo />}
          />
          <Route
            path='career/planetary-science/projects/ferrovolcanism'
            element={<Ferrovolcanism />}
          />
          <Route
            path='career/planetary-science/projects/planetary-rotation'
            element={<PlanetaryRotation />}
          />
          <Route
            path='career/planetary-science/projects/planetesimal-formation'
            element={<PlanetesimalFormation />}
          />
          <Route
            path='career/planetary-science/projects/em-coupling'
            element={<EMCoupling />}
          />

          {/* Forward */}
          <Route path='career/forward' element={<Forward />} />
          <Route
            path='career/forward/operations'
            element={<ForwardOperations />}
          />
          <Route
            path='career/forward/operations/scheduling'
            element={<Scheduling />}
          />
          <Route
            path='career/forward/operations/onboarding'
            element={<Onboarding />}
          />
          <Route path='career/forward/software' element={<ForwardSoftware />} />
          <Route
            path='career/forward/software/allocations'
            element={<Allocations />}
          />
          <Route
            path='career/forward/software/inventory'
            element={<ForwardInventory />}
          />
          <Route
            path='career/forward/software/infrastructure'
            element={<Infrastructure />}
          />
          <Route
            path='career/forward/software/it-systems'
            element={<ITSystems />}
          />

          {/* Meter */}
          <Route path='career/meter' element={<Meter />} />
          <Route path='career/meter/trident' element={<Trident />} />
          <Route
            path='career/meter/project-management'
            element={<ProjectManagement />}
          />
          <Route
            path='career/meter/network-diagnostics'
            element={<NetworkDiagnostics />}
          />
          <Route path='career/meter/dashboard' element={<Dashboard />} />

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
