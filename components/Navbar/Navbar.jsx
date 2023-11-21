"use client";
import React, { useState } from "react";
import { Container } from "../globals/Container";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      {/* Desktop Navbar */}
      <div className="md:h-[86px] h-16 md:pr-5 md:my-10 my-5 pr-5 rounded-[10px] bg-[#321D3C] xl:pr-2 w-full flex justify-between items-center">
        <div className="relative lg:w-1/4 w-full flex justify-start items-center h-full">
          <Link href="/">
            <div className="flex justify-start h-[50px] md:w-[100px] w-[50px] items-center py-2">
              <Image
                src="/logo1.svg"
                alt="logo"
                height={0}
                width={0}
                sizes="100vw"
                className="rounded-full w-full h-full"
              />
              <button className="text-white md:text-xl text-xs font-medium">
                CorpConnect
              </button>
            </div>
          </Link>
        </div>

        <div className="xl:w-full">
          <div className="hidden xl:flex justify-end items-center py-4">
            <ul className="flex justify-center items-center">
              <Link href="/">
                <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                  Home
                </li>
              </Link>
              <Link href="/page/search-job">
                <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                  Search Jobs
                </li>
              </Link>
              <Link href="/page/my-client">
                <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                  My Clients
                </li>
              </Link>
              <Link href="/page/dashboard/applied">
                <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                  My Jobs
                </li>
              </Link>
              {/* <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                My Clients
              </li> */}
              <Link href="/page/about-us">
                <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                  About Us
                </li>
              </Link>
              <Link href="/page/post-job">
                <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                  Post a Job
                </li>
              </Link>
              {/* <Link href="/page/dashboard/notification">
                <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                  Dashboard
                </li>
              </Link> */}
            </ul>
          </div>

          {/* Mobile Navbar */}
          <div className="xl:hidden">
            <button onClick={toggleNavbar}>
              <Image src="/menu.svg" height={30} width={30} alt="menu" />
            </button>

            <div
              className={`fixed border top-0 right-0 pt-5 z-40 px-6 h-full bg-[#321D3C] shadow-lg w-full overflow-y-auto transition-transform duration-300 ease-in-out ${
                isOpen ? "" : "transform translate-x-full"
              }`}
            >
              <div className="flex justify-end mt-2 " onClick={toggleNavbar}>
                <div className="md:h-[30px] md:w-[30px] h-4 w-4">
                  <Image
                    src="/cancel.svg"
                    height={0}
                    width={0}
                    sizes="100vw"
                    alt="cancel"
                    className="w-full h-full"
                  />
                </div>
              </div>

              <ul className="flex flex-col mt-3 space-y-2 justify-center items-center">
                <Link href="/">
                  <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                    Home
                  </li>
                </Link>

                <Link href="/page/search-job">
                  <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                    Search Jobs
                  </li>
                </Link>

                <Link href="/page/my-client">
                  <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                    My Clients
                  </li>
                </Link>

                <Link href="/page/dashboard/applied">
                  <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                    My Jobs
                  </li>
                </Link>
                {/* <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                  My Clients
                </li> */}
                <Link href="/page/about-us">
                  <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                    About Us
                  </li>
                </Link>
                <Link href="/page/post-job">
                  <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                    Post a Job
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end md:flex-row flex-col w-full py-5 space-y-3 md:space-y-0 md:space-x-3">
        <Link href="/page/dashboard/notification">
          <button className="w-full px-3 hover:bg-transparent hover:text-[#A117E8] border border-[#A117E8] md:h-[55px] h-10 rounded-[10px] bg-[#321D3C] text-base font-normal text-white">
            flow
          </button>
        </Link>
        <Link href="/page/job-interview/jobs">
          <button className="w-full px-3 hover:bg-transparent hover:text-[#A117E8] border border-[#A117E8] md:h-[55px] h-10 rounded-[10px] bg-[#321D3C] text-base font-normal text-white">
            Interview flow
          </button>
        </Link>
        <Link href="/page/login">
          <button className="md:w-[110px] w-full hover:bg-transparent hover:text-[#A117E8] border border-[#A117E8] md:h-[55px] h-10 rounded-[10px] bg-[#321D3C] text-base font-normal text-white">
            Sign in
          </button>
        </Link>
        <Link href="/page/signup">
          <button className="md:w-[110px] w-full hover:bg-transparent hover:text-[#A117E8] border border-[#A117E8] md:h-[55px] h-10 rounded-[10px] bg-[#321D3C] text-base font-normal text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </Container>
  );
};
