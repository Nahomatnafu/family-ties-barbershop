import Image from 'next/image';
import { Award, Users, Scissors, Heart } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Expert Craftsmanship',
      description: 'Decades of combined experience in precision cuts and grooming.',
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Built on trust, relationships, and serving our neighbors.',
    },
    {
      icon: Scissors,
      title: 'Premium Service',
      description: 'Top-tier techniques and products for exceptional results.',
    },
    {
      icon: Heart,
      title: 'Family Values',
      description: 'More than a barbershop—we are family.',
    },
  ];

  return (
    <section id="about" className="section-container bg-zinc-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/assets/barbershop-images/barbershop-image-005.jpg"
            alt="Family Ties Barbershop Interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-6">
            ABOUT <span className="text-gradient">FAMILY TIES</span>
          </h2>
          
          <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
            Family Ties Barbershop is North Mankato's premier destination for men's grooming. 
            We're a neighborhood shop built on community, style, and generational craftsmanship.
          </p>
          
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Our team of four master barbers—Alex, Ty, Donnie, and Mike—brings passion, 
            precision, and personality to every cut. Whether you're looking for a classic 
            style or a modern fade, we deliver consistency, skill, and an experience you 
            can trust.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-gold-600/10 p-3 rounded-lg flex-shrink-0">
                  <feature.icon className="text-gold-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

