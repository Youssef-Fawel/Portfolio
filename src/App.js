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
  const [loadingText, setLoadingText] = useState('Initializing...');
    
  useEffect(() => {
    const loadingSteps = [
      { progress: 20, text: 'Loading assets...' },
      { progress: 40, text: 'Preparing components...' },
      { progress: 60, text: 'Setting up portfolio...' },
      { progress: 80, text: 'Finalizing experience...' },
      { progress: 100, text: 'Welcome!' }
    ];

    let currentStep = 0;
    
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.random() * 8 + 2;
        
        // Update loading text based on progress
        if (currentStep < loadingSteps.length && newProgress >= loadingSteps[currentStep].progress) {
          setLoadingText(loadingSteps[currentStep].text);
          currentStep++;
        }
        
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        return newProgress;
      });
    }, 120);
        
    return () => clearInterval(progressInterval);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        {/* Animated Background */}
        <div className="loading-bg">
          <div className="bg-animation"></div>
          <div className="bg-overlay"></div>
        </div>

        {/* Floating Particles */}
        <div className="particles-container">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>

        <div className="loading-content">
          {/* Logo/Brand Section */}
          <div className="loading-brand">
            <div className="brand-container">
              <div className="brand-icon">
                <div className="icon-layer layer-1"></div>
                <div className="icon-layer layer-2"></div>
                <div className="icon-layer layer-3"></div>
                <div className="brand-letter">Y</div>
              </div>
              <h1 className="brand-name">Youssef Fawel</h1>
              <p className="brand-subtitle">Full Stack Developer</p>
            </div>
          </div>

          {/* Advanced Spinner */}
          <div className="spinner-advanced">
            <div className="spinner-ring ring-1"></div>
            <div className="spinner-ring ring-2"></div>
            <div className="spinner-ring ring-3"></div>
            <div className="spinner-core">
              <div className="core-dot"></div>
            </div>
          </div>
          
          {/* Progress Section */}
          <div className="progress-section">
            <div className="progress-bar-container">
              <div className="progress-bar-bg">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${Math.min(loadingProgress, 100)}%` }}
                >
                  <div className="progress-glow"></div>
                </div>
              </div>
              <div className="progress-info">
                <span className="progress-text">{loadingText}</span>
                <span className="progress-percentage">
                  {Math.round(Math.min(loadingProgress, 100))}%
                </span>
              </div>
            </div>
          </div>

          {/* Loading Status */}
          <div className="loading-status">
            <div className="status-dots">
              <div className="status-dot active"></div>
              <div className="status-dot active"></div>
              <div className="status-dot active"></div>
              <div className="status-dot"></div>
            </div>
            <p className="status-message">Crafting your digital experience</p>
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="corner-decoration top-left"></div>
        <div className="corner-decoration top-right"></div>
        <div className="corner-decoration bottom-left"></div>
        <div className="corner-decoration bottom-right"></div>
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
