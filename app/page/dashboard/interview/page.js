import AllCandidates from "@/components/AllCandidates/AllCandidates";
import CandidateInfo from "@/components/AllCandidates/CandidateInfo";
import CandidateStatus from "@/components/AllCandidates/CandidateStatus";
import Interview from "@/components/Interviews/Interview";
import InterviewDetails from "@/components/globals/InterviewDetails";
import JobCard from "@/components/globals/JobCard";
import NoApplicants from "@/components/globals/NoApplicants";
import NoInterview from "@/components/globals/NoInterview";
import React from "react";

export default function page() {
  return (
    <div>
      {/* <Interview /> */}
      {/* <NoApplicants /> */}
      {/* <JobCard /> */}
      {/* <InterviewDetails /> */}
      {/* <NoInterview /> */}
      <div className="flex lg:flex-row flex-col">
        <AllCandidates />
        <CandidateInfo />
        <CandidateStatus />
      </div>
    </div>
  );
}
