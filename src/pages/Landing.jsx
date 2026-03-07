import React, { useEffect, Suspense, lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Utilities
import { getSeoMeta } from "../utils/seo";
import { getOrganizationSchema, getServiceSchema } from "../utils/schema";

// Import Logo
import logoImg from "../assets/img/logo.webp";

// Dynamic Imports for Code Splitting
import HeroSection from "../components/HeroSection";
const ProblemSection = lazy(() => import("../components/ProblemSection"));
const InsightSection = lazy(() => import("../components/InsightSection"));
const BenefitsSection = lazy(() => import("../components/BenefitsSection"));
const TransformationSection = lazy(
  () => import("../components/TransformationSection"),
);
const TestimonialsSection = lazy(
  () => import("../components/TestimonialsSection"),
);
const ClientsSection = lazy(() => import("../components/ClientsSection"));
const FinalCTASection = lazy(() => import("../components/FinalCTASection"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() => import("../components/ScrollToTopButton"));

const Landing = () => {
  const seoMeta = getSeoMeta();

  useEffect(() => {
    // Optionally trigger a pageview analytics event
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, []);

  return (
    <HelmetProvider>
      <div className="font-sans antialiased bg-white text-gray-900 w-full overflow-x-hidden">
        <Helmet>
          {/* Primary Meta Tags */}
          <title>{seoMeta.title}</title>
          <meta name="title" content={seoMeta.title} />
          <meta name="description" content={seoMeta.description} />
          <meta name="keywords" content={seoMeta.keywords} />
          <link rel="canonical" href={seoMeta.url} />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={seoMeta.url} />
          <meta property="og:title" content={seoMeta.title} />
          <meta property="og:description" content={seoMeta.description} />
          <meta property="og:image" content={seoMeta.image} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={seoMeta.url} />
          <meta property="twitter:title" content={seoMeta.title} />
          <meta property="twitter:description" content={seoMeta.description} />
          <meta property="twitter:image" content={seoMeta.image} />

          {/* Schema.org markups */}
          <script type="application/ld+json">
            {JSON.stringify(getOrganizationSchema())}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(getServiceSchema())}
          </script>
        </Helmet>

        {/* Header matching the image */}
        <header className="fixed top-0 w-full z-50 bg-black border-b-[4px] border-[#EC613B] py-5">
          <div className="container-custom mx-auto flex justify-center md:justify-between items-center">
            <div className="text-white z-50 flex items-center">
              <img
                src={logoImg}
                alt="ESCALA Logo"
                className="h-14 md:h-30 w-auto object-contain cursor-pointer"
                style={{ aspectRatio: "180/56" }}
                width="180"
                height="56"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
            </div>
            <div className="z-50 hidden md:flex items-center">
              <button
                onClick={() =>
                  document
                    .getElementById("diagnostico-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-[#EC613B] hover:bg-[#D45431] text-white font-bold py-2 md:py-2.5 px-4 md:px-6 rounded-full transition-colors text-[10px] md:text-sm shadow-md"
              >
                SOLICITAR MI DIAGNÓSTICO
              </button>
            </div>
          </div>
        </header>

        <main>
          <HeroSection />
          <Suspense fallback={null}>
            <ProblemSection />
            <InsightSection />
            <BenefitsSection />
            <TransformationSection />
            <TestimonialsSection />
            <ClientsSection />
            <FinalCTASection />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        <Suspense fallback={null}>
          <ScrollToTopButton />
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default Landing;
