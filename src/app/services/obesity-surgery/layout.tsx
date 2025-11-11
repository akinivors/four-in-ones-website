import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Obesity (Bariatric) Surgery in Turkey | Get Beauty and Health',
  description: 'Life-changing solutions for long-term weight management, including gastric sleeve, bypass, and gastric balloon.',
  openGraph: {
    title: 'Obesity (Bariatric) Surgery in Turkey | Get Beauty and Health',
    description: 'Life-changing solutions for long-term weight management and improved health.',
  },
};

export default function ObesitySurgeryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

