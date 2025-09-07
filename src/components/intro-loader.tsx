import type { FC } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: '-100vh',
    transition: {
      duration: 0.8,
      ease: [0.36, 0, 0.66, -0.56],
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const taglineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1.5,
    },
  },
};

const IntroLoader: FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="overflow-hidden">
        <motion.h1
          className="text-8xl md:text-9xl font-headline uppercase text-foreground"
          variants={textVariants}
        >
          Fuya
        </motion.h1>
      </div>
      <motion.p
        className="mt-4 text-lg md:text-xl font-body"
        variants={taglineVariants}
      >
        AI-driven UI/UX Product Designer
      </motion.p>
    </motion.div>
  );
};

export default IntroLoader;
