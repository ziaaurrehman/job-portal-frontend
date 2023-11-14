"use client";
import React, { useState } from "react";
import { Container } from "@/components/globals/Container";
import Image from "next/image";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Link from "next/link";

export default function CreateAccount() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  return (
    <Container>
      <div>
        <h1 className="xl:text-[45px] capitalize w-full text-xl md:py-10 py-5 font-semibold tracking-[-0.5px] xl:leading-[50px] ">
          Create an account
        </h1>

        <div className="md:py-12 py-6 h-auto w-full md:px-16 p-3 rounded-[10px] border-[#5E3D6E] border-[5px]">
          <div className="w-full lg:py-24 xl:px-32 md:px-10 px-5 py-10">
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
                    <div className="md:space-y-14 space-y-5">
                      <div className="flex lg:flex-row lg:space-y-0 md:space-y-14 space-y-5 flex-col xl:space-x-40 lg:space-x-24">
                        <div className="flex w-full flex-col">
                          <label
                            htmlFor="firstName"
                            className="md:text-[26px] text-base font-semibold"
                          >
                            First Name
                          </label>
                          <Field
                            name="firstName"
                            placeholder="First Name"
                            className={`border-2 placeholder:md:text-2xl text-base placeholder:text-[#858585] border-[#3E1652] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                              touched.firstName && errors.firstName
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="firstName"
                            className="text-red-700 font-normal font-base text-left"
                          />
                        </div>
                        <div className="flex w-full flex-col">
                          <label
                            htmlFor="lastName"
                            className="md:text-[26px] text-base font-semibold"
                          >
                            Last Name
                          </label>
                          <Field
                            name="lastName"
                            placeholder="First Name"
                            className={`border-2 placeholder:md:text-2xl text-base placeholder:text-[#858585] border-[#3E1652] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                              touched.lastName && errors.lastName
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="lastName"
                            className="text-red-700 font-normal font-base text-left"
                          />
                        </div>
                      </div>

                      <div className="flex w-full flex-col">
                        <label
                          htmlFor="email"
                          className="md:text-[26px] text-base font-semibold"
                        >
                          Email
                        </label>
                        <Field
                          name="email"
                          placeholder="Email"
                          className={`border-2 placeholder:md:text-2xl text-base placeholder:text-[#858585] border-[#3E1652] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                            touched.email && errors.email ? "is-invalid" : ""
                          }`}
                        />

                        <ErrorMessage
                          component="div"
                          name="email"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>

                      <div className="flex w-full flex-col">
                        <label
                          htmlFor="address"
                          className="md:text-[26px] text-base font-semibold"
                        >
                          Address
                        </label>
                        <Field
                          name="address"
                          placeholder="Address"
                          className={`border-2 placeholder:md:text-2xl text-base placeholder:text-[#858585] border-[#3E1652] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                            touched.address && errors.address
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="address"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>

                      <div className="flex w-full flex-col">
                        <label
                          htmlFor="contactNumber"
                          className="md:text-[26px] text-base font-semibold"
                        >
                          Contact Number
                        </label>
                        <Field
                          name="contactNumber"
                          placeholder="Contact Number"
                          className={`border-2 placeholder:md:text-2xl text-base placeholder:text-[#858585] border-[#3E1652] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                            touched.contactNumber && errors.contactNumber
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="contactNumber"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>

                      <div className="flex lg:flex-row lg:space-y-0 space-y-5 flex-col xl:space-x-40 lg:space-x-24">
                        <div className="flex w-full flex-col">
                          <label
                            htmlFor="city"
                            className="md:text-[26px] text-base font-semibold"
                          >
                            City
                          </label>
                          <Field
                            as="select"
                            name="city"
                            className={`border-2 placeholder:md:text-2xl text-base placeholder:text-[#858585] border-[#3E1652] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                              touched.city && errors.city ? "is-invalid" : ""
                            }`}
                          >
                            <option>Select an options </option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                          </Field>
                          <ErrorMessage
                            component="div"
                            name="city"
                            className="text-red-700 font-normal font-base text-left"
                          />
                        </div>

                        <div className="flex w-full flex-col">
                          <label
                            htmlFor="state"
                            className="md:text-[26px] text-base font-semibold"
                          >
                            State
                          </label>
                          <Field
                            as="select"
                            name="state"
                            className={`border-2 placeholder:md:text-2xl text-base placeholder:text-[#858585] border-[#3E1652] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                              touched.state && errors.state ? "is-invalid" : ""
                            }`}
                          >
                            <option>Select an options </option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                          </Field>
                          <ErrorMessage
                            component="div"
                            name="state"
                            className="text-red-700 font-normal font-base text-left"
                          />
                        </div>
                      </div>

                      <div className="flex w-full flex-col">
                        <label
                          htmlFor="educationalDetail"
                          className="md:text-[26px] text-base font-semibold"
                        >
                          Educational Detail
                        </label>
                        <Field
                          name="educationalDetail"
                          placeholder="Educational Detail"
                          className={`border-2 placeholder:md:text-2xl text-base placeholder:text-[#858585] border-[#3E1652] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                            touched.educationalDetail &&
                            errors.educationalDetail
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="educationalDetail"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>

                      <div className="flex w-full flex-col">
                        <label
                          htmlFor="jobExperience"
                          className="md:text-[26px] text-base font-semibold"
                        >
                          Job Experience
                        </label>
                        <Field
                          name="jobExperience"
                          placeholder="Job Experience"
                          className={`border-2 placeholder:md:text-2xl text-base placeholder:text-[#858585] border-[#3E1652] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                            touched.jobExperience && errors.jobExperience
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="jobExperience"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>

                      <div className="flex w-full flex-col">
                        <label
                          htmlFor="companyPhoneNumber"
                          className="md:text-[26px] text-base font-semibold"
                        >
                          Upload resume
                        </label>
                        <label
                          className={`border-2 placeholder:md:text-2xl text-base placeholder:text-black border-[#3E1652] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 px-5 outline-none ${
                            touched.email && errors.email ? "is-invalid" : ""
                          }`}
                        >
                          <input
                            type="file"
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                          />
                          <div className="custom-upload h-full">
                            {selectedFile ? (
                              <div className="flex justify-between items-center h-full">
                                <span className="md:text-[26px] text-base font-normal">
                                  {selectedFile.name}
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-check-circle"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 11a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v4.5a.5.5 0 0 0 .5.5zM7 5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-1 0v.5a.5.5 0 0 0 .5.5z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M7.354 10.354a.5.5 0 0 0 .792 0l3-3a.5.5 0 1 0-.792-.792L7 9.207 5.146 7.354a.5.5 0 1 0-.792.792l2.5 2.5z"
                                  />
                                </svg>
                              </div>
                            ) : (
                              <div className="flex justify-between items-center h-full">
                                <span className="md:text-2xl text-[#858585] text-base font-normal">
                                  Upload resume
                                </span>

                                <div className="md:h-10 md:w-10">
                                  <Image
                                    height={0}
                                    width={0}
                                    sizes="1000vw"
                                    src="/Clip.svg"
                                    alt="attachment"
                                    className="h-full w-full"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </label>
                        <ErrorMessage
                          component="div"
                          name="email"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>

                      <div className="flex w-full flex-col">
                        <label
                          htmlFor="relevantJob"
                          className="md:text-[26px] text-base font-semibold"
                        >
                          Relevant job
                        </label>
                        <Field
                          name="relevantJob"
                          placeholder="Relevant job"
                          className={`border-2 placeholder:md:text-2xl text-base placeholder:text-[#858585] border-[#3E1652] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                            touched.relevantJob && errors.relevantJob
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="relevantJob"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>

                      <div className="flex w-full flex-col">
                        <label
                          htmlFor="industry"
                          className="md:text-[26px] text-base font-semibold"
                        >
                          Industry
                        </label>
                        <Field
                          as="select"
                          name="industry"
                          className={`border-2 placeholder:md:text-2xl text-base placeholder:text-[#858585] border-[#3E1652] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                            touched.industry && errors.industry
                              ? "is-invalid"
                              : ""
                          }`}
                        >
                          <option>Select an options </option>
                          <option value="male">male</option>
                          <option value="female">female</option>
                          <option value="other">other</option>
                        </Field>
                        <ErrorMessage
                          component="div"
                          name="industry"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>

                      <div className="flex w-full flex-col">
                        <label
                          htmlFor="reference"
                          className="md:text-[26px] text-base font-semibold"
                        >
                          Reference
                        </label>
                        <Field
                          name="reference"
                          placeholder="Reference"
                          className={`border-2 placeholder:md:text-2xl text-base placeholder:text-[#858585] border-[#3E1652] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                            touched.reference && errors.reference
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="reference"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>
                    </div>

                    <div className="w-full flex justify-end items-center mt-14">
                      <Link href="/page/add-job-basic">
                        <button
                          type="submit"
                          // disabled={isSubmitting}
                          className="md:text-[26px] flex justify-center items-center space-x-3 text-lg font-bold border text-white border-[#45155D] px-[30px] bg-[#6F2691] md:w-[254px] w-[150px] md:h-[70px] h-12 md:mt-3 rounded-[10px]"
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
