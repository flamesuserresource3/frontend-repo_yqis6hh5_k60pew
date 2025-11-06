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

const Explore = () => {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Gallery</h2>
        <p className="mt-2 max-w-xl text-white/60">High-quality photos and clips that tell the story of relaxing, joyful travel.</p>
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

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <h3 className="text-xl font-semibold">Share your story</h3>
        <p className="mt-1 text-white/70">Have a favorite moment? Submit your photo link and caption to be featured.</p>
        <form className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          <input className="rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-indigo-400" placeholder="Photo URL" />
          <input className="rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-indigo-400" placeholder="Caption" />
          <button type="button" className="rounded-lg bg-indigo-500 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-400">Submit</button>
        </form>
      </div>

      <div id="contact" className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <h3 className="text-xl font-semibold">Contact & Booking</h3>
        <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <p className="text-white/70">Phone</p>
            <p className="font-medium">+1 (555) 123-4567</p>
            <p className="mt-3 text-white/70">Office Hours</p>
            <p className="font-medium">Mon–Fri, 9am–6pm</p>
            <p className="mt-3 text-white/70">Social</p>
            <p className="font-medium">@yourperfecttravel</p>
          </div>
          <form className="md:col-span-2 grid grid-cols-1 gap-3">
            <input className="rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-indigo-400" placeholder="Full name" required />
            <input type="email" className="rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-indigo-400" placeholder="Email address" required />
            <input className="rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-indigo-400" placeholder="Phone number" required />
            <textarea className="min-h-[120px] rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-indigo-400" placeholder="Trip idea, dates, and budget" required />
            <button type="button" className="mt-2 w-fit rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-400">Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Explore;
