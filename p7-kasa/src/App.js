import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './Style/main.scss';
import Accueil from './pages/Accueil';
import About from './pages/About';
import FicheLogement from './pages/FicheLogement';
import Code404 from './pages/Code404';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil title="Kasa - accueil" />} />
      <Route path="/About" element={<About title="Kasa - à propos" />} />
      <Route path="/FicheLogement" element={<FicheLogement title="Kasa - logement" />} />
      <Route path="*" element={<Code404 title="Page introuvable" />} />
    </Routes>
  );
};

export default App;