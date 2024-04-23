import { Roboto } from "next/font/google";
import Image from "next/image";
import React from "react";

const roboto = Roboto({
  weight: ["500", "700"],
  subsets: ["latin"],
});
const HeroSectionWaitList = () => {
  return (
    <section>
      <div
        className={`h-screen relative py-[100px] bg-gradient-waitlist ${roboto.className}`}
      >
        {/* <Image src="/waitlistphotos/hero-image.jpg" width={1000} height={1000} className="w-full h-full absolute inset-0 object-cover z-[1]" unoptimized priority alt='hero image' /> */}
        <div className="absolute z-[3] flex flex-col inset-y-[100px] justify-between items-center w-full">
          <div>
            <h1
              className={`text-white ${roboto.className} font-medium text-[20px] md:text-[32px]`}
            >
              Discover the Ultimate in Comfort and Style
            </h1>
            <p
              className={`${roboto.className} text-center font-bold text-xl text-[#EB001B] mt-2`}
            >
              Exclusive Designs
            </p>
          </div>
          <img
            src="/waitlistphotos/muatai.jpg"
            className="h-4/6 rounded-2xl"
            alt="mainphoto"
          />
          <button
            className={`bg-nero backdrop-blur-[8px] py-2 px-7 rounded-[4px] w-[320px] text-[14px] font-bold`}
          >
            Join the waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export { HeroSectionWaitList };
