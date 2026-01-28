const StructuredDataAbout = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About 2Clients Digital Marketing Agency",
    "description": "Learn about 2Clients digital marketing agency. Our experienced team specializes in web development, SEO, and digital strategy to help businesses grow online.",
    "mainEntity": {
      "@type": "Organization",
      "name": "2Clients",
      "description": "Professional digital marketing agency specializing in web development, SEO, and digital strategy",
      "url": "https://2clients.com",
      "logo": "https://2clients.com/logo.png",
      "foundingDate": "2020",
      "numberOfEmployees": "10-50",
      "areaServed": "Global",
      "knowsAbout": [
        "Web Development",
        "SEO Services",
        "Digital Marketing",
        "E-commerce Development",
        "Digital Strategy"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Best Digital Agency 2024",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Web Excellence Awards"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Top SEO Performance",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Search Marketing Institute"
          }
        }
      ],
      "employee": [
        {
          "@type": "Person",
          "name": "Development Team",
          "jobTitle": "Web Developers",
          "worksFor": {
            "@type": "Organization",
            "name": "2Clients"
          }
        },
        {
          "@type": "Person",
          "name": "SEO Specialists",
          "jobTitle": "SEO Experts",
          "worksFor": {
            "@type": "Organization",
            "name": "2Clients"
          }
        },
        {
          "@type": "Person",
          "name": "Digital Strategists",
          "jobTitle": "Digital Marketing Consultants",
          "worksFor": {
            "@type": "Organization",
            "name": "2Clients"
          }
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

export default StructuredDataAbout;
