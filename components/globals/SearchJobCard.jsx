import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SearchJobCard = ({ data }) => {
  return (
    <div className="flex my-7 md:flex-row flex-col items-center md:space-y-0 space-y-5 md:space-x-5">
      <div className="h-[230px] w-[230px]">
        <Image
          height={0}
          width={0}
          sizes="100vw"
          src={data.img}
          alt="search"
          className="h-full w-full"
        />
      </div>
      <div className="py-10 w-full md:p-5 p-3 rounded-[10px] border-[#9316D3] border-[5px]">
        <div className="xl:w-3/5 w-full flex flex-col items-center md:items-start">
          <h1 className="uppercase md:text-left text-center text-[30px] font-bold">
            {data.title}
          </h1>
          <p className="text-xl py-1 md:text-left text-center font-medium">
            {data.location}
          </p>
          <p className="text-lg md:text-left text-center py-5 font-normal">
            {data.desc}
          </p>
          <Link href="/page/job-details">
            <button className="w-[184px] border hover:border-[#6F2691] hover:text-[#6F2691] hover:bg-transparent md:py-5 py-3 px-[10px] rounded-[10px] text-white uppercase text-lg font-normal bg-[#6F2691]">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
