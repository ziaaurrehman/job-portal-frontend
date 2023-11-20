"use client";
import React from "react";
import { Container } from "@/components/globals/Container";
import Image from "next/image";
import Link from "next/link";
import { Eye, NextArrow, PrevArrow } from "../icons/icons";

export default function Review() {
  const data = [
    {
      id: 1,
      title: "Your company's name",
      text: "Private limited",
    },
    {
      id: 2,
      title: "Your company's number of employees",
      text: "220",
    },
    {
      id: 3,
      title: "Your full name",
      text: "Muhammad adnan",
    },
    {
      id: 4,
      title: "Company email",
      text: "ajhfgh.gfd@gmail.com",
    },
    {
      id: 5,
      title: "Your company phone number",
      text: "+4163636363663",
    },
    {
      id: 6,
      title: "Company's industry",
      text: "Tech",
    },
    {
      id: 7,
      title: "Company's description",
      text: "an overview or summary of a business.",
    },
    {
      id: 8,
      title: "Job title",
      text: "UIUX designer",
    },
    {
      id: 9,
      title: "Upload your company logo",
      text: "picture",
    },
    {
      id: 10,
      title: "Where would you like to advertise this job?* Enter your location",
      text: "Lahore,Pakistan",
    },
    {
      id: 11,
      title: "Add pay and benefits",
      text: "100k to 150k",
    },
    {
      id: 12,
      title: "Job description",
      text: "Managers",
    },
    {
      id: 13,
      title: "Job types",
      text: "Part time internship",
    },
  ];
  return (
    <Container>
      <div>
        <div className="flex items-center lg:flex-row lg:px-28">
          <h1 className="xl:text-[40px] capitalize w-full text-xl font-medium tracking-[-0.5px] xl:leading-[50px] ">
            Review
          </h1>
          <div className="md:h-[315px] md:w-[581px] w-36">
            <Image
              height={0}
              width={0}
              sizes="100vw"
              src="/avatar3.png"
              alt="avatar"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="md:py-12 py-6 h-auto w-full md:px-16 p-3 rounded-[10px] border-[#5E3D6E] border-[5px]">
          <h1 className="xl:text-[40px] capitalize w-full text-xl font-medium tracking-[-0.5px] xl:leading-[50px] ">
            Job Deatils
          </h1>
          <div className="xl:space-y-20 md:space-y-16 space-y-8 lg:mt-16 mt-8">
            {data.map((obj, _) => (
              <div key={obj.id} className="flex justify-between">
                <p className="lg:text-2xl w-[40%] sm:text-base text-xs font-normal">
                  {obj.title}
                </p>
                <p className="lg:text-2xl w-[40%] sm:text-base text-xs font-normal">
                  {obj.text}
                </p>
                <div className="w-[10%]">
                  <div className="lg:h-[37px] lg:w-[37px] md:h-[25px] md:w-[25px] h-[15px] w-[15px]">
                    <Image
                      height={0}
                      width={0}
                      sizes="100vw"
                      src="/edit-pencile.svg"
                      alt="avatar"
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between space-y-2 md:space-y-0 w-full flex-col md:flex-row md:mt-24 mt-10 md:items-center gap-x-1">
            <Link href="/page/add-job-basic">
              <button className="lg:w-[160px] w-full border hover:border-[#6F2691] text-[22px] text-sm text-white font-semibold hover:bg-transparent hover:text-[#6F2691] px-3 lg:px-0 xl:h-[86px] md:h-[70px] h-10 flex justify-center items-center md:gap-x-6 gap-x-2 rounded-[10px] bg-[#6F2691]">
                <PrevArrow height={25} width={25} />
                Back
              </button>
            </Link>
            <div className="flex flex-col justify-end sm:w-full w-auto space-y-2 md:space-y-0 md:flex-row lg:gap-x-10 gap-x-1">
              <button className="lg:w-[238px] w-full xl:h-[86px] text-[22px] text-sm font-semibold px-3 lg:px-0 md:h-[70px] h-10 border hover:bg-[#6F2691] hover:text-white border-black flex justify-center items-center md:gap-x-10 gap-x-3 rounded-[10px]">
                Preview
                <Eye height={25} width={25} />
              </button>
              <Link href="/page/success">
                <button className="lg:w-[221px] w-full text-[22px] text-sm text-white font-semibold border px-3 hover:border-[#6F2691] hover:bg-transparent hover:text-[#6F2691] lg:px-0 xl:h-[86px] md:h-[70px] h-10 flex justify-center items-center md:gap-x-8 gap-x-2 rounded-[10px] bg-[#6F2691]">
                  Confirm
                  <NextArrow height={25} width={25} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
