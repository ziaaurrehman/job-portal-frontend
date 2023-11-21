import AllCandidates from "@/components/AllCandidates/AllCandidates";
import CandidateInfo from "@/components/AllCandidates/CandidateInfo";
import CandidateStatus from "@/components/AllCandidates/CandidateStatus";
import React from "react";

export default function page() {
  return (
    <div className="flex lg:flex-row flex-col">
      <AllCandidates />
      <CandidateInfo />
      <CandidateStatus />
    </div>
  );
}
