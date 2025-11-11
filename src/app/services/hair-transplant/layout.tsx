import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hair Transplant & Restoration in Turkey | Get Beauty and Health',
  description: 'Advanced FUE & DHI solutions for restoring hair on the scalp, face, and brows in Turkey.',
  openGraph: {
    title: 'Hair Transplant & Restoration in Turkey | Get Beauty and Health',
    description: 'Comprehensive solutions for restoring hair on the scalp, face, and brows.',
  },
};

export default function HairTransplantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

