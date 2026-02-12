import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Family Ties Barbershop - Haircut Photos North Mankato, MN',
  description: 'View our portfolio of precision haircuts, fades, and beard trims. See the quality work from Family Ties Barbershop in North Mankato, serving Mankato area.',
  keywords: 'barbershop gallery North Mankato, haircut photos Mankato, fade examples, barber portfolio North Mankato, mens haircut styles Mankato',
  openGraph: {
    title: 'Gallery | Family Ties Barbershop - Haircut Photos North Mankato, MN',
    description: 'View our portfolio of precision haircuts, fades, and beard trims from Family Ties Barbershop.',
    url: 'https://family-ties-barbershop.vercel.app/gallery',
  },
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

