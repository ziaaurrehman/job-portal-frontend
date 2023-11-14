import AppliedJobs from "@/components/AppliedJobs/AppliedJobs";
import CreateAccount from "@/components/CreateAccount/CreateAccount";
import { Advantagies } from "@/components/Homepage/Advantages/Advantagies";
import { Career } from "@/components/Homepage/Career/Career";
import { NextStep } from "@/components/Homepage/NextStep/NextStep";
import Interview from "@/components/Interviews/Interview";
import CandidateCard from "@/components/globals/CandidateCard";
import JobCard from "@/components/globals/JobCard";

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
    </>
  );
}
