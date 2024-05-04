import axios from "axios";
import { set } from "lodash";
import { LocalStorageKeys, lsGet } from "../utils/localstorage";
const axiosInstance = axios.create({ baseURL: "http://localhost:3000" });

axiosInstance.interceptors.request.use((request) => {
  const accessToken = lsGet(LocalStorageKeys.ACCESS_TOKEN);

  set(request, ["headers", "Authorization"], `Bearer ${accessToken}`);

  return request;
});

// axiosInstance.interceptors.response.use(
//   (res) => res,

//   (error: AxiosError) => {
//     const statusCode = get(error, ["response", "status"]) as number;
//     const isUnAuthorized = statusCode === 401;

//     if (isUnAuthorized) {
//       set(window, ["location", "href"], "/login");
//     }

//     return error;
//   }
// );

export default axiosInstance;
