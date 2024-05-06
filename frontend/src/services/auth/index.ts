import axiosInstance from "@/lib/axios";
import { LoginPayload, LoginResponse, SignupPayload, SignupResponse } from "@/models/auth";

export const login = (loginPayload: LoginPayload) => {
  return axiosInstance.post<LoginResponse>("auth/login", loginPayload);
};

export const signup = (signupPayload: SignupPayload) => {
  return axiosInstance.post<SignupResponse>("auth/signup", signupPayload);
};
