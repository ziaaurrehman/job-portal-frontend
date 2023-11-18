import React from "react";

export default function CandidateStatus() {
  return (
    <div className="lg:w-[269px] w-full rounded-[5px] border-[#5E3D6E] border-[3px]">
      <div className="w-full flex flex-col justify-center items-center lg:py-6 py-3">
        <h1 className="text-xl font-semibold">Status</h1>
      </div>
      <div className="w-full lg:pt-20 pt-5 flex flex-col justify-center items-start px-3 py-6">
        <h1 className="text-xl font-medium">Activity feed</h1>
        <h1 className="text-xl font-light">
          31 Oct 2023 Sadaqat Ali applied to intern SQA Engineer
        </h1>
      </div>
    </div>
  );
}
