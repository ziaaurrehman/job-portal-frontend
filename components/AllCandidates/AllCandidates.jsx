import React from "react";

export default function AllCandidates() {
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
  ];
  return (
    <div className="lg:w-[263px] w-full rounded-[5px] border-[#5E3D6E] border-[3px]">
      <div className="w-full border flex flex-col justify-center items-center border-[#5E3D6E] h-[123px]">
        <h1 className="text-[28px] font-bold">522 candidates</h1>
        <p className="text-sm font-normal">4 of 522 candidates reviewed</p>
      </div>
      {data.map((obj, _) => (
        <div
          key={obj.id}
          className="w-full border hover:bg-[#6F26912E] flex flex-col justify-center items-start px-6 border-[#5E3D6E] h-[123px]"
        >
          <h1 className="text-[22px] font-bold">Muhammad Usama</h1>
          <p className="text-base font-normal">Lahore, Punjab</p>
          <p className="text-base font-normal">1/1 qualification met</p>
        </div>
      ))}
    </div>
  );
}
