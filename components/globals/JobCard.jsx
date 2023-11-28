"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function JobCard() {
  const [flyer, setFlyer] = useState(false);

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
          className="border-[5px] md:py-10 py-5 px-2 w-full justify-between flex lg:flex-row flex-col space-x-5 xxl:space-x-10 lg:items-center md:space-y-5 space-y-5 rounded-[10px] border-[#735681]"
        >
          <div className="flex md:pl-10 px-2">
            <div className="flex space-x-3">
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-[#735681] bg-[#735681] border-[#735681] rounded focus:ring-[#735681] dark:focus:ring-[#735681]"
                />
              </div>
              <div className="space-y-2">
                <Link href="/page/job-interview/candidates">
                  <p className="text-base font-medium hover:underline text-[#00A9FF]">
                    UIUX Designer
                  </p>
                </Link>
                <p className="text-sm font-normal">Lahore</p>
                <p className="text-sm font-normal">Posted: 6 September</p>
                <p className="text-sm font-normal">2023</p>
              </div>
            </div>
          </div>

          <div className="md:space-x-10 flex md:flex-row flex-col h-full">
            <div className="flex flex-col h-[73px] justify-center items-start">
              <p className="text-sm font-medium">287</p>
              <p className="text-base font-medium">Active</p>
            </div>

            <div className="h-[73px] md:px-10 px-5 space-x-5 flex md:space-x-10 rounded-[10px] bg-[#6F269133]">
              <div className="flex flex-col justify-center items-start h-full">
                <p className="text-sm font-medium">287</p>
                <p className="text-base font-medium">Awaiting</p>
              </div>
              <div className="flex flex-col justify-center items-start h-full">
                <p className="text-sm font-medium">0</p>
                <p className="text-base font-medium">Contacting</p>
              </div>
              <div className="flex flex-col justify-center items-start h-full">
                <p className="text-sm font-medium">0 of 1</p>
                <p className="text-base font-medium">Hired</p>
              </div>
            </div>
          </div>

          <div className="flex items-center lg:justify-center">
            <div className="relative shadow-filter flex w-[153px] h-[53px] px-5 rounded-[5px]">
              <button
                type="button"
                className="
                   group rounded-md outline-none inline-flex items-center xl:text-base md:text-sm font-normal font-inter pb-8'
                  "
                onClick={() => {
                  setFlyer(!flyer);
                }}
              >
                <span className="h-[11px] w-[11px] bg-[#FF8F0C] rounded-full"></span>

                <span className="ml-2">Showcase</span>

                <svg
                  className={
                    flyer === true
                      ? "transform rotate-180 ml-2 h-5 w-5 text-black group-hover:white transition ease-out duration-700"
                      : "transform rotate-0 transition ease-out duration-700 ml-2 h-5 w-5 text-black group-hover:text-black"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                onMouseLeave={() => setFlyer(false)}
                className={
                  flyer
                    ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-14 transform px-2 w-60 max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-full max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 hidden"
                }
              >
                <div className="overflow-hidden ">
                  <div className="relative grid gap-6 bg-white px-5 py-5 sm:gap-8 sm:p-8 dark:bg-[#04505B] text-black dark:text-white">
                    <a
                      href="https://guddgeweb.azurewebsites.net/?page_id=230"
                      className="-m-3 p-3 flex items-start rounded-lg "
                    >
                      <div className="ml-4 xl:text-base md:text-sm font-normal font-inter">
                        <h1>Portfolio</h1>
                      </div>
                    </a>
                    <a
                      href="https://guddgeweb.azurewebsites.net/?page_id=329"
                      className="-m-3 p-3 flex items-start rounded-lg "
                    >
                      <div className="ml-4 xl:text-base md:text-sm font-normal font-inter">
                        <h1>Articles</h1>
                      </div>
                    </a>

                    <div className="ml-4 xl:text-base md:text-sm font-normal font-inter">
                      <h1>Team Members</h1>
                    </div>

                    <div className="ml-4 xl:text-base md:text-sm font-normal font-inter">
                      <h1>Career</h1>
                    </div>
                  </div>
                </div>
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
