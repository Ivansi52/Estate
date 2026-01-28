const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "2Clients",
    "description": "Professional digital marketing agency specializing in web development, SEO, and digital strategy. Transform your business with our full-cycle digital solutions.",
    "url": "https://2clients.com",
    "logo": "https://2clients.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48-22-123-4567",
      "contactType": "customer service",
      "email": "info@2clients.com",
      "availableLanguage": "English"
    },
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "123 Marszałkowska Street",
        "addressLocality": "Warsaw",
        "postalCode": "00-102",
        "addressCountry": "PL"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "45 Długa Street",
        "addressLocality": "Gdańsk",
        "postalCode": "80-831",
        "addressCountry": "PL"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "210 Piotrkowska Street",
        "addressLocality": "Łódź",
        "postalCode": "90-368",
        "addressCountry": "PL"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "12 Święty Marcin Street",
        "addressLocality": "Poznań",
        "postalCode": "61-803",
        "addressCountry": "PL"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/2clients",
      "https://www.facebook.com/2clients",
      "https://www.instagram.com/2clients"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "Web Development",
        "description": "Custom web development solutions including corporate websites, e-commerce, and web applications"
      },
      {
        "@type": "Service",
        "name": "SEO Services",
        "description": "Search engine optimization to improve your website's visibility and organic traffic"
      },
      {
        "@type": "Service",
        "name": "Digital Marketing",
        "description": "Comprehensive digital marketing strategies to grow your business online"
      }
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "areaServed": "Global"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
