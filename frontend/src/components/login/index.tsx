import HStack from "@/components/ui/HStack";
import Image from "@/components/ui/Image";
import backgroundImage from "@/assets/images/login-background.jpg";
import Center from "@/components/ui/Center";
import Heading from "@/components/login/Heading";
import shadows from "@mui/material/styles/shadows";
import Form from "@/components/login/Form";

const Login = () => {
  //   const { mutateAsync: login } = useLogin();

  return (
    <Center p={5} height="100dvh">
      <HStack
        overflow="hidden"
        component={HStack}
        width="100%"
        maxWidth="1200px"
        height="100%"
        justifyContent="space-between"
        borderRadius={2.5}
        boxShadow={shadows[24]}
      >
        <Center
          width="50%"
          maxWidth="500px"
          gap={2}
          px={5}
          alignItems="flex-start"
        >
          <Heading />
          <Form />
        </Center>

        <Image
          src={backgroundImage}
          alt="background"
          width="50%"
          maxWidth={500}
          height="100%"
        />
      </HStack>
    </Center>
  );
};

export default Login;
