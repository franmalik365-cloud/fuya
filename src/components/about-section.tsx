import type { FC } from 'react';
import { motion } from 'framer-motion';

const AboutSection: FC = () => {
  return (
    <section id="about" className="section-bg-red">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl mb-8">About Fuya</h2>
          <div className="space-y-8 text-lg md:text-xl font-body text-left">
            <p>
              As a 19-year-old designer deeply fascinated by the intersection of creativity and technology, I found my passion in AI and UI/UX. My journey began not just with pixels and vectors, but with a curiosity for how intelligent systems could create more intuitive and human-centered digital experiences.
            </p>
            <h3 className="text-2xl md:text-3xl font-headline uppercase pt-8">My Design Philosophy</h3>
            <p>
              I believe great design is invisible. It's about creating seamless interactions that empower users, not distract them. My approach is rooted in empathy, driven by data, and enhanced by AI to uncover patterns and possibilities that might otherwise be missed. I design products that are not only beautiful but also smart, adaptable, and measurable.
            </p>
            <h3 className="text-2xl md:text-3xl font-headline uppercase pt-8">My Process</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="neo-card">
                <h4 className="text-xl font-headline mb-2">1. Discover</h4>
                <p>I dive deep into understanding the problem, the users, and the business goals. This involves research, data analysis, and leveraging AI for insights.</p>
              </div>
              <div className="neo-card">
                <h4 className="text-xl font-headline mb-2">2. Prototype</h4>
                <p>From low-fidelity wireframes to high-fidelity interactive prototypes, I bring ideas to life quickly to gather feedback and iterate.</p>
              </div>
              <div className="neo-card">
                <h4 className="text-xl font-headline mb-2">3. Validate</h4>
                <p>Through user testing and analytics, I validate design decisions to ensure the final product not only looks good but also performs exceptionally.</p>
              </div>
            </div>
            <p className="text-center pt-8 text-2xl font-headline">
              Trusted by startups and B2B teams.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
