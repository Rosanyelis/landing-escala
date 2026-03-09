import React from "react";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import Section from "../layout/Section";
import LeadForm from "./LeadForm";

const FinalCTASection = () => {
  return (
    <>
      <Section
        id="final-cta"
        className="bg-white py-16 md:py-24 relative overflow-hidden"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="text-center mb-16"
          >
            <h2 className="uppercase font-bold text-gray-900 leading-tight">
              <span className="text-[28px] md:text-[36px]">
                SOLICITA TU DIAGNÓSTICO{" "}
                <span className="text-brand-primary">GRATUITO</span> PARA{" "}
                <span className="text-brand-primary">ESCALAR</span>:
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 max-w-[1100px] mx-auto items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="lg:col-span-5 flex flex-col items-start bg-[#2B2B2B] rounded-[30px] p-8 md:p-10 lg:p-12 shadow-[12px_12px_0px_#EC613B] text-white relative overflow-hidden h-fit"
            >
              {/* Background design */}
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#EC613B]/30 blur-[70px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#EC613B]/20 blur-[70px] rounded-full pointer-events-none" />

              <div className="relative z-10 w-full">
                <p className="text-[16px] md:text-[18px] font-normal mb-3 leading-relaxed text-white">
                  Completa el formulario y obtén una{" "}
                  <span className="text-[#EC613B] font-bold uppercase block my-1">
                    SESIÓN DE DIAGNÓSTICO
                  </span>
                  <span className="text-[#EC613B] font-bold uppercase">
                    PERSONALIZADO
                  </span>{" "}
                  con un consultor experto en cultura organizacional.
                </p>

                <p className="font-normal text-[16px] md:text-[18px] mb-3 text-white">
                  En esta sesión:
                </p>

                <ul className="space-y-8 relative border-l border-[#EC613B] ml-2 pl-6">
                  <li className="relative">
                    <div className="absolute -left-[33px] top-1 text-[#EC613B] bg-[#2B2B2B] rounded-full  py-1">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-[15px] md:text-[16px] text-gray-200 leading-relaxed block">
                      Evaluaremos la cultura, el clima organizacional y las
                      brechas de liderazgo actuales en tu empresa.
                    </span>
                  </li>
                  <li className="relative">
                    <div className="absolute -left-[33px] top-1 text-[#EC613B] bg-[#2B2B2B] rounded-full  py-1">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-[15px] md:text-[16px] text-gray-200 leading-relaxed block">
                      Detectaremos los bloqueos que limitan el rendimiento de tu
                      equipo.
                    </span>
                  </li>
                  <li className="relative">
                    <div className="absolute -left-[33px] top-1 text-[#EC613B] bg-[#2B2B2B] rounded-full  py-1">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-[15px] md:text-[16px] text-gray-200 leading-relaxed block">
                      Te daremos un plan de acción personalizado para empezar a
                      fortalecer la cultura, el liderazgo y la colaboración en
                      tu negocio.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="lg:col-span-7 relative z-10"
            >
              <LeadForm />
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section bgClass="bg-[#F4F4F4]" className="py-8 md:py-8 text-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[1000px] mx-auto"
          >
            <h2 className="uppercase font-bebas text-black leading-none mb-6">
              <span className="text-[40px] md:text-[56px] lg:text-[68px] tracking-[0.02em]">
                PREPARA A TU EMPRESA PARA{" "}
                <span className="text-[#EC613B]">ESCALAR:</span>
              </span>
            </h2>
            <p className="text-[18px] md:text-[22px] text-black font-sans leading-relaxed max-w-4xl mx-auto">
              La <span className="font-bold">cultura</span> es la base para{" "}
              <span className="font-bold">crecer</span> de manera{" "}
              <span className="text-[#EC613B] font-bold">sostenible</span>{" "}
              cumpliendo <br className="hidden md:block" />
              KPIS <span className="font-bold">sin perder</span> el{" "}
              <span className="text-[#EC613B] font-bold">control</span> ni la{" "}
              <span className="text-[#EC613B] font-bold">esencia</span>.
            </p>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default FinalCTASection;
