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
      <div className="md:h-[86px] h-16 md:pr-5 md:mt-10 mt-5 pr-5 rounded-[10px] bg-[#321D3C] xl:pr-2 w-full flex justify-between items-center">
        <div className="relative lg:w-1/4 w-full flex justify-start items-center h-full">
          <Link href="/">
            <div className="h-full flex justify-start items-center py-2">
              <img
                src="/logo1.svg"
                alt="logo"
                className="rounded-full h-full"
              />
              <button className="text-white text-xl font-medium">
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
              <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                My Jobs
              </li>
              <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                My Clients
              </li>
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

          {/* Mobile Navbar */}
          <div className="xl:hidden">
            <button onClick={toggleNavbar}>
              <img src="/menu.svg" alt="menu" />
            </button>

            <div
              className={`fixed border top-0 right-0 pt-5 z-40 px-6 h-full bg-[#321D3C] shadow-lg w-full overflow-y-auto transition-transform duration-300 ease-in-out ${
                isOpen ? "" : "transform translate-x-full"
              }`}
            >
              <div className="flex justify-end mt-2" onClick={toggleNavbar}>
                <img src="/cancel.svg" alt="cancel" />
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

                <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                  My Jobs
                </li>
                <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                  My Clients
                </li>
                <Link href="/page/about-us">
                  <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                    About Us
                  </li>
                </Link>

                <li className="text-white hover:bg-[#7B15B0] w-[136px] h-[58px] rounded-[9px] flex justify-center items-center text-lg font-medium">
                  Post a Job
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end hidden w-full py-5 space-x-3">
        <Link href="/page/login">
          <button className="md:w-[110px] w-20 border border-[#A117E8] md:h-[55px] h-10 rounded-[10px] bg-[#321D3C] text-base font-normal text-white">
            Sign in
          </button>
        </Link>
        <Link href="/page/signup">
          <button className="md:w-[110px] w-20 border border-[#A117E8] md:h-[55px] h-10 rounded-[10px] bg-[#321D3C] text-base font-normal text-white">
            Sign Up
          </button>
        </Link>
      </div>
      <div className="py-5 flex items-center">
        <h1 className="md:text-5xl w-full md:text-left text-center text-xl font-normal line">
          Notification
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
        </div>
      </div>
    </Container>
  );
};
