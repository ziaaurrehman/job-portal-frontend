import Image from "next/image";
import React from "react";

export default function NoApplicants() {
  return (
    <div className="md:h-screen flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="lg:w-[726px] w-full lg:h-[356px]">
          <Image
            height={0}
            width={0}
            sizes="100vw"
            src="/no-applicants.png"
            alt="no-application"
            className="w-full h-full"
          />
        </div>
        <h1 className="md:text-xl text-xs font-medium text-[#00000080]">
          You have not hired any applicants.
        </h1>
      </div>
    </div>
  );
}
