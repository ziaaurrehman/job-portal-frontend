import Image from "next/image";
import React from "react";

export default function AppliedCard() {
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
  ];
  return (
    <div className="space-y-5 md:mt-10 mt-5 w-full">
      {data.map((obj, _) => (
        <div
          key={obj.id}
          className="border-[5px] md:py-16 py-10  md:space-y-5 space-y-3 rounded-[10px] border-[#735681]"
        >
          <div className="w-full flex justify-between items-start md:px-4 px-2">
            <div className="flex justify-center items-center md:space-x-5">
              <div className="h-8 w-8">
                <Image
                  height={0}
                  width={0}
                  sizes="100vw"
                  src="/applied.png"
                  alt="notification"
                  className="h-full w-full"
                />
              </div>
              <h1 className="md:text-[32px] w-full md:text-left text-center pb-1 text-xl font-semibold">
                Applied
              </h1>
            </div>

            <div className="flex items-center">
              <button className="md:w-[195px] w-[120px] md:text-xl text-sm rounded-[10px] border border-black md:h-[55px] h-[35px]">
                Update status
              </button>
              <div className="md:w-12 w-8 h-8 md:h-12">
                <Image
                  height={16}
                  width={16}
                  //   sizes="100vw"
                  src="/three-dots.svg"
                  alt="notification"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
          <div className="md:px-14 px-5">
            <p className="md:text-xl text-lg font-semibold">
              Graphic designerjob description opens in a new window
            </p>
            <p className="md:text-xl text-lg font-semibold">
              Brickstech Digital
            </p>
            <p className="md:text-xl text-lg font-semibold"> Lahore</p>
            <p className="md:text-xl text-lg font-semibold">Applied on Thu</p>
            <div className="flex space-x-3 lg:items-center ">
              <div className="md:w-10 w-8 h-8 md:h-10">
                <Image
                  height={0}
                  width={0}
                  sizes="100vw"
                  src="/around.svg"
                  alt="notification"
                  className="h-full w-full"
                />
              </div>
              <p className="lg:text-2xl lg:mt-2 text-lg font-normal">
                Around 106-110 people have applied on CorpConnect
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
