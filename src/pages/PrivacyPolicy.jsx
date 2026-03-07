import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../layout/Container";
import logoImg from "../assets/img/logo.webp";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
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
              AVISO DE PRIVACIDAD
            </h1>
            <div className="space-y-8 text-gray-700 leading-relaxed text-[17px]">
              <p>
                <strong className="text-black">
                  1. Responsable del Tratamiento de sus Datos Personales
                </strong>{" "}
                MÉTODO ESCALA NEGOCIOS S.A. DE C.V. (en adelante, «La Empresa»),
                con Registro Federal de Contribuyentes (RFC){" "}
                <strong className="text-black">MEN220425748</strong> y domicilio
                físico en{" "}
                <strong className="text-black">
                  Avenida Presidente Masaryk 111, 1er piso, Col. Polanco V
                  Sección, C.P. 11560, Ciudad de México, México
                </strong>
                , es el responsable del uso y protección de sus datos
                personales.
              </p>

              <p>
                <strong className="text-black">
                  2. Datos Personales que Recabamos
                </strong>{" "}
                Para llevar a cabo las finalidades descritas en este aviso,
                utilizaremos los siguientes datos:
              </p>
              <ul className="list-disc pl-8 space-y-4">
                <li>Datos de identificación: Nombre y Apellidos.</li>
                <li>
                  Datos de contacto: Correo electrónico y número telefónico.
                </li>
                <li>
                  Datos laborales: Nombre de su empresa y número de empleados.
                </li>
              </ul>

              <p>
                <strong className="text-black">
                  3. Finalidades del Tratamiento de los Datos
                </strong>{" "}
                Los datos personales que recabamos de usted los utilizaremos
                para las siguientes finalidades que son necesarias para el
                servicio que solicita:
              </p>
              <ul className="list-disc pl-8 space-y-4">
                <li>
                  Brindar asesoría y{" "}
                  <span className="text-[#EC613B]">consultoría</span>{" "}
                  estratégica para <span className="text-[#EC613B]">PyMEs</span>
                  .
                </li>
                <li>
                  Programar y realizar la sesión estratégica gratuita
                  solicitada.
                </li>
                <li>
                  Identificar y contactar a los prospectos interesados en
                  nuestros servicios.
                </li>
              </ul>

              <p>
                De manera adicional, utilizaremos su información para
                finalidades secundarias que no son necesarias para el servicio
                solicitado, pero que nos permiten brindarle una mejor atención:
              </p>
              <ul className="list-disc pl-8 space-y-4">
                <li>
                  Envío de boletines informativos (newsletter), artículos de
                  blog y ofertas promocionales.
                </li>
                <li>Análisis estadísticos de tráfico web.</li>
              </ul>
              <p>
                En caso de que no desee que sus datos personales sean tratados
                para estas finalidades secundarias, puede enviarnos un correo
                electrónico a <strong>hola@consultoriaparaempresa.com</strong>.
              </p>

              <p>
                <strong className="text-black">
                  4. Derechos ARCO (Acceso, Rectificación, Cancelación y
                  Oposición)
                </strong>{" "}
                Usted tiene derecho a conocer qué datos personales tenemos de
                usted, para qué los utilizamos y las condiciones del uso que les
                damos (Acceso). Asimismo, es su derecho solicitar la corrección
                de su información personal en caso de que esté desactualizada,
                sea inexacta o incompleta (Rectificación); que la eliminemos de
                nuestros registros o bases de datos cuando considere que la
                misma no está siendo utilizada adecuadamente (Cancelación); así
                como oponerse al uso de sus datos personales para fines
                específicos (Oposición).
              </p>
              <p>
                Para el ejercicio de cualquiera de los derechos ARCO, usted
                deberá presentar la solicitud respectiva a través del correo
                electrónico:
                <strong className="text-black">
                  hola@consultoriaparaempresa.com
                </strong>
                .
              </p>

              <p>
                <strong className="text-black">
                  5. Uso de Cookies y Tecnologías de Rastreo
                </strong>{" "}
                Le informamos que en nuestra página de internet utilizamos
                cookies y otras tecnologías, a través de las cuales es posible
                monitorear su comportamiento como usuario de internet, brindarle
                un mejor servicio y experiencia al navegar en nuestra página.
                Los datos personales que obtenemos de estas tecnologías de
                rastreo son los siguientes: identificadores, tipo de navegador,
                sistema operativo y páginas web visitadas. Usted puede
                deshabilitar el uso de cookies en cualquier momento a través de
                la configuración de su navegador.
              </p>

              <p>
                <strong className="text-black">
                  6. Transferencia de Datos
                </strong>{" "}
                La Empresa no venderá, cederá ni distribuirá la información
                personal que es recopilada sin su consentimiento, salvo que sea
                requerido por un juez mediante una orden judicial o para cumplir
                con disposiciones legales vigentes.
              </p>

              <p>
                <strong className="text-black">
                  7. Seguridad de la Información
                </strong>{" "}
                Estamos comprometidos con la seguridad de su información.
                Utilizamos procedimientos físicos, electrónicos y
                administrativos para salvaguardar y asegurar la información que
                recopilamos en línea, evitando el acceso no autorizado.
              </p>

              <p>
                <strong className="text-black">
                  8. Cambios al Aviso de Privacidad
                </strong>{" "}
                El presente aviso de privacidad puede sufrir modificaciones,
                cambios o actualizaciones derivadas de nuevos requerimientos
                legales o de nuestras propias necesidades por los servicios que
                ofrecemos. Nos comprometemos a mantenerlo informado sobre los
                cambios que pueda sufrir el presente aviso de privacidad a
                través de este mismo sitio web.
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

export default PrivacyPolicy;
