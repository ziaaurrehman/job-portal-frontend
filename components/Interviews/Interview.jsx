import React from "react";
// import { Container } from "../globals/Container";
import InterviewCard from "../globals/InterviewCard";

export default function Interview() {
  return (
    // <Container>
    <div className="">
      <h1 className="xl:text-[40px] capitalize w-full md:text-3xl text-2xl font-medium tracking-[-0.5px] xl:leading-[50px]">
        Upcoming interviews
      </h1>
      <p className="md:text-2xl text-lg mt-2 font-medium">
        Scheduled interviews appear here.
      </p>

      <InterviewCard />
    </div>
    // </Container>
  );
}
