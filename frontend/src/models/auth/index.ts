import { User } from "@/models/user";

export type LoginPayload = {
  username: string;
  password: string;
};
export type LoginResponse = {
  accesss_token: string;
};

export type SignupPayload = {
  username: string;
  email: string;
  password: string;
};
export type SignupResponse = User;
