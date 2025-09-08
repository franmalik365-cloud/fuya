import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Briefcase, Calendar, HardHat, Settings } from 'lucide-react';
import { projects } from '@/lib/projects-data';
import type { Project } from '@/lib/types';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

function getProject(id: string): Project {
  const project = projects.find(p => p.id.toString() === id);
  if (!project) {
    notFound();
  }
  return project;
}

const CaseStudyPage = ({ params }: { params: { id: string } }) => {
  const project = getProject(params.id);

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

export default CaseStudyPage;

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