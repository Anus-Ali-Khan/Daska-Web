import React from "react";
import Image from "next/image";

import { FaLongArrowAltRight } from "react-icons/fa";

const PeopleSlider = ({image}) => {
  return (
    <>
   
      <div className="w-[80%]  h-[90vh] mx-auto mt-28 ">
        <div className="flex items-center justify-between">
          <div className="left w-[40%]">
            <Image src={image} className="rounded-2xl" />
          </div>
          <div className="right w-[50%] font-semibold">
            <div className="flex flex-col gap-y-5">
              <div>
                <h1 className="text-3xl tracking-wide line-clamp-6">
                  "Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Aut <br /> in possimus sed adipisci. Eos tempora "
                </h1>
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl text-slate-400">headbook</h1>
                <h1 className="text-xl font-semibold text-black ">
                  Jose Wilson ,{" "}
                  <span className="text-slate-400">Developer at Beca</span>
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <div>
              <hr className="w-[90%] mx-auto"/>
                
              </div>
              <div className="flex justify-between  w-[90%] mx-auto">
                <div className="flex gap-x-5 hover:cursor-pointer">
                  <h1 className=" px-[2px] bg-purple-500 rounded-full text-purple-500">..</h1>
                  <h1 className="text-2xl font-bold text-purple-500 px-[1px] bg-purple-500 rounded-full">. <span className="h-1 px-1 text-2xl font-bold text-purple-500 bg-purple-500 rounded-full ">.</span> .</h1>
                  <h1 className=" px-[2px] bg-purple-500 rounded-full text-purple-500">..</h1>
                  
                </div>
                <div className="flex items-center text-purple-500 gap-x-2">
                  <h2 className="text-lg ">Learn more from our team </h2>
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-40 w-20 h-20 text-red-600 bg-blue-500">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nulla alias temporibus itaque culpa repellat perferendis reprehenderit, iure nesciunt pariatur quisquam officia impedit!
      </div>
     
    </>
  );
};

export default PeopleSlider;
