import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Animate from './Animate';

const Front = () => {
  return (
    <div className="bg-[#E8ECFD] flex justify-around items-center w-[100vw] h-fit overflow-x-hidden ">
      <div className=" flex justify-between items-center m-auto mb-[8rem] mt-[4rem]">
        {/* left div */}
        <div className="flex flex-col font-bold gap-y-6 ml-[4rem] ">
          <div className='w-full '>
            <div className='font-medium text-5xl tracking-tighter leading-[4rem]'>
              <div>
                <h1 className="text-[#351A5F]  ">
                  Work with users and
                </h1>
                <h1 className="text-[#351A5F]">
                sync them from  
                </h1>
                {/* Assuming Animate is a component */}
                <Animate />
              </div>
            </div>
          </div>
          <div className="mt-[10px]">
            <p className="text-[18px] text-[#351A5F] font-normal">
              Lorem Ipsum estibulum blandit libero at condi.
            </p>
            <p className="text-[18px] text-[#351A5F] font-normal">
              mentum males uada scelerisque in mauris ut mada.
            </p>
          </div>
          <div className="flex gap-x-5 mt-[2rem]">
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
        <div className="rounded-sm mt-[4rem] ">
          <Image src={require("/public/webic1.png")} alt="Web Illustration" className="w-[44rem] " />
        </div>
      </div>
    </div>
  );
};

export default Front;
