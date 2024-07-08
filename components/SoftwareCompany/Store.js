import React from "react";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";

const Store = () => {
  return (
    <div className="w-[100vw] h-[50rem] bg-[#E8ECFD] overflow-x-hidden flex justify-center items-center p-8 ">
      {/* Outer container */}
     

      <div className="relative flex items-center justify-between rounded-lg lg:w-[90%] mx-auto lg:h-[79vh]">
      <Image src={require("/public/bg.jpg")} className="rounded-xl lg:w-full lg:h-full lg:relative " />
        {/* Image */}
        <div className="absolute left-[17rem] top-[16rem] transform -translate-y-1/2  z-20 max-sm:hidden">
          <Image
            src={require("/public/phone.png")}
            className="h-[28rem] w-[40rem] mt- -ml-[12rem] "
          />
        </div>
        {/* right */}
        <div className="flex flex-col items-center justify-center max-sm:justify-center lg:absolute lg:z-50">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-slate-200 mb-8 ml-[31rem] font-semibold text-[28px] leading-[34px] p-12 max-sm:ml-2 max-sm:text-sm max-sm:text-center max-sm:leading-[0px]">
              We create products
            </h1>

            {/* Store Buttons */}
            <div className="flex items-center justify-center gap-8 mb-4 ml-[25rem] cursor-pointer max-sm:ml-0 max-sm:flex max-sm:flex-col lg:ml-[35rem]">
              <div className="bg-black rounded-lg p-4 h-[4rem] w-[10rem] flex items-center gap-8 ">
                <BiLogoPlayStore className="text-2xl text-white " />
                <div className="flex flex-col items-center max-sm:flex max-sm:justify-center ">
                  <p className="justify-center text-xs text-white">Get it on</p>
                  <h5 className="text-sm text-white ">Play Store</h5>
                </div>
              </div>
              <div className="bg-black rounded-lg p-4 h-[4rem] w-[11rem] flex items-center gap-8 cursor-pointer">
                <FaApple className="text-2xl text-white" />
                <div className="flex flex-col items-center ">
                  <p className="text-xs text-white">Get it on</p>
                  <h5 className="text-sm text-white">App Store</h5>
                </div>
              </div>
            </div>

            {/* icon */}
            <div className="flex items-center justify-center ml-[20rem] mb-4 max-sm:ml-0 max-sm:flex-col lg:ml-[35rem]">
              <div className="flex mr-2 text-white">
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
              </div>
              <p className="text-sm text-slate-200">
                4.8 rating on the App Store
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
