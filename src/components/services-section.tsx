import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const services = [
  {
    title: 'Quick Audit (1-week)',
    price: 'Starting at ₹9999',
    description: 'A fast, comprehensive review of your existing product to identify key UI/UX improvements.',
    deliverables: [
      'Heuristic evaluation report',
      'Actionable recommendations',
      'UI improvement mockups',
      '30-min presentation call',
    ],
  },
  {
    title: 'Product Sprint (4-weeks)',
    price: 'Contact for price',
    description: 'From idea to interactive prototype. A focused sprint to design and validate a new feature or product.',
    deliverables: [
      'User research & personas',
      'Complete user flows & wireframes',
      'High-fidelity prototype',
      'User testing report',
    ],
  },
  {
    title: 'End-to-End Design',
    price: 'Custom Quote',
    description: 'A full partnership to handle all your design needs, from initial concept to final handoff and beyond.',
    deliverables: [
      'Full design system',
      'Ongoing UX/UI design support',
      'Collaboration with developers',
      'Performance tracking & iteration',
    ],
  },
];

const ServicesSection: FC = () => {
  return (
    <section id="services" className="section-bg-green">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl mb-4 text-center">Services</h2>
        <p className="text-center mb-12 text-lg max-w-2xl mx-auto">
          I offer tailored design packages to help your product succeed. Let's build something amazing together.
        </p>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="neo-card flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl mb-2">{service.title}</h3>
              <p className="font-bold text-primary text-xl mb-4">{service.price}</p>
              <p className="mb-6 flex-grow">{service.description}</p>
              
              <div className="mb-8 space-y-2">
                {service.deliverables.map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="text-primary mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/7021910692" target="_blank" rel="noopener noreferrer" className="neo-btn bg-primary text-primary-foreground mt-auto text-center">
                Book Consult
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
