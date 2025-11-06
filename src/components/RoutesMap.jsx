import React from 'react';
import { Map, Navigation, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  { title: 'Inspiration', desc: 'Tell us your vibe — beaches, cities, or mountains.' },
  { title: 'Curation', desc: 'We craft routes with timing, transfers, and hidden gems.' },
  { title: 'Booking', desc: 'Flights, stays, experiences — handled end to end.' },
  { title: 'Navigate', desc: 'Interactive maps keep you on track as you explore.' },
];

const RoutesMap = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Smart Route Maps</h2>
          <p className="mt-2 max-w-2xl text-white/60">
            Visualize your journey from takeoff to touchdown. Tap each step to reveal tips and timing.
          </p>
        </div>
        <div className="hidden items-center gap-3 text-indigo-300 md:flex">
          <Compass size={20} /> <Map size={20} /> <Navigation size={20} />
        </div>
      </div>

      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
        {steps.map((s, idx) => (
          <motion.div
            key={s.title}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{idx + 1}. {s.title}</h3>
              <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-300">Step {idx + 1}</span>
            </div>
            <p className="mt-2 text-white/70">{s.desc}</p>
            <div className="mt-4 h-1 w-full rounded-full bg-white/10">
              <div className="h-1 rounded-full bg-indigo-400" style={{ width: `${((idx + 1) / steps.length) * 100}%` }} />
            </div>
          </motion.div>
        ))}
      </div>

      <div id="contact" className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <h3 className="text-xl font-semibold">Plan your perfect route</h3>
        <p className="mt-1 text-white/70">Share your dates and dream destinations. We’ll reply with a crafted itinerary.</p>
        <form className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <input className="rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-indigo-400" placeholder="Your name" />
          <input type="email" className="rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-indigo-400" placeholder="Email address" />
          <input className="rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-indigo-400" placeholder="Dream destination(s)" />
          <textarea className="md:col-span-3 min-h-[120px] rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-indigo-400" placeholder="Tell us about your vibe, dates, and budget"></textarea>
          <div className="md:col-span-3">
            <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400">Request Itinerary</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RoutesMap;
