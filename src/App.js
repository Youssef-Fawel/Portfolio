import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Internships from './pages/Internships';
import Certificates from './pages/Certificates';
import ViewCV from './pages/ViewCV';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';

// Loaded after page styles so shared accessibility and responsive safeguards win.
import './styles/Global.css';

const RouteScrollReset = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <RouteScrollReset />
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/cv" element={<ViewCV />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </main>
          <ScrollToTop />
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
