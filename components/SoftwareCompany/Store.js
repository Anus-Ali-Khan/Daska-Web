import React from "react";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";

const Store = () => {
  return (
    <div className="w-[100vw] h-[50rem] bg-[#E8ECFD] overflow-x-hidden flex justify-center items-center p-8">
      {/* Outer container */}
      <div className="bg-[#887CEC] w-[65rem] h-[30rem] rounded-lg flex justify-between items-center relative ml-16">
        {/* Image */}
        <div className="absolute left-[17rem] top-[16rem] transform -translate-y-1/2  z-20">
          <Image
            src={require("/public/phone.png")}
            className="h-[28rem] w-[40rem] mt- -ml-[12rem]  "
          />
        </div>
        {/* right */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-slate-200 mb-8 ml-[31rem] font-semibold text-[28px] leading-[34px] p-12">
              We work together to create beautiful products that people love.
            </h1>

            {/* Store Buttons */}
            <div className="flex items-center justify-center gap-8 mb-4 ml-[25rem] cursor-pointer">
              <div className="bg-black rounded-lg p-4 h-[4rem] w-[10rem] flex items-center gap-8 ">
                <BiLogoPlayStore className="text-2xl text-white  " />
                <div className="flex flex-col  items-center">
                  <p className="text-xs text-white ">Get it on</p>
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
            <div className="flex items-center justify-center ml-[20rem] mb-4">
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
