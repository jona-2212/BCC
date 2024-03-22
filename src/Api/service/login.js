import { AxiosInstance } from "../axios";

export const login = async (userData) => {
  try {
    const response = await AxiosInstance.post("/login", {
      email: userData.email,
      password: userData.password,
    });
    console.log(response);
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    console.log(error);
  }
};