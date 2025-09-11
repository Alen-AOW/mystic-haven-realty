import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import OffPlanPropertyCard from "../OffPlanPropertyCard";
import { offPlanProjects } from "@/data";

export default function OffPlanProjectsSection() {
  return (
    <section className="min-h-screen font-poppins w-full my-16 px-6 md:px-12 lg:px-40">
      <div className="flex justify-between items-baseline my-8">
        <h2 className="text-xl sm:text-4xl font-semibold">Off Plan Projects</h2>
        <Link className=" text-sm sm:text-2xl font-normal" href="/">
          See All
        </Link>
      </div>
      <div className="flex flex-wrap justify-center  gap-4 sm:gap-6">
        {/* Off Plan Projects card */}
        {offPlanProjects.map((property, index) => (
          <OffPlanPropertyCard key={index} {...property} />
        ))}
      </div>
    </section>
  );
}
