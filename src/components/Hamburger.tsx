"use client";

import React from "react";

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`w-10 h-10 flex flex-col items-center justify-center cursor-pointer ${
        isOpen ? "gap-0" : "gap-1"
      }`}
      aria-label="Toggle menu"
    >
      {/* Top line */}
      <span
        className={`w-[60%] h-[2px] bg-white rounded-lg transition-all duration-300 origin-left ${
          isOpen ? "translate-y-[0.65rem] rotate-[-45deg]" : "translate-y-0"
        }`}
      ></span>

      {/* Middle line */}
      <span
        className={`w-[50%] h-[2px] bg-white rounded-lg transition-all duration-300 origin-center ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>

      {/* Bottom line */}
      <span
        className={`w-[60%] h-[2px] bg-white rounded-lg transition-all duration-300 origin-left ${
          isOpen ? "-translate-y-[0.65rem] rotate-[45deg]" : "translate-y-0"
        }`}
      ></span>
    </button>
  );
};

export default Hamburger;
