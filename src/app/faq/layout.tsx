import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Get Beauty and Health',
  description: 'Find answers to common questions about medical tourism in Turkey, procedures, costs, safety, and our all-inclusive packages.',
  openGraph: {
    title: 'Frequently Asked Questions | Get Beauty and Health',
    description: 'Find answers to common questions about medical tourism in Turkey.',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

