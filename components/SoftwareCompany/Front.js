import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Animate from './Animate';

const Front = () => {
  return (
    <div className="bg-[#E8ECFD] flex flex-col lg:flex-row justify-around items-center w-full h-fit overflow-x-hidden px-4 lg:px-8 py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row justify-between items-center mx-auto mb-16 lg:mb-32 mt-16 lg:mt-32 w-full max-w-screen-xl">
        {/* left div */}
        <div className="flex flex-col font-bold gap-y-6 lg:ml-16 lg:w-1/2 px-4 lg:px-0">
          <div className='w-full'>
            <div className='font-medium text-4xl lg:text-5xl tracking-tighter leading-snug lg:leading-[4rem]'>
              <div>
                <h1 className="text-[#351A5F]">
                  Work with users and
                </h1>
                <h1 className="text-[#351A5F]">
                  sync them from
                </h1>
                <Animate />
              </div>
            </div>
          </div>
          <div className="mt-2 lg:mt-4">
            <p className="text-[16px] lg:text-[18px] text-[#351A5F] font-normal">
              Lorem Ipsum estibulum blandit libero at condi.
            </p>
            <p className="text-[16px] lg:text-[18px] text-[#351A5F] font-normal">
              mentum males uada scelerisque in mauris ut mada.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-5 mt-4 lg:mt-8">
            <button className="text-[16px] font-normal text-white bg-[#7F2EF8] rounded-md cursor-pointer p-3">
              Learn More
            </button>
            <div className="flex items-center gap-4">
              <button className="text-[16px] font-normal text-[#7F2EF8] cursor-pointer p-3">
                Contact
              </button>
              <FaLongArrowAltRight className="text-[#7F2EF8] cursor-pointer text-xl transition-transform transform hover:translate-x-1" />
            </div>
          </div>
        </div>
        {/* right div */}
        <div className="rounded-sm mt-8 lg:mt-0 lg:w-1/2 px-4 lg:px-0">
          <Image src={require("/public/webic1.png")} alt="Web Illustration" className="w-full lg:w-[44rem]" />
        </div>
      </div>
    </div>
  );
};

export default Front;
