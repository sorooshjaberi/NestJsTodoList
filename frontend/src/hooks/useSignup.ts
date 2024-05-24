import { signup } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { get } from "lodash";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useSignup = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: signup,
    mutationKey: ["signup"],
    onSuccess() {
      toast.success("Signed up successfully 🎉");
      navigate("/login");
    },
    onError(error) {
      if (error instanceof AxiosError) {
        const message = get(error, ["response", "data", "message"]);
        toast.error(message);
      }
    },
  });
  return mutation;
};

export default useSignup;
