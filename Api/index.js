import instance from "axios";
import Swal from "sweetalert2";

const axios = instance.create({
  baseURL: "http://localhost:5050/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token) => {
  if (token) {
    //applying token
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    //deleting the token from header
    delete axios.defaults.headers.common["Authorization"];
  }
};

axios.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user?.token}`;
      return config;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const signupUser = async (form) => {
  try {
    const res = await axios.post(`/signup`, form);
    return res;
  } catch (error) {
    Swal.fire({
      width: "20em",
      position: "center",
      icon: "error",
      title: "Sorry...",
      text: `${error?.response?.data?.message}`,
    });
    return error;
  }
};

export const loginUser = async (user) => {
  try {
    const res = await axios.post(`/login`, user);
    return res;
  } catch (error) {
    Swal.fire({
      width: "20em",
      height: "20em",
      position: "center",
      icon: "error",
      title: "Sorry...",
      text: `${error?.response?.data?.message}`,
    });
    return error;
  }
};
