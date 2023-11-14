"use client";
import React, { useState } from "react";
import { Container } from "../globals/Container";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Image from "next/image";
import Link from "next/link";

export const Apply = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  return (
    <Container>
      <div>
        <h1 className="md:text-[32px] w-full md:text-left text-center pb-1 text-xl font-semibold">
          Apply
        </h1>
        <div className="flex lg:flex-row flex-col xl:gap-28 lg:gap-16 gap-5 md:mt-16 mt-10 space-x-5 xl:space-x-0 h-auto w-full px-10 p-3 rounded-[10px] border-[#5C3E6A] border-[5px]">
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
                    <div className="md:space-y-14 space-y-5">
                      <div className="flex md:flex-row flex-col xl:space-x-32 lg:space-x-24 md:space-x-14 md:space-y-0 space-y-5">
                        <div className="flex w-full flex-col">
                          <Field
                            name="email"
                            placeholder="Job Title"
                            className={`border-2 placeholder:md:text-[22px] text-base placeholder:text-black border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
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
                          <Field
                            name="password"
                            placeholder="Company"
                            className={`border-2 placeholder:md:text-[22px] text-base placeholder:text-black border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                              touched.password && errors.password
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="password"
                            className="text-red-700 font-normal font-base text-left"
                          />
                        </div>
                      </div>

                      <div className="flex md:flex-row flex-col xl:space-x-32 lg:space-x-24 md:space-x-14 md:space-y-0 space-y-5">
                        <div className="flex w-full flex-col">
                          <Field
                            name="email"
                            placeholder="Email"
                            className={`border-2 placeholder:md:text-[22px] text-base placeholder:text-black border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
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
                            className={`border-2 placeholder:md:text-[22px] text-base placeholder:text-black border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 px-5 outline-none ${
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
                                  <span className="md:text-[22px] text-base font-normal">
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
                                  <span className="md:text-[22px] text-base font-normal">
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
                      </div>

                      <div className="flex md:flex-row flex-col xl:space-x-32 lg:space-x-24 md:space-x-14 md:space-y-0 space-y-5">
                        <div className="flex w-full flex-col">
                          <Field
                            name="password"
                            placeholder="Phone Number"
                            className={`border-2 placeholder:md:text-[22px] text-base placeholder:text-black border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                              touched.password && errors.password
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="password"
                            className="text-red-700 font-normal font-base text-left"
                          />
                        </div>
                        <div className="flex w-full flex-col">
                          <Field
                            as="select"
                            name="gender"
                            className={`border-2 placeholder:md:text-[22px] text-base placeholder:text-black border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                              touched.password && errors.password
                                ? "is-invalid"
                                : ""
                            }`}
                          >
                            <option>Select</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                          </Field>
                          <ErrorMessage
                            component="div"
                            name="gender"
                            className="text-red-700 font-normal font-base text-left"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex justify-center items-center mt-14">
                      <Link href="/page/review-application">
                        <button
                          type="submit"
                          // disabled={isSubmitting}
                          className="md:text-[22px] text-lg font-bold border text-white border-[#45155D] px-[30px] bg-[#6F2691] md:w-[254px] w-[150px] md:h-[70px] h-12 md:mt-3 rounded-[10px]"
                        >
                          Continue
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
};
