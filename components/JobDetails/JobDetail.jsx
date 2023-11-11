import React from "react";
import { Container } from "../globals/Container";
import Image from "next/image";
import Link from "next/link";

export const JobDetail = () => {
  const skills = [
    {
      id: 1,
      text: "  Age: 18-27",
    },
    {
      id: 2,
      text: "Gender: male/female",
    },
    {
      id: 3,
      text: "Language skills: Azerbaijani, Russian (desirable)",
    },
    {
      id: 4,
      text: "Minimal office programs",
    },
    {
      id: 5,
      text: "Neat appearance",
    },
    {
      id: 6,
      text: "Ability to communicate with customers",
    },
    {
      id: 7,
      text: "Punctual",
    },
    {
      id: 8,
      text: "Skills powerful skills",
    },
    {
      id: 9,
      text: "Experience maximum 2 years",
    },
    {
      id: 10,
      text: "Language skills: Azerbaijani, Russian (desirable)",
    },
    {
      id: 11,
      text: "Salary 200k to 250k",
    },
    {
      id: 12,
      text: "Neat appearance",
    },
    {
      id: 13,
      text: "Ability to communicate with customers",
    },
    {
      id: 14,
      text: "Punctual",
    },
  ];
  return (
    <Container>
      <div>
        <h1 className="xl:text-[40px] capitalize w-full text-2xl font-medium tracking-[-0.5px] xl:leading-[50px] ">
          Job Details
        </h1>
        <div className="md:p-10 mt-16 w-full p-5 rounded-[10px] border-[#5E3D6E] border-[5px]">
          <div className="flex md:flex-row flex-col lg:p-5 p-3 space-x-3">
            <div className="h-[230px] w-[230px]">
              <Image
                height={0}
                width={0}
                sizes="100vw"
                src="/search1.svg"
                alt="search"
                className="h-full w-full"
              />
            </div>
            <div className="lg:p-5 pt-10">
              <h1 className="xl:text-[40px] capitalize w-full md:text-3xl text-xl font-semibold tracking-[-0.5px] xl:leading-[50px] ">
                Whiskey Sales Specialist <br /> (Tamstadt)
              </h1>
              <p className=" lg:text-2xl md:text-xl text-lg font-medium py-3 md:py-5">
                The Shelby Company Limited is a limited
                <br className="md:block hidden" /> company owned by the Shelby
                Family.
              </p>
              <h1 className=" leading-10 lg:text-4xl md:text-3xl text-2xl font-medium">
                Candidate requirements
              </h1>
              <ul className="md:py-10 py-5">
                {skills.map((obj, _) => (
                  <li key={obj.id} className="flex space-x-2">
                    <div className="h-4 w-4 mt-5">
                      <hr className="w-[10px] h-[3px] bg-black" />
                    </div>
                    <p className="lg:text-[28px] text-base leading-10  font-medium">
                      {obj.text}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="w-full flex lg:py-10 md:py-5 lg:justify-center items-center">
                <Link href="/page/apply">
                  <button className="lg:px-[65px] py-4 px-10 lg:py-[25px] bg-[#6F2691] text-white rounded-[5px] lg:text-[32px] text-2xl font-semibold">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
