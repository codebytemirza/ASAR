'use server';
/**
 * @fileOverview Responds to contact form queries with a summary of relevant services.
 *
 * - respondToContactFormQuery - A function that generates a service summary based on a user's query.
 * - RespondToContactFormQueryInput - The input type for the respondToContactFormQuery function.
 * - RespondToContactFormQueryOutput - The return type for the respondToContactFormQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RespondToContactFormQueryInputSchema = z.object({
  query: z.string().describe('The user query from the contact form.'),
});
export type RespondToContactFormQueryInput = z.infer<typeof RespondToContactFormQueryInputSchema>;

const RespondToContactFormQueryOutputSchema = z.object({
  response: z.string().describe('A concise summary of relevant services.'),
});
export type RespondToContactFormQueryOutput = z.infer<typeof RespondToContactFormQueryOutputSchema>;

export async function respondToContactFormQuery(input: RespondToContactFormQueryInput): Promise<RespondToContactFormQueryOutput> {
  return respondToContactFormQueryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'respondToContactFormQueryPrompt',
  input: {schema: RespondToContactFormQueryInputSchema},
  output: {schema: RespondToContactFormQueryOutputSchema},
  prompt: `You are an AI assistant that helps respond to customer queries submitted through a contact form on the ASAR Systech website.  ASAR Systech specializes in ISO consultancy and AI automation services.

  Based on the following user query, provide a concise summary of the services that are most relevant to their needs. Focus on how ASAR Systech can address the user's specific requirements.

  Query: {{{query}}}
  `,
});

const respondToContactFormQueryFlow = ai.defineFlow(
  {
    name: 'respondToContactFormQueryFlow',
    inputSchema: RespondToContactFormQueryInputSchema,
    outputSchema: RespondToContactFormQueryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
