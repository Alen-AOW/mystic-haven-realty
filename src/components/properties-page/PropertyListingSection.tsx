"use client";

import PropertyCard from "@/components/PropertyCard";
import Image from "next/image";
import { useState } from "react";

import dynamic from "next/dynamic";

// Dynamically load Leaflet map only on client
const CustomMarkerMap = dynamic(() => import("@/components/CustomMarkerMap"), {
  ssr: false,
});

export default function PropertyListingSection() {
  const [price, setPrice] = useState(25);

  return (
    <section className="min-h-screen font-poppins w-full py-8 grid grid-cols-1 sm:grid-cols-2 gap-5 px-6 md:px-16 ">
      {/*  Left map */}
      <div className="flex justify-center items-start">
        <div className="h-[300px] w-full md:h-[650px] md:w-[530px] rounded-2xl overflow-hidden sticky top-10 bottom-10">
          <CustomMarkerMap />
        </div>
      </div>

      {/* Right properties */}
      <div className="flex flex-col h-screen overflow-y-scroll hide-scrollbar ">
        {/* filtering */}
        <div>
          {/* Input - add location */}
          <div className="h-14 w-full border-2 border-white rounded-lg flex justify-center items-center px-6">
            <input
              type="text"
              className="h-full w-full bg-transparent text-white placeholder-white  focus:outline-none"
              placeholder="LOCATION"
            />{" "}
            <Image
              src="/properties/location-input.svg"
              alt="Location icon"
              height={24}
              width={22}
              priority
            />
          </div>
          {/* Area and categories */}
          <div className="grid grid-cols-2 gap-3 text-white my-5">
            <div className="">
              {/* Area */}
              <label htmlFor="" className="">
                Area
              </label>
              <div className="h-14 w-full my-3 border-2 border-white rounded-lg flex justify-center items-center px-6">
                <input
                  type="text"
                  className="h-full w-full bg-transparent text-white placeholder-white  focus:outline-none"
                  placeholder="Property Area"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="" className="">
                Categories
              </label>
              <div className="h-14 w-full my-3 border-2 border-white rounded-lg flex justify-center items-center px-6">
                <input
                  type="text"
                  className="h-full w-full bg-transparent text-white placeholder-white  focus:outline-none"
                  placeholder="Property Area"
                />
              </div>
            </div>
          </div>

          {/* Price range filter */}
          <div className="flex items-center text-white font-poppins w-full gap-4">
            {/* price */}
            <div className="flex items-baseline gap-2 ">
              <label
                htmlFor="price"
                className="text-lg font-medium text-md flex flex-nowrap"
              >
                Price
              </label>
              <span
                id="priceValue"
                className="block font-light text-sm min-w-fit"
              >
                AED {price}K
              </span>
            </div>

            {/* filter */}
            <div className="flex-grow">
              <input
                type="range"
                id="price"
                name="price"
                min="0"
                max="100"
                step="2"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full appearance-none h-2 rounded-lg outline-none accent-[#FF6DD2]"
                style={{
                  background: `linear-gradient(to right, #444 ${price}%, #FF6DD2 ${price}%)`,
                }}
              />
            </div>
          </div>
        </div>
        {/* Property listing */}
        <div className=" my-8 grid grid-cols-2 gap-2 ">
          {/* Card component */}
          {Array.from({ length: 8 }).map((_, i) => (
            <PropertyCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
