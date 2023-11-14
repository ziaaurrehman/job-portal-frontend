import React from "react";
// import { Container } from "../globals/Container";
import AppliedCard from "../globals/AppliedCard";

export default function AppliedJobs() {
  return (
    // <Container>
      <div className="applied-bg">
        <h1 className="xl:text-[40px] capitalize w-full text-2xl font-semibold underline tracking-[-0.5px] xl:leading-[50px] ">
          Last 12 days
        </h1>

        <AppliedCard />
      </div>
    // </Container>
  );
}
