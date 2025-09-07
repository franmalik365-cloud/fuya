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
  const headline = "Where Creativity Meets AI".split(" ");

  return (
    <section id="home" className="relative flex flex-col items-center justify-center text-center">
      <div className="container mx-auto">
        <motion.h1
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[8rem] font-headline uppercase leading-none"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {headline.map((word, index) => (
            <span key={index} className="inline-block overflow-hidden py-2">
              <motion.span className="inline-block" variants={letter}>
                {word}
              </motion.span>
              {index < headline.length - 1 && ' '}
            </span>
          ))}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          AI-driven UI/UX for product teams — usable, beautiful, measurable.
        </motion.p>
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <a href="#contact" className="neo-btn bg-primary text-primary-foreground">
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
