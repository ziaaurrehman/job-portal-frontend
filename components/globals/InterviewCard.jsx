import Image from "next/image";
import React from "react";

export default function InterviewCard() {
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
          className="border-[5px] py-10  md:space-y-5 space-y-3 rounded-[10px] border-[#735681]"
        >
          <h1 className="md:text-[30px] font-medium md:px-14 px-5 text-2xl">
            Friday, August 4
          </h1>
          <hr className="w-full bg-[#858585] h-[2px]" />
          <div className="md:px-14 space-y-2 px-5">
            <p className="md:text-xl text-lg font-bold underline">
              Graphics Designing Internship
            </p>
            <p className="md:text-xl text-lg font-medium">SSL SOLUTIONS</p>

            <p className="md:text-xl text-lg font-medium">Lahore</p>
            <div className="flex space-x-3 lg:items-center ">
              <div className="w-8 h-8">
                <Image
                  height={0}
                  width={0}
                  sizes="100vw"
                  src="/Alarm.svg"
                  alt="notification"
                  className="h-full w-full"
                />
              </div>
              <p className="lg:text-xl lg:mt-2 text-lg font-normal">
                11:00 pm - 11:30 pm GMT-7
              </p>
            </div>
            <div className="flex space-x-3 lg:items-center ">
              <div>
                <div className="w-8 h-8">
                  <Image
                    height={0}
                    width={0}
                    sizes="100vw"
                    src="/location.svg"
                    alt="notification"
                    className="h-full w-full"
                  />
                </div>
              </div>
              <p className="lg:text-xl lg:mt-2 text-lg font-normal">
                In-person interview <br /> Office 303, 3rd floor, landmark
                plaza, Jail road, Lahore.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
