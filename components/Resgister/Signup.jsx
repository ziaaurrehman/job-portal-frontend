"use client";
import React from "react";
import { Container } from "../globals/Container";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Link from "next/link";

export const Signup = () => {
  // const [showPassword, setShowPassword] = useState(false);
  return (
    <Container>
      <div>
        <h1 className="md:text-[32px] text-2xl font-medium">
          Create Your CorpConnnect Account
        </h1>
        <div className="flex lg:flex-row flex-col xl:gap-28 lg:gap-16 gap-5 md:mt-20 mt-10 space-x-5 xl:space-x-0 h-auto w-full px-10 p-3 rounded-[10px] border-[#5C3E6A] border-[5px]">
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
                            placeholder="First Name"
                            className={`border-2 placeholder:text-[22px] placeholder:text-[#555555] border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
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
                            // type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Last Name"
                            className={`border-2 placeholder:text-[22px] placeholder:text-[#555555] border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
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
                            placeholder="Email Address"
                            className={`border-2 placeholder:text-[22px] placeholder:text-[#555555] border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
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
                            name="email"
                            placeholder="Job Title"
                            className={`border-2 placeholder:text-[22px] placeholder:text-[#555555] border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
                              touched.email && errors.email ? "is-invalid" : ""
                            }`}
                          />
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
                            // type={showPassword ? "text" : "password"}
                            type="password"
                            name="password"
                            placeholder="Password"
                            className={`border-2 placeholder:text-[22px] placeholder:text-[#555555] border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
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
                            // type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Last Name"
                            className={`border-2 placeholder:text-[22px] placeholder:text-[#555555] border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-12 pl-5 outline-none  ${
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
                    </div>

                    {/* <div className="flex items-center mr-4 mt-3">
                    <input
                      id="inline-checkbox"
                      type="checkbox"
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                      className="w-4 h-4 bg-gray-100 border-gray-300 shadow-none rounded dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="inline-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Show Password
                    </label>
                  </div> */}
                    <div className="w-full flex justify-center items-center mt-14">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="md:text-[22px] text-lg font-bold border text-white border-[#45155D] px-[30px] bg-[#6F2691] md:w-[254px] w-[150px] md:h-[70px] h-12 md:mt-3 rounded-[10px]"
                      >
                        Register
                      </button>
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
