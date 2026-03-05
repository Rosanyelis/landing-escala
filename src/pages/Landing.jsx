import React, { useEffect, Suspense, lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Utilities
import { getSeoMeta } from "../utils/seo";
import { getOrganizationSchema, getServiceSchema } from "../utils/schema";

// Dynamic Imports for Code Splitting
const HeroSection = lazy(() => import("../components/HeroSection"));
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

const FallbackLoader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="animate-pulse w-8 h-8 rounded-full bg-brand-primary"></div>
  </div>
);

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
          <div className="container-custom mx-auto flex justify-between items-center">
            <div className="text-white z-50 flex items-center">
              <svg
                height="24"
                viewBox="0 0 156 26"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[18px] md:h-6"
              >
                <path d="M5 3 H19 V6 H9 V11 H18 V14 H9 V19 H19 V22 H5 Z" />
                <path d="M28 19 C28 21 30 22 33 22 C36 22 38 21 38 19 C38 16 34 15 32 14.5 C28 13 27 10.5 27 7.5 C27 4.5 30 2 34 2 C37 2 40 3.5 41.5 6 L38.5 7.5 C37.5 5.5 36 5 34 5 C32 5 30 6 30 7.5 C30 9.5 33 10 34.5 10.5 C39 12 41 14.5 41 18.5 C41 22.5 38 25 33 25 C28.5 25 25.5 22.5 24.5 20 L28 19 Z" />
                <path d="M51 13.5 C51 7 55 2 61 2 C66 2 69 5 70 8 L66 9.5 C65.5 7.5 63.5 5 61 5 C57 5 54.5 9 54.5 13.5 C54.5 18 57 21.5 61 21.5 C63.5 21.5 65.5 19.5 66.5 17.5 L70 19 C68.5 22.5 65 25 61 25 C55 25 51 20 51 13.5 Z" />
                <path d="M78 22 L86.5 2 H90.5 L99 22 H94.5 L88.5 7 L82.5 22 Z" />
                <path d="M106 2 H110 V19 H122 V22 H106 Z" />
                <path d="M128 22 L136.5 2 H140.5 L149 22 H144.5 L138.5 7 L132.5 22 Z" />
              </svg>
              <span className="sr-only">ESCALA</span>
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
          <Suspense fallback={<FallbackLoader />}>
            <HeroSection />
            <ProblemSection />
            <InsightSection />
            <BenefitsSection />
            <TransformationSection />
            <TestimonialsSection />
            <ClientsSection />
            <FinalCTASection />
          </Suspense>
        </main>

        <Suspense fallback={<FallbackLoader />}>
          <Footer />
        </Suspense>

        {/* Mobile Sticky CTA */}
        <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 p-4 z-50 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
          <button
            onClick={() =>
              document
                .getElementById("diagnostico-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full bg-[#EC613B] text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#D45431] shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
          >
            SOLICITAR DIAGNÓSTICO
          </button>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Landing;
