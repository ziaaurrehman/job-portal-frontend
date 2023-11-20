"use client";
import React, { useState } from "react";
import { Container } from "@/components/globals/Container";
import Image from "next/image";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Link from "next/link";
import { ArrowIcon, NextArrow } from "@/components/icons/icons";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  return (
    <Container>
      <div>
        <div className="flex items-center lg:flex-row lg:px-28">
          <h1 className="xl:text-[40px] capitalize w-full text-xl font-medium tracking-[-0.5px] xl:leading-[50px] ">
            Create an employer <br /> account
          </h1>
          <div className="lg:h-[341px] lg:w-[402px]">
            <Image
              height={0}
              width={0}
              sizes="100vw"
              src="/avatar1.png"
              alt="avatar"
              className="h-full w-full"
            />
          </div>
        </div>
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
                      <div className="flex w-full md:space-y-3 flex-col">
                        <label
                          htmlFor="companyName"
                          className="md:text-[22px] text-base font-medium"
                        >
                          Your companys name
                        </label>
                        <Field
                          name="companyName"
                          placeholder="Your company's name "
                          className={`border-2 placeholder:md:text-[22px] text-base placeholder:text-[#555555] border-[#3E1652] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                            touched.companyName && errors.companyName
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="companyName"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>

                      <div className="flex w-full md:space-y-3 flex-col">
                        <label
                          htmlFor="numberOfEmployee"
                          className="md:text-[22px] text-base font-medium"
                        >
                          Your companys number of employees
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
                          <option>Your companys number of employees </option>
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
                          htmlFor="fullName"
                          className="md:text-[22px] text-base font-medium"
                        >
                          Your full name
                        </label>
                        <Field
                          name="fullName"
                          placeholder=" Your full name"
                          className={`border-2 placeholder:md:text-[22px] text-base placeholder:text-[#555555] border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                            touched.fullName && errors.fullName
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="fullName"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>

                      <div className="flex w-full md:space-y-3 flex-col">
                        <label
                          htmlFor="companyEmail"
                          className="md:text-[22px] text-base font-medium"
                        >
                          Company email
                        </label>
                        <Field
                          name="companyEmail"
                          placeholder="Company email"
                          className={`border-2 placeholder:md:text-[22px] text-base placeholder:text-[#555555] border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                            touched.companyEmail && errors.companyEmail
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="companyEmail"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>

                      <div className="flex w-full md:space-y-3 flex-col">
                        <label
                          htmlFor="companyPhoneNumber"
                          className="md:text-[22px] text-base font-medium"
                        >
                          Your company phone number
                        </label>
                        <Field
                          name="companyPhoneNumber"
                          placeholder="Phone Number"
                          className={`border-2 placeholder:md:text-[22px] text-base placeholder:text-[#555555] border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                            touched.companyPhoneNumber &&
                            errors.companyPhoneNumber
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="companyPhoneNumber"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>

                      <div className="flex w-full md:space-y-3 flex-col">
                        <label
                          htmlFor="industry"
                          className="md:text-[22px] text-base font-medium"
                        >
                          Companys industry
                        </label>
                        <Field
                          as="select"
                          name="industry"
                          className={`border-2 placeholder:md:text-[22px] text-base placeholder:text-[#555555] border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
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

                      <div className="flex w-full md:space-y-3 flex-col">
                        <label
                          htmlFor="Companydescription"
                          className="md:text-[22px] text-base font-medium"
                        >
                          Company description
                        </label>
                        <label
                          htmlFor="Companydescription"
                          className="md:text-[20px] text-base font-medium"
                        >
                          Introduce your company to people in a few lines.
                        </label>
                        <Field
                          name="Companydescription"
                          as="textarea"
                          placeholder="Company description"
                          className={`border-2 placeholder:md:text-[22px] p-3 text-base resize-none placeholder:text-[#555555] border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[168px] h-20 pl-5 outline-none  ${
                            touched.Companydescription &&
                            errors.Companydescription
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="Companydescription"
                          className="text-red-700 font-normal font-base text-left"
                        />
                      </div>

                      <div className="flex w-full md:space-y-3 flex-col">
                        <label
                          htmlFor="companyPhoneNumber"
                          className="md:text-[22px] text-base font-medium"
                        >
                          Upload your company logo
                        </label>
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
                              <div className="flex justify-end items-center h-full">
                                {/* <span className="md:text-[20px] text-base font-medium">
                                  Upload resume
                                </span> */}

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

                    <div className="w-full flex justify-end items-center mt-14">
                      <Link href="/page/add-job-basic">
                        <button
                          type="submit"
                          // disabled={isSubmitting}
                          className="md:text-[22px] hover:border-[#6F2691] hover:bg-transparent hover:text-[#6F2691] flex justify-center items-center space-x-3 text-lg font-bold border text-white border-[#45155D] px-[30px] bg-[#6F2691] md:w-[254px] w-[150px] md:h-[70px] h-12 md:mt-3 rounded-[10px]"
                        >
                          <p>Continue</p>
                          <NextArrow />
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
