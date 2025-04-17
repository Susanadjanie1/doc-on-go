import React from "react";

export function Button({ children, variant = "default", ...props }) {
  const baseStyles =
    "px-4 py-2 rounded-2xl font-semibold focus:outline-none transition";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
