import Form from "@/components/signup/Form";
import Heading from "@/components/signup/Heading";
import Center from "@/components/ui/Center";
import HStack from "@/components/ui/HStack";
import Image from "@/components/ui/Image";
import shadows from "@mui/material/styles/shadows";
import backgroundImage from "@/assets/images/login-background3.jpg";

const Signup = () => {
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

export default Signup;
