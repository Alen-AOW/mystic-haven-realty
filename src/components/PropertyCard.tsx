import Image from "next/image";
import Rating from "./Rating";

export default function PropertyCard() {
  return (
    <div className="max-w-[260px] mb-5">
      <div className="overflow-hidden rounded-xl my-2">
        <Image
          src="/properties/property-card.png"
          alt="Properties Card"
          height={270}
          width={270}
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="text-sm md:text-[22px] font-semibold font-poppins mb-2">
          Flats In Marasa Dubai
        </h3>
        <p className="text-xs font-light mb-2">
          Rare Homes | Studio One Building | High
        </p>
        <p className="text-xs font-light mb-2">
          1 bedroom · 1 bed · 1.5 bathrooms
        </p>
        {/* Star component */}
        <Rating rating={4.5} />
      </div>
    </div>
  );
}
