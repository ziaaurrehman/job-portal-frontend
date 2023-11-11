import Image from "next/image";
import React from "react";

export default function Info() {
  return (
    <div className="w-full border-[#735681] lg:mt-0 mt-10 rounded-[10px] xl:pb-96 pb-40 border-[3px]">
      <div className="flex gap-x-7 items-center pb-1 pt-20 px-5">
        <div className="w-full justify-center flex flex-col items-center">
          <h1 className="text-xl font-semibold">Muhammad Adnan</h1>
          <p className="text-[15px] text-[#00000066]">UIUX Designer </p>
        </div>
      </div>
      <div className="h-10 w-full flex justify-center relative">
        <hr className="h-[1px] w-full top-5 absolute border-none bg-[#A117E8]" />
      </div>
      <ul className="flex md:mt-10 mt-5 px-5 flex-col w-full space-y-5 items-center justify-center">
        <li className="flex justify-center items-start flex-col w-full space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-full">
              <div className="h-[5px] w-[5px] rounded-full bg-black"></div>
            </div>
            <p className="text-xl capitalize font-semibold tracking-[-0.5px]">
              Email
            </p>
          </div>
          <p className="text-[22px] pl-2 font-normal">m@domainname.com</p>
        </li>
        <li className="flex justify-center items-start flex-col w-full space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-full">
              <div className="h-[5px] w-[5px] rounded-full bg-black"></div>
            </div>
            <p className="text-xl capitalize font-semibold tracking-[-0.5px]">
              Address
            </p>
          </div>
          <p className="text-[22px] pl-2 font-normal">
            Commercial Area Garden Town, Lahore, Punjab
          </p>
        </li>
        <li className="flex justify-center items-start flex-col w-full space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-full">
              <div className="h-[5px] w-[5px] rounded-full bg-black"></div>
            </div>
            <p className="text-xl capitalize font-semibold tracking-[-0.5px]">
              Job Experience
            </p>
          </div>
          <p className="text-[22px] pl-2 font-normal">3 years experience</p>
          <p className="text-base underline pl-2 pt-2 font-normal">
            View full job description
          </p>
        </li>
      </ul>
      <div className="flex justify-center md:mt-12 mt-10">
        <button className="border w-[266px] h-[64px] flex justify-center items-center rounded-[5px] border-[#735681]">
          <div className="h-10 w-10">
            <Image
              src="/download.png"
              alt="download"
              height={0}
              width={0}
              sizes="100vw"
              className="h-full w-full"
            />
          </div>
          <p className="text-base">
            <i>Download resume</i>
          </p>
        </button>
      </div>
    </div>
  );
}
