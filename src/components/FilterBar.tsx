"use client";

import React, { useState, useRef, useEffect } from "react";

type DropdownOption = {
  id: string | number;
  label: string;
  value: any;
};

type DropdownConfig = {
  id: string;
  label: string; // button label
  options: DropdownOption[];
  placeholder?: string;
};

type FilterBarProps = {
  dropdowns: DropdownConfig[];
  onSelect?: (dropdownId: string, option: DropdownOption | null) => void;
  className?: string;
};

export default function FilterBar({ dropdowns, onSelect, className = "" }: FilterBarProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [selected, setSelected] = useState<Record<string, DropdownOption | null>>(() => ({}));
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setOpenId(null);
    }

    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenId(null);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  function toggle(id: string) {
    setOpenId((cur) => (cur === id ? null : id));
  }

  function handleSelect(dropdownId: string, option: DropdownOption) {
    setSelected((s) => ({ ...s, [dropdownId]: option }));
    setOpenId(null);
    onSelect?.(dropdownId, option);
  }

  function clearSelection(dropdownId: string) {
    setSelected((s) => ({ ...s, [dropdownId]: null }));
    onSelect?.(dropdownId, null);
  }

  return (
    <div
      ref={wrapperRef}
      className={`w-full flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm ${className}`}
      role="toolbar"
      aria-label="Filter bar"
    >
      {dropdowns.map((dd) => {
        const isOpen = openId === dd.id;
        const sel = selected[dd.id] ?? null;
        return (
          <div key={dd.id} className="relative">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={isOpen}
              onClick={() => toggle(dd.id)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <span className="text-sm">{dd.label}</span>
              <span className="text-xs text-gray-500">{sel ? sel.label : dd.placeholder ?? "All"}</span>
              <svg
                className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {isOpen && (
              <div
                role="menu"
                aria-label={`${dd.label} options`}
                className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-20 overflow-hidden"
              >
                <div className="max-h-60 overflow-auto">
                  <button
                    onClick={() => clearSelection(dd.id)}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Clear
                  </button>
                  {dd.options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(dd.id, opt)}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex justify-between items-center"
                      role="menuitem"
                    >
                      <span>{opt.label}</span>
                      {selected[dd.id]?.id === opt.id && <span className="text-xs text-violet-600">✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* optional space filler */}
      <div className="flex-1" />

      {/* Example action button */}
      <button
        onClick={() => {
          // you can wire this up to apply filters
          console.log("selected:", selected);
        }}
        className="px-4 py-2 bg-violet-600 text-white rounded-md hover:opacity-95"
      >
        Apply
      </button>
    </div>
  );
}

/*
Usage example:

const dropdowns = [
  {
    id: 'location',
    label: 'Location',
    placeholder: 'Any',
    options: [
      { id: 'dubai', label: 'Dubai', value: 'Dubai' },
      { id: 'abudhabi', label: 'Abu Dhabi', value: 'Abu Dhabi' },
    ],
  },
  {
    id: 'price',
    label: 'Price',
    placeholder: 'Any',
    options: [
      { id: 'under2', label: 'Under AED 2M', value: '<2M' },
      { id: '2to4', label: 'AED 2M - 4M', value: '2-4M' },
    ],
  },
];

<FilterBar dropdowns={dropdowns} onSelect={(id, opt) => console.log(id, opt)} />
*/
