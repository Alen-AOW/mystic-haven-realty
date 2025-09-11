import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative min-h-[512px] bg-[#5E2D4F] text-white px-6 sm:px-20 md:px-44 py-24 font-poppins">
      <div className="flex flex-row flex-wrap justify-start sm:justify-evenly items-start font-poppins text-lg gap-6">
        {/* Company Info */}
        <div className="flex flex-col gap-3">
          <Link href="/">
            <Image
              className="h-[90px] w-auto"
              src="/header/MHR-Logo.svg"
              alt="MHR Logo"
              height={80}
              width={80}
              priority
            />
          </Link>
          <h3 className="font-semibold">Company Info</h3>
          <ul className="font-normal flex flex-col gap-2">
            <li>
              <Link href="/">About Mystic Haven Realty</Link>
            </li>
            <li>
              <Link href="/">Our Mission</Link>
            </li>
            <li>
              <Link href="/">Trusted Channel Partners</Link>
            </li>
          </ul>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="font-normal flex flex-col gap-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Properties</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">For Buyers</Link>
            </li>
            <li>
              <Link href="/">Partners</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        {/* Contact Information */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">Contact Information</h3>
          <ul className="font-normal flex flex-col gap-2">
            <li>Office Address :</li>
            <li>Phone :</li>
            <li>Email :</li>
          </ul>
        </div>
        {/* Socials */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">Company Info</h3>
          <ul className="font-normal flex flex-row flex-wrap gap-3">
            <li>
              <Link href="/">FaceBook</Link>
            </li>
            <div>|</div>
            <li>
              <Link href="/">Instagram</Link>
            </li>
            <div>|</div>
            <li>
              <Link href="/">Linkedin</Link>
            </li>
            <div>|</div>
            <li>
              <Link href="/">Twitter</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 text-center text-xs sm:text-lg text-nowrap">
        © 2025 Mystic Haven Realty . All Rights Reserved.
      </div>
    </footer>
  );
}
