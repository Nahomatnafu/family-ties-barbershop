import { businessInfo, services, barbers } from '@/lib/data';

export default function StructuredData() {
  // LocalBusiness Schema for Google My Business / Local SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": "https://family-ties-barbershop.vercel.app/#barbershop",
    "name": "Family Ties Barbershop",
    "image": "https://family-ties-barbershop.vercel.app/assets/barbershop-images/hero/family-ties-hero-v01.png",
    "logo": "https://family-ties-barbershop.vercel.app/assets/barbershop-images/logo/family-ties-logo-v01.jpg",
    "url": "https://family-ties-barbershop.vercel.app",
    "telephone": "+15077200522",
    "priceRange": "$15-$75",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "407 Range St",
      "addressLocality": "North Mankato",
      "addressRegion": "MN",
      "postalCode": "56003",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessInfo.coordinates.lat,
      "longitude": businessInfo.coordinates.lng
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      businessInfo.social.instagram,
      businessInfo.social.facebook
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "North Mankato",
        "containedIn": {
          "@type": "State",
          "name": "Minnesota"
        }
      },
      {
        "@type": "City",
        "name": "Mankato",
        "containedIn": {
          "@type": "State",
          "name": "Minnesota"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Barbershop Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        },
        "price": service.price,
        "priceCurrency": "USD"
      }))
    },
    "employee": barbers
      .filter(b => b.id !== 'nahom') // Exclude test barber
      .map(barber => ({
        "@type": "Person",
        "name": barber.name,
        "jobTitle": "Barber",
        "description": barber.bio
      })),
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "currenciesAccepted": "USD"
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Family Ties Barbershop",
    "url": "https://family-ties-barbershop.vercel.app",
    "logo": "https://family-ties-barbershop.vercel.app/assets/barbershop-images/logo/family-ties-logo-v01.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+15077200522",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "en"
    },
    "sameAs": [
      businessInfo.social.instagram,
      businessInfo.social.facebook
    ]
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://family-ties-barbershop.vercel.app"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

