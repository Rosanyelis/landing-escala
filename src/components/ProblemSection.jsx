import React from "react";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import Section from "../layout/Section";

const ProblemSection = () => {
  return (
    <Section
      id="problem"
      className="bg-white py-16 md:py-24 border-t border-gray-100"
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="flex-1 pr-0 md:pr-10 lg:pr-14 relative w-full"
          >
            {/* Orange Vertical Line for Desktop */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-[80%] bg-[#EC613B] rounded-[2px]"></div>

            <h2 className="uppercase font-black text-gray-900 !leading-[1.05] tracking-[0.02em] text-center md:text-left mb-6">
              <span className="block text-[32px] md:text-[34px] lg:text-[52px]">
                MUCHAS <span className="text-[#EC613B]">PYMES</span> CREEN QUE
              </span>
              <span className="block text-[32px] md:text-[34px] lg:text-[52px]">
                TIENEN CULTURA PORQUE
              </span>
              <span className="block text-[32px] md:text-[34px] lg:text-[52px]">
                TIENEN VALORES ESCRITOS
              </span>
            </h2>
          </motion.div>

          {/* Mobile Orange Line */}
          <div className="md:hidden w-full h-[3px] bg-[#EC613B] rounded-[2px] my-8"></div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="flex-1 pl-0 md:pl-10 lg:pl-14 w-full"
          >
            <div className="bg-[#26211F] rounded-[20px] py-9 px-8 md:px-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden">
              {/* Glows matching the image */}
              <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-[#EC613B]/20 blur-[70px] rounded-full pointer-events-none" />
              <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-[#EC613B]/10 blur-[70px] rounded-full pointer-events-none" />

              <h3 className="text-[17px] md:text-[19px] font-bold mb-5 text-center text-white relative z-10 font-sans tracking-wide">
                Pero en la práctica:
              </h3>

              <div className="relative z-10 flex justify-center">
                <ul className="space-y-3.5 text-gray-300 text-[15px] md:text-[16px] font-medium tracking-wide">
                  <li className="flex items-start">
                    <span className="mr-3 text-white font-bold text-lg leading-none mt-[-1px]">
                      •
                    </span>
                    <span>
                      Las decisiones importantes{" "}
                      <span className="font-bold text-white">
                        escalan al CEO
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-white font-bold text-lg leading-none mt-[-1px]">
                      •
                    </span>
                    <span>
                      Los KPIs{" "}
                      <span className="font-bold text-white">
                        no se cumplen
                      </span>{" "}
                      consistentemente
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-white font-bold text-lg leading-none mt-[-1px]">
                      •
                    </span>
                    <span>
                      Las reuniones{" "}
                      <span className="font-bold text-white">
                        no generan claridad
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-white font-bold text-lg leading-none mt-[-1px]">
                      •
                    </span>
                    <span>
                      El equipo{" "}
                      <span className="font-bold text-white">
                        trabaja mucho
                      </span>
                      ... pero{" "}
                      <span className="font-bold text-white">sin foco</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default ProblemSection;
