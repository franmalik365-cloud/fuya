"use client";

import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/lib/projects-data';

const ProjectsSection: FC = () => {
  return (
    <section id="projects" className="main-section section-bg-blue">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl mb-4 text-center">Case Studies</h2>
        <p className="text-center mb-12 text-lg">Here's some of my work. Click on a project to learn more.</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} passHref>
              <motion.div
                className="neo-card cursor-pointer group h-full flex flex-col"
                whileHover={{
                  transform: "translate(-8px, -8px)",
                  boxShadow: "8px 8px 0px 0px hsl(var(--foreground))",
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="overflow-hidden mb-6 border-2 border-foreground">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={project.dataAiHint}
                  />
                </div>
                <h3 className="text-3xl mb-2">{project.title}</h3>
                <p className="font-bold text-primary">{project.category}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
