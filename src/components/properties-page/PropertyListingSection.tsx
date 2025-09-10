import PropertyCard from "@/components/PropertyCard";
import Image from "next/image";
import { useState } from "react";

export default function PropertyListingSection() {
  const [price, setPrice] = useState(25);

  return (
    <section className="min-h-screen font-poppins w-full py-8 grid grid-cols-2 gap-5 px-16 ">
      {/*  Left map */}
      <div className="flex justify-center items-start">
        <div className="h-[650px] w-[530px] rounded-2xl overflow-hidden sticky top-10 bottom-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509546!2d144.95565131550477!3d-37.81732797975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5771f63a4e2!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1677052351210!5m2!1sen!2sau"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>
      </div>

      {/* Right properties */}
      <div className="flex flex-col px-4 h-screen overflow-y-scroll hide-scrollbar ">
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
          <div className="w-full flex flex-row justify-center items-center text-white font-poppins gap-4">
            {/* price */}
            <div className="flex justify-center items-baseline gap-2">
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
            <div className="w-full">
              <input
                type="range"
                id="price"
                name="price"
                min="0"
                max="1000"
                step="10"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full appearance-none h-2 rounded-lg outline-none accent-[#FF6DD2]"
                style={{
                  background: `linear-gradient(to right,  #444 ${
                    price / 10
                  }%,  #FF6DD2 ${price / 10}%)`,
                }}
              />
            </div>
          </div>
        </div>
        {/* Property listing */}
        <div className=" my-8 grid grid-cols-1 sm:grid-cols-2 ">
          {/* Card component */}
          {Array.from({ length: 8 }).map((_, i) => (
            <PropertyCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
