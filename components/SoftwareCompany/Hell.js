"use client";
import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import CarouselHell from "@/components/SoftwareCompany/CarouselHell";

// Static image imports
import LeftImage from "/public/L.png";
import RightImage from "/public/R.png";

const Hell = () => {
  return (
    <div className="bg-[#E8ECFD] w-full min-h-screen flex flex-col justify-between items-center lg:gap-[2rem]">
      {/* top */}
      <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center mt-[3rem] lg:mt-[6rem] px-4 lg:px-0 gap-4">
        {/* left */}
        <div className="relative flex flex-col lg:flex-row justify-center items-center w-full lg:w-auto">
          <div className="hidden lg:block bg-[#E8ECFD] w-[12rem] h-[1rem] mb-[4rem] ml-[14rem]"></div>
          <Image
            src={LeftImage}
            className="h-[15rem] lg:h-[28rem] w-[8rem] lg:w-[14rem] mb-[2rem] lg:mb-0"
            alt="Left Image"
          />
          <Image
            src={RightImage}
            className="h-[15rem] lg:h-[28rem] w-[8rem] lg:w-[15rem] mt-[4rem] lg:mt-0 lg:ml-[2rem]"
            alt="Right Image"
          />
        </div>

        {/* right */}
        <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start justify-start text-center lg:text-left mt-[2rem] lg:mt-0">
          <p className="text-[#351A5F] text-sm font-semibold mb-2">WORK WITH</p>
          <h2 className="text-[#351A5F] text-2xl lg:text-3xl font-bold mb-3">
            Software service for your business.
          </h2>
          <p className="text-[#351A5F] text-sm font-semibold mb-4">
            Lorem Ipsum estibulum blandit libero at mauris condimentum malesuada
            scelerisque in mauris ut malesuada. Ute littellus, luctus nec.
          </p>
          <div className="flex flex-col gap-4 px-4 justify-center lg:justify-start">
            <div className="flex items-center gap-2">
              <MdVerified className="text-[#822EF7] text-lg" />
              <p className="text-[#351A5F] text-sm font-semibold">Digital strategy</p>
            </div>
            <div className="flex items-center gap-2">
              <MdVerified className="text-[#822EF7] text-lg" />
              <p className="text-[#351A5F] text-sm font-semibold">Modernized prospecting</p>
            </div>
            <div className="flex items-center gap-2">
              <MdVerified className="text-[#822EF7] text-lg" />
              <p className="text-[#351A5F] text-sm font-semibold">Digital strategy</p>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="w-full flex items-center justify-center mt-[2rem] px-4 lg:px-0">
        <CarouselHell />
      </div>
    </div>
  );
};

export default Hell;
