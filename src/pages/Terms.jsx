import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../layout/Container";
import logoImg from "../assets/img/logo.webp";
import Footer from "../components/Footer";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans antialiased bg-white text-gray-900 w-full overflow-x-hidden min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black border-b-[4px] border-[#EC613B] py-5">
        <div className="container-custom mx-auto flex justify-center md:justify-between items-center px-4">
          <Link to="/" className="text-white z-50 flex items-center">
            <img
              src={logoImg}
              alt="ESCALA Logo"
              className="h-14 md:h-[60px] w-auto object-contain cursor-pointer"
            />
          </Link>
          <div className="z-50 hidden md:flex items-center">
            <Link
              to="/"
              className="bg-[#EC613B] hover:bg-[#D45431] text-white font-bold py-2 md:py-2.5 px-4 md:px-6 rounded-full transition-colors text-[10px] md:text-sm shadow-md"
            >
              VOLVER A INICIO
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1 className="text-3xl md:text-5xl font-bold mb-12 text-[#1a1a1a] text-center uppercase">
              TÉRMINOS Y CONDICIONES DE USO
            </h1>
            <div className="space-y-8 text-gray-700 leading-relaxed text-[17px]">
              <p>
                <strong className="text-black uppercase">
                  1. Información General
                </strong>{" "}
                En cumplimiento con las disposiciones legales vigentes, se
                informa que la propiedad del sitio web{" "}
                <a
                  href="https://consultoriaparaempresa.com/"
                  className="text-[#EC613B] hover:underline"
                >
                  https://consultoriaparaempresa.com/
                </a>{" "}
                es de la empresa{" "}
                <strong className="text-black">
                  MÉTODO ESCALA NEGOCIOS S.A. DE C.V.
                </strong>{" "}
                (en adelante, «La Empresa»), con RFC:{" "}
                <strong className="text-black">MEN220425748</strong> y domicilio
                en:
              </p>
              <ul className="list-disc pl-8 space-y-4">
                <li>
                  <strong className="text-black">Dirección:</strong> Avenida
                  Presidente Masaryk 111, 1er piso, Col. Polanco V Sección, C.P.
                  11560, Ciudad de México, México.
                </li>
                <li>
                  <strong className="text-black">Email de contacto:</strong>{" "}
                  hola@consultoriaparaempresa.com
                </li>
              </ul>

              <p>
                <strong className="text-black uppercase">
                  2. Objeto y Acceso
                </strong>{" "}
                Los presentes Términos y Condiciones regulan el acceso y uso del
                sitio web. El acceso al mismo atribuye la condición de «Usuario»
                e implica la aceptación total de estas condiciones. La Empresa
                se reserva el derecho de modificar o actualizar el contenido,
                servicios y configuración del sitio en cualquier momento y sin
                previo aviso.
              </p>

              <p>
                <strong className="text-black uppercase">
                  3. Uso del Sitio Web y Exclusión de Garantías
                </strong>{" "}
                El Usuario se compromete a hacer un uso diligente del sitio web
                y de la información relativa a sus servicios de{" "}
                <span className="text-[#EC613B]">consultoría</span>, en
                cumplimiento con la normativa mexicana, la moral y el orden
                público.
              </p>
              <p>
                <strong className="text-black">
                  IMPORTANTE (DESCARGO DE RESPONSABILIDAD):
                </strong>{" "}
                Los servicios de consultoría y estrategias proporcionados a
                través de este sitio web están diseñados para ayudar a las{" "}
                <span className="text-[#EC613B]">PyMEs</span> a mejorar su{" "}
                <span className="text-[#EC613B]">estructura</span> y procesos.
                Sin embargo:
              </p>
              <ul className="list-disc pl-8 space-y-4">
                <li>
                  La Empresa{" "}
                  <strong className="text-black">
                    no garantiza resultados económicos específicos
                  </strong>{" "}
                  o incrementos de ventas exactos, ya que el éxito de la
                  consultoría depende directamente de la implementación,
                  ejecución y factores externos propios del negocio del Usuario.
                </li>
                <li>
                  Los testimonios y casos de éxito presentados en el sitio son
                  reales, pero los resultados pueden variar de una empresa a
                  otra.
                </li>
              </ul>

              <p>
                <strong className="text-black uppercase">
                  4. Funcionamiento y Responsabilidad
                </strong>{" "}
                La Empresa no se hace responsable de los daños que se pudieran
                derivar de interferencias, omisiones, interrupciones, virus
                informáticos o desconexiones en el funcionamiento operativo de
                este sistema electrónico, motivadas por causas ajenas a La
                Empresa. El Usuario es el único responsable del uso que haga de
                la información contenida en el sitio.
              </p>

              <p>
                <strong className="text-black uppercase">
                  5. Propiedad Intelectual e Industrial
                </strong>{" "}
                Todos los contenidos del sitio web (textos, gráficos,
                fotografías, logotipos, videos, iconos,
                <span className="text-[#EC613B]"> software</span>, etc.) son
                propiedad intelectual de{" "}
                <strong className="text-black">
                  MÉTODO ESCALA NEGOCIOS S.A. DE C.V.
                </strong>{" "}
                o de sus licenciantes. Queda prohibida su reproducción,
                distribución o modificación sin autorización expresa por
                escrito. El uso de la web no otorga al Usuario derecho alguno
                sobre los mismos.
              </p>

              <p>
                <strong className="text-black uppercase">
                  6. Enlaces a Terceros
                </strong>{" "}
                En caso de que el sitio web contenga enlaces a otros sitios de
                terceros, La Empresa no ejerce control alguno sobre dichos
                sitios y contenidos, por lo que no asume responsabilidad por la
                veracidad o disponibilidad de los mismos.
              </p>

              <p>
                <strong className="text-black uppercase">7. Publicidad</strong>{" "}
                El sitio web podrá albergar contenidos publicitarios o
                patrocinados. Los anunciantes o patrocinadores son los únicos
                responsables de asegurar que el material remitido cumpla con las
                leyes que en cada caso puedan ser de aplicación.
              </p>

              <p>
                <strong className="text-black uppercase">
                  8. Legislación Aplicable y Jurisdicción
                </strong>{" "}
                Para la resolución de todas las controversias o cuestiones
                relacionadas con el presente sitio web o de las actividades en
                él desarrolladas, será de aplicación la{" "}
                <strong className="text-black">
                  legislación vigente en México
                </strong>
                . Las partes se someten expresamente a los juzgados y tribunales
                de la Ciudad de México.
              </p>

              <p className="pt-4 text-black">
                <strong className="text-black">Última actualización:</strong>{" "}
                Febrero 2026.
              </p>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
