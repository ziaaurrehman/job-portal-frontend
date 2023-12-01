"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@/components/globals/Container";
import Sidebar from "@/components/globals/Sidebar";
import Link from "next/link";
import Image from "next/image";
import Filter from "@/components/globals/Filter";
import { Edit, Interview, Jobs, Candidates } from "@/components/icons/icons";

export default function Layout({ children }) {
  const [heading, setHeading] = useState("");
  const [flyer, setFlyer] = useState(false);

  const data = [
    { id: 1, icon: <Jobs />, title: "Jobs", link: "/job-interview/jobs" },
    // {
    //   id: 2,
    //   icon: <Edit />,
    //   title: "Edit profile",
    //   link: "job-interview/editProfile",
    // },
    {
      id: 3,
      icon: <Candidates />,
      title: "Candidates",
      link: "job-interview/candidates",
    },
    {
      id: 4,
      icon: <Interview />,
      title: "Interviews",
      link: "job-interview/interview",
    },
  ];

  return (
    <Container>
      <>
        <div className="pb-10 flex items-center">
          <h1
            className={`md:text-5xl capitalize w-full ${
              heading === "Jobs" || heading === "Candidates"
                ? "invisible"
                : "visible"
            } md:text-left text-center text-xl font-normal line`}
          >
            {heading}
          </h1>
          <div className="flex space-x-3">
            <Link href="/page/messages">
              <div className="relative w-11 h-10">
                <div className="h-10 absolute w-11">
                  <Image
                    height={0}
                    width={0}
                    sizes="100vw"
                    src="/notification.svg"
                    alt="notification"
                    className="h-full w-full"
                  />
                </div>
                <div className="h-10 w-11 absolute -right-5 -top-3">
                  <div className="h-8 w-8 rounded-full bg-[#F44336] flex justify-center items-center text-white">
                    1
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/page/notification">
              <div className="relative w-11 h-10">
                <div className="h-10 absolute w-11">
                  <Image
                    height={0}
                    width={0}
                    sizes="100vw"
                    src="/bell-icon.svg"
                    alt="notification"
                    className="h-full w-full"
                  />
                </div>
                <div className="h-10 w-11 absolute -right-5 -top-3">
                  <div className="h-8 w-8 rounded-full bg-[#F44336] flex justify-center items-center text-white">
                    1
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/profile">
              <div className="h-10 w-11">
                <Image
                  height={0}
                  width={0}
                  sizes="100vw"
                  src="/profile-icon.svg"
                  alt="notification"
                  className="h-full w-full"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="xl:hidden w-full">
          <Sidebar heading={heading} data={data} setHeading={setHeading} />
        </div>

        <div
          className={`xl:mt-0 mt-10 ${
            heading === "Jobs" || heading === "Candidates" ? "" : "hidden"
          }`}
        >
          <div className="flex xl:w-3/4 w-full items-center">
            <h1 className="md:text-[40px] capitalize w-full text-3xl font-semibold line">
              {heading}
            </h1>
            <div
              className={`flex sm:space-x-5 space-x-2 ${
                heading === "Candidates" ? "" : "hidden"
              }`}
            >
              <p className="md:text-xl whitespace-nowrap text-base font-medium leading-8">
                0 Hired
              </p>
              <p className="md:text-xl whitespace-nowrap text-base font-medium leading-8">
                3 Withdrawn
              </p>
            </div>
          </div>
          <div className="w-full md:space-y-0 py-6 space-y-5 flex md:flex-row flex-col justify-between lg:items-end items-center">
            <div className="relative shadow-filter flex xl:w-[470px] md:w-[320px] w-full md:h-20 h-14 rounded-[5px] border-2 border-[#5E3D6E] px-5">
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
                      <label className="font-semibold text-xl">
                        Date posted
                      </label>
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
            <div className="flex md:w-auto w-full space-x-5">
              <button className="border md:h-[78px] h-14 flex justify-center items-center md:w-[90px] w-16 rounded-[10px] border-[#3E1652]">
                <div className="md:h-[47px] md:w-[47px] h-8 w-8">
                  <Image
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="w-full h-full"
                    src="/search.svg"
                    alt="search"
                  />
                </div>
              </button>
              <button className="border-2 md:h-[78px] h-14 md:text-[30px] hover:border-[#6F2691] hover:bg-transparent hover:text-[#6F2691] text-2xl font-semibold flex justify-center items-center bg-[#6F2691] text-white md:w-[226px] w-40 rounded-[10px] border-[#3E1652]">
                Post a Job
              </button>
            </div>
          </div>
          <div className={`${heading === "Jobs" ? "" : "hidden"}`}>
            <Filter />
          </div>
        </div>
        <div className="flex xl:flex-row flex-col xl:space-x-5 border-t border-black">
          <div className="xl:w-[25%] xl:block hidden w-full">
            <Sidebar heading={heading} setHeading={setHeading} data={data} />
          </div>
          <div className="xl:w-[75%] pt-10 w-full">{children}</div>
        </div>
      </>
    </Container>
  );
}
