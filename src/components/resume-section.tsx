import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, BrainCircuit, Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const experience = [
  {
    role: 'Freelancer UI/UX & Product Designer',
    company: 'Self-Employed',
    date: '2022 - Present',
    description: 'Partnering with startups and tech companies to design and launch user-centered products. Specializing in AI-driven interfaces and rapid prototyping to deliver impactful and intuitive digital experiences.',
  },
];

const education = [
    { title: 'Google UX Design Professional Certificate', issuer: 'Google' },
    { title: 'Foundations of User Experience (UX) Design', issuer: 'Google' },
    { title: 'Start the UX Design Process: Empathize, Define', issuer: 'Google' },
    { title: 'Ideate, Conduct UX Research and Test Early Concepts', issuer: 'Google' },
    { title: 'Figma for UX Design', issuer: 'Google' },
    { title: 'Sketch & Miro for UX Design Professional Certificate', issuer: 'Coursera' },
];

const tools = [ 'Figma', 'FigJam', 'Sketch', 'Adobe XD', 'HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Excel' ];

const skills = [ 'Data Analysis', 'UX Research & Strategy', 'UI Design & Prototyping', 'AI-Powered Design', 'Visual Design', 'Interaction Design', 'Conversational & Voice UI (VUI)', 'Data-Driven Design', 'User Behavior Analytics', 'Prototyping with AI', 'Generative Tools', 'Accessibility & Inclusive Design', 'UX Psychology' ];

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


const ResumeSection: FC = () => {
  return (
    <section id="resume" className="main-section section-bg-red">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-4xl md:text-6xl text-center md:text-left mb-4 md:mb-0">My Resume</h2>
            <a href="/resume.pdf" download className="neo-btn bg-primary text-primary-foreground">
              <Download className="mr-2" /> Download PDF
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            <div className="space-y-12">
              {/* Experience */}
              <div>
                <h3 className="text-3xl mb-8 flex items-center gap-4"><Briefcase /> Experience</h3>
                <div className="relative border-l-2 border-foreground pl-8">
                  {experience.map((job, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-[38px] top-1 h-4 w-4 bg-primary border-2 border-foreground rounded-full"></div>
                      <p className="text-sm font-bold">{job.date}</p>
                      <h4 className="text-2xl">{job.role}</h4>
                      <p className="text-primary font-bold">{job.company}</p>
                      <p className="mt-2 text-sm">{job.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-3xl my-8 flex items-center gap-4"><GraduationCap /> Education & Certificates</h3>
                <div className="relative border-l-2 border-foreground pl-8 space-y-8">
                  {education.map((cert, index) => (
                    <div key={index} className="relative">
                       <div className="absolute -left-[38px] top-1 h-4 w-4 bg-primary border-2 border-foreground rounded-full"></div>
                       <h4 className="text-xl">{cert.title}</h4>
                       <p className="text-primary font-bold text-sm">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-12">
                {/* Tools */}
                <div>
                    <h3 className="text-3xl mb-8 flex items-center gap-4"><Wrench/> Tools</h3>
                    <motion.div 
                        className="flex flex-wrap gap-3"
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                    {tools.map(tool => (
                        <motion.div key={tool} variants={itemVariants}>
                            <Badge className="neo-btn !px-4 !py-2 text-base bg-card text-card-foreground hover:bg-card hover:translate-x-0 hover:translate-y-0 hover:shadow-none">{tool}</Badge>
                        </motion.div>
                    ))}
                    </motion.div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-3xl mb-8 flex items-center gap-4"><BrainCircuit/> Skills</h3>
                <motion.div 
                    className="flex flex-wrap gap-3"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                  {skills.map(skill => (
                     <motion.div key={skill} variants={itemVariants}>
                        <Badge className="neo-btn !px-4 !py-2 text-base bg-card text-card-foreground hover:bg-card hover:translate-x-0 hover:translate-y-0 hover:shadow-none">{skill}</Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
