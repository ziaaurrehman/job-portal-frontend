import Image from "next/image";
import React from "react";

export default function NoInterview() {
  return (
    <div className="lg:w-[465px] w-full flex justify-center items-center flex-col border-[3px] px-5 border-[#5E3D6E] md:py-0 py-10 rounded-[5px] h-auto md:h-[723px]">
      <h1 className="md:text-xl text-base font-medium text-center py-5">
        You do not have upcoming interviews
      </h1>
      <p className="md:text-base text-xs text-center font-light">
        All scheduled interviews will show up here.
      </p>
      <div className="lg:w-[356px] w-full lg:h-[179px]">
        <Image
          height={0}
          width={0}
          sizes="100vw"
          src="/no-applicants.png"
          alt="no-application"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
