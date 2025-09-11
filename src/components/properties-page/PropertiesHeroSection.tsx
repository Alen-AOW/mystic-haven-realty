import Image from "next/image";

export default function PropertiesHeroSection() {
  return (
    <section className="min-h-[670px] w-full mb-15">
      <Image
        src="/properties/Properties-hero.png"
        alt="Properties Hero"
        fill
        priority
        className="object-cover"
      />
      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <p className="font-poppins font-medium text-white text-lg sm:text-2xl">
          Mystic Heaven Reality
        </p>
        <p className="font-poppins font-medium text-white text-4xl sm:text-5xl">
          View Properties
        </p>
      </div>
      {/* Bottom Switches */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center flex-col">
        <button className="w-50 h-14 sm:w-[247px] sm:h-[66px] font-semibold text-xl bg-white text-[#5E2D4F] rounded-tr-lg rounded-tl-lg flex justify-center items-center gap-3 cursor-pointer">
          {" "}
          HavenAI{" "}
          <Image
            src="/properties/haven-ai.svg"
            alt="Properties Hero"
            height={24}
            width={22}
            priority
          />
        </button>
        <button className="w-72 h-16 sm:w-[527px] sm:h-[77px] font-semibold text-xl bg-[#5E2D4F] text-white rounded-lg flex justify-center items-center gap-3 cursor-pointer">
          <Image
            src="/properties/properties-map.svg"
            alt="Properties Hero"
            height={24}
            width={22}
            priority
          />{" "}
          View Properties Map
        </button>
      </div>
    </section>
  );
}
