import React from "react";
import Container from "../layout/Container";
import LeadForm from "./LeadForm";

// Imágenes hero desde public/ (preload en index.html; desktop = 900px para ahorro)
const heroMobile = "/hero-mobile.webp";
const heroDesktop = "/hero-desktop.webp";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="pt-28 md:pt-30 lg:pt-48 pb-16 lg:pb-24 relative overflow-hidden bg-white w-full"
    >
      <Container className="max-w-[1300px]">
        <div className="w-full flex justify-center text-center">
          {/* The h1 matches the exact typographical layout of the image */}
          <h1
            className="uppercase w-full select-none mb-6 md:mb-10 text-[28px] md:text-[34px] lg:text-[48px] font-black !leading-[1.1] tracking-[0.03em]"
            style={{ textShadow: "2px 2px 0px #D1D5DB" }}
          >
            Instalamos una cultura que crea líderes{" "}
            <span className="text-[#EC613B]">autónomos,</span> equipos con{" "}
            <br className="hidden md:block" />
            <span className="text-[#EC613B]">ownership</span> real y{" "}
            <span className="text-[#EC613B]">cumplimiento</span> consistente de{" "}
            <span className="text-[#EC613B]">KPIs</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start lg:items-center">
          <div
            className="md:col-span-7 lg:col-span-7 flex flex-col items-center text-center w-full animate-fade-in-up opacity-0"
            style={{ animationDelay: "100ms" }}
          >
            {/* Hero Image: móvil = versión ligera, escritorio = completa (mejor LCP) */}
            <div className="w-full flex justify-center">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet={heroMobile}
                  type="image/webp"
                />
                <source
                  media="(min-width: 769px)"
                  srcSet={heroDesktop}
                  type="image/webp"
                />
                <img
                  src={heroDesktop}
                  alt="Cultura Organizacional Escala"
                  className="w-full max-w-[650px] h-auto object-cover rounded-[40px] md:rounded-[60px]"
                  style={{
                    filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.08))",
                    aspectRatio: "1/1",
                  }}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width="650"
                  height="650"
                  sizes="(max-width: 768px) 100vw, 650px"
                />
              </picture>
            </div>
          </div>

          {/* Form Column */}
          <div
            className="md:col-span-5 lg:col-span-5 relative z-10 w-full max-w-[480px] mx-auto animate-fade-in opacity-0"
            id="diagnostico-form"
            style={{ animationDelay: "400ms" }}
          >
            <LeadForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
