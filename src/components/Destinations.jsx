import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const regions = [
  {
    title: 'Mediterranean Escapes',
    subtitle: 'Greece • Italy • Croatia',
    img: 'https://images.unsplash.com/photo-1506968430777-bf7784a87f22?q=80&w=1800&auto=format&fit=crop',
  },
  {
    title: 'Asia Discovery',
    subtitle: 'Japan • Vietnam • Thailand',
    img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d8?q=80&w=1800&auto=format&fit=crop',
  },
  {
    title: 'Tropical Adventures',
    subtitle: 'Hawaii • Bali • Maldives',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop',
  },
  {
    title: 'Epic Landscapes',
    subtitle: 'Iceland • New Zealand • Patagonia',
    img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1800&auto=format&fit=crop',
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Destinations</h2>
          <p className="mt-2 max-w-2xl text-white/60">
            From Mediterranean sunsets to volcanic horizons, explore curated regions. Click a card to view routes and highlights.
          </p>
        </div>
        <div className="hidden gap-1 text-amber-300 sm:flex">
          <Star size={16} /> <Star size={16} /> <Star size={16} /> <Star size={16} /> <Star size={16} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {regions.map((item) => (
          <motion.article
            whileHover={{ y: -6, rotate: -0.5 }}
            whileTap={{ scale: 0.98 }}
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur">
            <img
              src={item.img}
              alt={item.title}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-white/60">{item.subtitle}</p>
              <div className="mt-4 flex items-center gap-2 text-indigo-300">
                <MapPin size={16} /> View region details
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
