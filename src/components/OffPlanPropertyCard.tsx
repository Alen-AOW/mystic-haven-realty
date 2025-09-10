"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

interface OffPlanPropertyCardProps {
  title: string;
  location: string;
  image: string;
  price: string;
  completionDate: string;
  developer: string;
}

const OffPlanPropertyCard: React.FC<OffPlanPropertyCardProps> = ({
  title,
  location,
  image,
  price,
  completionDate,
  developer,
}) => {
  return (
    <div className="w-[326px] h-[470px] flex flex-col rounded-lg overflow-hidden">
      {/* image */}
      <div className="relative w-full h-2/3">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* details */}
      <div className="text-black bg-white flex flex-col h-auto p-4">
        {/* Title and location */}
        <div className="border-b border-[#CBCBCB] pb-3">
          <h3 className="text-sm font-medium mb-2">{title}</h3>
          <p className="text-xs font-normal mb-2 flex items-center">
            <MapPin size={16} strokeWidth={1} className="mr-1" /> {location}
          </p>
        </div>

        {/* Price and completion date */}
        <div className="w-full flex justify-between items-center text-black border-b border-[#CBCBCB] py-3">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-[#464646] font-normal">Price From</p>
            <p className="text-xs font-normal">{price}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-[#464646] font-normal">
              Completion Date
            </p>
            <p className="text-xs font-normal">{completionDate}</p>
          </div>
        </div>

        {/* Developer */}
        <div>
          <p className="text-sm font-normal mt-3">
            Developers : <span className="text-[#464646]">{developer}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OffPlanPropertyCard;
