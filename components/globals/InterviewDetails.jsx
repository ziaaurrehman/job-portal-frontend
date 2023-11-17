import React from "react";

export default function InterviewDetails() {
  return (
    <div className="lg:w-[465px] w-full border-[3px] border-[#5E3D6E] rounded-[5px] h-[723px]">
      <h1 className="md:text-xl font-medium pl-10 py-5">Interviews</h1>
      <div className="">
        <ul className="flex space-x-5 pl-10 py-4">
          <li className="group relative cursor-pointer">
            <p className="lg:text-sm text-base font-medium leading-8">
              Upcoming 0
            </p>
            <hr className="border-[3px] rounded border-[#A117E8] cursor-pointe transition-all duration-500 invisible group-hover:visible" />
          </li>
          <li className="group relative cursor-pointer">
            <p className="lg:text-sm text-base font-medium leading-8">Post 0</p>
            <hr className="border-[3px] rounded border-[#A117E8] cursor-pointe transition-all duration-500 invisible group-hover:visible" />
          </li>
        </ul>
        <hr className="border-[#5E3D6EB2]" />
      </div>
    </div>
  );
}
