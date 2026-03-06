import React from "react";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import Section from "../layout/Section";

// Cambia el nombre del archivo de imagen si es diferente
import reglasImg from "../assets/img/varios/reglas.webp";
import metricas from "../assets/img/varios/metricas.webp";
import estructura from "../assets/img/varios/estructura.webp";

const InsightSection = () => {
  return (
    <Section
      id="insight"
      className="bg-white pb-16 md:pb-24 text-center px-0 !pt-0"
    >
      {/* Grey full-width band */}
      <div className="w-full bg-[#F4F4F4] py-16 md:py-20 mb-16 md:mb-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="max-w-6xl mx-auto"
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
          </motion.div>
        </Container>
      </div>

      <Container className="px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="text-center w-full mb-3"
          >
            <h3 className="uppercase text-[28px] md:text-[34px] lg:text-[46px] font-medium text-[#111] !leading-[1.15] tracking-[0.03em]">
              LA MAYORÍA DE EMPRESAS TRABAJAN SOBRE{" "}
              <span className="text-[#EC613B] border-b-[4px] border-[#EC613B] pb-[2px] leading-none inline-block ">
                MOTIVACIÓN
              </span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="text-center w-full mb-10 md:mb-12"
          >
            <h3 className="uppercase text-[28px] md:text-[34px] lg:text-[46px] font-medium text-[#111] !leading-[1.15] tracking-[0.03em]">
              <span className="text-[#EC613B] border-b-[4px] border-[#EC613B] pb-[2px] leading-none inline-block">
                NOSOTROS
              </span>{" "}
              TRABAJAMOS SOBRE:
            </h3>
          </motion.div>

          {/* Grey background base for icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="w-full bg-[#EBEBEB] rounded-t-[30px] rounded-b-[30px] md:rounded-b-none pt-12 pb-14 px-4 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 max-w-[650px] mx-auto">
              {/* Factor 1: Reglas */}
              <div className="flex flex-col items-center">
                <div className="w-[100px] h-[100px] rounded-full bg-[#EC613B] flex items-center justify-center mb-5 border-4 border-transparent hover:border-white/20 transition-all shadow-md">
                  <img
                    src={reglasImg}
                    alt="Icono Reglas"
                    className="w-[54px] h-[54px] object-contain"
                  />
                </div>
                <span className="uppercase font-bold text-[#EC613B] tracking-tighter text-[28px]">
                  REGLAS
                </span>
              </div>

              {/* Factor 2: Métricas */}
              <div className="flex flex-col items-center">
                <div className="w-[100px] h-[100px] rounded-full bg-[#EC613B] flex items-center justify-center mb-5 border-4 border-transparent hover:border-white/20 transition-all shadow-md">
                  <img
                    src={metricas}
                    alt="Icono Reglas"
                    className="w-[54px] h-[54px] object-contain"
                  />
                </div>
                <span className="uppercase font-bold text-[#EC613B] tracking-tighter text-[28px]">
                  MÉTRICAS
                </span>
              </div>

              {/* Factor 3: Estructura */}
              <div className="flex flex-col items-center">
                <div className="w-[100px] h-[100px] rounded-full bg-[#EC613B] flex items-center justify-center mb-5 border-4 border-transparent hover:border-white/20 transition-all shadow-md">
                  <img
                    src={estructura}
                    alt="Icono Reglas"
                    className="w-[54px] h-[54px] object-contain"
                  />
                </div>
                <span className="uppercase font-bold text-[#EC613B] tracking-tighter text-[28px]">
                  ESTRUCTURA
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default InsightSection;
