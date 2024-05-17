import { getTodos } from "@/services/todos";
import { useQuery } from "@tanstack/react-query";

const useTodos = () => {
  const query = useQuery({
    queryFn: getTodos,
    queryKey: ["todos"],
  });

  return query;
};
export default useTodos;
