'use server';

/**
 * @fileOverview A microcopy generation AI agent.
 *
 * - generateMicrocopy - A function that handles the microcopy generation process.
 * - GenerateMicrocopyInput - The input type for the generateMicrocopy function.
 * - GenerateMicrocopyOutput - The return type for the generateMicrocopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMicrocopyInputSchema = z.object({
  websiteSection: z
    .string()
    .describe('The section of the website to generate microcopy for.'),
  keywords: z.string().describe('Relevant keywords to include in the microcopy.'),
});
export type GenerateMicrocopyInput = z.infer<typeof GenerateMicrocopyInputSchema>;

const GenerateMicrocopyOutputSchema = z.object({
  microcopy: z.string().describe('The generated microcopy for the website section.'),
});
export type GenerateMicrocopyOutput = z.infer<typeof GenerateMicrocopyOutputSchema>;

export async function generateMicrocopy(input: GenerateMicrocopyInput): Promise<GenerateMicrocopyOutput> {
  return generateMicrocopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMicrocopyPrompt',
  input: {schema: GenerateMicrocopyInputSchema},
  output: {schema: GenerateMicrocopyOutputSchema},
  prompt: `You are a marketing expert who specializes in writing clear and engaging microcopy for websites.

  Please generate microcopy for the following website section, incorporating the provided keywords to optimize for relevance and impact.

  Section: {{{websiteSection}}}
  Keywords: {{{keywords}}}
  `,
});

const generateMicrocopyFlow = ai.defineFlow(
  {
    name: 'generateMicrocopyFlow',
    inputSchema: GenerateMicrocopyInputSchema,
    outputSchema: GenerateMicrocopyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
