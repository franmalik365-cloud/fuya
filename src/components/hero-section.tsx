"use client";

import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const HeroSection: FC = () => {
  const line1 = "Where Creativity & AI Collide".split(" ");

  return (
    <section id="home" className="main-section relative flex flex-col items-center justify-center text-center">
      <div className="container mx-auto">
        <motion.h1
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[8rem] font-headline uppercase leading-none"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {line1.map((word, index) => (
            <motion.span
              key={word + '-' + index}
              className="inline-block overflow-hidden py-2"
              variants={letter}
            >
              {word + (index < line1.length - 1 ? '\u00A0' : '')}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          Creating human-centered experiences powered by thoughtful design and AI innovation.
        </motion.p>
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <a href="https://wa.me/7021910692" target="_blank" rel="noopener noreferrer" className="neo-btn bg-primary text-primary-foreground">
            Book a Consult
          </a>
          <a href="#projects" className="neo-btn bg-card text-card-foreground">
            See Projects
          </a>
        </motion.div>
      </div>
      <motion.a
        href="#about"
        className="absolute bottom-10"
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <ArrowDown size={32} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
