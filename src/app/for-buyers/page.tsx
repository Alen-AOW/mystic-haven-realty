import ForSaleCard from "@/components/buyers-page/ForSaleCard";
import Image from "next/image";
import Link from "next/link";

export default function Buyers() {
  const trendingImages = [
    "/buyers/emaar-trending-1.png",
    "/buyers/emaar-trending-2.png",
    "/buyers/emaar-trending-3.png",
    "/buyers/emaar-trending-4.png",
    "/buyers/emaar-trending-5.png",
    "/buyers/emaar-trending-6.png",
  ];
  return (
    <section className="min-h-screen flex flex-col font-poppins w-full mb-12">
      {/* Hero Image */}
      <div className="w-full h-[500px] relative">
        <Image
          src="/buyers/emaar-hero.png"
          alt="Properties Hero"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Title section */}
      <div className=" w-full bg-blue flex flex-col justify-center items-center font-poppins py-6 ">
        <h2 className="font-poppins items-center font-medium text-4xl uppercase my-4">
          Welcome to Emaar Properties, Dubai
        </h2>
        <p className="text-[#FFB27F] font-light font-poppins text-2xl max-w-[1030px] text-center leading-relaxed">
          "Our vision is to transform urban spaces into sustainable, healthy,
          and vibrant developments for a brighter tomorrow."
        </p>
      </div>
      {/* Emaar property pics section */}
      <section className="min-h-screen font-poppins w-full px-40 mb-14">
        <div className="flex justify-between items-baseline my-8">
          <h2 className="text-2xl font-normal">TRENDING EMAAR PROPERTIES</h2>
          <Link className="text-2xl font-normal " href="/">
            See All
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {trendingImages.map((image, index) => (
            <Link key={index} href="/">
              <div className="relative h-[400px] w-[300px] cursor-pointer group overflow-hidden rounded-xl">
                <Image
                  src={image}
                  alt="Trending picture"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 scale-110 group-hover:scale-100"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* Emaar properties for sale section */}
      <section className="min-h-screen font-poppins w-full px-40 mb-18">
        <div className="flex justify-between items-baseline my-8">
          <h2 className="text-2xl font-normal">PROPERTIES FOR SALE</h2>
          <Link className="text-2xl font-normal" href="/">
            See All
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {/* for sale card */}
          {Array.from({ length: 6 }).map((_, i) => (
            <ForSaleCard key={i} />
          ))}
        </div>
      </section>
      {/* map section */}
      <section className="w-full h-[700px] -mb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509546!2d144.95565131550477!3d-37.81732797975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5771f63a4e2!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1677052351210!5m2!1sen!2sau"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        ></iframe>
      </section>
    </section>
  );
}
