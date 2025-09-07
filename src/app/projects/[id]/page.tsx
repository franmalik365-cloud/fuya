import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Briefcase, Calendar, HardHat, Settings } from 'lucide-react';
import type { Project } from '@/lib/types';

// NOTE: In a real-world app, you'd fetch this from a CMS or database
const projects: Project[] = [
  {
    id: 1,
    title: 'Stealth AI',
    category: 'Community for Founder App',
    coverImage: 'https://picsum.photos/seed/project1/1200/800',
    dataAiHint: 'ecommerce checkout',
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
    coverImage: 'https://picsum.photos/seed/project2/1200/800',
    dataAiHint: 'data dashboard',
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

const getProjectData = (id: string): Project | undefined => {
  return projects.find(p => p.id.toString() === id);
};

interface CaseStudyPageProps {
  params: {
    id: string;
  };
}

const CaseStudyPage: FC<CaseStudyPageProps> = ({ params }) => {
  const project = getProjectData(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background font-body text-foreground">
      <header className="py-8">
        <div className="container mx-auto px-4 sm:px-8 md:px-16">
          <Button asChild variant="outline" className="neo-btn !bg-card !text-card-foreground">
            <Link href="/#projects">
              <ArrowLeft className="mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 sm:px-8 md:px-16 pb-20">
        <article className="max-w-4xl mx-auto">
          {/* Header Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-headline uppercase mb-4">{project.title}</h1>
            <p className="text-xl md:text-2xl text-primary font-bold">{project.category}</p>
          </section>

          {/* Overview Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="neo-card"><Briefcase className="mx-auto mb-2" /> <h3 className="font-bold">Client</h3> <p>{project.client}</p></div>
              <div className="neo-card"><HardHat className="mx-auto mb-2" /> <h3 className="font-bold">Role</h3> <p>{project.role}</p></div>
              <div className="neo-card"><Calendar className="mx-auto mb-2" /> <h3 className="font-bold">Timeline</h3> <p>{project.timeline}</p></div>
              <div className="neo-card"><Settings className="mx-auto mb-2" /> <h3 className="font-bold">Industry</h3> <p>{project.industry}</p></div>
            </div>
             <div className="mt-8">
              <h3 className="text-center text-2xl font-headline mb-4">Tools Used</h3>
              <div className="flex justify-center flex-wrap gap-3">
                {project.tools.map(tool => (
                  <Badge key={tool} className="neo-btn !px-4 !py-2 text-base bg-card text-card-foreground hover:bg-card hover:translate-x-0 hover:translate-y-0 hover:shadow-none">{tool}</Badge>
                ))}
              </div>
            </div>
          </section>

          {/* Cover Image */}
          <section className="mb-16 border-2 border-foreground">
            <Image
              src={project.coverImage}
              alt={project.title}
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              data-ai-hint={project.dataAiHint}
            />
          </section>

          {/* Main Content */}
          <div className="space-y-16">
            <CaseStudySection title="Problem Statement">
              <p>{project.problemStatement}</p>
            </CaseStudySection>

            <CaseStudySection title="Goals & Objectives">
              <ul className="list-disc list-inside space-y-2">
                {project.goals.map((goal, i) => <li key={i}>{goal}</li>)}
              </ul>
            </CaseStudySection>

            <CaseStudySection title="Research & Insights">
              <p>{project.research}</p>
            </CaseStudySection>

            <CaseStudySection title="Design Process">
              <ul className="list-decimal list-inside space-y-2">
                {project.designProcess.map((step, i) => <li key={i}>{step}</li>)}
              </ul>
            </CaseStudySection>

            <CaseStudySection title="Final Solution">
              <p>{project.finalSolution}</p>
            </CaseStudySection>

            {project.galleryImages && project.galleryImages.length > 0 && (
              <CaseStudySection title="Gallery">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {project.galleryImages.map((src, i) => (
                    <div key={i} className="border-2 border-foreground">
                       <Image
                        src={src}
                        alt={`${project.title} gallery image ${i + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </CaseStudySection>
            )}
            
            <CaseStudySection title="Impact & Results">
              <ul className="list-disc list-inside space-y-2">
                {project.impact.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </CaseStudySection>

            <CaseStudySection title="Learnings & Next Steps">
              <p>{project.learnings}</p>
            </CaseStudySection>
          </div>
        </article>
      </main>
    </div>
  );
};

interface CaseStudySectionProps {
    title: string;
    children: React.ReactNode;
}

const CaseStudySection: FC<CaseStudySectionProps> = ({ title, children }) => {
    return (
        <section>
            <h2 className="text-3xl md:text-4xl font-headline mb-6 border-b-2 border-foreground pb-2">{title}</h2>
            <div className="text-lg space-y-4 prose prose-lg max-w-none">
                {children}
            </div>
        </section>
    );
}

export default CaseStudyPage;
