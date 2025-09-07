"use client";

import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Stealth AI',
    category: 'Community for Founder App',
    coverImage: 'https://media.licdn.com/dms/image/v2/D5622AQEUqMsy7LEqMw/feedshare-shrink_1280/B56Zgtg1OQHQAw-/0/1753110239798?e=1759968000&v=beta&t=PYwVQQp3Tzi-YvQAyyhlzojrU0V-LQz1PjaGqAIUSgY',
    dataAiHint: 'ecommerce checkout',
    // Detailed Case Study Info
    client: 'E-commerce Startup',
    industry: 'Retail Tech',
    timeline: '4 Weeks',
    role: 'Lead UI/UX Designer',
    tools: ['Figma', 'FigJam', 'Next.js', 'Genkit'],
    problemStatement: 'Online shoppers often abandon carts due to overwhelming choices and a confusing checkout process. The goal was to simplify the user journey and increase conversion.',
    goals: [
        'Increase conversion rate by at least 25%.',
        'Reduce checkout time by 50%.',
        'Personalize the shopping experience to increase average order value.'
    ],
    research: 'Conducted user interviews with 20 online shoppers and analyzed competitor checkout flows. Key insight: Users felt overwhelmed by too many steps and desired a more guided, conversational experience.',
    designProcess: [
        'Mapped the existing user journey to identify pain points.',
        'Developed low-fidelity wireframes for a new, AI-powered conversational checkout.',
        'Created high-fidelity, interactive prototypes in Figma for user testing.',
        'Iterated on the design based on feedback, focusing on clarity and trust.'
    ],
    finalSolution: 'An AI-powered shopping assistant that provides personalized recommendations and streamlines the checkout flow into a single, conversational step. The interface is clean, intuitive, and guides the user through the purchase process effortlessly.',
    impact: [
        'Achieved a 35% increase in conversion rate within the first month.',
        'Reduced average checkout time from 3 minutes to just 45 seconds.',
        'Increased average order value by 20% through personalized AI recommendations.'
    ],
    learnings: 'This project highlighted the power of conversational UI in simplifying complex processes. I learned that integrating AI thoughtfully can significantly enhance user trust and efficiency. The next step is to explore voice commands for an even more accessible experience.',
    galleryImages: [
      'https://media.licdn.com/dms/image/v2/D5622AQEUqMsy7LEqMw/feedshare-shrink_1280/B56Zgtg1OQHQAw-/0/1753110239798?e=1759968000&v=beta&t=PYwVQQp3Tzi-YvQAyyhlzojrU0V-LQz1PjaGqAIUSgY',
      'https://media.licdn.com/dms/image/v2/D5622AQEUqMsy7LEqMw/feedshare-shrink_1280/B56Zgtg1OQHQAw-/0/1753110239798?e=1759968000&v=beta&t=PYwVQQp3Tzi-YvQAyyhlzojrU0V-LQz1PjaGqAIUSgY',
      'https://media.licdn.com/dms/image/v2/D5622AQFOb9dWO5CfYw/feedshare-shrink_2048_1536/B56Zgtg1NmHkAw-/0/1753110239819?e=1759968000&v=beta&t=UcT1ULFKJY3xWywJ2G8hdGAPzQbr229CprJhKTfLMgc',
      'https://media.licdn.com/dms/image/v2/D5622AQEFR7ER5N7NHQ/feedshare-shrink_2048_1536/B56Zgtg1NyH0As-/0/1753110240390?e=1759968000&v=beta&t=7j2a3b36r0kKIQikV23UKgqx6j_5JSShug9bJLD2K9s'
    ]
  },
  {
    id: 2,
    title: 'Insight Dashboard',
    category: 'AI Tools',
    coverImage: 'https://picsum.photos/seed/project2/800/600',
    dataAiHint: 'data dashboard',
    // Detailed Case Study Info
    client: 'Data Analytics Firm',
    industry: 'Business Intelligence',
    timeline: '6 Weeks',
    role: 'Product Designer',
    tools: ['Vue.js', 'Python', 'Tableau', 'Sketch'],
    problemStatement: 'Data analysts were spending hours manually sifting through complex datasets to find meaningful insights, leading to slow and inefficient reporting.',
    goals: [
        'Reduce time-to-insight by 75%.',
        'Create a user-friendly interface that empowers non-technical users to explore data.',
        'Ensure the dashboard is fully responsive for on-the-go access.'
    ],
    research: 'Shadowed data analysts to understand their workflow and pain points. A competitive analysis revealed that most BI tools were powerful but had a steep learning curve. Users needed something intuitive.',
    designProcess: [
        'Began with brainstorming sessions and created information architecture diagrams.',
        'Designed wireframes focusing on a modular, customizable dashboard layout.',
        'Developed high-fidelity mockups in Sketch, emphasizing clear data visualization principles.',
        'Conducted usability testing with analysts to refine the interface and interactions.'
    ],
    finalSolution: 'An intuitive dashboard that uses natural language processing, allowing users to ask questions and get instant, visualized answers. The design features customizable widgets and a clean, accessible interface that makes complex data understandable at a glance.',
    impact: [
        'Reduced average data analysis time by 80%.',
        'Empowered the sales team to self-serve data, leading to the identification of key growth opportunities and a 15% increase in quarterly revenue.',
        'Received a 95% user satisfaction score from internal stakeholders.'
    ],
    learnings: 'The biggest takeaway was the importance of bridging the gap between powerful technology and user-friendly design. By focusing on natural language interaction, we made data accessible to everyone. The next phase will involve adding predictive analytics features.'
  },
];

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
