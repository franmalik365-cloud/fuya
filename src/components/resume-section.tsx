import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const experience = [
  {
    role: 'Lead UI/UX Designer',
    company: 'Innovate AI Corp',
    date: '2022 - Present',
    description: 'Leading design for flagship AI products, mentoring junior designers, and establishing a new design system.',
  },
  {
    role: 'Product Designer',
    company: 'Creative Solutions',
    date: '2021 - 2022',
    description: 'Worked on various client projects from SaaS platforms to mobile apps, focusing on user research and prototyping.',
  },
];

const skills = [
  { name: 'UI Design & Prototyping (Figma, Sketch)', value: 95 },
  { name: 'UX Research & Strategy', value: 90 },
  { name: 'AI-Powered Design Tools', value: 85 },
  { name: 'HTML, CSS & React', value: 75 },
];

const ResumeSection: FC = () => {
  return (
    <section id="resume" className="section-bg-red">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-4xl md:text-6xl text-center md:text-left mb-4 md:mb-0">My Resume</h2>
            <a href="/resume.pdf" download className="neo-btn bg-primary text-primary-foreground">
              <Download className="mr-2" /> Download PDF
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl mb-8 flex items-center gap-4"><Briefcase /> Experience</h3>
              <div className="relative border-l-2 border-foreground pl-8 space-y-12">
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
            <div>
              <h3 className="text-3xl mb-8">Skills</h3>
              <div className="space-y-6">
                {skills.map(skill => (
                  <div key={skill.name}>
                    <p className="font-bold mb-2">{skill.name}</p>
                    <Progress value={skill.value} className="h-4 border-2 border-foreground p-0.5 bg-card" indicatorClassName="bg-primary" />
                  </div>
                ))}
              </div>
              <h3 className="text-3xl my-8 flex items-center gap-4"><GraduationCap /> Education</h3>
              <div className="relative border-l-2 border-foreground pl-8">
                <div className="absolute -left-[38px] top-1 h-4 w-4 bg-primary border-2 border-foreground rounded-full"></div>
                <h4 className="text-2xl">B.Sc. in Human-Computer Interaction</h4>
                <p className="text-primary font-bold">University of Design & Tech</p>
                <p className="text-sm font-bold">2020 - 2024</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
