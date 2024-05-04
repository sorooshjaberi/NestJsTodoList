import useLogin from "@/hooks/useLogin";
import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";

const Login = () => {
  const { mutateAsync: login } = useLogin();
  useEffect(() => {
    login({ password: "1", username: "soroushjb" }).then(console.log);
  }, []);

  return <Heading>Login</Heading>;
};

export default Login;
