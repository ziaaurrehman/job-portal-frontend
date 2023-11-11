import React from "react";
import Image from "next/image";

export default function MessageBox() {
  return (
    <div className="w-full border-[#735681] mt-8 lg:mt-0 pb-10 rounded-[10px] border-[3px]">
      <div className="flex gap-x-7 items-center py-10 px-5">
        <div className="w-[51px] h-[49px] rounded-[5px]">
          <Image
            height={0}
            width={0}
            sizes="100vw"
            src="/dp.png"
            alt="dp"
            className="h-full w-full"
          />
        </div>
        <div className="w-full">
          <h1 className="text-xl font-semibold">
            UI/UX Internship <br /> Safecare Training & Services
          </h1>
        </div>
      </div>
      <div className="h-10 w-full flex justify-center relative">
        <hr className="h-[1px] w-full top-5 absolute border-none bg-[#735681]" />
        <p className="text-xl absolute px-2 top-2 font-semibold bg-white">
          26 September
        </p>
      </div>

      <div className="px-6 w-full mt-5">
        <div className="space-y-3">
          <div className="flex items-center space-x-10">
            <p className="text-xl font-normal">You</p>
            <p className="text-[15px] font-normal">2:10 PM</p>
          </div>
          <p className="text-xl font-normal">
            Hello, I feel like I'd be a great fit for this position and would
            love to talk more about my experience. I'm available for an
            interview on...
          </p>
        </div>

        <div className="border-2 relative md:mt-40 mt-20 w-full h-[124px] overflow-hidden rounded-[10px] border-[#735681]">
          <textarea
            type="text"
            className="w-full absolute resize-none px-5 py-5 h-full outline-none border-none"
            placeholder="Write a message..."
          />
          <div className="absolute border flex justify-end items-end px-3 pb-2 h-full w-full">
            <div className="h-8 w-8">
              <Image
                height={0}
                width={0}
                sizes="100vw"
                src="/Clip.svg"
                alt="pdf"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end md:pb-14 pb-8">
          <button className="rounded-[10px] mt-5 w-[136px] text-xl font-semibold text-white h-[57px] bg-[#6F2691]">
            Sent
          </button>
        </div>
      </div>
    </div>
  );
}
