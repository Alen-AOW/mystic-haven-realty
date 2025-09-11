"use client";

import { useState, useRef, useEffect } from "react";

interface DropdownButtonProps {
  title: string;
}

export default function DropdownButton({ title }: DropdownButtonProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative h-full w-full  items-center justify-center  inline-flex cursor-pointer"
      ref={dropdownRef}
    >
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="flex items-center justify-center gap-x-2 font-normal font-poppins text-[10px] sm:text-xl text-white shadow-sm cursor-pointer"
      >
        {title}
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className="absolute right-0 top-10 mt-2 min-w-60 bg-white shadow-md rounded-lg divide-y divide-gray-200 z-30"
          role="menu"
        >
          <div className="p-1 space-y-0.5">
            <a
              href="#"
              className="block py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100"
            >
              Newsletter
            </a>
            <a
              href="#"
              className="block py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100"
            >
              Purchases
            </a>
            <a
              href="#"
              className="block py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100"
            >
              Downloads
            </a>
            <a
              href="#"
              className="block py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100"
            >
              Team Account
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
