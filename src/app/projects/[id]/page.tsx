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
    coverImage: 'https://media.licdn.com/dms/image/v2/D5622AQEUqMsy7LEqMw/feedshare-shrink_1280/B56Zgtg1OQHQAw-/0/1753110239798?e=1759968000&v=beta&t=PYwVQQp3Tzi-YvQAyyhlzojrU0V-LQz1PjaGqAIUSgY',
    dataAiHint: 'ecommerce checkout',
    client: 'E-commerce Startup',
    industry: 'Retail Tech',
    timeline: '1 Week',
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
    title: 'ProPeers App Redesign',
    category: 'Edtech App Learning',
    coverImage: 'https://media.licdn.com/dms/image/v2/D4E22AQHw47uzD_ZTjA/feedshare-shrink_2048_1536/B4EZd.VA64HgBI-/0/1750171129986?e=1759968000&v=beta&t=lqbRxwCXjGzRDs11pvr6dBtfXYXViA73IUGaXp7Odfc',
    dataAiHint: 'edtech app',
    client: 'ProPeers (Parikh Jain)',
    industry: 'Community & Networking (Tech Enthusiasts, Dreamers)',
    timeline: '1 Week',
    role: 'UI/UX Designer & UX Researcher',
    tools: ['Figma', 'Notion', 'FigJam'],
    problemStatement: 'ProPeers is a platform for dreamers and tech enthusiasts to connect, but user retention was low despite a strong concept. The problem wasn’t in the features but in the visual and interaction design — users came, explored, and left. Key pain points included a weak visual hierarchy, underutilized features due to poor usability, and no emotional connection to keep users engaged.',
    goals: [
      'Redesign major user flows with a focus on emotional connection.',
      'Create a visual identity aligned with the brand.',
      'Increase usability, engagement, and retention.',
      'Introduce innovative features to differentiate the platform.'
    ],
    research: 'As an active ProPeers user for 1 year, I conducted heuristic evaluation and user journey mapping. Key insights revealed that the visual design didn’t reflect the platform’s community-driven purpose, users found the app "functional but forgettable," and a lack of micro-interactions reduced emotional stickiness.',
    designProcess: [
      'Adopted an Observation → Redesign → Innovation approach.',
      'Defined a brand-inspired color system to move beyond plain white.',
      'Established a strong grid system for scalable consistency.',
      'Integrated micro-interactions for engagement (hover states, transitions).',
      'Designed an AI Roadmap feature with a custom UI to give ProPeers a unique advantage.'
    ],
    finalSolution: 'Redesigned key modules to improve usability and flow, including the Home Page, Notifications, Search, Chat, and Profile Page. A bonus feature, the AI Roadmap, was introduced to provide a personalized, AI-powered career/growth roadmap. Improvements focused on brand-inspired colors, emotional UX, clear information flow, and new UX features to drive engagement.',
    impact: [
      'Higher potential retention by directly targeting usability issues.',
      'Boosted emotional connection through a visual system aligned with brand psychology.',
      'Increased feature engagement in chat, roadmap, and product sections.',
      'Positioned ProPeers as a community-first, innovation-driven app.'
    ],
    learnings: 'Emotional UX is as critical as features for community-driven platforms. The next steps involve A/B testing the redesigned flows with live users and expanding the AI Roadmap into a scalable product offering.',
    galleryImages: [
      'https://media.licdn.com/dms/image/v2/D4E22AQHw47uzD_ZTjA/feedshare-shrink_2048_1536/B4EZd.VA64HgBI-/0/1750171129986?e=1759968000&v=beta&t=lqbRxwCXjGzRDs11pvr6dBtfXYXViA73IUGaXp7Odfc',
      'https://media.licdn.com/dms/image/v2/D5622AQGgUwVVwIF5Lg/feedshare-shrink_2048_1536/B56ZgjesncHcAs-/0/1752941910123?e=1759968000&v=beta&t=keov1HiqM2__aipHo-BRhcDEPqkVQ7Et_VSyI1SuWVs',
      'https://media.licdn.com/dms/image/v2/D5622AQG0touULq-rIQ/feedshare-shrink_2048_1536/B56Zgjesn5HMAs-/0/1752941912283?e=1759968000&v=beta&t=p7jAEsEdu02idHhR806w_S58xgEMsNTyIg2zzk_XVwI',
      'https://media.licdn.com/dms/image/v2/D5622AQEu7tAVzDHxSQ/feedshare-shrink_2048_1536/B56Zgjeso8HMAo-/0/1752941909907?e=1759968000&v=beta&t=17MOd6PXcfL-Gin3AZ4qqRW9eos896rG0aXoKrR24TA',
    ],
  }
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

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
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-headline uppercase mb-4">{project.title}</h1>
            <p className="text-xl md:text-2xl text-primary font-bold">{project.category}</p>
          </div>

          {/* Cover Image */}
          <div className="mb-16 border-2 border-foreground neo-card !p-2">
            <Image
              src={project.coverImage}
              alt={project.title}
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              data-ai-hint={project.dataAiHint}
              priority
            />
          </div>

          {/* Overview Section */}
          <div className="mb-16">
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
          </div>

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
                    <div key={i} className="border-2 border-foreground neo-card !p-1">
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
        <div>
            <h2 className="text-3xl md:text-4xl font-headline mb-6 border-b-2 border-foreground pb-2">{title}</h2>
            <div className="text-lg space-y-4 max-w-none">
                {children}
            </div>
        </div>
    );
}

export default CaseStudyPage;
