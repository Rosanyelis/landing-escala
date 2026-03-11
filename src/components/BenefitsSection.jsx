import React, { useRef } from "react";
import Container from "../layout/Container";
import Section from "../layout/Section";
import { useInView } from "../hooks/useInView";
import { useCarouselScroll } from "../hooks/useCarouselScroll";

const BenefitsSection = () => {
  const [refTitle, inViewTitle] = useInView({ amount: 0.2 });
  const [refGrid, inViewGrid] = useInView({ margin: "-100px" });
  const benefitsCarouselRef = useRef(null);
  useCarouselScroll(benefitsCarouselRef, { speed: 0.5 });

  const benefits = [
    {
      title: "AUTONOMÍA Y ALTO RENDIMIENTO DE EQUIPO",
      description:
        "Equipos autónomos, autosuficientes, enfocados y colaborativos.",
    },
    {
      title: "CUMPLIMIENTO DE REPORTES Y KPIs",
      description:
        "Accountability de reportes y resultados, control y cumplimiento de objetivos y KPIs.",
    },
    {
      title: "LIDERAZGO Y COMUNICACIÓN EFECTIVA",
      description:
        "Líderes que comunican asertivamente, inspiran, dirigen y multiplican el crecimiento.",
    },
    {
      title: "CRECIMIENTO SOSTENIBLE",
      description:
        "Una cultura que permite de manera sostenible el crecimiento y la mejora continua.",
    },
  ];

  return (
    <Section id="benefits" className="bg-white py-0 md:py-0 text-center">
      <Container className="max-w-[1250px]">
        <div
          ref={refTitle}
          className={`max-w-[1050px] mx-auto mb-10 md:mb-20 scroll-reveal ${inViewTitle ? "in-view" : ""}`}
        >
          <h2 className="uppercase font-bold text-[#111] !leading-[1.15] tracking-[0.2rem] mb-8 md:mb-10 block">
            <span className="block text-[24px] md:text-[36px] lg:text-[46px] mb-1 ">
              TRANSFORMA TU ORGANIZACIÓN CON LA AYUDA DE UNA
            </span>
            <span className="block text-[24px] md:text-[36px] lg:text-[46px]">
              CONSULTORÍA <span className="text-[#EC613B]">ESPECIALIZADA</span>{" "}
              EN <span className="text-[#EC613B]">ALTO RENDIMIENTO</span> DE{" "}
              <span className="text-[#EC613B]">PYMES</span>
            </span>
          </h2>
          <p className="text-[18px] md:text-[22px] font-bold text-[#111] max-w-3xl mx-auto tracking-normal px-4 leading-snug">
            Ayudamos a empresas como la tuya a desarrollar una cultura
            organizacional que impulse:
          </p>
        </div>

        {/* Móvil: carrusel arrastrable con ratón/táctil y auto-scroll */}
        <div
          ref={benefitsCarouselRef}
          className="md:hidden w-full -mx-1 mt-10 pt-8 pb-6 carousel-scroll-touch"
        >
          <div className="flex items-center gap-5 w-max px-2">
            {[...benefits, ...benefits].map((benefit, index) => (
              <div
                key={`mobile-benefit-${index}`}
                className="flex-shrink-0 w-[280px] bg-[#F4F6F8] rounded-[16px] px-5 pb-8 pt-10 border border-[#E2E6EA] shadow-[6px_8px_15px_rgba(0,0,0,0.06)] relative flex flex-col items-center justify-start"
              >
                <div className="absolute top-0 left-0 transform -translate-x-1/3 -translate-y-[40%]">
                  <div className="w-[52px] h-[52px] bg-gradient-to-br from-[#FF7A50] to-[#E5522E] rounded-full flex items-center justify-center shadow-[3px_5px_12px_rgba(236,97,59,0.45)] border-[3px] border-white">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-[16px] text-[#EC613B] mb-4 text-center min-h-[42px] flex items-center justify-center w-full mt-1 tracking-normal px-1 font-sans">
                  {benefit.title}
                </h3>
                <p className="text-[#333] text-[14px] leading-relaxed text-center font-medium px-1">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid como antes con scroll-reveal */}
        <div
          ref={refGrid}
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12 max-w-[1150px] mx-auto px-2 mt-10 md:mt-16"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-[#F4F6F8] rounded-[16px] px-5 pb-8 pt-10 border border-[#E2E6EA] shadow-[6px_8px_15px_rgba(0,0,0,0.06)] hover:shadow-[6px_10px_20px_rgba(236,97,59,0.15)] transition-all duration-300 relative flex flex-col items-center justify-start h-full scroll-reveal ${inViewGrid ? "in-view" : ""}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-0 left-0 transform -translate-x-1/3 -translate-y-[40%]">
                <div className="w-[52px] h-[52px] bg-gradient-to-br from-[#FF7A50] to-[#E5522E] rounded-full flex items-center justify-center shadow-[3px_5px_12px_rgba(236,97,59,0.45)] border-[3px] border-white">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-[16px] text-[#EC613B] mb-4 text-center min-h-[42px] flex items-center justify-center w-full mt-1 tracking-normal px-1 font-sans">
                {benefit.title}
              </h3>
              <p className="text-[#333] text-[14px] md:text-[14px] leading-relaxed text-center font-medium px-1">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default BenefitsSection;
