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
      const errorData = get(error as AxiosError, ["response", "data"]);
      const statusCode = get(errorData, ["statusCode"]);
      const message = get(errorData, ["message"]);

      if (statusCode === 404) {
        toast.error("Wrong username");
      } else {
        toast.error(message);
      }
    },
  });

  return mutation;
};

export default useLogin;
