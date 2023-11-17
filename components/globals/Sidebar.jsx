"use client";
import React, { useState } from "react";
import {
  Edit,
  Notification,
  Messages,
  Device,
  Interview,
  Jobs,
  Candidates,
} from "../icons/icons";
import Link from "next/link";

export default function Sidebar({ setHeading }) {
  // const [color, setColor] = useState("#858585");
  const [match, setMatch] = useState(0);
  const data = [
    { id: 1, icon: <Edit />, title: "Edit profile", link: "editProfile" },
    {
      id: 2,
      icon: <Notification />,
      title: "Notification",
      link: "notification",
    },

    { id: 3, icon: <Device />, title: "Applied jobs", link: "applied" },
    { id: 4, icon: <Messages />, title: "Messages", link: "message" },
    { id: 5, icon: <Interview />, title: "Interviews", link: "interview" },
    { id: 6, icon: <Jobs />, title: "Jobs", link: "jobs" },
    { id: 7, icon: <Candidates />, title: "Candidates", link: "candidates" },
  ];

  return (
    <>
      <div className="w-full xl:px-10 md:flex px-2 xl:py-0 py-5 xl:block hidden items-center xl:h-screen xl:pt-28 lg:px-5 xl:space-x-0 lg:space-x-10 space-x-5 xl:border-r xl:border-b-0 md:border-b border-black">
        {data.map((obj, _) => (
          <Link key={obj.id} href={`/page/dashboard/${obj.link}`}>
            <button
              onClick={() => {
                setMatch(obj.id);
                setHeading(obj.title);
              }}
              className={`xl:text-[28px] xl:text-2xl lg:text-base text-sm xl:space-x-5 xl:pt-20 mt-0 flex justify-center items-center ${
                obj.id === match ? "text-[#A117E8]" : "text-[#858585]"
              } font-semibold`}
            >
              {obj.icon}
              <p>{obj.title}</p>
            </button>
          </Link>
        ))}
        {/* <button
          onClick={() => setColor("#A117E8")}
          className={`xl:text-[28px] xl:text-2xl lg:text-base text-sm xl:space-x-5 flex justify-center items-center text-[${color}] font-semibold`}
        >
          <Edit />

          <p>Edit profile</p>
        </button> */}

        {/* <Link href="/page/dashboard/notification">
          <button
            onClick={() => setColor("#A117E8")}
            className={`xl:text-[28px] xl:text-2xl lg:text-base text-sm xl:space-x-5 xl:mt-10 mt-0 flex justify-center items-center text-[${color}] font-semibold`}
          >
            <Notification />
            <p>Notification</p>
          </button>
        </Link>

        <Link href="/page/dashboard/applied">
          <button
            onClick={() => setColor("#A117E8")}
            className={`xl:text-[28px] xl:text-2xl lg:text-base text-sm xl:space-x-5 xl:mt-10 mt-0 flex justify-center items-center text-[${color}] font-semibold`}
          >
            <Device />
            <p>Applied jobs</p>
          </button>
        </Link>

        <Link href="/page/dashboard/message">
          <button
            onClick={() => setColor("#A117E8")}
            className={`xl:text-[28px] xl:text-2xl lg:text-base text-sm xl:space-x-5 xl:mt-10 mt-0 flex justify-center items-center text-[${color}] font-semibold`}
          >
            <Messages />
            <p>Messages</p>
          </button>
        </Link>

        <Link href="/page/dashboard/interview">
          <button
            onClick={() => setColor("#A117E8")}
            className={`xl:text-[28px] xl:text-2xl lg:text-base text-sm xl:space-x-5 xl:mt-10 mt-0 flex justify-center items-center text-[${color}] font-semibold`}
          >
            <Interview />
            <p>Interviews</p>
          </button>
        </Link> */}
      </div>

      {/* <div className="w-full">
        <div className="relative w-full h-auto overflow-hidden">
          <input
            type="checkbox"
            className="peer absolute top-0 insert-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
          />
          <div className=" h-12 w-full pl-5 flex items-center text-[#64748B]  peer-checked:text-white peer-checked:bg-[#34A2B2]">
            <UserIcon />
            <p className="font-normal text-[14px] ml-5">Users</p>
          </div>

          <div className="absolute top-3 mr-5 right-3 text-[#64748B] peer-checked:text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180 ">
            <ArrowIcon className="transition-transform -rotate-90" />
          </div>

          <div className=" bg-white  transition-all duration-500 overflow-hidden max-h-0 peer-checked:max-h-64 pl-10 ">
            <div className="px-2">
              <div className="h-2 w-2 bg-[#07377C] rounded-full ml-3"></div>

              <li className="ml-3 text-[#07377C] font-normal text-sm">
                Clients
              </li>
            </div>
          </div>
        </div>
      </div> */}

      <div className="w-full md:hidden px-2 py-5 flex flex-col items-center justify-center md:pt-28 pt-5 lg:px-5 border-b border-black">
        {/* <button
          onClick={() => setColor("#A117E8")}
          className={`xl:text-[28px] xl:text-2xl w-36 justify-between lg:text-base text-sm pt-5 flex items-center text-[${color}] font-semibold`}
        >
          <div className="w-10">
            <Edit />
          </div>
          <p>Edit profile</p>
        </button> */}

        {data.map((obj, _) => (
          <Link key={obj.id} href={`/page/dashboard/${obj.link}`}>
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

        {/* <Link href="/page/dashboard/applied">
          <button
            onClick={() => setColor("#A117E8")}
            className={`xl:text-[28px] xl:text-2xl whitespace-nowrap w-36 justify-between lg:text-base text-sm space-x-5 mt-5 flex items-center text-[${color}] font-semibold`}
          >
            <div className="w-10">
              <Device />
            </div>
            <p>Applied jobs</p>
          </button>
        </Link> */}

        {/* <Link href="/page/dashboard/message">
          <button
            onClick={() => setColor("#A117E8")}
            className={`xl:text-[28px] xl:text-2xl w-36 justify-between lg:text-base text-sm space-x-5 mt-5 flex items-center text-[${color}] font-semibold`}
          >
            <div className="w-10">
              <Messages />
            </div>
            <p>Messages</p>
          </button>
        </Link> */}

        {/* <Link href="/page/dashboard/interview">
          <button
            onClick={() => setColor("#A117E8")}
            className={`xl:text-[28px] xl:text-2xl w-36 justify-between lg:text-base text-sm space-x-5 mt-5 flex items-center text-[${color}] font-semibold`}
          >
            <div className="w-10">
              <Interview />
            </div>
            <p>Interviews</p>
          </button>
        </Link> */}
      </div>
    </>
  );
}
