"use client";

import OffPlanProjectsSection from "@/components/properties-page/OffPlanProjectsSection";
import PropertiesHeroSection from "@/components/properties-page/PropertiesHeroSection";
import PropertyListingSection from "@/components/properties-page/PropertyListingSection";

export default function Properties() {
  return (
    <>
      {/* Hero Section */}
      <PropertiesHeroSection />
      {/* Property Listing Section */}
      <PropertyListingSection />
      {/* Off Plan Projects section */}
      <OffPlanProjectsSection />
    </>
  );
}
