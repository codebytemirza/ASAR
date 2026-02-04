'use server';

/**
 * @fileOverview AI service description generator.
 *
 * - generateServiceDescription - A function that generates a description of a service.
 * - GenerateServiceDescriptionInput - The input type for the generateServiceDescription function.
 * - GenerateServiceDescriptionOutput - The return type for the generateServiceDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateServiceDescriptionInputSchema = z.object({
  serviceName: z.string().describe('The name of the AI service.'),
  serviceDetails: z.string().describe('Detailed information about the AI service.'),
  technologiesUsed: z.string().describe('The technologies used in the service, comma separated.'),
});
export type GenerateServiceDescriptionInput = z.infer<
  typeof GenerateServiceDescriptionInputSchema
>;

const GenerateServiceDescriptionOutputSchema = z.object({
  serviceDescription: z.string().describe('A compelling description of the AI service.'),
});
export type GenerateServiceDescriptionOutput = z.infer<
  typeof GenerateServiceDescriptionOutputSchema
>;

export async function generateServiceDescription(
  input: GenerateServiceDescriptionInput
): Promise<GenerateServiceDescriptionOutput> {
  return generateServiceDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateServiceDescriptionPrompt',
  input: {schema: GenerateServiceDescriptionInputSchema},
  output: {schema: GenerateServiceDescriptionOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in AI consultancy services.
  You will generate a compelling description of the AI service based on the provided information.
  The service description should highlight the key benefits and value proposition of the service.
  It should also mention the technologies used in the service.

  Service Name: {{{serviceName}}}
  Service Details: {{{serviceDetails}}}
  Technologies Used: {{{technologiesUsed}}}
  `,
});

const generateServiceDescriptionFlow = ai.defineFlow(
  {
    name: 'generateServiceDescriptionFlow',
    inputSchema: GenerateServiceDescriptionInputSchema,
    outputSchema: GenerateServiceDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
