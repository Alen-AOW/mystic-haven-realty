import Image from "next/image";

interface AboutPropertyCardProps {
  image: string;
  title: string;
  location: string;
  features: string; // e.g. "4237 - 4815 Sq. ft. | 4 BHK"
}

export default function AboutPropertyCard({
  image,
  title,
  location,
  features,
}: AboutPropertyCardProps) {
  return (
    <div className="w-[330px] mb-5">
      <div className="overflow-hidden rounded-xl my-2">
        <Image
          src={image}
          alt={title}
          height={330}
          width={330}
          className="object-cover"
        />
      </div>
      <div className="font-poppins">
        <h3 className="text-[16px] font-medium">{title}</h3>
        <p className="text-[16px] font-light">{location}</p>
        <p className="text-[16px] font-light">{features}</p>
      </div>
    </div>
  );
}
