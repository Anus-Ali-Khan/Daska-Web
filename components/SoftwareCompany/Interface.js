import React from "react";
import Image from "next/image";
import CarouselClientWrapper from "./CarouselClientWrapper";

const Interface = () => {
  return (
    <div className="bg-[#16031F] min-h-screen w-full overflow-x-hidden m-auto">
      {/* top */}
      <div>
        <div className="flex flex-col items-center space-y-3 mt-[4rem] md:mt-[6rem] lg:mt-[9rem]">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Why millions of entrepreneurs choose Becca
          </h1>
          <h3 className="text-sm md:text-base text-white">
            Lorem Ipsum estibulum blandit libero at mauris
          </h3>
        </div>
        {/* images */}
        <div className="relative flex flex-col lg:flex-row justify-center lg:justify-around items-center mt-[4rem] md:mt-[6rem] lg:mt-[7rem] space-y-6 lg:space-y-0 lg:space-x-6 px-4">
          <Image
            src={require("/public/left.png")}
            className="h-[12rem] md:h-[15rem] lg:h-[15rem] w-[10rem] md:w-[12rem] lg:w-[13rem] rounded-l-lg object-cover"
            alt="Left"
          />
          <Image
            src={require("/public/main.jpg")}
            className="h-[25rem] md:h-[30rem] lg:h-[40rem] w-full lg:w-[50%] object-cover"
            alt="Main"
          />
          <Image
            src={require("/public/right.png")}
            className="h-[12rem] md:h-[15rem] lg:h-[17rem] w-[10rem] md:w-[12rem] lg:w-[14rem] rounded-r-lg object-cover"
            alt="Right"
          />
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-col items-center justify-center py-10">
        {/* carousel */}
        <div className="flex flex-col justify-center">
          <div>
            <CarouselClientWrapper />
          </div>
          <hr className="w-[80vw] border-2 border-slate-400 rounded my-5 self-center" />
        </div>
        {/* sections */}
        <div className="flex flex-col lg:flex-row justify-around items-start space-y-12 lg:space-y-0 lg:space-x-12 mt-16 w-full lg:w-3/4 px-4">
          <div className="flex-1">
            <h1 className="text-xl font-medium text-white">Integration</h1>
            <div className="mt-4 space-y-2">
              <h3 className="text-white text-[16px] font-medium">
                Lorem ipsum dolor sit amet,
              </h3>
              <h3 className="text-white text-[16px] font-medium">
                consectetur adipiscing elit.
              </h3>
              <h3 className="text-white text-[16px] font-medium">
                Ut elit tellus, luctus nec.
              </h3>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-medium text-white">Management</h1>
            <div className="mt-4 space-y-2">
              <h3 className="text-white text-[16px] font-medium">
                Lorem ipsum dolor sit amet,
              </h3>
              <h3 className="text-white text-[16px] font-medium">
                consectetur adipiscing elit.
              </h3>
              <h3 className="text-white text-[16px] font-medium">
                Ut elit tellus, luctus nec.
              </h3>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-medium text-white">Employee Training</h1>
            <div className="mt-4 space-y-2">
              <h3 className="text-white text-[16px] font-medium">
                Lorem ipsum dolor sit amet,
              </h3>
              <h3 className="text-white text-[16px] font-medium">
                consectetur adipiscing elit.
              </h3>
              <h3 className="text-white text-[16px] font-medium">
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
