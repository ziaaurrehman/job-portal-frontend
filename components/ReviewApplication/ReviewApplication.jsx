import React from "react";
import { Container } from "../globals/Container";
import Image from "next/image";
import Link from "next/link";

export const ReviewApplication = () => {
  return (
    <Container>
      <div className="md:mt-20 mt-10 lg:py-14 md:py-10 py-5 h-auto w-full rounded-[10px] border-[#5E3D6E] border-[5px]">
        <h1 className=" leading-10 w-full mt-10 text-center lg:text-4xl md:text-3xl text-xl font-semibold">
          Please review your application
        </h1>
        <div className="md:space-y-10 space-y-5 xl:px-40 lg:px-28 md:px-16 px-5">
          <div className="md:space-y-3 space-y-1 md:mt-8 mt-4">
            <h1 className=" leading-10 w-full lg:text-4xl md:text-3xl text-xl font-semibold">
              Contact Information
            </h1>
            <div className="border-[3px] rounded-[15px] border-[#81648F] md:py-5 py-3 md:space-y-3 space-y-1 md:px-6 px-3">
              <h1 className="capitalize w-full md:text-2xl text-lg font-semibold">
                Full Name
              </h1>
              <h1 className="md:text-[32px] md:pb-3 pb-1 text-xl font-semibold">
                Adnan Aas Muhammad
              </h1>
            </div>
          </div>

          <div className="border-[3px] rounded-[15px] border-[#81648F] md:py-5 py-3 md:space-y-3 space-y-1 md:px-6 px-3">
            <h1 className="capitalize w-full md:text-2xl text-lg font-semibold">
              Email Address
            </h1>
            <h1 className="md:text-[32px] md:pb-3 pb-1 text-xl font-semibold">
              madnansakhi@gmail.com
            </h1>
            <p className="md:text-xl xl:w-[70%] w-full md:pt-7 pt-3 md:pb-3 pb-1 text-xs font-semibold">
              To mitigate fraud, Indeed may mask your email address. If masked,
              the employer will see an address like
              muhammadadnansum5o_u5z@indeedemail.com. Some employers, however,
              may still be able to unmask and see your actual email address.
            </p>
          </div>

          <div className="border-[3px] rounded-[15px] border-[#81648F] md:py-5 py-3 md:space-y-3 space-y-1 md:px-6 px-3">
            <h1 className="capitalize w-full md:text-2xl text-lg font-semibold">
              City State
            </h1>
            <h1 className="md:text-[32px] md:pb-3 pb-1 text-xl font-semibold">
              Lahore, Punjab Pakistan
            </h1>
          </div>

          <div className="md:space-y-3 space-y-1 md:mt-4 mt-2">
            <h1 className="leading-10 w-full lg:text-4xl md:text-3xl text-xl font-semibold">
              CV
            </h1>
            <div className="border-[3px] flex space-x-5 justify-start items-center rounded-[15px] border-[#81648F] py-5 space-y-3 md:px-6 px-3">
              <div className="md:h-[65px] md:w-[65px] h-10 w-10">
                <Image
                  height={0}
                  width={0}
                  sizes="100vw"
                  src="/pdf.svg"
                  alt="pdf"
                  className="h-full w-full"
                />
              </div>
              <h1 className="md:text-[32px] underline md:pb-3 pb-1 text-xl font-semibold">
                Muhammad Adnan Updated Resume.pdf
              </h1>
            </div>
          </div>

          <div className="md:space-y-3 space-y-1 md:mt-4 mt-2">
            <h1 className="leading-10 w-full lg:text-4xl md:text-3xl text-xl font-semibold">
              Relevant experience
            </h1>
            <div className="border-[3px] rounded-[15px] border-[#81648F] md:py-5 py-3 md:space-y-3 space-y-1 md:px-6 px-3">
              <h1 className="md:text-[32px] md:pb-3 pb-1 text-xl font-semibold">
                Position UI/UX Designing & Digital
              </h1>
              <h1 className="capitalize w-full md:text-2xl text-lg font-semibold">
                Systems Limited Company
              </h1>
            </div>
          </div>

          <div className="w-full flex justify-center items-center md:mt-14 mt-20">
            <Link href="/page/success">
              <button
                type="submit"
                className="md:text-2xl text-xs border hover:border-[#6F2691] hover:bg-transparent hover:text-[#6F2691] font-bold border text-white border-white md:px-[30px] px-5 bg-[#6F2691] md:w-[369px] w-[200px] md:h-[88px] h-12 md:mt-3 rounded-[10px]"
              >
                Submit your application
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full flex md:justify-end justify-center md:px-10 px-5 items-center mt-20">
          <p className="md:text-xl text-xs text-center font-medium">
            Having an issue with this application? <br className="md:hidden " />
            <span className="text-[#A117E8] underline pl-3">Tell us more</span>
          </p>
        </div>
      </div>
    </Container>
  );
};
