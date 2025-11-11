import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plastic & Aesthetic Surgery in Turkey | Get Beauty and Health',
  description: 'Discover a new you with our world-class cosmetic procedures in Turkey. Rhinoplasty, BBL, Tummy Tuck, and more.',
  openGraph: {
    title: 'Plastic & Aesthetic Surgery in Turkey | Get Beauty and Health',
    description: 'Discover a new you with our world-class cosmetic procedures in Turkey.',
  },
};

export default function PlasticSurgeryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

