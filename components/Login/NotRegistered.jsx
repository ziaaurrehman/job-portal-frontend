import Link from "next/link";
import React from "react";

export default function NotRegistered() {
  const data = [
    {
      id: 1,
      title: "Search & Apply",
      desc: " Lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: 2,
      title: " Upload Your Own Video CV",

      desc: " Lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: 3,
      title: "Job Alerts",
      desc: " Lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: 4,
      title: "Free CV Review",
      desc: " Lorem ipsum dolor sit amet, consectetur",
    },
  ];
  return (
    <div>
      <h1 className="md:text-[33px] text-2xl font-medium">Not Registered?</h1>
      <ul className="md:mt-10 mt-8 xl:space-y-12 lg:space-y-8 space-y-5">
        {data?.map((obj, _) => (
          <li key={obj.id} className="space-y-1">
            <p className="md:text-[26px] text-lg font-medium">{obj.title}</p>
            <p className="md:text-[21px] text-base font-normal">{obj.desc}</p>
          </li>
        ))}
      </ul>
      <Link href="/page/signup">
        <button className="w-[152px] border-2 font-bold mt-12 text-[22px] border-[#FFFFFF] rounded-[10px] md:h-[70px] h-12 text-white bg-[#6F2691]">
          Register
        </button>
      </Link>
    </div>
  );
}
