import React from "react";
import { Container } from "../globals/Container";
import { SearchJobCard } from "../globals/SearchJobCard";

export const SearchJobs = () => {
  const data = [
    {
      id: 1,
      title: "Job Title",
      img: "/search1.svg",
      location: "Full Time/Permanent - Company / Location",
      desc: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.",
    },
    {
      id: 2,
      title: "Job Title",
      img: "/search2.svg",
      location: "Full Time/Permanent - Company / Location",
      desc: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.",
    },
    {
      id: 3,
      title: "Job Title",
      img: "/search3.svg",
      location: "Full Time/Permanent - Company / Location",
      desc: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.",
    },
    {
      id: 4,
      title: "Job Title",
      img: "/search4.svg",
      location: "Full Time/Permanent - Company / Location",
      desc: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.",
    },
  ];
  return (
    <Container>
      <div className="w-full">
        <h1 className="xl:text-[40px] capitalize w-full text-2xl font-medium tracking-[-0.5px] xl:leading-[50px]">
          search jobs
        </h1>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 md:mt-20 mt-10  gap-x-3 gap-y-5 xl:gap-y-10">
          <input
            type="text"
            placeholder="Keywords/job title"
            className="w-full xl:h-[60px] h-12 outline-none border-[2px] border-[#451A5B] pl-4 placeholder:text-[22px] placeholder:font-bold placeholder:text-[#2D2F30] rounded-[10px]"
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full xl:h-[60px] h-12 outline-none border-[2px] border-[#451A5B] pl-4 placeholder:text-[22px] placeholder:font-bold placeholder:text-[#2D2F30] rounded-[10px]"
          />
          <input
            type="text"
            placeholder="Distance"
            className="xl:h-[60px] h-12 outline-none border-[2px] border-[#451A5B] pl-4 placeholder:text-[22px] placeholder:font-bold placeholder:text-[#2D2F30] rounded-[10px]"
          />
          <button className="xl:w-[203px] xl:h-[60px] h-12 outline-none border-[2px] border-[#451A5B] text-[22px] font-bold bg-white text-[#2D2F30] rounded-[10px]">
            Find jobs
          </button>
          <button className="md:w-[230px] w-full h-12 outline-none border-[2px] border-[#451A5B] text-xl font-bold bg-transparent rounded-[10px]">
            Advanced filters
          </button>
        </div>
      </div>
      <div className="mt-10">
        {data.map((obj, _) => (
          <div key={obj.id}>
            <SearchJobCard data={obj} />
          </div>
        ))}
      </div>
    </Container>
  );
};
