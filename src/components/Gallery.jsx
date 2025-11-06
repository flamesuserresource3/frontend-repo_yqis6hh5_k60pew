import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518602164578-cd0074062769?q=80&w=1800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1800&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Motion Gallery</h2>
        <p className="mt-2 max-w-xl text-white/60">A kinetic collage of travel moments. Hover cards float; click to view full size.</p>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
        {photos.map((src, i) => (
          <motion.a
            key={i}
            href={src}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -6 }}
            className="mb-4 block overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-md backdrop-blur">
            <img src={src} alt="Travel" className="w-full object-cover transition duration-500 hover:scale-[1.02]" loading="lazy" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
