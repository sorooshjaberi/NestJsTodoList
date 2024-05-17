import { Nullable } from "@/models/utilTypes";

export type Todo = {
  id: number;
  title: string;
  updatedAt: string;
  createdAt: string;
  description: Nullable<string>;
  done: boolean;
};

export type Todos = Todo[];
