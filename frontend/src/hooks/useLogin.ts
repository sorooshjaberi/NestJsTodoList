import { login } from "@/services/auth";
import { LocalStorageKeys, lsSet } from "@/utils/localstorage";
import { useMutation } from "@tanstack/react-query";
import { get } from "lodash";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const useLogin = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess(data) {
      lsSet(
        LocalStorageKeys.ACCESS_TOKEN,
        get(data, ["data", "accesss_token"])
      );
      navigate("/");
    },
    onError(error: AxiosError) {
      if (error instanceof AxiosError) {
        const message = get(error, ["response", "data", "message"]);
        toast.error(message);
      }
    },
  });

  return mutation;
};

export default useLogin;
