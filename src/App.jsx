import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnboardingOne from './pages/onboarding/OnboardingStepOne';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingStepOne />} />
      </Routes>
    </Router>
  );
}

export default App;
