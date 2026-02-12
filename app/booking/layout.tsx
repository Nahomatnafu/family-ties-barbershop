import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Appointment | Family Ties Barbershop - North Mankato, MN',
  description: 'Book your haircut online at Family Ties Barbershop in North Mankato. Choose your barber, select service, and pick your time. Easy online booking for Mankato area.',
  keywords: 'book haircut North Mankato, book barber Mankato, online booking barbershop, schedule haircut Mankato, appointment North Mankato barber',
  openGraph: {
    title: 'Book Appointment | Family Ties Barbershop - North Mankato, MN',
    description: 'Book your haircut online at Family Ties Barbershop in North Mankato. Easy online booking available.',
    url: 'https://family-ties-barbershop.vercel.app/booking',
  },
  alternates: {
    canonical: '/booking',
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

