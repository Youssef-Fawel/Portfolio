import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import ViewCV from './pages/ViewCV';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
    
  useEffect(() => {
    // Simulate progressive loading
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);
        
    return () => clearInterval(progressInterval);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">
            <div className="logo-container">
              <div className="geometric-shape shape-1"></div>
              <div className="geometric-shape shape-2"></div>
              <div className="geometric-shape shape-3"></div>
              <div className="center-dot"></div>
            </div>
          </div>
          
          <div className="loading-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <div className="progress-text">
              {Math.round(loadingProgress)}%
            </div>
          </div>
          
          <p className="loading-text">
            Crafting exceptional experience...
          </p>
        </div>
        
        <div className="loading-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
                
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
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
  );
}

export default App;
