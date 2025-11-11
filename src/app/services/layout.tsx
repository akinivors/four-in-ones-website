import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Services | Get Beauty and Health',
  description: 'Explore our comprehensive range of medical procedures in Turkey. From cosmetic surgery to bariatric procedures, dental work, and more.',
  openGraph: {
    title: 'Medical Services | Get Beauty and Health',
    description: 'Explore our comprehensive range of medical procedures in Turkey.',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

