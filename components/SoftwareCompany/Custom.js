import React from "react";
import Image from "next/image";

const Custom = () => {
  return (
    <div className="bg-[#E8ECFD] w-[100vw] h-[40rem] flex justify-around items-center overflow-x-hidden">
      {/* left */}
      <div className="flex items-center flex-col   ">
        <div className="flex justify-start p-5">
          <p className="text-[14px] leading-[17px] text-[#351A5F] text-xl mr-[21rem]  font-semibold ">
            WORK WITH
          </p>
        </div>
        <div className="flex flex-col text-[Inter 500] ">
          <h1 className="text-[#351A5F] text-4xl font-semibold tracking-normal ">
            Customize Becca and turn{" "}
          </h1>
          <h1 className="text-[#351A5F] text-4xl font-semibold tracking-normal">
            your ideas into reality.{" "}
          </h1>
        </div>

        <div className="flex items-center justify-between gap-[13rem] mt-[4rem] p-4">
          <div className="text-[#351A5F] text-lg font-medium leading-4 ">
            Screen sharing
          </div>
          <div className="text-[#351A5F] text-lg font-medium leading-4 ">
            Screen sharing
          </div>
        </div>
        <div className="w-full ">
          <hr className="border-t-4 border-[#D5C1FB]  " />
        </div>

        <div className="flex justify-between items-center w-full  mt-[4rem]gap-[2rem]">
          <div className="text-[#351A5F] p-4">
            <ul className="list-disc pl-5 text-[Inter 500] text-lg leading-1">
              <li>Templates</li>
              <li>Knowledge Base</li>
              <li>Powerful metrics</li>
              <li>Renewal discount</li>
            </ul>
          </div>
          <div className="text-[#351A5F] p-4">
            <ul className="list-disc pl-5 text-[Inter 500] text-lg leading-1">
              <li>Templates</li>
              <li>Knowledge Base</li>
              <li>Powerful metrics</li>
              <li>Renewal discount</li>
            </ul>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex items-center justify-around ">
        <Image src={require("/public/customR.png")} className="h-[32rem]    " />
      </div>
    </div>
  );
};

export default Custom;
