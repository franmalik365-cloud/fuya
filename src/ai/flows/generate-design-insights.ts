'use server';

/**
 * @fileOverview An AI agent that generates design insights based on user input.
 *
 * - generateDesignInsights - A function that generates design insights.
 * - GenerateDesignInsightsInput - The input type for the generateDesignInsights function.
 * - GenerateDesignInsightsOutput - The return type for the generateDesignInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDesignInsightsInputSchema = z.object({
  userInput: z
    .string()
    .describe('User input describing the desired design or UI/UX options.'),
});
export type GenerateDesignInsightsInput = z.infer<typeof GenerateDesignInsightsInputSchema>;

const GenerateDesignInsightsOutputSchema = z.object({
  designInsights: z
    .string()
    .describe('AI-generated design insights based on user input.'),
});
export type GenerateDesignInsightsOutput = z.infer<typeof GenerateDesignInsightsOutputSchema>;

export async function generateDesignInsights(
  input: GenerateDesignInsightsInput
): Promise<GenerateDesignInsightsOutput> {
  return generateDesignInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDesignInsightsPrompt',
  input: {schema: GenerateDesignInsightsInputSchema},
  output: {schema: GenerateDesignInsightsOutputSchema},
  prompt: `You are an AI-powered UI/UX design assistant. A designer will provide you with a description of a desired design, and you will provide detailed and actionable design insights.

User Input: {{{userInput}}}

Design Insights:`,
});

const generateDesignInsightsFlow = ai.defineFlow(
  {
    name: 'generateDesignInsightsFlow',
    inputSchema: GenerateDesignInsightsInputSchema,
    outputSchema: GenerateDesignInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {designInsights: output!.designInsights};
  }
);
