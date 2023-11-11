import React from "react";
import { Container } from "../globals/Container";
import Image from "next/image";

export const ProjectDetails = () => {
  return (
    <Container>
      <div className="py-20">
        <h1 className="xl:text-[64px] md:text-left text-center md:text-5xl text-3xl font-medium tracking-[-0.5px] leading-[70px] xl:leading-[100px]">
          Project Details
        </h1>
        <div className="flex lg:flex-row mt-5 md:mt-10 flex-col space-y-5 lg:space-y-0 lg:space-x-3">
          <div className="xl:w-[55%] w-full border-[5px] space-y-3 flex flex-col items-center border-[#5E3D6E] rounded-[10px] xl:p-12 md:p-11 p-5    xl:px-9">
            <h1 className="xl:text-[64px] capitalize md:text-left text-center md:text-5xl text-3xl font-medium tracking-[-0.5px] leading-[70px] xl:leading-[100px]">
              Project
            </h1>
            <p className="xl:text-[28px] text-lg lg:text-left text-center xl:leading-10 leading-8 font-normal tracking-[-0.5px]">
              This is your Project description. Whether your work is based on
              text, images, videos or a different medium, providing a brief
              summary will help visitors understand the context and background.
              Then use the media section to showcase your project!
            </p>
          </div>
          <div className="xl:w-[45%] w-full h-full">
            <Image
              height={500}
              width={500}
              sizes="100vw"
              src="/project1.svg"
              alt="next-step"
              className="w-full h-full rounded-[10px] "
            />
          </div>
        </div>
        <div className="flex lg:flex-row mt-5 md:mt-10 flex-col space-y-5 lg:space-y-0 lg:space-x-3">
          <div className="xl:w-[45%] lg:order-1 mt-5 lg:mt-0 order-2 w-full h-full">
            <Image
              height={500}
              width={500}
              sizes="100vw"
              src="/project2.svg"
              alt="next-step"
              className="w-full h-full rounded-[10px] "
            />
          </div>
          <div className="xl:w-[55%] lg:order-2 w-full border-[5px] space-y-3 flex flex-col items-center border-[#5E3D6E] rounded-[10px] xl:p-12 md:p-11 p-5 xl:px-9">
            <h1 className="xl:text-[64px] capitalize md:text-left text-center md:text-5xl text-3xl font-medium tracking-[-0.5px] leading-[70px] xl:leading-[100px]">
              Project
            </h1>
            <p className="xl:text-[28px] text-lg lg:text-left text-center xl:leading-10 leading-8 font-normal tracking-[-0.5px]">
              This is your Project description. Whether your work is based on
              text, images, videos or a different medium, providing a brief
              summary will help visitors understand the context and background.
              Then use the media section to showcase your project!
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row mt-5 md:mt-10 flex-col space-y-5 lg:space-y-0 lg:space-x-3">
          <div className="xl:w-[55%] w-full border-[5px] space-y-3 flex flex-col items-center border-[#5E3D6E] rounded-[10px] xl:p-12 md:p-11 p-5 xl:px-9">
            <h1 className="xl:text-[64px] capitalize md:text-left text-center md:text-5xl text-3xl font-medium tracking-[-0.5px] leading-[70px] xl:leading-[100px]">
              Project
            </h1>
            <p className="xl:text-[28px] text-lg lg:text-left text-center xl:leading-10 leading-8 font-normal tracking-[-0.5px]">
              This is your Project description. Whether your work is based on
              text, images, videos or a different medium, providing a brief
              summary will help visitors understand the context and background.
              Then use the media section to showcase your project!
            </p>
          </div>
          <div className="xl:w-[45%] w-full h-full">
            <Image
              height={500}
              width={500}
              sizes="100vw"
              src="/project3.svg"
              alt="next-step"
              className="w-full h-full rounded-[10px] "
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
