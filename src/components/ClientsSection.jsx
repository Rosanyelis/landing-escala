import React, { useEffect, useRef, useState } from "react";
import Container from "../layout/Container";
import Section from "../layout/Section";
import { useInView } from "../hooks/useInView";
import { useCarouselScroll } from "../hooks/useCarouselScroll";

import tecnologia from "../assets/img/sectores/tecnologia.webp";
import consultoria from "../assets/img/sectores/consultoria.webp";
import alimentaria from "../assets/img/sectores/alimentaria.webp";
import construccion from "../assets/img/sectores/construccion.webp";
import retail from "../assets/img/sectores/retail.webp";
import automotriz from "../assets/img/sectores/automotriz.webp";
import finanzas from "../assets/img/sectores/finanzas.webp";
import franquicias from "../assets/img/sectores/franquicias.webp";
import entreOtros from "../assets/img/sectores/entre-otros.webp";

// Importación de Logos de clientes
import client1 from "../assets/img/clientes/cliente-1.webp";
import client2 from "../assets/img/clientes/cliente-2.webp";
import client3 from "../assets/img/clientes/cliente-3.webp";
import client4 from "../assets/img/clientes/cliente-4.webp";
import client5 from "../assets/img/clientes/cliente-5.webp";
import client6 from "../assets/img/clientes/cliente-6.webp";
import client7 from "../assets/img/clientes/cliente-7.webp";
import client8 from "../assets/img/clientes/cliente-8.webp";
import client9 from "../assets/img/clientes/cliente-9.webp";
import client10 from "../assets/img/clientes/cliente-10.webp";
import client11 from "../assets/img/clientes/cliente-11.webp";
import client12 from "../assets/img/clientes/cliente-12.webp";
import client13 from "../assets/img/clientes/cliente-13.webp";
import client14 from "../assets/img/clientes/cliente-14.webp";
import client15 from "../assets/img/clientes/cliente-15.webp";

