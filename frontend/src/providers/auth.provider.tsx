import axiosInstance from "@/lib/axios";
import { AxiosError } from "axios";
import { get } from "lodash";
import { FC, PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => res,

      (error: AxiosError) => {
        const statusCode = get(error, ["response", "status"]) as number;
        const isUnAuthorized = statusCode === 401;

        if (isUnAuthorized) {
          navigate("/login");
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
