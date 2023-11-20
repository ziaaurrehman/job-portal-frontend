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
      <div className="w-full border space-y-1 flex xxl:px-0 px-3 flex-col justify-center items-center border-[#5E3D6E] h-[123px]">
        <h1 className="xxl:text-2xl text-lg font-bold">522 candidates</h1>
        <p className="xxl:text-sm text-center text-xs font-normal">
          4 of 522 candidates reviewed
        </p>
      </div>
      {data.map((obj, _) => (
        <div
          key={obj.id}
          className="w-full border hover:bg-[#6F26912E] flex flex-col justify-center items-start px-4 border-[#5E3D6E] h-[123px]"
        >
          <h1 className="xxl:text-[22px] text-lg font-bold">Muhammad Usama</h1>
          <p className="xxl:text-base text-sm font-normal">Lahore, Punjab</p>
          <p className="xxl:text-base text-sm font-normal">
            1/1 qualification met
          </p>
        </div>
      ))}
    </div>
  );
}
