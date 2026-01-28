const StructuredDataPortfolio = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Web Development Portfolio",
    "description": "Portfolio of successful web development projects, e-commerce solutions, and digital marketing campaigns",
    "numberOfItems": 10,
    "itemListElement": [
      {
        "@type": "CreativeWork",
        "position": 1,
        "name": "Construction Company Website",
        "description": "Professional website for construction company with project showcase and contact forms",
        "creator": {
          "@type": "Organization",
          "name": "2Clients"
        },
        "dateCreated": "2024-01-15"
      },
      {
        "@type": "CreativeWork",
        "position": 2,
        "name": "Real Estate Agency Platform",
        "description": "Complete real estate platform with property listings and advanced search functionality",
        "creator": {
          "@type": "Organization",
          "name": "2Clients"
        },
        "dateCreated": "2024-01-10"
      },
      {
        "@type": "CreativeWork",
        "position": 3,
        "name": "Premium Electric Cars E-commerce",
        "description": "E-commerce platform for premium electric vehicles with advanced filtering and booking system",
        "creator": {
          "@type": "Organization",
          "name": "2Clients"
        },
        "dateCreated": "2024-01-05"
      },
      {
        "@type": "CreativeWork",
        "position": 4,
        "name": "Interior Design Studio Website",
        "description": "Portfolio website for interior design studio with 3D renders and project galleries",
        "creator": {
          "@type": "Organization",
          "name": "2Clients"
        },
        "dateCreated": "2023-12-20"
      },
      {
        "@type": "CreativeWork",
        "position": 5,
        "name": "Luxury Marketplace Platform",
        "description": "High-end marketplace platform with secure payment processing and premium user experience",
        "creator": {
          "@type": "Organization",
          "name": "2Clients"
        },
        "dateCreated": "2023-12-15"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredDataPortfolio;
