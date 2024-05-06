import { signup } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
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
  });
  return mutation;
};

export default useSignup;
