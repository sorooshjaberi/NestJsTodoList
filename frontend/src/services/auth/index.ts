import axiosInstance from "@/lib/axios";
import { LoginPayload, LoginResponse } from "@/models/auth";

export const login = (loginPayload: LoginPayload) => {
  return axiosInstance.post<LoginResponse>("auth/login", loginPayload);
};
