import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './components/Navbar';
import CampusTicker from './components/CampusTicker';
import HeroSection from './components/HeroSection';
import AboutOverview from './components/AboutOverview';
import CurriculumExplorer from './components/CurriculumExplorer';
import FacilitiesSection from './components/FacilitiesSection';
import SpecialMomentsSection from './components/SpecialMomentsSection';
import CompetitionsSection from './components/CompetitionsSection';
import Footer from './components/Footer';
import { CheckCircle2, X, ArrowUp } from 'lucide-react';

export default function App() {
  const [toasts, setToasts] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth kinetic momentum scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
      infinite: false
    });

    lenisRef.current = lenis;

    const handleLenisScroll = (e) => {
      const scroll = typeof e.scroll === 'number' ? e.scroll : window.scrollY;
      const limit = typeof e.limit === 'number' ? e.limit : (document.documentElement.scrollHeight - window.innerHeight);
      if (limit > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scroll / limit) * 100)));
      }
      setShowBackToTop(scroll > 350);
    };

    lenis.on('scroll', handleLenisScroll);

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const showToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(element, {
          offset: -90,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        const yOffset = -90;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Top Animated Scroll Progress Line */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Top Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Sections */}
      <main style={{ flex: 1 }}>
        <HeroSection onNavigate={scrollToSection} />
        <CampusTicker />
        <AboutOverview />
        <CurriculumExplorer onNavigate={scrollToSection} />
        <FacilitiesSection />
        <SpecialMomentsSection />
        <CompetitionsSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
        aria-label="Back to top"
        title="Scroll to Top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Toast Feedback */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast">
            <CheckCircle2 size={18} color="var(--primary-red)" style={{ flexShrink: 0 }} />
            <span style={{ flex: 1 }}>{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#9CA3AF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
