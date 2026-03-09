import React from "react";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import Section from "../layout/Section";

// Import your physical images here so Vite bundles them properly:
import card1 from "../assets/img/card-1.webp";
import card2 from "../assets/img/card-2.webp";
import card3 from "../assets/img/card-3.webp";
import card4 from "../assets/img/card-4.webp";
import card5 from "../assets/img/card-5.webp";
import card6 from "../assets/img/card-6.webp";
import icon1 from "../assets/img/varios/icon-card-1.png";
import icon2 from "../assets/img/varios/icon-card-2.webp";
import icon3 from "../assets/img/varios/icon-card-3.webp";
import icon4 from "../assets/img/varios/icon-card-4.webp";
import icon5 from "../assets/img/varios/icon-card-5.webp";
import icon6 from "../assets/img/varios/icon-card-6.webp";

const TransformationSection = () => {
  const transformations = [
    {
      title: "Implementar, empoderar y alinear misión y visión y valores",
      description:
        "para que cada decisión y comportamiento diario estén conectados con un propósito claro.",
      imageSrc: card1,
      icon: icon1,
    },
    {
      title: "Transforma a tus líderes en verdaderos agentes de cambio:",
      description:
        "Aumenta el nivel de alineación, responsabilidad, ownership y accountability de cada colaborador clave.",
      imageSrc: card2,
      icon: icon2,
    },
    {
      title:
        "Crea equipos con autonomía y alto rendimiento que den resultados sin fricciones:",
      description:
        "Aumenta la autonomía y la autosuficiencia de los colaboradores clave, genera un ambiente laboral sano, con metas claras, comunicación poderosa y mentalidad colaborativa para alcanzar más en menos tiempo.",
      imageSrc: card3,
      icon: icon3,
    },
    {
      title: "Cumplimiento de KPIS y resultados clave:",
      description:
        "logra objetivos de manera consistente y predecible, cumple KPIs.",
      imageSrc: card4,
      icon: icon4,
    },
    {
      title: "Tu cultura, de forma práctica y tangible en un manual vivo:",
      description:
        "Un documento práctico que guíe desde la inducción hasta la toma de decisiones diarias, para que todos sepan cómo actuar y hacia dónde van.",
      imageSrc: card5,
      icon: icon5,
    },
    {
      title:
        "Reconocimiento emocional inteligente que multiplica el compromiso:",
      description:
        "Diseñamos sistemas para evaluar, reforzar y premiar las conductas clave que sostienen el crecimiento de tu negocio.",
      imageSrc: card6,
      icon: icon6,
    },
  ];

  return (
    <Section id="transformations" className="bg-white py-10 md:py-10">
      <Container className="max-w-[1250px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="uppercase font-black text-[#111] !leading-[1.1] tracking-[0.2rem] text-[28px] md:text-[36px] lg:text-[46px] max-w-[1000px] mx-auto">
            LO QUE <span className="text-[#EC613B]">LOGRAREMOS</span> JUNTOS EN
            TU <span className="text-[#EC613B]">EMPRESA:</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-[1150px] mx-auto">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 1.2,
                delay: index * 0.15,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="bg-[#F8F9FA] rounded-[24px] shadow-[0_12px_35px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_40px_rgba(236,97,59,0.18)] transition-all duration-300 flex flex-col h-full border border-[#E5E7EB]"
            >
              <div className="relative w-full h-[180px] lg:h-[200px]">
                {/* 
                  Aquí tienes la variable imageSrc para que la reescribas importando 
                  directamente tus assets (e.g. import img1 from '../assets/img1.jpg')
                */}
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-t-[24px]"
                  width="400"
                  height="200"
                  loading="lazy"
                />

                {/* Overlay Icon visible half on the image and half out */}
                <div className="absolute -bottom-9 left-6 w-[76px] h-[76px] bg-gradient-to-br from-[#FF7A50] to-[#E5522E] rounded-full flex items-center justify-center text-white shadow-[0_5px_15px_rgba(236,97,59,0.4)] border-[5px] border-white z-10">
                  <img
                    src={item.icon}
                    alt="icon card "
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text Area */}
              <div className="px-8 pb-10 pt-14 flex-grow flex flex-col">
                <p className="text-[#333] text-[16px] leading-relaxed">
                  <span className="font-bold text-gray-900">{item.title}</span>{" "}
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TransformationSection;
