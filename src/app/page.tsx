import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-[670px] w-full mb-12">
      <Image
        src="/properties/Properties-hero.png"
        alt="Properties Hero"
        fill
        priority
        className="object-cover"
      />
      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <p className="font-poppins font-medium text-white text-2xl">
          Mystic Heaven Reality
        </p>
        <p className="font-poppins font-medium text-white text-5xl">Home</p>
      </div>
    </section>
  );
}
