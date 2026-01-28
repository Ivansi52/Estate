const StructuredDataContact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact 2Clients Digital Agency",
    "description": "Contact 2Clients digital marketing agency for web development, SEO, and digital strategy consultation. Multiple office locations across Poland.",
    "mainEntity": {
      "@type": "Organization",
      "name": "2Clients",
      "url": "https://2clients.com",
      "email": "info@2clients.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+48-22-123-4567",
          "contactType": "customer service",
          "email": "info@2clients.com",
          "availableLanguage": "English",
          "areaServed": "Global"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+48-58-234-5678",
          "contactType": "customer service",
          "email": "info@2clients.com",
          "availableLanguage": "English",
          "areaServed": "Poland"
        }
      ],
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "123 Marszałkowska Street",
          "addressLocality": "Warsaw",
          "postalCode": "00-102",
          "addressCountry": "PL",
          "addressRegion": "Mazovia"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "45 Długa Street",
          "addressLocality": "Gdańsk",
          "postalCode": "80-831",
          "addressCountry": "PL",
          "addressRegion": "Pomerania"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "210 Piotrkowska Street",
          "addressLocality": "Łódź",
          "postalCode": "90-368",
          "addressCountry": "PL",
          "addressRegion": "Łódź"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "12 Święty Marcin Street",
          "addressLocality": "Poznań",
          "postalCode": "61-803",
          "addressCountry": "PL",
          "addressRegion": "Greater Poland"
        }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "10:00",
          "closes": "18:00"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredDataContact;
