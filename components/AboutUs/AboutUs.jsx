import React from "react";
import { Container } from "../globals/Container";

export const AboutUs = () => {
  return (
    <Container>
      <div>
        <h1 className="xl:text-[40px] capitalize w-full text-2xl font-medium tracking-[-0.5px] xl:leading-[50px] ">
          about Us
        </h1>
        <div className="md:mt-20 mt-10 md:py-12 py-6 h-auto w-full md:px-16 p-3 rounded-[10px] border-[#5E3D6E] border-[5px]">
          <h1 className="xxl:text-5xl md:text-left text-center md:text-5xl text-3xl font-medium tracking-[-0.5px] leading-[70px] xl:leading-[100px]">
            Welcome To
          </h1>
          <p className="capitalize md:text-left line2 text-center md:py-5 lg:text-2xl md:text-xl text-base font-medium">
            Welcome to CorpConnect, Azerbaijans corporate recruitment hub. Our
            platform, built against the dynamic background of the developing
            corporate sector of Azerbaijan, is not just a point of contact. It
            is the place where aspirations meet opportunities, talent meets
            ambition, and where every successful placement of Azerbaijans
            corporate future is built.
          </p>
        </div>

        <div className="md:mt-20 mt-10 md:py-12 py-6 h-auto w-full md:px-16 p-3 rounded-[10px] border-[#5E3D6E] border-[5px]">
          <h1 className="xxl:text-5xl capitalize md:text-left text-center md:text-5xl text-3xl font-medium tracking-[-0.5px] leading-[70px] xl:leading-[100px]">
            Our missions
          </h1>
          <p className="capitalize md:text-left line2 text-center md:py-5 lg:text-2xl md:text-xl text-base font-medium">
            At CorpConnect, we have embarked on a mission that goes beyond the
            simple. We are not just about connecting job seekers with employers;
            we are building an efficient development path. In the heart of
            Azerbaijan, amidst its rich cultural tapestry and growing corporate
            promises, we envision a future where every professional finds his
            rightful place in the corporate world, contributing not only to his
            personal development, but also to the countrys global aspirations.
            Our mission is to simplify this journey, ensuring that each
            announcement is not just a job change, but a life-changing
            experience, a step toward greater professional achievement and
            fulfillment.
          </p>
        </div>
      </div>
    </Container>
  );
};
