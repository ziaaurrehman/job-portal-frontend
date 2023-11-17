import AppliedJobs from "@/components/AppliedJobs/AppliedJobs";
import CreateAccount from "@/components/CreateAccount/CreateAccount";
import { Advantagies } from "@/components/Homepage/Advantages/Advantagies";
import { Career } from "@/components/Homepage/Career/Career";
import { NextStep } from "@/components/Homepage/NextStep/NextStep";
import Interview from "@/components/Interviews/Interview";
import CandidateCard from "@/components/globals/CandidateCard";
import Filter from "@/components/globals/Filter";
import JobCard from "@/components/globals/JobCard";
import SlickSlider from "@/components/globals/Slider/Slider";
// import Slider from "@/components/globals/Slider/Slider";
export default function Page() {
  return (
    <>
      <NextStep />
      <Career />
      <Advantagies />
      {/* <CreateAccount /> */}
      {/* <AppliedJobs /> */}
      {/* <Interview /> */}
      {/* <JobCard /> */}
      {/* <CandidateCard /> */}
      {/* <Filter /> */}
      {/* <SlickSlider /> */}
    </>
  );
}
