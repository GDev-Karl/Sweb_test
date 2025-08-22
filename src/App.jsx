import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnboardingStepOne from './pages/onboarding/OnboardingStepOne.jsx';
import './App.css'
import './index.css'
import OnboardingServicesScreen from './pages/OnboardingServicesScreen'
import OnboardingSlidesScreen from './pages/OnboardingSlidesScreen'

function App() {
  return (
    <Router>
      <Routes>
        {/*<Route path="/" element={<Authscreen />} />
        <Route path="/register" element={<Register />} />*/}
        <Route path="/" element={<OnboardingStepOne />} />
        <Route path="/onboarding-services" element={<OnboardingServicesScreen />} />
        <Route path="/onboarding-slides" element={<OnboardingSlidesScreen />} />
        <Route path="/onboarding-one" element={<OnboardingStepOne />} />
      </Routes>
    </Router>
  );
}

export default App;
