import HStack from "@/components/ui/HStack";
import backgroundImage from "@/assets/images/login-background3.jpg";
import Center from "@/components/ui/Center";
import Heading from "@/components/login/Heading";
import Form from "@/components/login/Form";
import { Box } from "@mui/material";

const Login = () => {
  return (
    <HStack
      sx={{ overflowX: "hidden" }}
      justifyContent="space-between"
      height="100%"
    >
      <Center mx="auto" width="450px" gap={2} px={5} alignItems="flex-start">
        <Heading />
        <Form />
      </Center>

      <Box
        flex="1"
        sx={{
          backgroundSize: "cover",
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
    </HStack>
  );
};

export default Login;
