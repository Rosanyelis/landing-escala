import React from "react";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import LeadForm from "./LeadForm";
import heroImg from "../assets/img/hero.webp";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="pt-28 md:pt-30 lg:pt-48 pb-16 lg:pb-24 relative overflow-hidden bg-white w-full"
    >
      <Container className="max-w-[1300px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="md:col-span-7 lg:col-span-7 flex flex-col items-center text-center w-full"
          >
            {/* The h1 matches the exact typographical layout of the image */}
            <h1
              className="uppercase w-full select-none mb-6 md:mb-10 text-[24px] md:text-[34px] lg:text-[52px] font-black !leading-[1.1] tracking-[0.03em]"
              style={{ textShadow: "2px 2px 0px #D1D5DB" }}
            >
              <span className="block text-gray-900">
                Instalamos una cultura que crea
              </span>
              <span className="block text-gray-900">
                líderes <span className="text-[#EC613B]">autónomos,</span>{" "}
                equipos con
              </span>
              <span className="block text-[#EC613B]">
                ownership <span className="text-gray-900">real y</span>{" "}
                cumplimiento
              </span>
              <span className="block text-gray-900">
                consistente de <span className="text-[#EC613B]">KPIs</span>
              </span>
            </h1>

            {/* Hero Image */}
            <div className="w-full flex justify-center">
              <img
                src={heroImg}
                alt="Cultura Organizacional Escala"
                className="w-full max-w-[650px] h-auto object-cover rounded-[40px] md:rounded-[60px]"
                style={{
                  filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.08))",
                  aspectRatio: "1/1",
                }}
                loading="eager"
                width="650"
              />
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="md:col-span-5 lg:col-span-5 relative z-10 w-full max-w-[480px] mx-auto"
            id="diagnostico-form"
          >
            <LeadForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
