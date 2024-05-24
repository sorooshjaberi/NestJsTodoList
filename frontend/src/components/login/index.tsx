import HStack from "@/components/ui/HStack";
import backgroundImage from "@/assets/images/login-background3.jpg";
import Center from "@/components/ui/Center";
import Heading from "@/components/login/Heading";
import Form from "@/components/login/Form";

const Login = () => {
  return (
    <HStack
      sx={{
        overflowX: "hidden",
        backgroundSize: "cover",
        backgroundImage: `url(${backgroundImage})`,
      }}
      justifyContent="space-between"
      height="100%"
    >
      <Center
        width="100%"
        sx={{
          backdropFilter: "blur(1px)",
        }}
      >
        <Center
          bgcolor="white"
          minHeight="450px"
          gap={2}
          p={5}
          borderRadius={2}
          width="400px"
        >
          <Heading />
          <Form />
        </Center>
      </Center>
    </HStack>
  );
};

export default Login;
