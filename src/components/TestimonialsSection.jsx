import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../layout/Container";
import Section from "../layout/Section";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        'Cuando nosotros afirmamos nuestra cultura, el equipo se consolidó al nivel de decir: "A mí no me van a venir con que esta es una empresa de conveniencia".',
      name: "René Huerta",
      company: "Abelatto - Tlalnepantla, Estado de México",
      results:
        "De 250 a 600 m2 en su planta. +200% de utilidad y bajó rotación al 12% anual. Tiempos de entrega mejorados en un 80%...",
    },
    {
      id: 2,
      quote:
        "De un negocio que se nos venía encima a una empresa con crecimiento.",
      name: "Rosendo Reynoso",
      company: "Baja California, México",
      results:
        "Más de 40 años operando y no me daba cuenta que operamos de manera intuitiva... Hoy somos más de 120 empleados en control.",
    },
    {
      id: 3,
      quote: "Se resolvían las dudas que se arrastraban por semanas.",
      name: "Víctor",
      company: "La Camilla, Comarca Lagunera - Mexicali, B.C.",
      results:
        "Tuvimos un despegue en ventas. Se resolvieron dudas que nos frenaban meses. Nos dio dirección con reglas claras que los líderes adoptaron.",
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isInView, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <Section
      id="testimonials"
      className="bg-white py-16 md:py-24 text-center overflow-hidden"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={sectionRef}
        >
          <div className="flex justify-left items-left gap-4 mb-4">
            <span className="text-brand-primary text-4xl font-serif">
              <svg
                className="w-12 h-12 fill-brand-primary"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 91.673 91.673"
                style={{ enableBackground: "new 0 0 91.673 91.673" }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path d="M53.515,91.669c8.398-0.372,15.896-3.722,21.682-9.685c15.336-15.811,15.041-45.611,14.957-48.907L90.151,2 c0-1.104-0.896-2-2-2h-30.69c-1.104,0-2,0.896-2,2v30.691c0,1.104,0.896,2,2,2h15.685C73.144,37.254,72.833,60,62.96,70.146 c-2.672,2.746-5.836,4.215-9.674,4.484c-1.049,0.074-1.859,0.945-1.859,1.995V89.67c0,0.546,0.223,1.066,0.617,1.445 C52.438,91.493,52.962,91.703,53.515,91.669z" />
                    <path d="M2.12,91.116c0.395,0.377,0.907,0.587,1.472,0.553c8.398-0.372,15.896-3.722,21.681-9.685 C40.609,66.174,40.314,36.373,40.23,33.077L40.228,2c0-1.104-0.896-2-2-2H7.537c-1.104,0-2,0.896-2,2v30.691c0,1.104,0.896,2,2,2 h15.684C23.217,37.254,22.907,60,13.036,70.146c-2.672,2.746-5.836,4.215-9.674,4.484c-1.048,0.074-1.859,0.945-1.859,1.995V89.67 C1.503,90.216,1.725,90.738,2.12,91.116z" />
                  </g>
                </g>
              </svg>
            </span>
            <h2 className="uppercase font-bold text-gray-900 leading-tight">
              <span className="text-[36px] md:text-[44px]">
                ALGUNAS <span className="text-gray-900">TRANSFORMACIONES</span>
              </span>
            </h2>
          </div>
        </motion.div>

        <div className="relative max-w-[1100px] mx-auto flex items-center justify-center">
          {/* Navigation Prev */}
          <button
            onClick={prevTestimonial}
            className="hidden md:flex absolute -left-6 lg:-left-12 z-40 w-14 h-14 bg-brand-primary rounded-full items-center justify-center text-white shadow-[0_5px_15px_rgba(236,97,59,0.4)] hover:scale-105 transition-transform"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="relative w-full h-[550px] md:h-[480px] flex items-center justify-center px-4 md:px-0">
            {testimonials.map((item, index) => {
              let position = "hidden";
              if (index === activeIndex) position = "center";
              else if (
                index ===
                (activeIndex - 1 + testimonials.length) % testimonials.length
              )
                position = "left";
              else if (index === (activeIndex + 1) % testimonials.length)
                position = "right";

              const variants = {
                center: { x: "0%", scale: 1, zIndex: 30, opacity: 1 },
                left: {
                  x: isMobile ? "0%" : "-55%",
                  scale: isMobile ? 1 : 0.85,
                  zIndex: 10,
                  opacity: isMobile ? 0 : 1,
                },
                right: {
                  x: isMobile ? "0%" : "55%",
                  scale: isMobile ? 1 : 0.85,
                  zIndex: 10,
                  opacity: isMobile ? 0 : 1,
                },
                hidden: { x: "0%", scale: 1, zIndex: 0, opacity: 0 },
              };

              const isActive = position === "center";

              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={position}
                  variants={variants}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`absolute w-full max-w-[340px] md:max-w-[520px] rounded-[30px] p-8 md:p-10 flex flex-col justify-center text-center cursor-pointer
                    ${
                      isActive
                        ? "bg-gradient-to-br from-[#2F2522] to-[#17110F] shadow-[0_20px_60px_rgba(236,97,59,0.3)] border border-[#EC613B]/40"
                        : "bg-white shadow-[0_5px_20px_rgba(0,0,0,0.1)] border border-gray-100"
                    }
                  `}
                  onClick={() => !isActive && setActiveIndex(index)}
                >
                  {isActive && (
                    <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-[#EC613B]/20 to-transparent rounded-t-[30px] pointer-events-none" />
                  )}

                  <div className="relative z-10 flex flex-col h-full justify-center">
                    <p
                      className={`font-bold italic text-[16px] md:text-[18px] mb-6 leading-snug tracking-wide
                        ${isActive ? "text-white shadow-black drop-shadow-md" : "text-gray-900"}
                      `}
                    >
                      {item.quote}
                    </p>
                    <p
                      className={`font-bold text-[14px] md:text-[16px] mb-4 tracking-wider
                        ${isActive ? "text-[#EC613B]" : "text-[#EC613B]"}
                      `}
                    >
                      {item.name}, {item.company}
                    </p>
                    <p
                      className={`italic text-[13px] md:text-[14px] leading-relaxed
                        ${isActive ? "text-gray-300" : "text-gray-600"}
                      `}
                    >
                      "{item.results}"
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Next */}
          <button
            onClick={nextTestimonial}
            className="hidden md:flex absolute -right-6 lg:-right-12 z-40 w-14 h-14 bg-brand-primary rounded-full items-center justify-center text-white shadow-[0_5px_15px_rgba(236,97,59,0.4)] hover:scale-105 transition-transform"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-3 mt-4 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-4 h-4 rounded-full border-[2px] border-[#EC613B] transition-colors focus:outline-none ${
                activeIndex === index ? "bg-[#EC613B]" : "bg-transparent"
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;
