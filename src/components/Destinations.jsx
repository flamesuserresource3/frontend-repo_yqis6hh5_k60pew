import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Santorini, Greece',
    subtitle: 'Cliffside sunsets & whitewashed charm',
    img: 'https://images.unsplash.com/photo-1506968430777-bf7784a87f22?q=80&w=1800&auto=format&fit=crop',
  },
  {
    title: 'Kyoto, Japan',
    subtitle: 'Temples, tea houses, and tranquil lanes',
    img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d8?q=80&w=1800&auto=format&fit=crop',
  },
  {
    title: 'Maui, Hawaii',
    subtitle: 'Volcanic vistas & golden beaches',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop',
  },
  {
    title: 'Cappadocia, Türkiye',
    subtitle: 'Balloon-dotted skies & cave hotels',
    img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1800&auto=format&fit=crop',
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Interactive Destinations</h2>
          <p className="mt-2 max-w-xl text-white/60">
            Hover to explore. Each card reveals more as you interact — a taste of the journey ahead.
          </p>
        </div>
        <div className="hidden gap-1 text-amber-300 sm:flex">
          <Star size={16} /> <Star size={16} /> <Star size={16} /> <Star size={16} /> <Star size={16} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <motion.article
            whileHover={{ y: -6, rotate: -0.5 }}
            whileTap={{ scale: 0.98 }}
            key={card.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur">
            <img
              src={card.img}
              alt={card.title}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-1 text-sm text-white/60">{card.subtitle}</p>
              <div className="mt-4 flex items-center gap-2 text-indigo-300">
                <MapPin size={16} /> View route ideas
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
