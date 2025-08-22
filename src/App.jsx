import './App.css'
import OnboardingStepOne from './pages/onboarding/OnboardingStepOne.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

export default App
