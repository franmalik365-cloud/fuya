"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#designs', label: 'Designs' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm border-b-2 border-foreground' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-8 md:px-16 flex justify-between items-center h-20">
        <a href="#home" className="text-3xl font-headline uppercase">
          Fuya
        </a>
        <nav className="hidden md:flex items-center gap-6 font-bold uppercase">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
          <a href="mailto:fuyachavda01@gmail.com" className="neo-btn bg-primary text-primary-foreground !px-6 !py-2">
            Hire Me
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="z-50" aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-0 left-0 w-full h-screen bg-background flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={toggleMenu} className="text-3xl font-headline uppercase hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
             <a href="mailto:fuyachavda01@gmail.com" onClick={toggleMenu} className="neo-btn bg-primary text-primary-foreground mt-8">
              Hire Me
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
