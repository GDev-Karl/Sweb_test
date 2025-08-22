<<<<<<< HEAD
import './App.css'

function App() {

  return (
    <>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
=======
import './App.css'
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

export default App
>>>>>>> c3c69de706398a8f36908236668908529b614b5f
export default App;
