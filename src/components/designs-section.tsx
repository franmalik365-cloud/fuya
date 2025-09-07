"use client";

import type { FC } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const allDesigns = [
  { id: 1, category: ['Graphic Design'], src: 'https://picsum.photos/seed/design1/800/600', alt: 'Graphic Design 1', 'data-ai-hint': "graphic design" },
  { id: 2, category: ['E-commerce', 'Web'], src: 'https://picsum.photos/seed/design2/800/600', alt: 'E-commerce Web Design', 'data-ai-hint': "ecommerce web" },
  { id: 3, category: ['E-commerce', 'Web'], src: 'https://picsum.photos/seed/design3/800/600', alt: 'Web E-commerce Platform', 'data-ai-hint': "ecommerce platform" },
  { id: 4, category: ['Mobile'], src: 'https://picsum.photos/seed/design4/600/800', alt: 'Mobile App Concept', 'data-ai-hint': "mobile app" },
  { id: 5, category: ['Mobile', 'E-commerce'], src: 'https://picsum.photos/seed/design5/600/800', alt: 'Mobile E-commerce App', 'data-ai-hint': "mobile ecommerce" },
  { id: 6, category: ['Mobile'], src: 'https://picsum.photos/seed/design6/600/800', alt: 'Mobile Interface', 'data-ai-hint': "mobile interface" },
  { id: 7, category: ['Mobile'], src: 'https://picsum.photos/seed/design7/600/800', alt: 'Mobile UI Design', 'data-ai-hint': "mobile ui" },
  { id: 8, category: ['Mobile'], src: 'https://picsum.photos/seed/design8/600/800', alt: 'Social Mobile App', 'data-ai-hint': "social app" },
  { id: 9, category: ['Mobile'], src: 'https://picsum.photos/seed/design9/600/800', alt: 'Finance Mobile App', 'data-ai-hint': "finance app" },
  { id: 10, category: ['Mobile'], src: 'https://picsum.photos/seed/design10/600/800', alt: 'Health Mobile App', 'data-ai-hint': "health app" },
  { id: 11, category: ['E-commerce'], src: 'https://picsum.photos/seed/design11/800/600', alt: 'E-commerce Dashboard', 'data-ai-hint': "ecommerce dashboard" },
  { id: 12, category: ['Mobile'], src: 'https://picsum.photos/seed/design12/600/800', alt: 'Travel Mobile App', 'data-ai-hint': "travel app" },
  { id: 13, category: ['AI Tools'], src: 'https://picsum.photos/seed/design13/800/600', alt: 'AI Tool Dashboard', 'data-ai-hint': "AI dashboard" },
];

const filters = ['All', 'Mobile', 'Web', 'AI Tools', 'E-commerce', 'Graphic Design'];

const DesignsSection: FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredDesigns = activeFilter === 'All'
    ? allDesigns
    : allDesigns.filter(design => design.category.includes(activeFilter));

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
