import React, { useState } from "react";
import { useForm } from "react-hook-form";

const LeadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate CRM Integration / API call
    console.log("Form Submitted:", data);

    // Trigger analytics event placeholder
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "generate_lead", {
        event_category: "engagement",
        event_label: "Lead Form Submit",
      });
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const inputClass =
    "w-full px-3 py-2 border border-gray-300 rounded-[8px] bg-[#EFEFEF] text-gray-900 focus:bg-white focus:ring-2 focus:ring-[#EC613B] focus:border-transparent outline-none transition-all text-[15px]";
  const labelClass =
    "block text-[13px] font-bold text-gray-900 mb-1 ml-1 font-sans";

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.12)] w-full max-w-md mx-auto flex flex-col items-center justify-center text-center h-full min-h-[400px]">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          ¡Gracias por tu interés!
        </h3>
        <p className="text-gray-600">
          Hemos recibido tu información. Un consultor experto se pondrá en
          contacto contigo pronto.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white px-6 py-8 md:px-10 md:py-10 rounded-[30px] border border-gray-100 shadow-[0_15px_60px_rgba(0,0,0,0.15)] w-full max-w-[480px] mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="nombre" className={labelClass}>
            Nombre *
          </label>
          <input
            id="nombre"
            type="text"
            className={`${inputClass} ${errors.nombre ? "border-red-500" : ""}`}
            {...register("nombre", { required: "El nombre es requerido" })}
          />
          {errors.nombre && (
            <p className="text-red-500 text-xs mt-1 ml-1">
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
            className={`${inputClass} ${errors.apellido ? "border-red-500" : ""}`}
            {...register("apellido", { required: "El apellido es requerido" })}
          />
          {errors.apellido && (
            <p className="text-red-500 text-xs mt-1 ml-1">
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
            className={`${inputClass} ${errors.empresa ? "border-red-500" : ""}`}
            {...register("empresa", { required: "La empresa es requerida" })}
          />
          {errors.empresa && (
            <p className="text-red-500 text-xs mt-1 ml-1">
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
            className={`${inputClass} ${errors.email ? "border-red-500" : ""}`}
            {...register("email", {
              required: "El email es requerido",
              pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 ml-1">
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
            className={`${inputClass} ${errors.telefono ? "border-red-500" : ""}`}
            {...register("telefono", { required: "El teléfono es requerido" })}
          />
          {errors.telefono && (
            <p className="text-red-500 text-xs mt-1 ml-1">
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
            className={`${inputClass} ${errors.empleados ? "border-red-500" : ""}`}
            {...register("empleados", {
              required: "El número de empleados es requerido",
            })}
          />
          {errors.empleados && (
            <p className="text-red-500 text-xs mt-1 ml-1">
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
            className={`${inputClass} resize-none ${errors.comentarios ? "border-red-500" : ""}`}
            {...register("comentarios")}
          />
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
  );
};

export default LeadForm;
