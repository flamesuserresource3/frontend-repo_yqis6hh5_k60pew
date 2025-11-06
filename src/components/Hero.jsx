import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80 backdrop-blur">
          <Rocket size={14} /> Your Perfect Travel
        </span>
        <h1 className="mt-6 bg-gradient-to-br from-white to-white/60 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl">
          Animated journeys. Interactive destinations.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          Discover vibrant 3D experiences, curated routes, and immersive stories that turn every trip into a modern adventure.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#destinations" className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300">
            <MapPin size={16} /> Explore Destinations
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
            <Phone size={16} /> Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
