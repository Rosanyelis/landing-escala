import React from "react";

const Section = ({ children, id, className = "", bgClass = "bg-white" }) => {
  return (
    <section
      id={id}
      className={`section-spacing w-full ${bgClass} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
