import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authscreen from './page/auth/authscreen.jsx';
import Register from './page/auth/register.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authscreen />} />
        <Route path="/register" element={<Register />} />
        {/* Ajoutez d'autres routes ici si nécessaire */}
      </Routes>
    </Router>
  );
}

export default App;
