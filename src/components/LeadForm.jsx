import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const LeadForm = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://formsubmit.co";
    document.head.appendChild(link);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setFormError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/rossdigital2@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...data,
            _subject: "Nuevo Lead de Diagnóstico - Escala",
            _captcha: "false", // Deshabilita captcha visual
            _template: "table", // Plantilla limpia del correo
          }),
        },
      );

      // Trigger analytics event
      if (typeof window !== "undefined" && window.gtag && response.ok) {
        window.gtag("event", "generate_lead", {
          event_category: "engagement",
          event_label: "Lead Form Submit",
        });
      }

      if (response.ok) {
        setIsSuccess(true);
        reset(); // Limpia los campos del formulario pero lo deja a la vista

        // Cierra la ventana emergente automáticamente pasados 5 segundos
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        const result = await response.json();
        setFormError(
          result.message ||
            "Ocurrió un error al enviar tu solicitud. Inténtalo más tarde.",
        );
      }
    } catch (error) {
      console.error("Error de subida:", error);
      setFormError(
        "Hubo un problema de red. Por favor revisa tu conexión a internet.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-3 py-2 border border-gray-300 rounded-[8px] bg-[#EFEFEF] text-gray-900 focus:bg-white focus:ring-2 focus:ring-[#EC613B] focus:border-transparent outline-none transition-all text-[15px]";
  const labelClass =
    "block text-[13px] font-bold text-gray-900 mb-1 ml-1 font-sans";

  return (
    <>
      <div className="bg-white px-6 py-8 md:px-10 md:py-10 rounded-[30px] border border-gray-100 shadow-[0_15px_60px_rgba(0,0,0,0.15)] w-full max-w-[480px] mx-auto relative min-h-[460px]">
        {/* Error box */}
        {formError && (
          <div className="mb-6 p-4 text-sm text-[#721c24] bg-[#f8d7da] border border-[#f5c6cb] rounded-[10px] flex items-start shadow-sm">
            <div className="mt-0.5 mr-3 flex-shrink-0">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="font-medium">{formError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="nombre" className={labelClass}>
              Nombre *
            </label>
            <input
              id="nombre"
              type="text"
              className={`${inputClass} ${errors.nombre ? "border-red-600" : ""}`}
              {...register("nombre", { required: "El nombre es requerido" })}
            />
            {errors.nombre && (
              <p className="text-red-600 text-xs mt-1 ml-1">
                {errors.nombre.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="apellido" className={labelClass}>
              Apellido *
            </label>
            <input
              id="apellido"
              type="text"
              className={`${inputClass} ${errors.apellido ? "border-red-600" : ""}`}
              {...register("apellido", {
                required: "El apellido es requerido",
              })}
            />
            {errors.apellido && (
              <p className="text-red-600 text-xs mt-1 ml-1">
                {errors.apellido.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="empresa" className={labelClass}>
              Nombre de Empresa *
            </label>
            <input
              id="empresa"
              type="text"
              className={`${inputClass} ${errors.empresa ? "border-red-600" : ""}`}
              {...register("empresa", { required: "La empresa es requerida" })}
            />
            {errors.empresa && (
              <p className="text-red-600 text-xs mt-1 ml-1">
                {errors.empresa.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email *
            </label>
            <input
              id="email"
              type="email"
              className={`${inputClass} ${errors.email ? "border-red-600" : ""}`}
              {...register("email", {
                required: "El email es requerido",
                pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
              })}
            />
            {errors.email && (
              <p className="text-red-600 text-xs mt-1 ml-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="telefono" className={labelClass}>
              Teléfono *
            </label>
            <input
              id="telefono"
              type="tel"
              className={`${inputClass} ${errors.telefono ? "border-red-600" : ""}`}
              {...register("telefono", {
                required: "El teléfono es requerido",
              })}
            />
            {errors.telefono && (
              <p className="text-red-600 text-xs mt-1 ml-1">
                {errors.telefono.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="empleados" className={labelClass}>
              Número de Empleados *
            </label>
            <input
              id="empleados"
              type="text"
              className={`${inputClass} ${errors.empleados ? "border-red-600" : ""}`}
              {...register("empleados", {
                required: "El número de empleados es requerido",
              })}
            />
            {errors.empleados && (
              <p className="text-red-600 text-xs mt-1 ml-1">
                {errors.empleados.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="comentarios" className={labelClass}>
              Comentarios
            </label>
            <textarea
              id="comentarios"
              rows={3}
              className={`${inputClass} resize-none ${errors.comentarios ? "border-red-600" : ""}`}
              {...register("comentarios")}
            />
          </div>

          <div className="flex flex-col mt-2">
            <div className="flex items-start">
              <input
                id="privacidad"
                type="checkbox"
                className="mt-1 w-4 h-4 text-[#EC613B] bg-white border-gray-300 rounded focus:ring-[#EC613B] cursor-pointer"
                {...register("privacidad", {
                  required: "Debes aceptar el aviso de privacidad y términos.",
                })}
              />
              <label
                htmlFor="privacidad"
                className="ml-2 text-[13px] text-gray-600 font-sans leading-tight cursor-pointer select-none"
              >
                He leído y acepto el{" "}
                <a
                  href="https://consultoriaparaempresa.com/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#EC613B] hover:underline transition-colors"
                >
                  Aviso de Privacidad
                </a>{" "}
                y los{" "}
                <a
                  href="https://consultoriaparaempresa.com/terms-conditions/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#EC613B] hover:underline transition-colors"
                >
                  Términos y Condiciones
                </a>
                .
              </label>
            </div>
            {errors.privacidad && (
              <p className="text-red-600 text-xs mt-1 ml-6">
                {errors.privacidad.message}
              </p>
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#EC613B] hover:bg-[#D45431] text-white font-bold py-3.5 px-6 rounded-full transition-transform active:scale-95 duration-300 uppercase tracking-wide text-xs md:text-sm disabled:opacity-70 flex justify-center items-center shadow-md"
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : null}
              QUIERO MI DIAGNÓSTICO GRATUITO
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal Overlay */}
      {isSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white p-8 md:p-10 rounded-[30px] border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.2)] w-full max-w-[420px] mx-auto flex flex-col items-center justify-center text-center relative">
            <button
              onClick={() => setIsSuccess(false)}
              className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 transition-colors"
              title="Cerrar"
              aria-label="Cerrar modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 tracking-[0.04em]">
              ¡Mensaje Enviado!
            </h3>
            <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed">
              Hemos recibido tus datos con éxito.{" "}
              <br className="hidden md:block" />
              Un consultor experto se pondrá en contacto contigo a la brevedad.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LeadForm;
