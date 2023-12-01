"use client";
import React from "react";
import { Container } from "../globals/Container";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Link from "next/link";
import Image from "next/image";
import NotRegistered from "./NotRegistered";
import { loginUser } from "@/Api";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export const Login = () => {
  // const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <Container>
      <div>
        <h1 className="md:text-[32px] text-2xl font-medium">
          Create Your CorpConnnect Account
        </h1>
        <div className="flex lg:flex-row flex-col xl:gap-28 lg:gap-16 gap-5 md:mt-20 mt-10 space-x-5 xl:space-x-0 h-auto w-full px-10 p-3 rounded-[10px] border-[#5C3E6A] border-[5px]">
          <div className="xl:w-[60%] w-full lg:py-24 py-10">
            <div className="xl:w-[630px] w-full">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={async (values) => {
                  try {
                    const res = await loginUser(values);
                    if (res?.status === 200) {
                      Swal.fire({
                        width: "20em",
                        position: "center",
                        icon: "success",
                        title: "Signed in successfully",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      router.push(`/`);
                    }
                  } catch (error) {
                    Swal.fire({
                      width: "20em",
                      title: `${error?.data?.message}`,
                      showClass: {
                        popup: "animate__animated animate__fadeInDown",
                      },
                      hideClass: {
                        popup: "animate__animated animate__fadeOutUp",
                      },
                    });
                  }
                }}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form>
                    <div className="flex flex-col">
                      <Field
                        name="email"
                        placeholder="Email Address"
                        className={`border-2 placeholder:text-[22px] placeholder:text-[#555555] border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-14 pl-5 outline-none  ${
                          touched.email && errors.email ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="email"
                        className="text-red-700 font-normal font-base text-left"
                      />
                    </div>
                    <div className="flex flex-col md:mt-8 mt-4">
                      <Field
                        // type={showPassword ? "text" : "password"}
                        type="password"
                        name="password"
                        placeholder="Password"
                        className={`border-2 placeholder:text-[22px] placeholder:text-[#555555] border-[#521572] bg-white rounded-[10px]  mt-1 md:h-[70px] h-14 pl-5 outline-none  ${
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

                    <Link href="/forget-password">
                      <div className="md:my-10 my-5 pt-5 flex justify-start items-center">
                        <p className="font-normal md:text-[22px] text-lg">
                          Forgot Password?
                        </p>
                      </div>
                    </Link>
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

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="md:text-[22px] text-lg hover:border-[#6F2691] hover:bg-transparent hover:text-[#6F2691] font-bold border text-white border-[#45155D] px-[30px] bg-[#6F2691] md:py-5 py-2 md:mt-3 rounded-[10px]"
                    >
                      Login
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="md:mt-10 md:flex-row flex-col mt-5 flex md:space-x-5 md:items-center">
              <p className="font-normal md:text-[22px] text-xl text-[#000000B2]">
                Create account with
              </p>
              <div className="flex mt-5 md:mt-0 space-x-5">
                <div className="md:w-[70px] md:h-[70px] h-[50px] w-[50px]">
                  <Image
                    height={0}
                    width={0}
                    sizes="100vw"
                    src="/google.svg"
                    alt="google"
                    className="h-full w-full"
                  />
                </div>
                <div className="md:w-[70px] md:h-[70px] h-[50px] w-[50px]">
                  <Image
                    height={0}
                    width={0}
                    sizes="100vw"
                    src="/Facebook-blue.svg"
                    alt="google"
                    className="h-full w-full"
                  />
                </div>
                <div className="md:w-[70px] md:h-[70px] h-[50px] w-[50px]">
                  <Image
                    height={0}
                    width={0}
                    sizes="100vw"
                    src="/linkedin.svg"
                    alt="google"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-[40%] w-full lg:py-10 md:py-10 py-5">
            <NotRegistered />
          </div>
        </div>
      </div>
    </Container>
  );
};
