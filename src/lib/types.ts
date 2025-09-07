export type Project = {
  id: number;
  title: string;
  category: string;
  coverImage: string;
  dataAiHint: string;
  
  // Case Study Details
  client: string;
  industry: string;
  timeline: string;
  role: string;
  tools: string[];
  problemStatement: string;
  goals: string[];
  research: string;
  designProcess: string[];
  finalSolution: string;
  impact: string[];
  learnings: string;
  galleryImages?: string[];
};
