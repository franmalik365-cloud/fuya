"use client";

import type { FC } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';
import { ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Project = {
  id: number;
  title: string;
  category: string;
  coverImage: string;
  problem: string;
  solution: string;
  outcomes: string[];
  stack: string[];
  liveUrl?: string;
  dataAiHint: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'SmartCart AI',
    category: 'E-commerce',
    coverImage: 'https://picsum.photos/seed/project1/800/600',
    problem: 'Online shoppers often abandon carts due to overwhelming choices and a confusing checkout process.',
    solution: 'We designed an AI-powered shopping assistant that provides personalized recommendations and streamlines the checkout flow into a single, conversational step.',
    outcomes: ['35% increase in conversion rate', '50% reduction in checkout time', '20% higher average order value'],
    stack: ['React', 'Next.js', 'AI/ML', 'Figma'],
    liveUrl: '#',
    dataAiHint: 'ecommerce checkout'
  },
  {
    id: 2,
    title: 'Insight Dashboard',
    category: 'AI Tools',
    coverImage: 'https://picsum.photos/seed/project2/800/600',
    problem: 'Data analysts were spending hours manually sifting through data to find meaningful insights.',
    solution: 'An intuitive dashboard that uses natural language processing to allow users to ask questions and get instant, visualized answers from complex datasets.',
    outcomes: ['80% faster data analysis', 'Identified key growth opportunities leading to 15% revenue increase'],
    stack: ['Vue.js', 'Python', 'Tableau', 'Sketch'],
    liveUrl: '#',
    dataAiHint: 'data dashboard'
  },
];

const ProjectsSection: FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-bg-blue">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl mb-4 text-center">Case Studies</h2>
        <p className="text-center mb-12 text-lg">Here's some of my work. Click on a project to learn more.</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="neo-card cursor-pointer group"
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
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="neo-card max-w-4xl w-[95vw] h-[90vh] flex flex-col p-0">
              <DialogHeader className="p-6 pb-0 flex-row items-center justify-between border-b-2 border-foreground">
                <div>
                  <DialogTitle className="text-4xl">{selectedProject.title}</DialogTitle>
                  <DialogDescription className="text-lg font-bold text-primary">{selectedProject.category}</DialogDescription>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setSelectedProject(null)} className="ml-auto">
                  <X />
                </Button>
              </DialogHeader>
              <div className="p-6 overflow-y-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="overflow-hidden border-2 border-foreground">
                    <Image
                      src={selectedProject.coverImage}
                      alt={selectedProject.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                      data-ai-hint={selectedProject.dataAiHint}
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl mb-2">Problem</h4>
                    <p className="mb-6">{selectedProject.problem}</p>
                    <h4 className="text-2xl mb-2">Solution</h4>
                    <p className="mb-6">{selectedProject.solution}</p>
                    {selectedProject.liveUrl && (
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="neo-btn bg-secondary text-secondary-foreground mb-6">
                        View Live Project <ExternalLink className="ml-2" size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                   <div>
                    <h4 className="text-2xl mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map(tech => <Badge key={tech} className="text-lg py-1 px-3 border-2 border-foreground bg-card">{tech}</Badge>)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl mb-4">Outcomes</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedProject.outcomes.map(outcome => <li key={outcome}>{outcome}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
