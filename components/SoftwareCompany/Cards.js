import React from "react";
import { FaHandshake } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="bg-[#E8ECFD] min-h-[100vh] w-full m-auto p-4 lg:p-8">
      {/* cards */}
      {/* top */}
      <div className="flex flex-col items-center justify-around space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
        {[
          "Introducing New Line of Exclusive Products & Designs",
          "Make Your Business Grow Platform for Creators and Modern",
          "Best Tools for Adding a Vanity Phone Number to Your Site",
        ].map((text, index) => (
          <div
            key={index}
            className="bg-slate-200 border border-slate-300 h-[20rem] lg:h-[24rem] w-full lg:w-[24rem] shadow-lg rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-30 p-3 flex flex-col justify-between"
          >
            <h1 className="flex justify-end text-[#351a5f] text-[14px] lg:text-[16px] font-semibold mt-[1rem] lg:mt-[3rem] mr-[1rem] lg:mr-[2rem]">
              Settings
            </h1>
            <h3 className="text-[#351a5f] font-bold text-[18px] lg:text-[23px] flex justify-end mb-[1rem] px-2 lg:px-3">
              {text}
            </h3>
          </div>
        ))}
      </div>

      {/* bottom */}
      <div className="flex justify-center items-center mt-8 lg:mt-[4rem]">
        <div className="bg-slate-200 border border-slate-300 shadow-lg w-full lg:w-[73rem] rounded-md flex flex-col lg:flex-row justify-between items-center p-4 lg:p-6 gap-y-2 lg:gap-y-0 backdrop-filter backdrop-blur-lg bg-opacity-30">
          <div className="flex flex-col lg:flex-row items-center gap-x-2 ml-0 lg:ml-[24rem] text-center lg:text-left">
            <FaHandshake className="text-[#16031F] text-lg font-extrabold" />
            <h6 className="text-[#303043]">
              We are hiring self-motivated individuals to join us
            </h6>
            <FaLongArrowAltRight className="text-[#7F2EF8] cursor-pointer text-xl hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
