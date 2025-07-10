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
        return prev + Math.random() * 10 + 5;
      });
    }, 150);
        
    return () => clearInterval(progressInterval);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          {/* Main Spinner */}
          <div className="spinner-container">
            <div className="spinner-outer"></div>
            <div className="spinner-middle"></div>
            <div className="spinner-inner"></div>
            <div className="spinner-dot"></div>
          </div>
          
          {/* Progress Bar */}
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${Math.min(loadingProgress, 100)}%` }}
              ></div>
            </div>
            <div className="progress-percentage">
              {Math.round(Math.min(loadingProgress, 100))}%
            </div>
          </div>
          
          {/* Loading Text */}
          <div className="loading-text-container">
            <p className="loading-text">Loading Portfolio...</p>
            <div className="loading-dots">
              <span className="dot dot1">.</span>
              <span className="dot dot2">.</span>
              <span className="dot dot3">.</span>
            </div>
          </div>
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
