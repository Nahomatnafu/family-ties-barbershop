import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Barbers from '@/components/home/Barbers';
import Location from '@/components/home/Location';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Barbers />
      <Location />
      <CTA />
    </>
  );
}

