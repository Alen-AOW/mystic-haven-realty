import AboutPropertyCard from "@/components/AboutPropertyCard";
import LuxuryPropertyListing from "@/components/aboutUs-page/LuxuryPropertyListing";
import DropdownButton from "@/components/DropdownButton";
import Image from "next/image";
import Link from "next/link";
import { emaarProperties, sobhaProperties, damakProperties } from "@/data";

export default function About() {
  const options = [
    "Developers",
    "Property",
    "Availability",
    "Budget",
    "Location",
  ];
  return (
    <section className="min-h-screen flex flex-col font-poppins w-full mb-12">
      {/* About us option bar */}
      <div className="relative h-[178px] w-full my-10 ">
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center flex-col">
          <Image
            src="/about/about-hero.svg"
            alt="Properties Hero"
            height={118}
            width={579}
            priority
            className="object-fit"
          />

          <div className="h-[40px] w-[963px] border-1 border-amber-100 z-10 flex items-stretch divide-x divide-gray-200 rounded-lg overflow-hidden">
            {options.map((option, index) => (
              <div key={index} className="flex-1 cursor-pointer">
                <DropdownButton title={option} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Luxury Properties */}
      <div className=" w-full bg-blue flex flex-col justify-center items-center">
        <h2 className="font-poppins items-center font-light text-4xl uppercase">
          Luxury Properties
        </h2>
        {/* Map */}
        <div className="w-[1179px] h-[502px]  overflow-hidden my-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509546!2d144.95565131550477!3d-37.81732797975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5771f63a4e2!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1677052351210!5m2!1sen!2sau"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 rounded-sm"
          ></iframe>
        </div>
      </div>

      {/* Luxury Property listing */}
      <LuxuryPropertyListing
        title="EMAAR"
        accentColor="text-[#FF6DD2]"
        properties={emaarProperties}
      />
      <LuxuryPropertyListing
        title="SOBHA"
        accentColor="text-[#FFBA31]"
        properties={sobhaProperties}
      />
      <LuxuryPropertyListing
        title="DAMAK"
        accentColor="text-[#31FFC8]"
        properties={damakProperties}
      />
    </section>
  );
}
