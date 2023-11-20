"use client";
import React, { useState } from "react";
import {
  Cancel,
  Check,
  QuestionMark,
  Calendar,
  Call,
  Message,
} from "../icons/icons";
import Image from "next/image";

export default function CandidateInfo() {
  const [tick, setTick] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [questionMark, setQuestionMark] = useState(false);
  return (
    <div className="lg:w-[501px] w-full rounded-[5px] border-[#5E3D6E] border-[3px]">
      <div className="flex md:mt-0 mt-3 items-center justify-end">
        <div className="flex w-[150px] border border-black h-[40px] rounded-[5px]">
          <div
            onClick={() => setTick(true)}
            className={`h-full flex w-[50px] border-r overflow-hidden border-black ${
              tick ? "bg-[#6F2691] text-white" : "text-black"
            } justify-center items-center`}
          >
            <Check />
          </div>
          <div
            onClick={() => setQuestionMark(true)}
            className={`h-full flex w-[50px] border-r overflow-hidden border-black ${
              questionMark ? "bg-[#6F2691] text-white" : "text-black"
            } justify-center items-center`}
          >
            <QuestionMark />
          </div>
          <div
            onClick={() => setCancel(true)}
            className={`h-full flex w-[50px] overflow-hidden ${
              cancel ? "bg-[#FF0000] text-white" : "text-black"
            } justify-center items-center`}
          >
            <Cancel />
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
      <div className="flex md:flex-row flex-col w-full px-5 md:space-x-4 md:space-y-0 space-y-3 py-5">
        <button className="lg:w-[173px] px-3 lg:px-0 h-[45px] hover:border-[#6F2691] text-[15px] text-white font-normal hover:bg-transparent hover:text-[#6F2691] flex border border-[#3E1652] justify-center items-center shadow-xl rounded-[5px] bg-[#6F2691]">
          <Calendar height={25} width={25} />
          Invite to interview
        </button>

        <button className="lg:w-[123px] hover:bg-[#6F2691] hover:text-white px-3 text-[15px] font-normal lg:px-0 h-[45px] flex border border-[#3E1652] justify-center items-center shadow-xl rounded-[5px]">
          <Message height={25} width={25} />
          Message
        </button>
        <button className="lg:w-[89x] text-[15px] hover:bg-[#6F2691] hover:text-white font-normal px-3 lg:px-3 h-[45px] flex border border-[#3E1652] justify-center items-center shadow-xl rounded-[5px]">
          <Call />
          Call
        </button>
      </div>
      <hr className="border-[#5E3D6EB2]" />
      <div className="md:py-10 py-5 px-6">
        <h1 className="text-xl font-medium">Muhammad Usama</h1>
        <p className="text-[15px] font-light">MERN Developer</p>
        <p className="text-[15px] text-[#4D54FF] truncate font-normal">
          muhammadazeemumarutdfz_aqw@indeedemail.com - 54782
        </p>
        <p className="text-[15px] font-light">
          Applied to intern SQA Engineer - Lahore
        </p>
      </div>
      <div className="md:py-10 py-5 px-6">
        <h1 className="text-xl font-medium">Applicant qualifications</h1>
        <p className="text-[15px] font-light">
          Will you be able to reliably commute or relocate to Lahore for this
          job?
        </p>

        <p className="text-[15px] font-light py-2">
          Yes, I can make the commute <br /> Your requirement: Yes, I am
          planning to relocate (Required)
        </p>
        <p className="text-[15px] font-light text-[#000000B2] py-2">
          Please list 2-3 dates and time ranges that you could do an interview.
        </p>
      </div>
      <hr className="border-[#5E3D6EB2]" />
      <div className="flex w-full justify-between items-center px-6 py-5">
        <p className="text-[15px] font-bold">CV</p>
        <div className="flex items-center">
          <button className="lg:w-[123px] px-3 lg:px-0 h-[45px] flex border border-[#3E1652] justify-center items-center shadow-xl rounded-[5px]">
            <p className="text-[15px] font-bold">Download PDF</p>
          </button>
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
      <hr className="border-[#5E3D6EB2]" />
      <div className="md:h-[600px] w-full p-5 flex justify-center items-center">
        <div className="w-[457px] rounded-lg border border-black h-[566px]">
          <Image
            height={0}
            width={0}
            sizes="100vw"
            src="/cv.png"
            alt="avatar"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
