import React from "react";
import { Container } from "../globals/Container";
import Image from "next/image";
import Link from "next/link";

export const Success = () => {
  return (
    <Container>
      <div className="md:mt-20 mt-10 lg:py-14 md:py-20 py-5 h-auto w-full rounded-[10px] border-[#5E3D6E] border-[5px]">
        <div className="md:space-y-10 flex flex-col items-center space-y-5 xl:pt-32 lg:pt-24 md:pt-16 pt-10 xl:px-56 lg:px-28 md:px-16 px-5">
          <div className="md:h-[186px] md:w-[186px] h-20 w-20">
            <Image
              height={0}
              width={0}
              sizes="100vw"
              src="/success.svg"
              alt="pdf"
              className="h-full w-full"
            />
          </div>

          <h1 className="md:text-5xl w-full md:text-left text-center text-xl font-semibold line">
            Your application has been <br className="xl:block hidden" />
            submitted!
          </h1>

          <h1 className="md:text-[32px] w-full md:text-left text-center md:pb-3 line2 pb-1 text-xl font-semibold">
            You will get an email confirmation at
            <br className="xl:block hidden" /> madnansakhi@gmail.com
          </h1>

          <div className="md:py-5 w-full py-3 md:space-y-3 space-y-1">
            <h1 className="md:text-[32px] w-full md:text-left text-center md:pb-3 line2 pb-1 text-xl font-semibold">
              Keep track of your applications
            </h1>

            <p className="md:text-2xl xl:w-[90%] md:text-left text-center w-full md:pb-3 pb-1 text-xs font-semibold">
              You will receive a status update in an email from Indeed within a
              few weeks of submitting your application. In the meantime, you can
              view and track all your applications in the Indeed My jobs section
              at any time.
            </p>
          </div>

          <p className="md:text-2xl w-full underline md:text-left text-center md:pb-3 pb-1 text-xs font-semibold">
            View your applications on My jobs
          </p>

          <div className="w-full flex justify-center items-center md:mt-14 mt-20">
            <Link href="/page/search-job">
              <button
                type="submit"
                className="md:text-2xl text-xs font-bold border text-white border-white md:px-[30px] px-5 bg-[#6F2691] md:w-[369px] w-[200px] md:h-[88px] h-12 md:mt-3 rounded-[10px]"
              >
                Return to job search
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full flex md:justify-end justify-center md:px-10 px-5 items-center md:mt-40 mt-20 lg:mt-64">
          <p className="md:text-xl text-xs text-center font-medium">
            Having an issue with this application? <br className="md:hidden " />
            <span className="text-[#A117E8] underline pl-3">Tell us more</span>
          </p>
        </div>
      </div>
    </Container>
  );
};
