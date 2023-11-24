"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar({ setHeading, data }) {
  const [match, setMatch] = useState(0);
  const router = useRouter();

  const headingTitle = (item) => {
    console.log(item, "item");
    // e.preventDefault();
    setMatch(item?.id);
    setHeading(item?.title);
    router.push(`/page/${item.link}`);
  };
  return (
    <>
      <div className="w-full xl:px-10 md:flex px-2 xl:py-0 py-5 xl:block hidden items-center xl:h-screen xl:pt-28 lg:px-5 xl:space-x-0 lg:space-x-10 space-x-5 xl:border-r xl:border-b-0 md:border-b border-black">
        {data?.map((obj, _) => (
          // <Link key={obj.id} href={`/page/${obj.link}`}>
          <button
            key={obj.id}
            onClick={() => {
              headingTitle(obj);
            }}
            className={`xxl:text-2xl xl:text-lg lg:text-base text-sm xl:space-x-5 xl:pt-20 mt-0 flex justify-center items-center ${
              obj.id === match ? "text-[#A117E8]" : "text-[#858585]"
            } font-semibold`}
          >
            {obj.icon}
            <p>{obj.title}</p>
          </button>
          // </Link>
        ))}
      </div>

      <div className="w-full md:hidden px-2 py-5 flex flex-col items-center justify-center md:pt-28 pt-5 lg:px-5 border-b border-black">
        {data?.map((obj, _) => (
          <Link key={obj.id} href={`/page/${obj.link}`}>
            <button
              onClick={() => {
                setMatch(obj.id);
                setHeading(obj.title);
              }}
              className={`xl:text-[28px] xl:text-2xl w-36 lg:text-base text-sm mt-5 flex justify-between items-center ${
                obj.id === match ? "text-[#A117E8]" : "text-[#858585]"
              } font-semibold`}
            >
              <div className="w-10">{obj.icon}</div>
              <p>{obj.title}</p>
            </button>
          </Link>
        ))}
      </div>
    </>
  );
}
