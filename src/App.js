import HeroSection from './HeroSection.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Explanation from './Explanation.js';
import ContactPage from './ContactPage.js';
import Navbar from './Navbar.js';
import LoginPage from './LoginPage.js';
import SignupPage from './SignupPage.js';
import Features from './Features.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/' element={
          <div>
            <Navbar />
            <HeroSection />
            <Explanation />
          </div>
        } />
        <Route path='/contact' element={<div>
          <Navbar />
          <ContactPage />
          </div>
          } />
        <Route path='/features' element={<div>
          <Navbar />
          <Features />
        </div>} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
