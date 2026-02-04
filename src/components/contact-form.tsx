"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Bot } from 'lucide-react';

import { respondToContactFormQuery } from "@/ai/flows/respond-to-contact-form-query";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().min(2, "Company name must be at least 2 characters."),
  service: z.string().min(1, "Please select a service of interest."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setAiResponse(null);

    try {
      const query = `Service of interest: ${values.service}. Message: ${values.message}`;
      const result = await respondToContactFormQuery({ query });
      
      if (result.response) {
        setAiResponse(result.response);
        toast({
          title: "Message Sent!",
          description: "Thank you for your inquiry. We have received your message and our AI has provided a preliminary response below.",
        });
        form.reset();
      } else {
        throw new Error("AI did not provide a response.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-black uppercase tracking-tight">Send us a Message</CardTitle>
        <CardDescription>Fill out the form and we'll get back to you shortly.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-label">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-label">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
             <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-label">Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Company Inc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-label">Service of Interest</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {SERVICES.map((service) => (
                        <SelectItem key={service.title} value={service.title}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-label">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about your project..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading} className="w-full">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? 'Submitting...' : 'Submit Inquiry'}
            </Button>
          </form>
        </Form>
        {loading && (
           <div className="mt-6 flex items-center justify-center text-muted-foreground">
             <Loader2 className="mr-2 h-4 w-4 animate-spin" />
             <p>Our AI is analyzing your request...</p>
           </div>
        )}
        {aiResponse && (
          <div className="mt-6 rounded-md bg-secondary p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0"><Bot className="h-6 w-6 text-primary" /></div>
              <div className="flex-1">
                <p className="font-semibold">AI Assistant Response:</p>
                <p className="text-sm text-muted-foreground">{aiResponse}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