const AnimatedNumber = ({ value, startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;
    const duration = 2500;
    const start = performance.now();
    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 2;
      setCount(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [startAnimation, value]);

  return <span>{count}</span>;
};

const ClientsSection = () => {
  const sectors = [
    { icon: tecnologia, name: "Tecnología" },
    { icon: consultoria, name: "Consultoría" },
    { icon: alimentaria, name: "Industria alimentaria" },
    { icon: construccion, name: "Construcción" },
    { icon: retail, name: "Retail" },
    { icon: automotriz, name: "Automotriz" },
    { icon: finanzas, name: "Servicios financieros" },
    { icon: franquicias, name: "Franquicias" },
    { icon: entreOtros, name: "Entre otros..." },
  ];

  const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
    client11,
    client12,
    client13,
    client14,
    client15,
  ];

  const [refStats, inViewStats] = useInView({ amount: 0.2 });
  const [refSectors, inViewSectors] = useInView({ amount: 0.2 });
  const [refClients, inViewClients] = useInView({ amount: 0 });
  const sectorsCarouselRef = useRef(null);
  const clientsCarouselRef = useRef(null);
  useCarouselScroll(sectorsCarouselRef, { speed: 0.5 });
  useCarouselScroll(clientsCarouselRef, { speed: 0.5 });

  return (
    <>
      <Section
        id="authority"
        bgClass="bg-[#F4F4F4]"
        className="py-16 md:py-16 text-center"
      >
        <Container>
          <div
            ref={refStats}
            className={`mb-5 md:mb-5 scroll-reveal ${inViewStats ? "in-view" : ""}`}
          >
            <h2 className="uppercase font-bebas text-black leading-none mb-10 md:mb-16 text-center text-[40px] md:text-[56px] lg:text-[68px] tracking-[0.02em]">
              NUESTRA EXPERIENCIA HABLA POR NOSOTROS
            </h2>

            <div className="flex flex-row justify-center items-center gap-16 md:gap-36">
              <div className="text-center">
                <p className="text-[#EC613B] text-[70px] md:text-[110px] lg:text-[140px] font-bebas leading-[0.8] tracking-tight">
                  +<AnimatedNumber value={60} startAnimation={inViewStats} />
                </p>
                <p className="text-black font-bold text-[18px] md:text-[22px] mt-3 md:mt-5 capitalize tracking-wide font-sans">
                  Sectores
                </p>
              </div>
              <div className="text-center">
                <p className="text-[#EC613B] text-[70px] md:text-[110px] lg:text-[140px] font-bebas leading-[0.8] tracking-tight">
                  +<AnimatedNumber value={300} startAnimation={inViewStats} />
                </p>
                <p className="text-black font-bold text-[18px] md:text-[22px] mt-3 md:mt-5 capitalize tracking-wide font-sans">
                  Empresas
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pb-8 pt-8 md:pb-8">
        <Container>
          <div
            ref={refSectors}
            className={`max-w-[1100px] mx-auto mb-20 relative text-center scroll-reveal ${inViewSectors ? "in-view" : ""}`}
          >
            <h3 className="uppercase font-bebas text-black text-[32px] md:text-[44px] lg:text-[48px] mb-8 md:mb-12 tracking-wide leading-none">
              HEMOS TRABAJADO CON EMPRESAS EN SECTORES COMO:
            </h3>

            <div className="bg-[#EBEBEB] rounded-[20px] md:rounded-[30px] p-8 md:p-14 relative">
              {/* Móvil: carrusel arrastrable con ratón/táctil y auto-scroll */}
              <div ref={sectorsCarouselRef} className="md:hidden w-full -mx-1 carousel-scroll-touch">
                <div className="flex items-center gap-4 w-max">
                  {[...sectors, ...sectors].map((sector, index) => (
                    <div
                      key={`mobile-${index}`}
                      className="flex-shrink-0 bg-white border border-[#EC613B] text-gray-900 rounded-[10px] py-3 px-6 flex items-center justify-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] whitespace-nowrap"
                    >
                      {sector.icon && (
                        <img
                          src={sector.icon}
                          alt={`Icono ${sector.name}`}
                          className="w-[32px] h-[32px] object-contain"
                          width="32"
                          height="32"
                          loading="lazy"
                        />
                      )}
                      <span className="font-bold text-[14px] font-sans">
                        {sector.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Desktop: grid de rubros como antes */}
              <div className="hidden md:flex flex-wrap justify-center gap-4 md:gap-x-6 md:gap-y-5">
                {sectors.map((sector, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#EC613B] text-gray-900 rounded-[10px] py-3 px-6 md:px-8 flex items-center justify-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow whitespace-nowrap"
                  >
                    {sector.icon && (
                      <img
                        src={sector.icon}
                        alt={`Icono ${sector.name}`}
                        className="w-[32px] h-[32px] md:w-[36px] md:h-[36px] object-contain"
                        width="36"
                        height="36"
                        loading="lazy"
                      />
                    )}
                    <span className="font-bold text-[14px] md:text-[16px] font-sans">
                      {sector.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={refClients}
            className={`scroll-reveal ${inViewClients ? "in-view" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="uppercase font-bold text-brand-primary text-[40px] mb-12 text-center">
              ALGUNOS DE NUESTROS CLIENTES:
            </h3>

            {/* Móvil: carrusel arrastrable con ratón/táctil y auto-scroll */}
            <div ref={clientsCarouselRef} className="md:hidden w-full -mx-1 carousel-scroll-touch">
              <div className="flex items-center gap-6 w-max py-2">
                {[...clients, ...clients].map((logoSource, index) => (
                  <div
                    key={`mobile-client-${index}`}
                    className="flex-shrink-0 w-[85px] h-[85px] flex items-center justify-center"
                  >
                    <img
                      src={logoSource}
                      alt={`Cliente ${(index % clients.length) + 1}`}
                      className="w-full h-full object-contain rounded-full"
                      width="85"
                      height="85"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Desktop: grid de logos como antes */}
            <div className="hidden md:flex flex-wrap justify-center items-center gap-6 md:gap-x-10 md:gap-y-10 max-w-[1150px] mx-auto">
              {clients.map((logoSource, index) => (
                <div
                  key={index}
                  className="w-[85px] h-[85px] md:w-[115px] md:h-[115px] flex items-center justify-center transition-transform hover:scale-105"
                >
                  <img
                    src={logoSource}
                    alt={`Cliente ${index + 1}`}
                    className="w-full h-full object-contain rounded-full"
                    width="115"
                    height="115"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ClientsSection;
