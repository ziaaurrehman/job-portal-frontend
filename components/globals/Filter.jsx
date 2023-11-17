"use client";
import React, { useState } from "react";
import { ArrowIcon, Check } from "../icons/icons";
import Image from "next/image";

export default function Filter() {
  const [flyer, setFlyer] = useState(false);
  const [flyer1, setFlyer1] = useState(false);
  const [flyer2, setFlyer2] = useState(false);
  const [match, setMatch] = useState("");
  const [match2, setMatch2] = useState("");

  const sort = [
    {
      id: 1,
      title: "Posting date",
    },
    {
      id: 2,
      title: "Job title",
    },
    {
      id: 3,
      title: "Job status",
    },
  ];
  const order = [
    {
      id: 1,
      title: "Ascending",
    },
    {
      id: 2,
      title: "Descending",
    },
  ];
  return (
    // <div className="w-full">
    //   <div className="relative w-[470px] rounded-[5px] border-2 border-[#5E3D6E] shadow-filter h-auto overflow-hidden">
    //     <input
    //       type="checkbox"
    //       className="peer absolute top-0 insert-x-0 w-full h-20 opacity-0 z-10 cursor-pointer"
    //     />
    //     <div className=" h-20 w-full pl-5 flex items-center text-[#64748B]">
    //       {/* <UserIcon /> */}
    //       <div className="md:w-11 w-8 h-8 md:h-11">
    //         <Image
    //           height={0}
    //           width={0}
    //           sizes="100vw"
    //           src="/filter.svg"
    //           alt="notification"
    //           className="h-full w-full"
    //         />
    //       </div>
    //       <p className="font-normal text-[#000000B2] text-xl ml-5">
    //         Filter and search jobs
    //       </p>
    //     </div>

    //     <div className="absolute top-5 mr-5 right-3 text-[#64748B] peer-checked:text-white transition-transform duration-500 peer-checked:pb-5 rotate-0 peer-checked:rotate-180">
    //       {/* <ArrowIcon className="transition-transform -rotate-90" /> */}
    //       <div className="md:w-11 w-8 h-8 md:h-11">
    //         <Image
    //           height={0}
    //           width={0}
    //           sizes="100vw"
    //           src="/Arrow.svg"
    //           alt="notification"
    //           className="h-full w-full transition-transform"
    //         />
    //       </div>
    //     </div>

    //     <div className=" bg-white transition-all z-10 space-y-5 duration-500 overflow-hidden max-h-0 peer-checked:max-h-[400px] px-5">
    //       <div className="space-y-2">
    //         <label className="font-semibold text-xl">Job title</label>
    //         <input
    //           type="text"
    //           placeholder="Job title"
    //           className="w-full h-[82px] placeholder:text-xl placeholder:font-normal p-2 placeholder:pl-5 outline-none shadow-filter rounded-[5px] border-2 border-[#5E3D6E]"
    //         />
    //       </div>
    //       <div className="space-y-2">
    //         <label className="font-semibold text-xl">Location</label>
    //         <input
    //           type="text"
    //           placeholder="Location"
    //           className="w-full h-[82px] placeholder:text-xl placeholder:font-normal p-2 placeholder:pl-5 outline-none shadow-filter rounded-[5px] border-2 border-[#5E3D6E]"
    //         />
    //       </div>
    //       <div className="space-y-2 pb-10">
    //         <label className="font-semibold text-xl">Date posted</label>
    //         <input
    //           type="date"
    //           placeholder="Date posted"
    //           className="w-full h-[82px] placeholder:text-xl placeholder:font-normal p-2 placeholder:pl-5 outline-none shadow-filter rounded-[5px] border-2 border-[#5E3D6E]"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-5 w-full xl:space-x-10 lg:space-x-4 justify-between items-center lg:items-start py-10">
      <div className="relative shadow-filter flex xl:w-[470px] lg:w-[320px] w-full md:h-20 h-14 rounded-[5px] border-2 border-[#5E3D6E] px-5">
        <button
          type="button"
          className="group rounded-md outline-none flex items-center justify-between w-full xl:text-base md:text-sm font-normal font-inter"
          onClick={() => {
            setFlyer(!flyer);
          }}
        >
          <div className="flex items-center">
            <div className="md:w-11 w-8 h-8 md:h-11">
              <Image
                height={0}
                width={0}
                sizes="100vw"
                src="/filter.svg"
                alt="notification"
                className="h-full w-full"
              />
            </div>
            <span className="font-normal truncate text-[#000000B2] text-xl ml-2">
              Filter and search jobs
            </span>
          </div>

          <div>
            <svg
              className={
                flyer === true
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
          onMouseLeave={() => setFlyer(false)}
          className={
            flyer
              ? " opacity-100 translate-y-0 w-full rounded-lg shadow-lg transition ease-out duration-200 absolute z-20 -ml-4 md:mt-20 mt-14 transform px-2 max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
              : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-5 transform px-2 w-full max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 hidden"
          }
        >
          <div className="overflow-hidden w-full">
            <div className="relative grid gap-6 bg-white rounded-lg px-5 py-5 sm:gap-8 sm:p-8 dark:bg-[#04505B] text-black dark:text-white">
              <div className="space-y-2">
                <label className="font-semibold text-xl">Job title</label>
                <input
                  type="text"
                  placeholder="Job title"
                  className="w-full md:h-[82px] h-14 placeholder:text-xl placeholder:font-normal p-2 placeholder:pl-5 outline-none shadow-filter rounded-[5px] border-2 border-[#5E3D6E]"
                />
              </div>
              <div className="space-y-2">
                <label className="font-semibold text-xl">Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full md:h-[82px] h-14 placeholder:text-xl placeholder:font-normal p-2 placeholder:pl-5 outline-none shadow-filter rounded-[5px] border-2 border-[#5E3D6E]"
                />
              </div>
              <div className="space-y-2 pb-3">
                <label className="font-semibold text-xl">Date posted</label>
                <input
                  type="date"
                  placeholder="Date posted"
                  className="w-full md:h-[82px] h-14 placeholder:text-xl placeholder:font-normal p-2 placeholder:pl-5 outline-none shadow-filter rounded-[5px] border-2 border-[#5E3D6E]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:w-auto w-full lg:flex-row flex-col lg:space-y-0 space-y-5 xl:space-x-10 lg:space-x-4">
        <div className="relative shadow-filter flex lg:w-[300px]  w-full md:h-20 h-14 rounded-[5px] border-2 border-[#5E3D6E] px-1">
          <button
            type="button"
            className="group rounded-md outline-none flex items-center justify-between w-full xl:text-base md:text-sm font-normal font-inter"
            onClick={() => {
              setFlyer1(!flyer1);
            }}
          >
            <div className="flex items-center">
              <span className="font-semibold whitespace-nowrap text-[#000000B2] text-xl ml-5">
                Sort by:
              </span>
              <span className="font-normal whitespace-nowrap text-[#000000B2] text-xl ml-2">
                {match ? match : "Select"}
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
              <div className="relative grid gap-6 bg-white px-5 py-5 sm:gap-8 sm:p-4 dark:bg-[#04505B] text-black dark:text-white">
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

        <div className="relative shadow-filter flex lg:w-[300px] w-full md:h-20 h-14 rounded-[5px] border-2 border-[#5E3D6E] px-1">
          <button
            type="button"
            className="group rounded-md outline-none flex items-center justify-between w-full xl:text-base md:text-sm font-normal font-inter"
            onClick={() => {
              setFlyer2(!flyer2);
            }}
          >
            <div className="flex items-center">
              <span className="font-semibold whitespace-nowrap text-[#000000B2] text-xl ml-5">
                Sort by:
              </span>
              <span className="font-normal whitespace-nowrap text-[#000000B2] text-xl ml-2">
                {match2 ? match2 : "Select"}
              </span>
            </div>

            <div>
              <svg
                className={
                  flyer2 === true
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
            onMouseLeave={() => setFlyer2(false)}
            className={
              flyer2
                ? " opacity-100 translate-y-0 w-full rounded-lg shadow-lg transition ease-out duration-200 absolute z-50 -ml-4 md:mt-20 mt-14 transform px-2 max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-5 transform px-2 w-full max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 hidden"
            }
          >
            <div
              onMouseLeave={() => setFlyer2(false)}
              className="overflow-hidden bg-white rounded-[5px] py-5 w-full"
            >
              <div className="relative grid gap-6 bg-white px-5 py-5 sm:gap-8 sm:p-4 dark:bg-[#04505B] text-black dark:text-white">
                <div className="flex flex-col cursor-pointer justify-center items-start">
                  {order.map((obj, _) => (
                    <div
                      key={obj.id}
                      // onMouseLeave={() => setFlyer1(false)}
                      onClick={() => setMatch2(obj.title)}
                      className="flex py-2 space-x-2"
                    >
                      <div
                        className={`${match2 === obj.title ? "" : "invisible"}`}
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
      </div>
    </div>
  );
}
