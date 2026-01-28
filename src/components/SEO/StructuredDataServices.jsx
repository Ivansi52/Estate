const StructuredDataServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "description": "Professional digital marketing services including web development, SEO, e-commerce solutions, and digital strategy. Full-cycle care for your business growth.",
    "provider": {
      "@type": "Organization",
      "name": "2Clients",
      "url": "https://2clients.com",
      "email": "info@2clients.com"
    },
    "serviceType": "Digital Marketing",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom web development solutions including corporate websites, e-commerce, and web applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Services",
            "description": "Search engine optimization to improve your website's visibility and organic traffic"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Development",
            "description": "Complete e-commerce solutions with custom functionality and integrations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Strategy",
            "description": "Comprehensive digital marketing strategies to grow your business online"
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "priceRange": "$2999 - $9999",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredDataServices;
