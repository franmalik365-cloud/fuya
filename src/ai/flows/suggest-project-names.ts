'use server';

/**
 * @fileOverview Suggests project names and descriptions based on keywords.
 *
 * - suggestProjectNames - A function that suggests project names and descriptions.
 * - SuggestProjectNamesInput - The input type for the suggestProjectNames function.
 * - SuggestProjectNamesOutput - The return type for the suggestProjectNames function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestProjectNamesInputSchema = z.object({
  keywords: z.string().describe('Keywords describing the project.'),
  count: z.number().describe('The number of project suggestions to generate.'),
});
export type SuggestProjectNamesInput = z.infer<typeof SuggestProjectNamesInputSchema>;

const SuggestProjectNamesOutputSchema = z.array(
  z.object({
    name: z.string().describe('The suggested project name.'),
    description: z.string().describe('A brief description of the project.'),
  })
);
export type SuggestProjectNamesOutput = z.infer<typeof SuggestProjectNamesOutputSchema>;

export async function suggestProjectNames(input: SuggestProjectNamesInput): Promise<SuggestProjectNamesOutput> {
  return suggestProjectNamesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestProjectNamesPrompt',
  input: {schema: SuggestProjectNamesInputSchema},
  output: {schema: SuggestProjectNamesOutputSchema},
  prompt: `You are a creative project name generator. Given a set of keywords, you will generate project names and descriptions.

Keywords: {{{keywords}}}
Number of suggestions: {{{count}}}

Output format: An array of JSON objects with 'name' and 'description' fields. The description must be 1-2 sentences long.

Example:
[
  {
    "name": "AI-Powered Design Assistant",
    "description": "An AI tool that helps designers generate design ideas and prototypes quickly. It uses machine learning to understand design trends and user preferences."
  },
  {
    "name": "Smart UI Kit",
    "description": "A UI kit that adapts to different screen sizes and devices automatically. It uses responsive design principles and is compatible with various design tools."
  }
]

`,
});

const suggestProjectNamesFlow = ai.defineFlow(
  {
    name: 'suggestProjectNamesFlow',
    inputSchema: SuggestProjectNamesInputSchema,
    outputSchema: SuggestProjectNamesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
