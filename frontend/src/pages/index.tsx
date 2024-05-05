import axiosInstance from "@/lib/axios";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    axiosInstance.get("todos");
  }, []);
  return <>Home</>;
};

export default Home;
