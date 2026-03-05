import React from "react";
import Container from "../layout/Container";

const Footer = () => {
  const links = [
    { name: "Método Escala", href: "#insight" },
    { name: "Soluciones", href: "#transformations" },
    { name: "Reclutamiento", href: "#benefits" },
    { name: "Sobre Escala", href: "#authority" },
    { name: "Testimoniales", href: "#testimonials" },
    { name: "Preguntas Frecuentes", href: "#" },
  ];

  const handleScroll = (e, href) => {
    if (href !== "#") {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      e.preventDefault();
    }
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 mb-20 max-w-[1100px] mx-auto">
          {/* Logo and Info */}
          <div className="flex flex-col">
            <div className="mb-14">
              <span className="text-white text-[32px] md:text-[38px] font-bold tracking-[0.25em] uppercase font-sans">
                ESCALA
              </span>
            </div>

            <div className="text-[14px] md:text-[15px] text-white leading-relaxed mb-12">
              <p>Avenida Presidente Masaryk 111, 1º, CDMX (México)</p>
              <p>Calle Gran Vía Nº4, Madrid (España)</p>
            </div>

            <div className="flex flex-col gap-4 mb-10 text-[18px] md:text-[20px] font-sans">
              <div className="flex items-center">
                <div className="w-[18px] h-[18px] bg-[#EC613B] rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-white">+52 (55) 3797 5914</span>
              </div>
              <div className="flex items-center">
                <div className="w-[18px] h-[18px] bg-[#EC613B] rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-white">hola@escala.uno</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-[10px] border border-[#EC613B] flex items-center justify-center hover:bg-[#EC613B] transition-colors group"
                aria-label="Facebook"
              >
                <svg
                  className="w-[18px] h-[18px] text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-[10px] border border-[#EC613B] flex items-center justify-center hover:bg-[#EC613B] transition-colors group"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-[10px] border border-[#EC613B] flex items-center justify-center hover:bg-[#EC613B] transition-colors group"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col justify-center lg:pl-16">
            <ul className="space-y-4 md:space-y-5">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="flex items-center text-gray-200 hover:text-white transition-colors text-[15px] md:text-[16px]"
                  >
                    <svg
                      className="w-4 h-4 text-[#EC613B] mr-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-gray-100/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-gray-400 max-w-[1100px] mx-auto">
          <p>© 2025 Escalamiento Empresarial</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Aviso de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
