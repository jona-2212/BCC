import { AxiosInstance } from "../axios";

export const register = async (userData) => {
  try {
    console.log(userData.name);
    console.log(userData.email);
    console.log(userData.password);
    const response = await AxiosInstance.post("/register", {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    });
    console.log(response);
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    console.log(error);
  }
};