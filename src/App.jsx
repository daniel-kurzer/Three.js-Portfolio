import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Preloader } from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideUp(true); // Starte das Slide-Up
      setTimeout(() => {
        setLoading(false); // Blende Preloader aus und zeige den Inhalt an
      }, 1000); // Warte auf das Ende der Slide-Up-Animation (1s)
    }, 4000); // Preloader bleibt 3 Sekunden sichtbar

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {loading ? (
          <Preloader slideUp={slideUp} />
        ) : (
          <>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
            </div>
            <About />
            <Tech />
            <Experience />
            <Works />
            <Feedbacks />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
