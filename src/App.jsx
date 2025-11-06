import React from 'react';
import Hero from './components/Hero.jsx';
import Destinations from './components/Destinations.jsx';
import TripWizard from './components/TripWizard.jsx';
import Explore from './components/Explore.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Destinations />
      <TripWizard />
      <Explore />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Your Perfect Travel — Discover your perfect journey.
      </footer>
    </div>
  );
}

export default App;
