import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Plane, Users, Compass } from 'lucide-react';

const steps = [
  { key: 'where', title: 'Where do you want to go?', icon: Compass },
  { key: 'when', title: 'When are you traveling?', icon: Calendar },
  { key: 'who', title: 'Who is coming along?', icon: Users },
  { key: 'style', title: 'What is your travel style?', icon: Plane },
];

const TripWizard = () => {
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState({ destination: '', dates: '', people: 2, style: 'Relaxed' });

  const next = () => setIndex((i) => Math.min(i + 1, steps.length - 1));
  const back = () => setIndex((i) => Math.max(i - 1, 0));

  const current = steps[index];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks! We\nDestination: ${form.destination}\nDates: ${form.dates}\nPeople: ${form.people}\nStyle: ${form.style}`);
  };

  return (
    <section id="wizard" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Trip Planning Wizard</h2>
        <p className="mt-2 text-white/70">A quick, friendly way to shape your perfect itinerary. Answer a few prompts and we’ll craft your route.</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="mb-6 grid grid-cols-4 gap-3">
          {steps.map((s, i) => (
            <div key={s.key} className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${i === index ? 'bg-indigo-500/20 text-indigo-200' : 'bg-white/5 text-white/70'}`}>
              <s.icon size={16} />
              <span className="hidden sm:inline">{s.title}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence mode="wait">
            {index === 0 && (
              <motion.div key="where" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                <label className="block text-sm text-white/80">Destination or region</label>
                <input value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} className="mt-2 w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-indigo-400" placeholder="e.g., Japan, Mediterranean, Patagonia" required />
              </motion.div>
            )}
            {index === 1 && (
              <motion.div key="when" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                <label className="block text-sm text-white/80">Dates</label>
                <input value={form.dates} onChange={(e) => setForm({ ...form, dates: e.target.value })} className="mt-2 w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-indigo-400" placeholder="e.g., 10–20 Aug 2025" required />
              </motion.div>
            )}
            {index === 2 && (
              <motion.div key="who" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                <label className="block text-sm text-white/80">Number of travelers</label>
                <input type="number" min={1} value={form.people} onChange={(e) => setForm({ ...form, people: Number(e.target.value) })} className="mt-2 w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-indigo-400" required />
              </motion.div>
            )}
            {index === 3 && (
              <motion.div key="style" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                <label className="block text-sm text-white/80">Travel style</label>
                <select value={form.style} onChange={(e) => setForm({ ...form, style: e.target.value })} className="mt-2 w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-indigo-400">
                  <option className="bg-slate-900" value="Relaxed">Relaxed</option>
                  <option className="bg-slate-900" value="Balanced">Balanced</option>
                  <option className="bg-slate-900" value="Adventure">Adventure</option>
                  <option className="bg-slate-900" value="Luxury">Luxury</option>
                </select>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between">
            <button type="button" onClick={back} disabled={index === 0} className="rounded-lg border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/80 disabled:cursor-not-allowed disabled:opacity-40">Back</button>
            {index < steps.length - 1 ? (
              <button type="button" onClick={next} className="rounded-lg bg-indigo-500 px-6 py-2 text-sm font-semibold text-white hover:bg-indigo-400">Next</button>
            ) : (
              <button type="submit" className="rounded-lg bg-emerald-500 px-6 py-2 text-sm font-semibold text-white hover:bg-emerald-400">Request Custom Itinerary</button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default TripWizard;
