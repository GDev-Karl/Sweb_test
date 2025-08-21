
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authscreen from './page/auth/authscreen.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authscreen />} />
        {/* Ajoutez d'autres routes ici si nécessaire */}
      </Routes>
    </Router>
  );
}

export default App;
