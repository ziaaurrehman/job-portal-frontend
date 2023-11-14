import { Container } from "@/components/globals/Container";
import React from "react";

export const Advantagies = () => {
  return (
    <Container>
      <div className="mt-10 lg:pb-40 md:pb-20 pb-10">
        <h1 className="xl:text-[64px] capitalize text-center md:text-5xl text-3xl font-semibold tracking-[-0.5px] leading-[70px] xl:leading-[100px]">
          our advantages
        </h1>
        <div className="mt-10 flex md:flex-row space-y-5 md:space-y-0 lg:space-x-0 md:space-x-5 flex-col">
          <div className="w-full flex flex-col items-center">
            <h1 className="xl:text-[40px] xl:w-[38%] lg:w-1/2 w-full capitalize text-left md:text-4xl text-3xl font-extrabold tracking-[-0.5px] leading-[70px] xl:leading-[100px]">
              Job Seekers
            </h1>
            <ul className="flex md:mt-10 mt-5 flex-col xl:w-[38%] lg:w-1/2 w-full space-y-5 items-center justify-center">
              <li className="flex justify-center md:items-center space-x-2">
                <div className="h-full mt-3">
                  <div className="h-[5px] w-[5px] rounded-full bg-black"></div>
                </div>
                <p className="font-base capitalize font-medium tracking-[-0.5px]">
                  Simplified application: A <br className="xl:block hidden" />
                  convenient process to help you get your dream job.
                </p>
              </li>
              <li className="flex justify-center md:items-center space-x-2">
                <div className="h-full mt-3">
                  <div className="h-[5px] w-[5px] rounded-full bg-black"></div>
                </div>
                <p className="font-base font-medium capitalize  tracking-[-0.5px]">
                  Exclusive opportunities: <br className="xl:block hidden" />
                  Selected job opportunities from the countrys leading
                  companies.
                </p>
              </li>
              <li className="flex w-full md:items-center space-x-2">
                <div className="h-full mt-3">
                  <div className="h-[5px] w-[5px] rounded-full bg-black"></div>
                </div>
                <p className="font-base font-medium capitalize  tracking-[-0.5px]">
                  Privacy: Protecting your information.
                </p>
              </li>
              <li className="w-full">
                <button className="w-[184px] md:h-[70px] h-[50px] bg-[#6F2691] md:mt-8 mt-5 rounded-[5px] text-white md:text-xl text-lg font-semibold">
                  Search a Job
                </button>
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col items-center justify-center lg:justify-start">
            <h1 className="xl:text-[40px] xl:w-[38%] lg:w-1/2 w-full capitalize text-left md:text-4xl text-3xl font-extrabold tracking-[-0.5px] leading-[70px] xl:leading-[100px]">
              Employers
            </h1>
            <ul className="flex md:mt-10 mt-5 flex-col xl:w-[38%] lg:w-1/2 w-full space-y-5 items-center justify-center">
              <li className="flex justify-center md:items-center space-x-2">
                <div className="h-full mt-3">
                  <div className="h-[5px] w-[5px] rounded-full bg-black"></div>
                </div>
                <p className="font-base font-medium capitalize  tracking-[-0.5px]">
                  Effective recruitment: The ideal platform to save time and
                  resources.
                </p>
              </li>
              <li className="flex justify-center md:items-center space-x-2">
                <div className="h-full mt-3">
                  <div className="h-[5px] w-[5px] rounded-full bg-black"></div>
                </div>
                <p className="font-base font-medium capitalize  tracking-[-0.5px]">
                  Professional recruitment:
                  <br className="xl:hidden lg:block hidden" />
                  We make it <br className="lg:hidden md:block hidden" /> easier
                  for
                  <br className="xl:hidden lg:block hidden" />
                  talented employees to find you.
                </p>
              </li>
              <li className="flex w-full md:items-center space-x-2">
                <div className="h-full mt-3">
                  <div className="h-[5px] w-[5px] rounded-full bg-black"></div>
                </div>
                <p className="font-base font-medium capitalize tracking-[-0.5px]">
                  Analytics: Statistics <br className="xl:block hidden" /> about
                  your <br className="xl:block hidden" /> companys ads.
                </p>
              </li>
              <li className="w-full">
                <button className="w-[184px] md:h-[70px] h-[50px] bg-[#6F2691] md:mt-8 mt-5 rounded-[5px] text-white md:text-xl text-lg font-semibold">
                  Post a Job
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};
