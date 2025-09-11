"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Hamburger from "./Hamburger";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "properties", label: "Properties", href: "/properties" },
    { id: "about", label: "About Us", href: "/about-us" },
    { id: "buyers", label: "For Buyers", href: "/for-buyers" },
    { id: "partners", label: "Partners", href: "/partners" },
    { id: "contact", label: "Contact Us", href: "/contact-us" },
  ];

  const pathname = usePathname();
  return (
    <header className="sticky w-full z-100 bg-transparent text-white font-poppins font-normal text-md lg:text-lg py-6 px-10 md:px-18 lg:px-20 xl:40">
      <nav className="flex flex-row justify-between lg:justify-evenly items-center ">
        <Link href="/">
          <Image
            className=""
            src="/header/MHR-Logo.svg"
            alt="MHR Logo"
            height={80}
            width={80}
            priority
          />
        </Link>

        {/* for desktop */}

        <div className="hidden lg:flex gap-6 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <React.Fragment key={item.id}>
                <Link
                  href={item.href}
                  className="flex relative items-center gap-1 transition-colors hover:text-violet-800"
                >
                  {isActive && (
                    <div className="absolute -left-4 text-lg">▸</div>
                  )}
                  {item.label}
                </Link>

                {/* separator except after last item */}
                {item.id !== "contact" && (
                  <div className="bg-white h-7 w-0.5"></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
        <Link href="/" className="hidden lg:flex">
          <Image
            className="h-[40px] w-auto"
            src="/header/Vector.svg"
            alt="World-vector"
            width={38}
            height={38}
            priority
          />
        </Link>

        <div className="block lg:hidden">
          <Hamburger isOpen={menuOpen} setIsOpen={setMenuOpen} />
        </div>
      </nav>
      {/* for Mobile */}
      {menuOpen && (
        <div className="absolute z-10 top-30  right-12 bg-[#5E2D4F] h-auto auto  lg:hidden rounded-2xl flex flex-col items-center justify-center px-5 py-5">
          <Link
            href="/"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <Image
              className=""
              src="/header/MHR-Logo.svg"
              alt="MHR Logo"
              height={50}
              width={50}
              priority
            />
          </Link>
          <div className="flex flex-col gap-3">
            <ul className="font-normal flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/for-buyers"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  For Buyers
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
