"use client";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Container } from "../globals/Container";
import Image from "next/image";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const EIGHTEEN_YEARS_IN_MS = 18 * 365.25 * 24 * 60 * 60 * 1000; // accounting for leap years
const minimumDate = new Date(1900, 0, 1); // January 1, 1900

// const profileSchema = Yup.object().shape({
//   name: Yup.string()
//     .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces")
//     .label("name"),

//   email: Yup.string().matches(emailRegex, "Invalid email format"),
//   DOB: Yup.date()
//     .max(
//       new Date(Date.now() - EIGHTEEN_YEARS_IN_MS),
//       "You must be at least 18 years"
//     )
//     .min(minimumDate, "Date of birth cannot be before January 1, 1900")
//     .nullable(),
// });

export default function Profile() {
  const [data, setData] = useState();
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  //   const { user } = useUserContext();
  //   useEffect(() => {
  //     getSingleUserData();
  //     // eslint-disable-next-line
  //   }, []);

  //   const getSingleUserData = async () => {
  //     const res = await findUserById(user?.userId);
  //     if (res?.data?.success) {
  //       setData(res?.data?.user);
  //     }
  //   };

  const handlefile = (event) => {
    setFile(event.target.files[0]);
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleFormData = (values) => {
    var formData = new FormData();
    formData.append("name", values?.name);
    if (!!file) formData.append("filename", file);
    formData.append("email", values?.email);
    formData.append("DOB", values?.DOB);
    return formData;
  };

  //   const handleProfilePic = async () => {
  //     const res = await deleteProfilePicture(user?.userId);
  //     if (res?.data?.success) {
  //       const userData = {
  //         ...JSON.parse(localStorage.getItem("user")),
  //         filename: "",
  //       };
  //       localStorage.setItem("user", JSON.stringify(userData));
  //       window.location.reload();
  //     }
  //   };
  return (
    <Container>
      <div className="w-full lg:px-10 border-[#5C3E6A] border-[5px] rounded-[10px] py-5 md:px-5">
        <div className="mt-4 text-[14px] text-[#666666] ">
          <Formik
            //   validationSchema={profileSchema}
            initialValues={{
              name: `${data?.name ? data?.name : ""}`,
              email: `${data?.email ? data?.email : ""}`,
              DOB: `${data?.DOB ? data?.DOB : ""}`,
              oldPassword: "",
              new_password: "",
            }}
            onSubmit={async (values) => {
              console.log(values);
              // try {
              //   const res = await EditUserProfileById(
              //     user?.userId,
              //     handleFormData(values)
              //   );
              //   const userData = {
              //     ...JSON.parse(localStorage.getItem("user")),
              //     name: res?.data?.user?.name,
              //     email: res?.data?.user?.email,
              //     DOB: res?.data?.user?.DOB,
              //     filename: res?.data?.user?.filename,
              //   };
              //   if (res?.data?.success) {
              //     localStorage.setItem("user", JSON.stringify(userData));
              //     window.location.reload();
              //     Swal.fire({
              //       width: "20em",
              //       height: "20em",
              //       position: "center",
              //       icon: "success",
              //       text: `${res?.data?.message}`,
              //       showConfirmButton: false,
              //       timer: 1500,
              //     });
              //   } else {
              //     Swal.fire({
              //       width: "20em",
              //       height: "20em",
              //       position: "center",
              //       icon: "error",
              //       text: `Something wents wrong!`,
              //     });
              //   }
              // } catch (error) {
              //   console.log(error?.message);
              // }
            }}
            enableReinitialize
          >
            {({ isSubmitting, errors, touched, values }) => (
              <Form>
                <div className="h-[200px] w-full flex justify-center  items-center my-3">
                  <div className="h-[180px] w-[180px] rounded-full border">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src="/profile-dummy.jpg"
                      alt="profile"
                      className="w-full rounded-full h-full"
                    />
                  </div>
                </div>
                <div className="flex lg:flex-row md:flex-row flex-col gap-x-8 lg:px-0 md:px-0 px-9">
                  <div className="flex w-full flex-col py-3 ">
                    <label
                      htmlFor="name"
                      className="text-[#7A7A79] md:text-lg text-base"
                    >
                      Name
                    </label>
                    <Field
                      name="name"
                      placeholder="Enter Name"
                      className={`border border-1 border-[#B8B7B6] rounded mt-1 h-[50px] pl-2 outline-none  ${
                        touched.name && errors.name ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="name"
                      className="text-red-700 font-normal font-base text-left"
                    />
                  </div>

                  <div className="flex w-full flex-col mt-3">
                    <label
                      htmlFor="email"
                      className="text-[#7A7A79] md:text-lg text-base"
                    >
                      Email(read only)
                    </label>
                    <Field
                      name="email"
                      disabled={true}
                      placeholder="someone@example.com"
                      className={`border border-1 border-[#B8B7B6] rounded mt-1 h-[50px] pl-2 outline-none  ${
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

                <div className="flex lg:flex-row md:flex-row flex-col gap-x-8 lg:px-0 md:px-0 px-9">
                  <div className="flex w-full flex-col mt-3 py-3">
                    <label
                      htmlFor="licensekey"
                      className="text-[#7A7A79] md:text-lg text-base"
                    >
                      Upload Profile Pic
                      {/* ( .Jpg, .png, .jpeg; Size&lt;5 MB) */}
                    </label>
                    <Field
                      name="filename"
                      className="flex justify-center items-center"
                    >
                      {({ field }) => (
                        <input
                          type="file"
                          accept="image/*"
                          {...field}
                          className="border h-[50px] border-1 border-[#B8B7B6] rounded mt-1"
                          // onChange={(e) => handlefile(e)}
                        />
                      )}
                    </Field>
                  </div>

                  <div className="flex w-full flex-col mt-3 py-3">
                    <label
                      htmlFor="DOB"
                      className="text-[#7A7A79] md:text-lg text-base"
                    >
                      Date of Birth
                    </label>
                    <Field
                      name="DOB"
                      value={values?.DOB}
                      type="date"
                      className={`border text-[#11141C] border-1 border-[#B8B7B6] rounded mt-1 h-[50px] pl-2 outline-none  ${
                        touched.DOB && errors.DOB ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="DOB"
                      className="text-red-700 font-normal font-base text-left"
                    />
                  </div>
                </div>
                <div className="flex justify-center gap-x-5 items-end h-14 rounded-lg">
                  <button
                    type="button"
                    className="w-[88px] h-[50px] rounded-md border text-xs font-normal"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-[102px] h-[50px] rounded-md border text-white bg-[#6F2691] text-xs font-normal"
                  >
                    Save Changes
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          {/* <ResetPassword /> */}
        </div>
      </div>
    </Container>
  );
}
