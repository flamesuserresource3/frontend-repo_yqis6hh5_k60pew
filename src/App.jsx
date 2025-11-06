import React from 'react';
import Hero from './components/Hero.jsx';
import Destinations from './components/Destinations.jsx';
import Gallery from './components/Gallery.jsx';
import RoutesMap from './components/RoutesMap.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Destinations />
      <Gallery />
      <RoutesMap />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Your Perfect Travel — Crafted for unforgettable journeys.
      </footer>
    </div>
  );
}

export default App;
