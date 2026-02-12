import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Family Ties Barbershop - 407 Range St, North Mankato, MN',
  description: 'Contact Family Ties Barbershop at 407 Range St, North Mankato, MN. Call 507-720-0522. Open Mon-Fri 9AM-7PM, Sat 9AM-5PM. Serving Mankato area.',
  keywords: 'contact barbershop North Mankato, barbershop hours Mankato, 407 Range St North Mankato, barber phone number Mankato, directions to barbershop North Mankato',
  openGraph: {
    title: 'Contact Us | Family Ties Barbershop - 407 Range St, North Mankato, MN',
    description: 'Contact Family Ties Barbershop at 407 Range St, North Mankato, MN. Call 507-720-0522.',
    url: 'https://family-ties-barbershop.vercel.app/contact',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

