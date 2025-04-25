import React from "react";

export function Button({ children, variant = "default", ...props }) {
  const baseStyles =
    "px-6 py-3 rounded-full font-semibold focus:outline-none transition duration-300 shadow-md";
  

  const variants = {
    default: "bg-[#7ECD26] text-white hover:bg-[#6bbf1f] focus:ring-2 focus:ring-[#1A6436] focus:ring-offset-2",
    outline: "border border-[#7ECD26] text-[#7ECD26] hover:bg-[#F4FBF4] focus:ring-2 focus:ring-[#1A6436] focus:ring-offset-2",
    dark: "bg-[#1A6436] text-white hover:bg-[#162B6A] focus:ring-2 focus:ring-[#7ECD26] focus:ring-offset-2", 
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
