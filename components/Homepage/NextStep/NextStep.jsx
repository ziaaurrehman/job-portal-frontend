import { Container } from "@/components/globals/Container";
import Image from "next/image";
import React from "react";

export const NextStep = () => {
  return (
    <Container>
      <div className="flex mt-20 lg:flex-row flex-col space-y-5 lg:space-y-0 lg:space-x-3">
        <div className="lg:w-1/2 w-full border-[5px] flex flex-col items-center border-[#521572] rounded-[10px] py-5 px-5 xl:px-14">
          <h1 className="text-center xl:text-5xl text-3xl font-semibold tracking-[-0.5px] md:leading-[50px] xl:leading-[70px]">
            The next step to success
          </h1>
          <p className="xl:text-2xl w-full md:text-2xl text-xl xl:py-5 text-center md:leading-[50px] font-normal tracking-[-0.5px]">
            CorpConnect-Bridge to corporate life
          </p>
          <h2 className="md:text-3xl text-2xl xl:mt-2 font-semibold xl:leading-[60px] leading-[50px] tracking-[-0.5px] capitalize">
            connect
          </h2>
        </div>
        <div className="lg:w-1/2 w-full h-full">
          <Image
            height={0}
            width={0}
            sizes="100vw"
            src="/nextstep.svg"
            alt="next-step"
            className="w-full h-full rounded-[10px] "
          />
        </div>
      </div>
    </Container>
  );
};
