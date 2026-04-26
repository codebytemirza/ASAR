import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Request Proposal',
  description: 'Schedule a consultation with our system architects. We blueprint exact compliance and data engineering needs within 48 hours.',
  openGraph: {
    title: 'Contact ASAR Global | Request a Proposal',
    description: 'Schedule a consultation with our system architects. We blueprint exact compliance and data engineering needs within 48 hours.',
    url: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
