import Image from "next/image";

export default function ForSaleCard() {
  return (
    <div className="w-[320px] h-[455px] rounded-lg bg-white flex flex-col overflow-hidden">
      {/* image */}
      <div className="relative h-[210px] w-full overflow-hidden">
        <Image
          src="/buyers/for-sale.png"
          alt="sale picture"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* card details */}
      <div className="text-black flex flex-col justify-evenly p-2 gap-3">
        {/* Property name */}
        <h3 className="text-[18px] font-poppins font-normal">
          Golf Verge ar Emaar South{" "}
        </h3>
        <div className="flex flex-row flex-nowrap justify-evenly">
          {/* properties */}
          <div className="flex flex-col gap-2 justify-center items-start py-3">
            <p className="font-light text-[18px] rounded-lg flex justify-center items-center gap-3 ">
              <Image
                src="/buyers/location.svg"
                alt="Properties"
                height={24}
                width={22}
                priority
              />{" "}
              Emaar South
            </p>
            <p className="font-light text-[18px] rounded-lg flex justify-center items-center gap-3 ">
              <Image
                src="/buyers/currency.svg"
                alt="Properties"
                height={24}
                width={22}
                priority
              />{" "}
              1,949,888
            </p>
            <p className="font-light text-[18px] rounded-lg flex justify-center items-center gap-3 ">
              <Image
                src="/buyers/apartment.svg"
                alt="Properties"
                height={24}
                width={22}
                priority
              />{" "}
              Apartments
            </p>
          </div>
          {/* separator vertical */}
          <div className="h-[100px] w-0.5 bg-black self-center"></div>
          {/* right image */}
          <div className="flex items-center justify-center h-auto w-auto">
            <Image
              src="/buyers/emaar-logo.svg"
              alt="emaar logo"
              height={20}
              width={100}
              priority
              className="object-contain"
            />
          </div>
        </div>
        {/* separator horizontal*/}
        <div className="w-full h-0.5 bg-black self-center"></div>
        {/* enquire and whatsapp button*/}
        <div className="grid grid-cols-2 gap-3">
          <button className="text-[14px] font-poppins font-light text-white bg-[#5E2D4F] w-auto h-[40px] rounded-lg cursor-pointer hover:brightness-75">
            Enquire Now
          </button>
          <button className="text-[14px] font-poppins font-light text-gray-500 bg-white w-auto h-[40px] rounded-lg cursor-pointer hover:brightness-75 ustify-center items-center gap-2 flex shadow shadow-[#5E2D4F] px-3">
            {" "}
            <Image
              src="/buyers/whatsapp.svg"
              alt="Properties"
              height={24}
              width={22}
              priority
            />
            whatsapp
          </button>
        </div>
      </div>
    </div>
  );
}
