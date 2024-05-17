import axiosInstance from "@/lib/axios";
import { Todos } from "@/models/todos";

export const getTodos = () => axiosInstance.get<Todos>("todos");

