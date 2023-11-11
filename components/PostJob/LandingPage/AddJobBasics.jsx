"use client";
import React, { useState } from "react";
import { Container } from "@/components/globals/Container";
import Image from "next/image";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Link from "next/link";
import { Plus } from "@/components/icons/icons";

export default function AddJobBasics() {
  const [type, setType] = useState();
  const jobType = [
    {
      id: 1,
      text: "Full-time",
    },
    {
      id: 2,
      text: "Part-time",
    },
    {
      id: 3,
      text: "Temporary",
    },
    {
      id: 4,
      text: "Contract",
    },
    {
      id: 5,
      text: "Internship",
    },
    {
      id: 6,
      text: "Fresher",
    },
  ];
  return (
    <Container>
      <div>
        <div className="flex items-center lg:flex-row lg:px-28">
          <h1 className="xl:text-[40px] capitalize w-full text-xl font-medium tracking-[-0.5px] xl:leading-[50px] ">
            Add job basics
          </h1>
          <div className="md:h-[315px] md:w-[581px] w-36">
            <Image
              height={0}
              width={0}
              sizes="100vw"
              src="/avatar2.png"
              alt="avatar"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="md:py-12 py-6 h-auto w-full md:px-5 p-3 rounded-[10px] border-[#5E3D6E] border-[5px]">
          <div className="w-full lg:py-24 py-10">
            <div className="w-full">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={async (values) => {
                  console.log(values);
                }}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form>
                    <div className="md:space-y-14 xl:px-32 md:px-10 px-5 space-y-5">
                      <div className="flex w-full md:space-y-3 flex-col">
                        <label
                          htmlFor="JobTitle"
                          className="md:text-[22px] text-base font-medium"
                        >
                          Job title
                        </label>
                        <Field
                          name="JobTitle"
                          //   placeholder="Your company's name "
                          className={`border-2 placeholder:md:text-[22px] text-base placeholder:text-[#555555] border-[#3E1652] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                            touched.JobTitle && errors.JobTitle
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="JobTitle"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>

                      <div>
                        <h1 className="md:text-[32px] w-full pb-5 text-xl font-medium">
                          Job type*
                        </h1>
                        <div className="md:mt-7 mt-2 grid xl:grid-cols-5 lg:grid-cols-4 grid-cols-2 md:gap-12 gap-6">
                          {jobType?.map((obj, i) => (
                            <button
                              key={obj.id}
                              onClick={() => setType(i)}
                              className={`md:border-[6px] border-[3px] ${
                                type === i ? "text-white bg-[#A117E880]" : ""
                              } rounded-[34px] justify-center items-center flex border-[#6D159A] md:p-5 px-5 py-3`}
                            >
                              <Plus />
                              <p className="md:text-xl whitespace-nowrap text-xs font-medium">
                                {obj.text}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 md:gap-8">
                        <div className="flex w-full  md:space-y-3 flex-col">
                          <label
                            htmlFor="numberOfEmployee"
                            className="md:text-2xl text-base font-medium"
                          >
                            Pay show
                          </label>
                          <Field
                            as="select"
                            name="numberOfEmployee"
                            className={`border-2 placeholder:md:text-[22px] custom-shadow text-base placeholder:text-[#555555] border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                              touched.numberOfEmployee &&
                              errors.numberOfEmployee
                                ? "is-invalid"
                                : ""
                            }`}
                          >
                            <option>Range </option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                          </Field>
                          <ErrorMessage
                            component="div"
                            name="numberOfEmployee"
                            className="text-red-700 font-normal font-base text-left"
                          />
                        </div>

                        <div className="flex w-full md:space-y-3 flex-col">
                          <label
                            htmlFor="minimum"
                            className="md:text-2xl text-base font-medium"
                          >
                            Minimum
                          </label>
                          <Field
                            name="minimum"
                            placeholder="PKR"
                            className={`border-2 placeholder:md:text-[22px] custom-shadow text-base placeholder:text-[#555555] border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                              touched.minimum && errors.minimum
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="minimum"
                            className="text-red-700 font-normal font-base text-left"
                          />
                        </div>

                        <div className="flex w-full md:space-y-3 flex-col">
                          <label
                            htmlFor="maximum"
                            className="md:text-2xl text-base font-medium"
                          >
                            Maximum
                          </label>
                          <Field
                            name="maximum"
                            placeholder="PKR"
                            className={`border-2 placeholder:md:text-[22px] custom-shadow text-base placeholder:text-[#555555] border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                              touched.maximum && errors.maximum
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="maximum"
                            className="text-red-700 font-normal font-base text-left"
                          />
                        </div>

                        <div className="flex w-full  md:space-y-3 flex-col">
                          <label
                            htmlFor="rate"
                            className="md:text-2xl text-base font-medium"
                          >
                            Rate
                          </label>
                          <Field
                            as="select"
                            name="rate"
                            className={`border-2 placeholder:md:text-[22px] custom-shadow text-base placeholder:text-[#555555] border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                              touched.rate && errors.rate ? "is-invalid" : ""
                            }`}
                          >
                            <option>Range </option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                          </Field>
                          <ErrorMessage
                            component="div"
                            name="rate"
                            className="text-red-700 font-normal font-base text-left"
                          />
                        </div>
                      </div>

                      <div className="flex w-full md:space-y-3 flex-col">
                        <label
                          htmlFor="Companydescription"
                          className="md:text-[22px] text-base font-medium"
                        >
                          Where would you like to advertise this job?*
                        </label>
                        <label
                          htmlFor="Companydescription"
                          className="md:text-[20px] text-base font-medium"
                        >
                          Enter your location
                        </label>
                        <Field
                          as="select"
                          name="numberOfEmployee"
                          className={`border-2 placeholder:md:text-[22px] text-base placeholder:text-[#555555] border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                            touched.numberOfEmployee && errors.numberOfEmployee
                              ? "is-invalid"
                              : ""
                          }`}
                        >
                          <option></option>
                          <option value="male">male</option>
                          <option value="female">female</option>
                          <option value="other">other</option>
                        </Field>
                        <ErrorMessage
                          component="div"
                          name="numberOfEmployee"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>
                    </div>

                    <div className="mt-16">
                      <h1 className="md:text-[32px] w-full pb-5 text-xl font-medium">
                        Job description
                      </h1>
                      <div className="relative w-full border-[5px] border-[#5E3D6E] rounded-[10px]">
                        {/* Menu bar */}
                        <div className="md:h-[84px] h-12 flex items-center md:px-7 px-3 top-0 left-0 w-full p-3 bg-[#6F2691]">
                          <div className="md:w-[34px] md:h-10 w-5 h-5">
                            <Image
                              src="/bold.svg"
                              height={0}
                              width={0}
                              sizes="100vw"
                              alt="Background Image"
                              className="w-full h-auto"
                            />
                          </div>
                          <div className="md:w-[66px] md:h-[66px] h-12 w-12">
                            <Image
                              src="/edit.svg"
                              height={0}
                              width={0}
                              sizes="100vw"
                              alt="Background Image"
                              className="w-full h-auto"
                            />
                          </div>
                          <div className="md:w-[47px] h-8 w-8 text-white md:h-[50px]">
                            <Image
                              src="/menu-icon.svg"
                              height={0}
                              width={0}
                              sizes="100vw"
                              alt="Background Image"
                              className="w-full text-white h-auto"
                            />
                          </div>
                        </div>

                        {/* Textarea field */}
                        <div className="relative lg:h-[637px] md:h-[400px] h-[200px]">
                          <div className="absolute h-full w-full flex justify-center items-center">
                            <div className="lg:h-[332px] lg:w-[373px] md:w-[250px] h-[100px] w-[100px] md:h-[250px]">
                              <Image
                                src="/messenger.png"
                                height={0}
                                width={0}
                                sizes="100vw"
                                alt="Background Image"
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                          <div className="absolute">
                            <Field
                              name="Companydescription"
                              as="textarea"
                              cols={150}
                              rows={20}
                              //   placeholder="Company description"
                              className="bg-transparent p-3 text-base resize-none placeholder-[#555555] rounded-[10px] h-full w-full pl-5 outline-none"
                            />
                          </div>

                          <ErrorMessage
                            component="div"
                            name="Companydescription"
                            className="text-red-700 font-normal font-base text-left"
                          />
                        </div>
                      </div>

                      <div className="w-full flex justify-end items-center mt-14">
                        <Link href="/page/review">
                          <button
                            type="submit"
                            // disabled={isSubmitting}
                            className="md:text-[22px] flex cursor-pointer justify-center items-center space-x-3 text-lg font-bold border text-white border-[#45155D] px-[30px] bg-[#6F2691] md:w-[254px] w-[150px] md:h-[70px] h-12 md:mt-3 rounded-[10px]"
                          >
                            <p>Continue</p>
                            <div>
                              <Image
                                height={0}
                                width={0}
                                sizes="100vw"
                                src="/next_arrow.svg"
                                alt="arrow"
                                className="h-full w-full"
                              />
                            </div>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
