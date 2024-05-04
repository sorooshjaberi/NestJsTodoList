import axiosInstance from "@/lib/axios";
import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    axiosInstance.get("todos");
  }, []);
  return <Heading>Home</Heading>;
};

export default Home;
