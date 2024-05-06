import HStack from "@/components/ui/HStack";
import Image from "@/components/ui/Image";
import backgroundImage from "@/assets/images/login-background3.jpg";
import Center from "@/components/ui/Center";
import Heading from "@/components/login/Heading";
import shadows from "@mui/material/styles/shadows";
import Form from "@/components/login/Form";

const Login = () => {
  return (
    <HStack
      overflow="hidden"
      height="100dvh"
      justifyContent="space-between"
      boxShadow={shadows[24]}
    >
      <Center minWidth="450px" gap={2} px={5} alignItems="flex-start">
        <Heading />
        <Form />
      </Center>

      <Image
        src={backgroundImage}
        alt="background"
        width="1200px"
        height="100%"
      />
    </HStack>
  );
};

export default Login;
