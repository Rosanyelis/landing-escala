import React from "react";
import Container from "../layout/Container";
import Section from "../layout/Section";
import { useInView } from "../hooks/useInView";
import reglasImg from "../assets/img/varios/reglas.webp";
import metricas from "../assets/img/varios/metricas.webp";
import estructura from "../assets/img/varios/estructura.webp";

const InsightSection = () => {
  const [ref1, inView1] = useInView({ amount: 0.2 });
  const [ref2, inView2] = useInView({ amount: 0.2 });
  const [ref3, inView3] = useInView({ amount: 0.2 });
  const [ref4, inView4] = useInView({ amount: 0.2 });

  return (
    <Section
      id="insight"
      className="bg-white pb-16 md:pb-24 text-center px-0 !pt-0"
    >
      <div className="w-full bg-[#F4F4F4] py-8 md:py-16 mb-8 md:mb-16">
        <Container>
          <div
            ref={ref1}
            className={`max-w-6xl mx-auto scroll-reveal ${inView1 ? "in-view" : ""}`}
          >
            <p className="text-[20px] md:text-[26px] text-[#222222] mb-1 font-medium tracking-[0.02em]">
              Eso no es falta de talento
            </p>
            <h2 className="uppercase font-bold text-[#111] !leading-[1.1] tracking-[0.02em] text-[26px] md:text-[38px] lg:text-[54px] tracking-[0.05em]">
              ES FALTA DE{" "}
              <span className="text-[#EC613B]">
                ESTRUCTURA CULTURAL OPERATIVA
              </span>
            </h2>
          </div>
        </Container>
      </div>

      <Container className="px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center">
          <div
            ref={ref2}
            className={`text-center w-full mb-3 scroll-reveal ${inView2 ? "in-view" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="uppercase text-[28px] md:text-[34px] lg:text-[46px] font-medium text-[#111] !leading-[1.15] tracking-[0.03em]">
              LA MAYORÍA DE EMPRESAS TRABAJAN SOBRE{" "}
              <span className="text-[#EC613B] border-b-[4px] border-[#EC613B] pb-[2px] leading-none inline-block ">
                MOTIVACIÓN
              </span>
            </h3>
          </div>

          <div
            ref={ref3}
            className={`text-center w-full mb-10 md:mb-12 scroll-reveal ${inView3 ? "in-view" : ""}`}
            style={{ transitionDelay: "0.4s" }}
          >
            <h3 className="uppercase text-[28px] md:text-[34px] lg:text-[46px] font-medium text-[#111] !leading-[1.15] tracking-[0.03em]">
              <span className="text-[#EC613B] border-b-[4px] border-[#EC613B] pb-[2px] leading-none inline-block">
                NOSOTROS
              </span>{" "}
              TRABAJAMOS SOBRE:
            </h3>
          </div>

          <div
            ref={ref4}
            className={`w-full bg-[#EBEBEB] rounded-t-[30px] rounded-b-[30px] md:rounded-b-none pt-8 pb-10 md:pt-8 md:pb-8 px-4 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] scroll-reveal ${inView4 ? "in-view" : ""}`}
            style={{ transitionDelay: "0.6s" }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-4 md:gap-6 max-w-[650px] mx-auto">
              {/* Factor 1: Reglas */}
              <div className="flex flex-col items-center">
                <div className="w-[72px] h-[72px] md:w-[100px] md:h-[100px] rounded-full bg-[#EC613B] flex items-center justify-center mb-3 md:mb-5 border-2 md:border-4 border-transparent hover:border-white/20 transition-all shadow-md">
                  <img
                    src={reglasImg}
                    alt="Icono Reglas"
                    className="w-[38px] h-[38px] md:w-[54px] md:h-[54px] object-contain"
                    width="54"
                    height="54"
                    loading="lazy"
                  />
                </div>
                <span className="uppercase font-bold text-[#EC613B] tracking-tighter text-[20px] md:text-[28px]">
                  REGLAS
                </span>
              </div>

              {/* Factor 2: Métricas */}
              <div className="flex flex-col items-center">
                <div className="w-[72px] h-[72px] md:w-[100px] md:h-[100px] rounded-full bg-[#EC613B] flex items-center justify-center mb-3 md:mb-5 border-2 md:border-4 border-transparent hover:border-white/20 transition-all shadow-md">
                  <img
                    src={metricas}
                    alt="Icono Métricas"
                    className="w-[38px] h-[38px] md:w-[54px] md:h-[54px] object-contain"
                    width="54"
                    height="54"
                    loading="lazy"
                  />
                </div>
                <span className="uppercase font-bold text-[#EC613B] tracking-tighter text-[20px] md:text-[28px]">
                  MÉTRICAS
                </span>
              </div>

              {/* Factor 3: Estructura — en móvil ocupa la fila inferior centrado */}
              <div className="flex flex-col items-center col-span-2 sm:col-span-1">
                <div className="w-[72px] h-[72px] md:w-[100px] md:h-[100px] rounded-full bg-[#EC613B] flex items-center justify-center mb-3 md:mb-5 border-2 md:border-4 border-transparent hover:border-white/20 transition-all shadow-md">
                  <img
                    src={estructura}
                    alt="Icono Estructura"
                    className="w-[38px] h-[38px] md:w-[54px] md:h-[54px] object-contain"
                    width="54"
                    height="54"
                    loading="lazy"
                  />
                </div>
                <span className="uppercase font-bold text-[#EC613B] tracking-tighter text-[20px] md:text-[28px]">
                  ESTRUCTURA
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default InsightSection;
