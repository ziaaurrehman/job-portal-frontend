"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Cancel, Check, QuestionMark } from "../icons/icons";

export default function CandidateCard() {
  const [tick, setTick] = useState(false);
  const [cANCEL, setCancel] = useState(false);
  const [questionMark, setQuestionMark] = useState(false);

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
  ];
  return (
    <div className="space-y-5 md:mt-10 mt-5 w-full">
      {data.map((obj, _) => (
        <div
          key={obj.id}
          className="border-[5px] md:py-10 py-5 px-2 w-full justify-between flex lg:flex-row flex-col space-x-10 lg:items-center space-y-5 rounded-[10px] border-[#735681]"
        >
          <div className="flex md:pl-10 px-2">
            <div className="flex space-x-3">
              <div className="flex items-start mt-2 mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-medium text-[#00A9FF]">
                  Raheel Ahmed
                </p>
                <div className="hidden">
                  <p className="text-[15px] font-medium">
                    Lahore • Applied today
                  </p>
                </div>
                <div>
                  <p className="text-xl font-normal">Php Developer Lahore</p>
                  <p className="text-xl font-normal">Applied: Sep 6</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:space-x-10 flex md:flex-row flex-col h-full">
            <div className="flex flex-col h-[73px] justify-center items-start">
              <p className="text-base font-medium">1/1 required</p>
              <p className="text-base font-medium">question met</p>
            </div>
            <div className="flex flex-col h-[73px] justify-center items-start">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                >
                  <path
                    d="M8.7749 14.3217L11.6385 17.55L18.2249 10.125"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-base font-normal">Shortlisted</p>
              </div>
              <p className="text-xl text-[#2F6AFF] font-medium">Send message</p>
            </div>
          </div>

          <div className="flex items-center lg:justify-center">
            <div className="flex w-[150px]  border border-black h-[40px] rounded-[5px]">
              <div
                onClick={() => setTick(true)}
                className={`h-full flex w-[50px] border-r overflow-hidden border-black ${
                  tick ? "bg-[#6F2691] text-white" : "text-black"
                } justify-center items-center`}
              >
                <Check />
              </div>
              <div
                onClick={() => setQuestionMark(true)}
                className={`h-full flex w-[50px] border-r overflow-hidden border-black ${
                  questionMark ? "bg-[#6F2691] text-white" : "text-black"
                } justify-center items-center`}
              >
                <QuestionMark />
              </div>
              <div
                onClick={() => setCancel(true)}
                className={`h-full flex w-[50px] overflow-hidden ${
                  Cancel ? "bg-[#FF0000] text-white" : "text-black"
                } justify-center items-center`}
              >
                <Cancel />
              </div>
            </div>

            <div className="md:w-10 w-8 h-8 md:h-[53px]">
              <Image
                height={16}
                width={16}
                //   sizes="100vw"
                src="/three-dots.svg"
                alt="notification"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
