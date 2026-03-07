import React from "react";
import { Link } from "react-router-dom";
import Container from "../layout/Container";
import logoImg from "../assets/img/logo.webp";

const Footer = () => {
  const links = [
    {
      name: "Método Escala",
      href: "https://consultoriaparaempresa.com/metodoescala/",
    },
    {
      name: "Soluciones",
      href: "https://consultoriaparaempresa.com/soluciones/",
    },
    {
      name: "Reclutamiento",
      href: "https://consultoriaparaempresa.com/reclutamiento-perfiles-ejecutivos/",
    },
    {
      name: "Sobre Escala",
      href: "https://consultoriaparaempresa.com/sobre-escala/",
    },
    {
      name: "Testimoniales",
      href: "https://consultoriaparaempresa.com/testimoniales/",
    },
    {
      name: "Preguntas Frecuentes",
      href: "https://consultoriaparaempresa.com/preguntas-frecuentes/",
    },
  ];

  const handleScroll = (e, href) => {
    if (href.startsWith("/#") && href.length > 2) {
      if (window.location.pathname === "/") {
        e.preventDefault();
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else if (href === "/#") {
      if (window.location.pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-black text-white pt-20 pb-28 md:pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 mb-20 max-w-[1100px] mx-auto">
          {/* Logo and Info */}
          <div className="flex flex-col">
            <div className="mb-12">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img
                  src={logoImg}
                  alt="ESCALA Logo"
                  className="h-8 md:h-10 w-auto object-contain cursor-pointer"
                />
              </Link>
            </div>

            <div className="text-[13px] md:text-[14px] leading-relaxed mb-8 flex flex-col gap-3">
              <p className="text-white font-bold text-[11px] md:text-[12px] tracking-wide">
                MÉTODO ESCALA NEGOCIOS S.A. DE C.V.
              </p>
              <p className="text-white font-bold text-[11px] md:text-[12px] tracking-wide">
                RFC: MEN220425748
              </p>
              <p className="text-white">
                Av. Presidente Masaryk 111, 1er piso, Col. Polanco V Sección,
                C.P. 11560, Ciudad de México, México.
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-8 text-[14px] md:text-[15px] font-sans">
              <div className="flex items-center">
                <svg
                  className="w-[18px] h-[18px] text-[#EC613B] mr-4 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-white font-medium tracking-wide">
                  +52 (55) 3797 5914
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-[18px] h-[18px] text-[#EC613B] mr-4 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-white font-medium tracking-wide">
                  hola@consultoriaparaempresa.com
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/metodoescalauno"
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
                href="https://www.instagram.com/escala.uno/"
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
                href="https://wa.me/+525537975914"
                className="w-10 h-10 rounded-[10px] border border-[#EC613B] flex items-center justify-center hover:bg-[#EC613B] transition-colors group"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col justify-start pt-4 md:pt-16 lg:pl-32">
            <ul className="space-y-3 md:space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="flex items-center text-gray-200 hover:text-white transition-colors text-[14px] md:text-[15px]"
                  >
                    <span className="text-[#EC613B] font-bold mr-3 text-lg leading-none mt-[-2px]">
                      &gt;
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-gray-100/30 pt-8 flex flex-col gap-6 text-[13px] text-gray-400 max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white">© 2026 Escalamiento Empresarial</p>
            <div className="flex space-x-6">
              <a
                target="_blank"
                href="https://consultoriaparaempresa.com/privacy-policy/"
                className="hover:text-[#EC613B] transition-colors text-white"
              >
                Aviso de Privacidad
              </a>
              <a
                target="_blank"
                href="https://consultoriaparaempresa.com/privacy-policy/"
                className="hover:text-[#EC613B] transition-colors text-white"
              >
                Términos y Condiciones
              </a>
            </div>
          </div>

          <div className="text-[9px] md:text-[10px] leading-relaxed text-white text-justify mt-2">
            Los servicios de consultoría, estrategia y capacitación
            proporcionados por MÉTODO ESCALA NEGOCIOS S.A. DE C.V. están
            orientados a la optimización de procesos y resultados corporativos.
            Los resultados mencionados en este sitio web, así como en nuestras
            comunicaciones, son ilustrativos y dependen estrictamente de la
            implementación, el contexto de mercado y la gestión interna de cada
            empresa. No garantizamos resultados específicos ni retornos de
            inversión fijos, ya que el éxito empresarial es multifactorial. Toda
            la información personal recolectada está protegida bajo nuestro{" "}
            <a
              target="_blank"
              href="https://consultoriaparaempresa.com/privacy-policy/"
              className="text-[#EC613B] hover:underline"
            >
              Aviso de Privacidad
            </a>
            .
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
