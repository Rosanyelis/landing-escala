import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../layout/Container";
import Section from "../layout/Section";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Cuando el equipo se alinea, todo cambia.",
      name: "Joan Vicente, Hästens ",
      company: "CDMX, México",
      results:
        "Antes, cada semana parecía una carrera contra el caos. Reuniones desordenadas, prioridades confusas y un equipo que hacía mucho… pero avanzaba poco. Con ESCALA instalamos un sistema de trabajo donde cada persona sabe lo que debe lograr, cómo medirlo y cómo colaborar con los demás. Hoy trabajamos con foco, disciplina y energía. El resultado: aumentamos nuestras conversiones de venta en un 50% en tres meses y, por primera vez, sentimos que todos remamos hacia el mismo lado.",
    },
    {
      id: 2,
      quote:
        "De un negocio que se nos venía encima a una empresa con crecimiento.",
      name: "Berenice Reynoso, Stocker",
      company: "Baja California, México",
      results:
        "Con 80 empleados y cinco sucursales, la operación nos rebasaba. No teníamos claridad en roles, ni estructura, ni control de indicadores. ESCALA nos ayudó a rediseñar por completo nuestra cultura de trabajo. Hoy operamos con KPIs, perfiles bien definidos, procesos claros y una mentalidad orientada a resultados. El impacto ha sido profundo: aumentamos la productividad general un 35%, reducimos errores operativos y recuperamos el control de la empresa. Pasamos de sobrevivir a liderar.",
    },
    {
      id: 3,
      quote: "De la improvisación al crecimiento estructurado y rentable",
      name: "Viridiana Michel Félix, Concretos Duramex",
      company: "Mexicali, México",
      results:
        "Nuestro equipo comercial tenía mucho talento, pero funcionaba sin estructura. Implementar una cultura de seguimiento, rendición de cuentas y claridad en el proceso de ventas fue un antes y después. En solo dos meses aumentamos nuestras ventas entre un 30 y 40%, pero más importante aún: creamos una cultura de responsabilidad, aprendizaje continuo y foco en resultados. Hoy tenemos un equipo más motivado, más sólido y mucho más rentable.",
    },
    {
      id: 4,
      quote:
        "El cambio más profundo fue mental: de operar con miedo a liderar con confianza",
      name: "Leo Kilmartin, Innovation 3 Composites",
      company: "Mallorca, España",
      results:
        "Antes no podía delegar. Sentía que si no lo hacía yo, no salía bien. La verdad es que no confiaba en mi equipo porque no teníamos procesos ni claridad. Con ESCALA implementamos reportes, procedimientos y un nuevo mindset de gestión. Aprendí a soltar porque ahora hay estructura que respalda. Hoy tomo decisiones con rapidez, el equipo responde con responsabilidad y hemos triplicado nuestra capacidad operativa sin sacrificar calidad ni control. Más que escalar el negocio, transformamos la cultura que lo sostiene.",
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-8"
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

          <div className="relative w-full grid place-items-center px-4 md:px-0 py-8 md:py-12">
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
                  transition={{ duration: 8, ease: [0.25, 1, 0.5, 1] }}
                  className={`col-start-1 row-start-1 w-full h-fit max-w-[340px] md:max-w-[520px] rounded-[30px] p-8 md:p-10 flex flex-col justify-center text-center cursor-pointer
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
