"use client";
import React, { useState } from "react";
import CandidateCard from "../globals/CandidateCard";
import Image from "next/image";
import SlickSlider from "../globals/Slider/Slider";
import { Check, NextArrow, PrevArrow } from "../icons/icons";

export default function Candidates() {
  const [flyer1, setFlyer1] = useState(false);
  const [match, setMatch] = useState("");
  const sort = [
    {
      id: 1,
      title: "date",
    },
    {
      id: 2,
      title: "title",
    },
    {
      id: 3,
      title: "status",
    },
  ];
  return (
    <div>
      <div className="flex lg:flex-row items-center flex-col w-full py-10">
        <div className="relative flex lg:w-auto bg-[#D9D9D9] w-full h-14 rounded-lg px-1">
          <button
            type="button"
            className="group rounded-md outline-none flex bg-[#D9D9D9] items-center justify-between w-full xl:text-base md:text-sm font-normal font-inter"
            onClick={() => {
              setFlyer1(!flyer1);
            }}
          >
            <div className="flex items-center">
              <span className="font-normal whitespace-nowrap text-[#000000B2] text-xl ml-2">
                {match ? match : "filters"}
              </span>
            </div>

            <div>
              <svg
                className={
                  flyer1 === true
                    ? "transform rotate-180 ml-2 h-10 w-10 text-black group-hover:white transition ease-out duration-700"
                    : "transform rotate-0 transition ease-out duration-700 ml-2 h-10 w-10 text-black group-hover:text-black"
                }
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                height={44}
                width={38}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>

          <div
            onMouseLeave={() => setFlyer1(false)}
            className={
              flyer1
                ? " opacity-100 translate-y-0 w-full rounded-lg shadow-lg transition ease-out duration-200 absolute z-50 -ml-4 md:mt-20 mt-14 transform px-2 max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-5 transform px-2 w-full max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 hidden"
            }
          >
            <div
              onMouseLeave={() => setFlyer1(false)}
              className="overflow-hidden bg-white rounded-[5px] py-5 w-full"
            >
              <div className="relative grid gap-6 bg-white py-5 sm:gap-8 dark:bg-[#04505B] text-black dark:text-white">
                <div className="flex flex-col cursor-pointer justify-center items-start">
                  {sort.map((obj, _) => (
                    <div
                      key={obj.id}
                      // onMouseLeave={() => setFlyer1(false)}
                      onClick={() => setMatch(obj.title)}
                      className="flex py-2 space-x-2"
                    >
                      <div
                        className={`${match === obj.title ? "" : "invisible"}`}
                      >
                        <Check height={25} width={25} />
                      </div>

                      <p className="text-base font-normal">{obj.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 w-full">
          <SlickSlider />
        </div>
        <button className="md:w-[212px] w-[180px] md:h-[71px] h-[50px] md:text-2xl text-lg font-medium rounded-[10px] border-2 border-[#5E3D6E]">
          Add candidate
        </button>
      </div>
      <div className="border py-5 lg:pr-10 w-full justify-between flex lg:flex-row flex-col space-x-10 lg:items-center space-y-0 rounded-tl-[10px]  rounded-tr-[10px] border-[#735681]">
        <div className="flex lg:pl-10 px-2">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <p className="text-2xl font-normal">Candidate</p>
          </div>
        </div>

        <div className="lg:space-x-10 flex lg:space-y-0 lg:py-0 py-5 space-y-3 lg:flex-row flex-col h-full">
          <div className="flex flex-col justify-center lg:items-center">
            <p className="text-2xl font-normal">Activity</p>
          </div>
          <div className="flex-col lg:invisible hidden justify-center items-center">
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-base font-normal">Shortlisted</p>
            </div>
            <p className="text-xl text-[#2F6AFF] font-medium">Send message</p>
          </div>
        </div>

        <div className="flex items-center lg:justify-center">
          <p className="text-2xl font-normal">Intrest</p>
        </div>
      </div>
      <CandidateCard />
      <div className="flex w-full justify-center md:py-20 py-10 md:space-x-10 space-x-5">
        <button className="lg:w-[266px] md:w-[200px] hover:border-[#6F2691] hover:bg-transparent hover:text-[#6F2691] w-[150px] rounded-[10px] text-white space-x-2 lg:p-6 md:p-4 p-2 flex justify-center items-center border-2 border-[#3E1652] lg:text-[32px] md:text-2xl text-lg font-semibold bg-[#6F269180]">
          <PrevArrow height={25} width={25} />
          <span>Previous</span>
        </button>
        <button className="lg:w-[266px] hover:border-[#6F2691] hover:bg-transparent hover:text-[#6F2691] md:w-[200px] w-[150px] rounded-[10px] text-white space-x-2 lg:p-6 md:p-4 p-2 flex justify-center items-center border-2 border-[#3E1652] lg:text-[32px] md:text-2xl text-lg font-semibold bg-[#6F2691]">
          <span>Next</span>
          <NextArrow height={25} width={25} />
        </button>
      </div>
    </div>
  );
}
