import React from "react";
import { Container } from "../globals/Container";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="mt-10 bg-[#321D3C] py-5 w-full rounded-[10px] border-[#B8BAB7] border-[5px]">
      <Container>
        <div className="w-full justify-center items-center flex flex-col">
          <h1 className="text-[32px] text-white font-bold">Contact us:</h1>
          <p className="text-xl text-white font-semibold">
            corpconnectaz@gmail.com
          </p>
        </div>
        <div className="grid lg:grid-cols-5 space-y-5 md:space-y-0 md:grid-cols-4 grid-cols-1 mt-10">
          <div className="flex md:block justify-center items-start flex-col">
            <h1 className="text-base font-bold text-white">For Jobseekers</h1>
            <ul className="mt-6 md:space-y-3 space-y-1 md:block flex items-start flex-col">
              <li className="md:text-base text-sm font-normal text-white">
                Search Jobs
              </li>
              <li className="md:text-base text-sm font-normal text-white">
                Employers
              </li>
              <li className="md:text-base text-sm font-normal text-white">
                Agencies
              </li>
            </ul>
          </div>
          <div className="flex md:block justify-center items-start flex-col">
            <h1 className="text-base font-bold text-white">Popular</h1>
            <ul className="mt-6 md:space-y-3 space-y-1 md:block flex items-start flex-col">
              <li className="md:text-base text-sm font-normal text-white">
                Search Jobs
              </li>
              <li className="md:text-base text-sm font-normal text-white">
                Employers
              </li>
              <li className="md:text-base text-sm font-normal text-white">
                Agencies
              </li>
            </ul>
          </div>
          <div className="flex md:block justify-center items-start flex-col">
            <h1 className="text-base font-bold text-white">Recruiters</h1>
            <ul className="mt-6 md:space-y-3 space-y-1 md:block flex items-start flex-col">
              <li className="md:text-base text-sm font-normal text-white">
                CV Database Access
              </li>
              <li className="md:text-base text-sm font-normal text-white">
                Advertise Jobs
              </li>
              <li className="md:text-base text-sm font-normal text-white">
                Search CVs
              </li>
              <li className="md:text-base text-sm font-normal text-white">
                Test CV Search
              </li>
            </ul>
          </div>
          <div className="flex md:block justify-center items-start flex-col">
            <h1 className="text-base font-bold text-white">
              About the creation
            </h1>
            <ul className="mt-6 md:space-y-3 space-y-1 md:block flex items-start flex-col">
              <li className="md:text-base text-sm font-normal text-white">
                About Us
              </li>
              <li className="md:text-base text-sm font-normal text-white">
                Contact Us
              </li>
              <li className="md:text-base text-sm font-normal text-white">
                Work for Us
              </li>
              <li className="md:text-base text-sm font-normal text-white">
                Help
              </li>
              <li className="md:text-base text-sm font-normal text-white">
                FAQ
              </li>
            </ul>
          </div>
          <div className="md:col-span-full w-full lg:mt-0 mt-5 lg:col-span-1 lg:block flex flex-col justify-center items-center">
            <h1 className="text-base font-bold text-white">
              Subscribe to our newsletter
            </h1>
            <div className="flex w-2/3 lg:w-full justify-between xl:pr-11 mt-6">
              <Image
                height={45}
                width={40}
                src="/facebook.svg"
                alt="facebook"
              />
              <Image height={45} width={40} src="/twitter.svg" alt="twitter" />
              <Image height={45} width={40} src="/youtube.svg" alt="youtube" />
              <Image
                height={45}
                width={40}
                src="/instagram.svg"
                alt="instagram"
              />
            </div>
            <div className="flex lg:justify-start justify-center md:w-1/2 w-full h-[66px] lg:w-full mt-5">
              <Image
                height={66}
                width={50}
                // sizes="100vw"
                src="/logo1.svg"
                alt="logo"
                className="rounded-full h-full"
              />
              {/* <div className="lg:border-0 w-full border-t border-white"> */}
              <button className="text-white xl:text-xl lg:text-base font-medium">
                CorpConnect
              </button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
