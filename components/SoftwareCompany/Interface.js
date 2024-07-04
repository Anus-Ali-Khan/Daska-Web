import React from "react";
import Image from "next/image";
import CarouselClientWrapper from "./CarouselClientWrapper";

const Interface = () => {
  return (
    <div className="bg-[#16031F] min-h-screen w-full overflow-x-hidden m-auto">
      {/* top */}
      <div>
        <div className="flex flex-col items-center px-4 mt-16 space-y-3 text-center md:mt-24 lg:mt-36">
          <h1 className="text-2xl font-semibold text-white md:text-3xl">
            Why millions of entrepreneurs choose Becca
          </h1>
          <h3 className="text-sm text-white md:text-base">
            Lorem Ipsum estibulum blandit libero at mauris
          </h3>
        </div>
        {/* images */}
        <div className="relative flex flex-col items-center justify-center px-4 mt-16 space-y-6 lg:flex-row lg:justify-around md:mt-24 lg:mt-28 lg:space-y-0 lg:space-x-6">
          <Image
            src={require("/public/left.png")}
            className="object-cover w-40 h-48 rounded-l-lg md:h-60 lg:h-60 md:w-48 lg:w-52"
            alt="Left"
          />
          <Image
            src={require("/public/main.jpg")}
            className="h-80 md:h-96 lg:h-[40rem] w-full lg:w-[50%] object-cover"
            alt="Main"
          />
          <Image
            src={require("/public/right.png")}
            className="object-cover w-40 h-48 rounded-r-lg md:h-60 lg:h-68 md:w-48 lg:w-56"
            alt="Right"
          />
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-col items-center justify-center px-4 py-10">
        {/* carousel */}
        <div className="flex flex-col justify-center">
          <div>
            <CarouselClientWrapper />
          </div>
          <hr className="w-[80vw] border-2 border-slate-400 rounded my-5 self-center" />
        </div>
        {/* sections */}
        <div className="flex flex-col items-start justify-around w-full mt-16 space-y-12 lg:flex-row lg:space-y-0 lg:space-x-12 lg:w-3/4">
          <div className="flex-1">
            <h1 className="text-xl font-medium text-white">Integration</h1>
            <div className="mt-4 space-y-2">
              <h3 className="text-base font-medium text-white md:text-lg">
                Lorem ipsum dolor sit amet,
              </h3>
              <h3 className="text-base font-medium text-white md:text-lg">
                consectetur adipiscing elit.
              </h3>
              <h3 className="text-base font-medium text-white md:text-lg">
                Ut elit tellus, luctus nec.
              </h3>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-medium text-white">Management</h1>
            <div className="mt-4 space-y-2">
              <h3 className="text-base font-medium text-white md:text-lg">
                Lorem ipsum dolor sit amet,
              </h3>
              <h3 className="text-base font-medium text-white md:text-lg">
                consectetur adipiscing elit.
              </h3>
              <h3 className="text-base font-medium text-white md:text-lg">
                Ut elit tellus, luctus nec.
              </h3>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-medium text-white">Employee Training</h1>
            <div className="mt-4 space-y-2">
              <h3 className="text-base font-medium text-white md:text-lg">
                Lorem ipsum dolor sit amet,
              </h3>
              <h3 className="text-base font-medium text-white md:text-lg">
                consectetur adipiscing elit.
              </h3>
              <h3 className="text-base font-medium text-white md:text-lg">
                Ut elit tellus, luctus nec.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
