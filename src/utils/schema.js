export const getOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Escala",
    url: "https://escala.uno",
    logo: "https://escala.uno/logo.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+52-55-3797-5914",
        contactType: "customer service",
        email: "hola@escala.uno",
        availableLanguage: ["Spanish"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/metodoescalauno",
      "https://www.instagram.com/escala.uno/",
      "https://wa.me/+525537975914",
    ],
  };
};

export const getServiceSchema = () => {
  return {
    "@context": "https://schema.org/",
    "@type": "Service",
    serviceType: "Consultoría Organizacional",
    provider: {
      "@type": "LocalBusiness",
      name: "Escala",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenida Presidente Masaryk 111",
        addressLocality: "Ciudad de México",
        postalCode: "11560",
        addressCountry: "MX",
      },
    },
    areaServed: {
      "@type": "State",
      name: "Mexico",
    },
    description:
      "Servicios de consultoría para instalación de cultura organizacional, liderazgo y mejora de KPIs en PYMES.",
  };
};
