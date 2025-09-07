"use client";

import type { FC } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const allDesigns = [
  { id: 1, category: 'Mobile', src: 'https://picsum.photos/seed/mobile1/600/800', alt: 'Mobile App Design 1', 'data-ai-hint': "mobile app" },
  { id: 2, category: 'Web', src: 'https://picsum.photos/seed/web1/800/600', alt: 'Web Design 1', 'data-ai-hint': "web design" },
  { id: 3, category: 'AI Tools', src: 'https://picsum.photos/seed/ai1/800/600', alt: 'AI Tool Interface', 'data-ai-hint': "AI interface" },
  { id: 4, category: 'E-commerce', src: 'https://picsum.photos/seed/ecom1/800/600', alt: 'E-commerce Platform Design', 'data-ai-hint': "ecommerce platform" },
  { id: 5, category: 'Mobile', src: 'https://picsum.photos/seed/mobile2/600/800', alt: 'Mobile App Design 2', 'data-ai-hint': "mobile app" },
  { id: 6, category: 'Web', src: 'https://picsum.photos/seed/web2/800/600', alt: 'Web Design 2', 'data-ai-hint': "web design" },
  { id: 7, category: 'Mobile', src: 'https://picsum.photos/seed/mobile3/600/800', alt: 'Mobile App Design 3', 'data-ai-hint': "mobile app" },
  { id: 8, category: 'AI Tools', src: 'https://picsum.photos/seed/ai2/800/600', alt: 'AI Analytics Dashboard', 'data-ai-hint': "analytics dashboard" },
];

const filters = ['All', 'Mobile', 'Web', 'AI Tools', 'E-commerce'];

const DesignsSection: FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredDesigns = activeFilter === 'All'
    ? allDesigns
    : allDesigns.filter(design => design.category === activeFilter);

  return (
    <section id="designs" className="section-bg-yellow">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl mb-4 text-center">Visual Gallery</h2>
        <p className="text-center mb-12 text-lg">A collection of my recent design explorations and projects.</p>
        
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {filters.map(filter => (
            <Button 
              key={filter} 
              onClick={() => setActiveFilter(filter)}
              className={`neo-btn ${activeFilter === filter ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground'}`}
            >
              {filter}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredDesigns.map(design => (
              <motion.div
                key={design.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="neo-card p-0 overflow-hidden group"
              >
                <div className="relative w-full h-96">
                  <Image
                    src={design.src}
                    alt={design.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={design['data-ai-hint']}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300 flex items-end p-4">
                    <h3 className="text-white text-2xl font-headline opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-4 group-hover:translate-y-0">{design.alt}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignsSection;
