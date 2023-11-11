"use client";
import React, { useState } from "react";
import {
  Edit,
  Notification,
  Messages,
  Device,
  Interview,
} from "../icons/icons";
import Link from "next/link";

export default function Sidebar() {
  const [color, setColor] = useState("#858585");
  return (
    <div className="w-full h-screen pt-28 lg:px-5 px-3 space-y-16 border-r border-black">
      <button
        onClick={() => setColor("#A117E8")}
        className={`xl:text-[28px] lg:text-2xl md:text-sm space-x-5 flex justify-between items-center text-[${color}]  font-semibold`}
      >
        <Edit />
        <p>Edit profile</p>
      </button>

      <Link href="/page/dashboard/notification">
        <button
          onClick={() => setColor("#A117E8")}
          className={`xl:text-[28px] mt-5 lg:text-2xl md:text-sm space-x-5 flex justify-between items-center text-[${color}]  font-semibold`}
        >
          <Notification />
          <p>Notification</p>
        </button>
      </Link>

      <button
        onClick={() => setColor("#A117E8")}
        className={`xl:text-[28px] lg:text-2xl md:text-sm space-x-5 flex justify-between items-center text-[${color}]  font-semibold`}
      >
        <Device />
        <p>Applied jobs</p>
      </button>

      <Link href="/page/dashboard/message">
        <button
          onClick={() => setColor("#A117E8")}
          className={`xl:text-[28px] mt-5 lg:text-2xl md:text-sm space-x-5 flex justify-between items-center text-[${color}]  font-semibold`}
        >
          <Messages />
          <p>Messages</p>
        </button>
      </Link>

      <button
        onClick={() => setColor("#A117E8")}
        className={`xl:text-[28px] lg:text-2xl md:text-sm space-x-5 flex justify-between items-center text-[${color}]  font-semibold`}
      >
        <Interview />
        <p>Interviews</p>
      </button>
    </div>
  );
}
