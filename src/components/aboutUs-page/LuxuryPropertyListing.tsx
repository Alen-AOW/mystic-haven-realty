import Link from "next/link";
import AboutPropertyCard from "@/components/AboutPropertyCard";

interface Property {
  image: string;
  title: string;
  location: string;
  features: string;
}

interface LuxuryPropertyListingProps {
  title: string;
  accentColor: string; // e.g. "text-blue-500"
  properties: Property[];
}

export default function LuxuryPropertyListing({
  title,
  accentColor,
  properties,
}: LuxuryPropertyListingProps) {
  return (
    <div className="w-full h-auto px-44 my-4">
      {/* Title + See All */}
      <div className="flex justify-between items-baseline my-8">
        <h2 className={`text-4xl font-poppins font-medium ${accentColor}`}>
          {title}
        </h2>
        <Link className="text-2xl font-normal" href="/">
          See All
        </Link>
      </div>

      {/* Property Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {properties.map((property, index) => (
          <AboutPropertyCard
            key={index}
            image={property.image}
            title={property.title}
            location={property.location}
            features={property.features}
          />
        ))}
      </div>
    </div>
  );
}
