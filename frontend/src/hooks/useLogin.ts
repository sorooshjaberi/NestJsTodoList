import { login } from "@/services/auth";
import { LocalStorageKeys, lsSet } from "@/utils/localstorage";
import { useMutation } from "@tanstack/react-query";
import { get } from "lodash";
import { useNavigate } from "react-router-dom";

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
  });

  return mutation;
};

export default useLogin;
