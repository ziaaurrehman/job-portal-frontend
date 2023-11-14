import React from "react";
import { ArrowIcon } from "../icons/icons";
import Image from "next/image";

export default function AllMessages() {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
  ];
  return (
    <div className="w-full border-[#735681] pb-10 rounded-[10px] border-[3px]">
      <h1 className="text-xl font-semibold p-5">Messages</h1>
      <div className="px-2">
        <div className="w-full flex justify-between items-center h-[69px] custom-shadow px-5 border border-black rounded-[10px]">
          <p className="font-normal text-xl ">Inbox</p>
          <ArrowIcon className="-rotate-90" />
        </div>
      </div>
      <div className="mt-8">
        {data.map((obj, _) => (
          <div
            key={obj.id}
            className="flex gap-x-4 items-center pt-4 px-2 pb-4 border-b-2 border-[#D9D9D9]"
          >
            <div className="w-[42px] h-10 rounded-[5px]">
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
              <div className="flex w-full justify-between items-center">
                <h1 className="text-xl font-normal">Technology Pvt ltd</h1>
                <p className="text-[13px] font-normal">Sep 21, 2023.</p>
              </div>
              <p className="text-[15px] font-normal">
                I am available for an interview on...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
