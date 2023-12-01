"use client";
// components/SlickSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import React, { Component } from "react";
// import Slider from "react-slick";

export default function SlickSlider() {
  const NextArrow = (props) => (
    <div
      {...props}
      className="slick-arrow slick-next"
      style={{ border: "1px solid black" }}
    >
      {/* <h1 className="text-black">next</h1> */}
    </div>
  );
  const PrevArrow = (props) => (
    <div
      {...props}
      className="slick-arrow slick-prev"
      style={{ border: "1px solid black" }}
    >
      Prev
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    slickNext: <NextArrow />,
    slickPrev: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1282,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full lg:ml-10 px-5 md:px-0  mx-auto">
      <Slider {...settings}>
        <div className="w-full mt-3 relative cursor-pointer">
          <div className="group w-[85%]">
            <p className="md:text-xl whitespace-nowrap truncate text-base font-medium leading-8">
              514Awaiting Review
            </p>
            <hr className="border-[3px] rounded border-[#A117E8] cursor-pointe transition-all duration-500 invisible group-hover:visible" />
          </div>
        </div>
        <div className="w-full mt-3 relative cursor-pointer">
          <div className="group w-[80%]">
            <p className="md:text-xl whitespace-nowrap text-base font-medium leading-8">
              8 Reviewed
            </p>
            <hr className="border-[3px] rounded border-[#A117E8] cursor-pointe transition-all duration-500 invisible group-hover:visible" />
          </div>
        </div>
        <div className="w-full mt-3 relative cursor-pointer">
          <div className="group w-[80%]">
            <p className="md:text-xl whitespace-nowrap text-base font-medium leading-8">
              41Rejecting
            </p>
            <hr className="border-[3px] rounded border-[#A117E8] cursor-pointe transition-all duration-500 invisible group-hover:visible" />
          </div>
        </div>
        <div className="w-full mt-3 relative cursor-pointer">
          <div className="group w-[50%]">
            <p className="md:text-xl whitespace-nowrap text-base font-medium leading-8">
              0 Hired
            </p>
            <hr className="border-[3px] rounded border-[#A117E8] cursor-pointe transition-all duration-500 invisible group-hover:visible" />
          </div>
        </div>
      </Slider>
    </div>
  );
}
