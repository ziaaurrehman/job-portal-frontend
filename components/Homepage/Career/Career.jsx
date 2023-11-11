import { Container } from "@/components/globals/Container";
import Image from "next/image";
import React from "react";

export const Career = () => {
  return (
    <Container>
      <div className="flex lg:flex-row mt-5 lg:mt-10 flex-col space-y-5 lg:space-y-0 lg:space-x-3">
        <div className="xl:w-[55%] lg:order-1 order-2 lg:mt-0 mt-5 w-full h-full">
          <Image
            height={0}
            width={0}
            sizes="100vw"
            src="/career.svg"
            alt="next-step"
            className="w-full h-full rounded-[10px] "
          />
        </div>
        <div className="xl:w-[45%] w-full border-[5px] lg:order-2 space-y-3 flex flex-col items-center border-[#521572] rounded-[10px] py-5 box-border xl:px-9">
          <h1 className="xl:text-[40px] w-full lg:text-left text-center text-2xl font-semibold xl:pl-0 lg:px-5 xl:px-0 px-5 tracking-[-0.5px] xl:leading-[50px]">
            Your career development is now easier!
          </h1>
          <p className="xl:text-[28px] text-lg lg:text-left text-center xl:leading-10 leading-8 lg:px-5 px-5 xl:px-0 font-normal tracking-[-0.5px]">
            Discover Azerbaijan's premier platform for ambitious professionals,
            startups and top-tier corporations. At CorpConnect, we believe in
            creating opportunities, fostering growth and setting the gold
            standard for recruiting in the corporate space.
          </p>
        </div>
      </div>
    </Container>
  );
};
