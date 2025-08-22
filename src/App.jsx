import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import AuthScreen from './pages/auth/Authscreen.jsx'
//import Register from './pages/auth/Register.jsx';
import OnboardingStepOne from './pages/onboarding/OnboardingStepOne.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/*<Route path="/" element={<Authscreen />} />
        <Route path="/register" element={<Register />} />*/}
        <Route path="/" element={<OnboardingStepOne />} />
        <Route path="/onboarding-one" element={<OnboardingStepOne />} />
      </Routes>
    </Router>
  );
}

export default App;
