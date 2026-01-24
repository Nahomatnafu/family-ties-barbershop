export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in minutes
}

export interface Barber {
  id: string;
  name: string;
  bio: string;
  specialties: string[];
  image: string;
  calendlyUrl?: string;
}

export const services: Service[] = [
  {
    id: 'haircut',
    name: 'Haircut',
    description: 'Precision cut tailored to your style. Includes consultation, cut, and styling.',
    price: 37,
    duration: 45,
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim',
    description: 'Expert beard shaping and trimming for a clean, sharp look.',
    price: 20,
    duration: 30,
  },
  {
    id: 'shave',
    name: 'Hot Towel Shave',
    description: 'Traditional straight razor shave with hot towel treatment.',
    price: 40,
    duration: 45,
  },
  {
    id: 'kids-cut',
    name: 'Kids Cut',
    description: 'Haircut for children 12 and under. Patient and professional.',
    price: 27,
    duration: 30,
  },
  {
    id: 'haircut-beard',
    name: 'Haircut + Beard',
    description: 'Complete grooming package with haircut and beard trim.',
    price: 45,
    duration: 60,
  },
  {
    id: 'lining',
    name: 'Lining',
    description: 'Sharp edge-up and line work for a clean, defined look.',
    price: 15,
    duration: 20,
  },
  {
    id: 'premium-grooming',
    name: 'Premium Grooming',
    description: 'The full experience: haircut, beard trim, hot towel shave, and styling.',
    price: 75,
    duration: 90,
  },
];

export const barbers: Barber[] = [
  {
    id: 'nahom',
    name: 'Nahom (TEST)',
    bio: '🧪 Testing barber - Will be removed after testing is complete.',
    specialties: ['Testing', 'Calendar Sync', 'Email Notifications'],
    image: '/assets/barbershop-images/barbershop-image-004.jpg',
  },
  {
    id: 'alex',
    name: 'Alex',
    bio: 'Master barber with 10+ years of experience. Specializes in modern fades and classic cuts.',
    specialties: ['Fades', 'Modern Styles', 'Beard Sculpting'],
    image: '/assets/barbershop-images/alex/alex_headshot.jpg',
  },
  {
    id: 'ty',
    name: 'Ty',
    bio: 'Expert in traditional barbering techniques with a contemporary edge.',
    specialties: ['Classic Cuts', 'Hot Shaves', 'Texture Work'],
    image: '/assets/barbershop-images/alex/alex_cut_01.jpg',
  },
  {
    id: 'mike',
    name: 'Mike',
    bio: 'Versatile barber bringing fresh energy and modern techniques to every cut.',
    specialties: ['Modern Fades', 'Beard Design', 'Styling'],
    image: '/assets/barbershop-images/barbershop-image-016.jpg',
  },
  {
    id: 'donnie',
    name: 'Donnie',
    bio: 'Creative stylist known for precision cuts and attention to detail.',
    specialties: ['Precision Cuts', 'Line Work', 'Kids Cuts'],
    image: '/assets/barbershop-images/barbershop-image-001.jpg',
  },
];

export const businessInfo = {
  name: 'Family Ties Barbershop',
  phone: '507-720-0522',
  address: '407 Range St, North Mankato, Minnesota',
  hours: {
    monday: '9:00 AM - 7:00 PM',
    tuesday: '9:00 AM - 7:00 PM',
    wednesday: '9:00 AM - 7:00 PM',
    thursday: '9:00 AM - 7:00 PM',
    friday: '9:00 AM - 7:00 PM',
    saturday: '9:00 AM - 5:00 PM',
    sunday: 'Closed',
  },
  social: {
    instagram: 'https://www.instagram.com/wild1000spaper/?hl=en',
    facebook: 'https://www.facebook.com/p/Family-Ties-Barbershop-61576844947842/',
  },
  coordinates: {
    lat: 44.1686,
    lng: -94.0372,
  },
};

