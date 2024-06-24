import React from "react";
import Image from "next/image";

const Custom = () => {
  return (
    <div className="bg-[#E8ECFD] w-full min-h-screen flex flex-col lg:flex-row justify-around items-center overflow-x-hidden">
      {/* left */}
      <div className="flex flex-col justify-center items-center lg:items-start p-8 lg:p-0">
        <div className="text-[14px] leading-[17px] text-[#351A5F] text-xl font-semibold mb-4 lg:mr-0">
          WORK WITH
        </div>
        <div className="text-[#351A5F] text-4xl font-semibold tracking-normal text-center lg:text-left">
          Customize Becca and turn your ideas into reality.
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-8 p-4 w-full">
          <div className="text-[#351A5F] text-lg font-medium leading-4">Screen sharing</div>
          <div className="text-[#351A5F] text-lg font-medium leading-4">Screen sharing</div>
        </div>
        <hr className="border-t-4 border-[#D5C1FB] w-full lg:w-auto" />
        <div className="flex flex-col lg:flex-row justify-between items-start w-full mt-8 gap-2">
          <div className="text-[#351A5F] p-4">
            <ul className="list-disc pl-5 text-lg leading-1">
              <li>Templates</li>
              <li>Knowledge Base</li>
              <li>Powerful metrics</li>
              <li>Renewal discount</li>
            </ul>
          </div>
          <div className="text-[#351A5F] p-4">
            <ul className="list-disc pl-5 text-lg leading-1">
              <li>Templates</li>
              <li>Knowledge Base</li>
              <li>Powerful metrics</li>
              <li>Renewal discount</li>
            </ul>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex justify-center items-center">
        <Image src={require("/public/customR.png")} className="h-[32rem] lg:h-[auto]" />
      </div>
    </div>
  );
};

export default Custom;
