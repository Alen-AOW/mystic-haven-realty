import Image from "next/image";
import DropdownButton from "@/components/DropdownButton";

export default function FilterBar() {
  const options = [
    "Developers",
    "Property",
    "Availability",
    "Budget",
    "Location",
  ];
  return (
    <div className="relative h-[178px] w-full -my-8 sm:my-10 ">
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center flex-col">
        <Image
          src="/about/about-hero.svg"
          alt="Properties Hero"
          height={118}
          width={579}
          priority
          className="object-fit"
        />

        <div className="h-auto px-2 sm:h-[40px] w-full md:w-[963px] border-1 border-amber-100 z-10 flex gap-1 items-stretch divide-x divide-gray-200 rounded-2xl sm:rounded-lg overflow-hidden">
          {options.map((option, index) => (
            <div key={index} className="flex-1 cursor-pointer">
              <DropdownButton title={option} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
